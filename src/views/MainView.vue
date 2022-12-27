<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/fon2.jpg">

    <Main msg="Фактор.by"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'

export default {
  name: 'MainView',
  components: {
    Main
  }
}
</script>
