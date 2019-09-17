<template>
<div id="app">
  <body>
    <header>
      <c-header></c-header>
    </header>
    <main>
      <c-promo></c-promo>
    </main>
  </body>
</div>
</template>

<script>
import CHeader from "./components/layout/Header.vue";
import CPromo from "./components/Promo.vue";
export default {
  name: "app",
  components: { CHeader, CPromo },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
