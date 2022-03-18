<script setup>
import { RouterLink } from "vue-router";
console.log("navabar loaded");
</script>

<template>
  <header class="header-wrapper">
    <div class="logo-wrapper">
      <h1>VueQuizz</h1>
    </div>
    <nav class="navbar-wrapper">
      <ul class="navbar-list">
        <RouterLink to="/" class="navbar-list-item carousel-form">
          <li>Carousel doc</li>
        </RouterLink>
        <RouterLink to="/chrono" class="navbar-list-item carousel-form">
          <li>Chrono doc</li>
        </RouterLink>
        <RouterLink to="/skilltest" class="navbar-list-item">
          <li>Get Quizz'ed</li>
        </RouterLink>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  height: 15vh;
  background-color: rgb(77, 26, 218);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .logo-wrapper {
    text-transform: uppercase;
    h1 {
      color: whitesmoke;
      font-size: 2rem;
    }
  }
  .navbar-wrapper {
    .navbar-list {
      list-style: none;
      display: flex;
      .navbar-list-item {
        color: whitesmoke;
        text-decoration: none;
        margin: 0 2rem;
        text-transform: uppercase;
      }
    }
  }
}
</style>
