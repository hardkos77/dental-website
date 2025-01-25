<script>
import IndexPage from "~/pages/index.vue";
import MyHeader from "~/layouts/header.vue";
import MyFooter from "~/layouts/footer.vue";
export default {
  name: 'App',
  components: {
    IndexPage,
    MyHeader,
    MyFooter
  }
}
</script>

<template>
  <div>
    <Body>
      <MyHeader/>
        <NuxtLayout>
          <NuxtPage/>
        </NuxtLayout>
      <MyFooter/>
    </Body>
  </div>
</template>

<style lang="scss">

</style>
