<template>
  <div class="accident">
    <img alt="Vue logo" src="../assets/logo.png">
    <Diary msg="Фактор.by 60+"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Diary from '@/components/Diary.vue'

export default {
  name: 'AccidentView',
  components: {
    Diary
  }
}
</script>
