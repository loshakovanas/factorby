<template>
  <div class="hello">
    <h1>{{ msg }}</h1>


    <div class="images">
        <img src="../assets/15.jpg" alt="Georges" width="300px">
        <img src="../assets/18.jpg" alt="Georges" width="300px">
        <img src="../assets/17.jpg" alt="Georges" width="300px">
        <img src="../assets/16.jpg" alt="Georges" width="300px">
    </div>

    <h3>Смотреть прямо сейчас</h3>
    <ul>
      <li><a href="https://www.youtube.com/watch?v=-l8rL6N8ZfM&t=205s" target="_blank" rel="noopener">1 прямой эфир</a></li>
      <li><a href="https://www.youtube.com/watch?v=E9Aw6Uyykds&t=56s" rel="noopener">2 прямой эфир</a></li>
      <li><a href="https://www.youtube.com/watch?v=rZvmUewoDfE&t=17s" rel="noopener">3 прямой эфир</a></li>
      <li><a href="https://www.youtube.com/watch?v=AEkAdChrvyo&t=48s" rel="noopener">Наставники шоу</a></li>
    </ul>

  </div>
</template>



<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffd700;
}
images
{
display: inline;
margin: 0px;
padding: 0px;
}
</style>
