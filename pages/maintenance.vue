<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useHead, useRequestEvent, useRuntimeConfig, useRoute } from '#app'
import { setResponseStatus } from 'h3'

definePageMeta({ layout: 'maintenance', hideChrome: true })

if (process.server && !import.meta.prerender) {
  const ev = useRequestEvent()
  if (ev) setResponseStatus(ev, 503, 'Service Unavailable')
}

const cfg = useRuntimeConfig().public as any
const route = useRoute()
const untilIso = String(route.query.until || cfg.maintenanceUntil || '')
const contact = String(cfg.maintenanceContact || '')

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
  return { d, h, m, s }
})

useHead({ title: 'Maintenance en cours', meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
</script>

<template>
  <main class="maintenance">
    <section class="card">
      <div class="tooth" aria-hidden="true">
        <svg viewBox="0 0 64 64" class="tooth-svg">
          <path d="M18 10c-4 0-8 4-8 10 0 14 10 14 10 20 0 6 4 12 8 12s4-6 8-6 4 6 8 6 8-6 8-12c0-6 10-6 10-20 0-6-4-10-8-10-6 0-10 4-14 4s-8-4-14-4z" fill="currentColor"/>
        </svg>
      </div>

      <h1 class="title">Maintenance en cours</h1>
      <p class="lead">Nous revenons très vite. Merci pour votre patience.</p>

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
$blue:#87CEEB;$green:#78FECF;$grey:#F2F2F2;$white:#FFFFFF;$black:#1F1F1F;

.maintenance{
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding: clamp(16px, 4vw, 32px);
  background:
      radial-gradient(1200px 600px at 10% -10%, rgba(135,206,235,.35), transparent 60%),
      radial-gradient(1000px 500px at 110% 110%, rgba(120,254,207,.35), transparent 60%),
      linear-gradient(180deg, $white, $grey);
}

.card{
  width: min(92vw, 820px);
  background:$white;color:$black;
  border:1px solid rgba(31,31,31,.08);
  border-radius: clamp(14px, 2.2vw, 22px);
  padding: clamp(18px, 3.4vw, 32px);
  text-align:center;
  box-shadow:0 12px 44px rgba(31,31,31,.08);
}

.tooth{ width: clamp(56px, 8vw, 78px); height: clamp(56px, 8vw, 78px); margin:0 auto clamp(6px,1.6vw,10px); color:$blue;
  filter: drop-shadow(0 6px 10px rgba(135,206,235,.45));
}
@media (prefers-reduced-motion: no-preference){
  .tooth{ animation: float 3s ease-in-out infinite }
  @keyframes float{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
}

.title{ font-size: clamp(24px, 6.2vw, 42px); font-weight:800; margin: 4px 0 6px }
.lead{ color: rgba(31,31,31,.72); margin: 0 0 clamp(12px,2.6vw,20px) }

.countdown{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(112px,1fr));
  gap: clamp(8px, 2.6vw, 14px);
  margin: clamp(10px, 2.8vw, 20px) 0;
}

.pill{
  background:$grey;border:1px solid rgba(31,31,31,.06);
  border-radius: clamp(10px, 2vw, 14px);
  padding: clamp(10px, 2.4vw, 12px);
  display:flex;flex-direction:column;align-items:center;
}
.pill:nth-child(1){ background: linear-gradient(180deg, $blue, lighten($blue, 14%)) }
.pill:nth-child(2){ background: linear-gradient(180deg, $green, lighten($green, 14%)) }
.pill:nth-child(3){ background: linear-gradient(180deg, $grey, lighten($grey, 6%)) }
.pill:nth-child(4){ background: linear-gradient(180deg, $white, $grey) }

.num{ font-size: clamp(20px, 5.2vw, 28px); font-weight:800; line-height:1 }
.lbl{ font-size: clamp(10px, 2.8vw, 12px); opacity:.78 }

</style>
