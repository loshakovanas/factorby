<template>
  <div class="chernobyl">
    <img alt="Vue logo" src="../assets/factor.jpg">
    <Chernobyl msg="Дневники шоу"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Chernobyl from '@/components/Chernobyl.vue'

export default {
  name: 'ChernobylView',
  components: {
    Chernobyl
  }
}
</script>
