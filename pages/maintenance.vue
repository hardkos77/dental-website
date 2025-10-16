<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useHead, useRequestEvent, useRuntimeConfig, useRoute } from '#app'
import { setResponseStatus } from 'h3'

/* Cache le header/footer via app.vue guard */
definePageMeta({ layout: 'maintenance', hideChrome: true })

/* 503 côté SSR (pourquoi: SEO/monitoring) */
if (process.server) {
  const ev = useRequestEvent()
  if (ev) setResponseStatus(ev, 503, 'Service Unavailable')
}

/* Config + fallback via query */
const cfg = useRuntimeConfig().public as any
const route = useRoute()
const untilIso = String(route.query.until || cfg.maintenanceUntil || '')
const contact = String(cfg.maintenanceContact || '')

/* Timer robuste */
const targetTs = (() => {
  const t = Date.parse(untilIso)
  return Number.isFinite(t) ? t : 0
})()
const hasTarget = computed(() => targetTs > 0)

const now = ref<number>(Date.now())
let timer: number | null = null
onMounted(() => { if (hasTarget.value) timer = window.setInterval(() => { now.value = Date.now() }, 1000) })
onBeforeUnmount(() => { if (timer) window.clearInterval(timer) })

const parts = computed(() => {
  if (!hasTarget.value) return { d:0,h:0,m:0,s:0 }
  let ms = targetTs - now.value; if (ms < 0) ms = 0
  const d = Math.floor(ms/86400000); ms -= d*86400000
  const h = Math.floor(ms/3600000);  ms -= h*3600000
  const m = Math.floor(ms/60000);    ms -= m*60000
  const s = Math.floor(ms/1000)
  return { d,h,m,s }
})

useHead({
  title: 'Maintenance en cours',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }]
})
</script>

<template>
  <main class="maintenance">
    <section class="card">
      <div class="tooth" aria-hidden="true">
        <!-- Petit pictogramme dentaire -->
        <svg viewBox="0 0 64 64" class="tooth-svg">
          <path d="M18 10c-4 0-8 4-8 10 0 14 10 14 10 20 0 6 4 12 8 12s4-6 8-6 4 6 8 6 8-6 8-12c0-6 10-6 10-20 0-6-4-10-8-10-6 0-10 4-14 4s-8-4-14-4z" fill="currentColor" />
        </svg>
      </div>

      <h1 class="title">On prend soin du site&nbsp;🪥</h1>
      <p class="lead">Nous faisons un petit nettoyage. Merci pour votre patience.</p>

      <div v-if="hasTarget" class="countdown" role="timer" aria-live="polite">
        <div class="pill"><span class="num">{{ parts.d }}</span><span class="lbl">jours</span></div>
        <div class="pill"><span class="num">{{ parts.h }}</span><span class="lbl">heures</span></div>
        <div class="pill"><span class="num">{{ parts.m }}</span><span class="lbl">minutes</span></div>
        <div class="pill"><span class="num">{{ parts.s }}</span><span class="lbl">secondes</span></div>
      </div>

      <p v-else class="hint">Cela ne devrait pas durer longtemps. Revenez un peu plus tard.</p>

    </section>
  </main>
</template>

<style lang="scss" scoped>
/* --- Palette fournie --- */
$blue:  #87CEEB;
$green: #78FECF;
$red:   #F46767;
$grey:  #F2F2F2;
$white: #FFFFFF;
$black: #1F1F1F;

/* Background “dentisterie” doux */
.maintenance{
  min-height:100vh;
  display:grid;
  place-items:center;
  padding:24px;
  background: radial-gradient(1200px 600px at 10% 0%, rgba(135,206,235,.35), transparent 60%),
  radial-gradient(1000px 500px at 90% 100%, rgba(120,254,207,.35), transparent 60%),
  linear-gradient(180deg, $white, $grey);
}

/* Carte centrale */
.card{
  width:100%;
  max-width:720px;
  background:$white;
  color:$black;
  border:1px solid rgba(31,31,31,.08);
  border-radius:20px;
  padding:28px;
  text-align:center;
  box-shadow:0 10px 40px rgba(31,31,31,.08);
}

/* Titre + picto */
.title{ font-size:28px; font-weight:800; margin:8px 0 6px; letter-spacing:.2px }
.lead{ color:rgba(31,31,31,.75); margin:0 0 18px }

.tooth{
  width:72px;height:72px;margin:0 auto 6px;
  color:$blue;
  filter: drop-shadow(0 6px 10px rgba(135,206,235,.45));
  animation: float 3s ease-in-out infinite;
}
.tooth-svg{ width:100%; height:100% }
@keyframes float{
  0%,100%{ transform: translateY(0) }
  50%{ transform: translateY(-6px) }
}

/* Countdown pills */
.countdown{
  display:grid;
  grid-template-columns:repeat(4, minmax(0,1fr));
  gap:12px;
  margin:12px 0 18px;
}
.pill{
  background: linear-gradient(180deg, $blue, lighten($blue, 12%));
  border:1px solid rgba(31,31,31,.06);
  border-radius:14px;
  padding:12px 10px;
  color:$black;
  display:flex; flex-direction:column; align-items:center;
}
.pill:nth-child(2){ background: linear-gradient(180deg, $green, lighten($green, 10%)) }
.pill:nth-child(3){ background: linear-gradient(180deg, $grey, lighten($grey, 4%)) }
.pill:nth-child(4){ background: linear-gradient(180deg, $white, $grey) }
.num{ font-size:28px; font-weight:800; line-height:1 }
.lbl{ font-size:12px; opacity:.75 }

/* CTA */
.btn{
  display:inline-block;
  margin-top:8px;
  padding:12px 16px;
  border-radius:12px;
  background: linear-gradient(90deg, $blue, $green);
  color:$black;
  text-decoration:none;
  font-weight:700;
  transition: transform .06s ease, box-shadow .2s ease;
  box-shadow: 0 6px 16px rgba(135,206,235,.35);
}
.btn:hover{ transform: translateY(-1px); box-shadow: 0 8px 22px rgba(120,254,207,.35) }

/* Note */
.hint{ color: rgba(31,31,31,.7) }
</style>
