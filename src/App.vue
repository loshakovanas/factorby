<template>
  <nav>
    <router-link to="/">Фактор.by</router-link> |
    <router-link to="/history">Участники</router-link> |
    <router-link to="/accident">Фактор.by 60+</router-link> |
    <router-link to="/liquidation">Дневники проекта</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ffd700;
}
</style>
