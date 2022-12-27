<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/60.jpg">

    <Factor msg="Фактор.by 60+"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Factor from '@/components/Factor.vue'

export default {
  name: 'DiaryView',
  components: {
    Factor
  }
}
</script>
