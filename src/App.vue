<template>
  <div id="app">
    <header>
      <c-header></c-header>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <c-fooer></c-fooer>
  </div>
</template>

<script>
import CHeader from "./components/layout/Header.vue";
import CPromo from "./components/Promo.vue";
import CFooer from "./components/layout/Footer.vue";

export default {
  name: "app",
  components: { CHeader, CPromo, CFooer },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
body{
  background-color: #eceff1;
}
</style>
