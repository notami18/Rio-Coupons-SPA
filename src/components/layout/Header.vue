<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="center">
          <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large">
            <i class="material-icons">account_circle</i>
          </a>
        </ul>
      </div>
    </nav>

    <ul id="slide-out" class="sidenav sidenav-fixed">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="../../assets/office.jpg" />
          </div>
          <a href="#user">
            <img class="circle" src="../../assets/yuna.jpg" />
          </a>
          <a href="#name">
            <span class="white-text name">John Doe</span>
          </a>
          <a href="#email">
            <span class="white-text email">jdandturk@gmail.com</span>
          </a>
        </div>
      </li>
      <li>
        <router-link :to="{name: 'dashboard'}" class="waves-effect">
          <i class="material-icons">dashboard</i>Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="promo" class="waves-effect" href="#!">
          <i class="material-icons">local_offer</i>Promo
        </router-link>
      </li>
      <li>
        <div class="divider"></div>
      </li>
      <li>
        <a class="subheader">Subheader</a>
      </li>
      <li>
        <a class="waves-effect" href="#!">Third Link With Waves</a>
      </li>
    </ul>
  </div>
</template>

<script>
// Importamos JQuery
const $ = require("jquery");
// Lo declaramos globalmente
window.$ = $;
export default {
  data() {
    return {};
  },
  mounted() {
    M.AutoInit();

    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
    });

    // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
    // var collapsibleElem = document.querySelector('.collapsible');
    // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

    // Or with jQuery

    $(document).ready(function() {
      $(".sidenav").sidenav();
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
