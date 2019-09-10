<template>
  <div id="app">
    <c-header></c-header>
    <c-promo></c-promo>
  </div>
</template>

<script>
import CHeader from './components/layout/Header.vue'
import CPromo from './components/Promo.vue'
export default {
  name: 'app',
  components: { CHeader, CPromo },
    data() {
    return {
    };
  }

}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
