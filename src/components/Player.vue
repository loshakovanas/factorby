<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="images">
        <img src="../assets/1.jpg" alt="Georges" width="300px">
        <img src="../assets/2.jpg" alt="Georges" width="300px">
        <img src="../assets/3.jpg" alt="Georges" width="300px">
        <img src="../assets/4.jpg" alt="Georges" width="300px">
        <img src="../assets/5.jpg" alt="Georges" width="300px">
        <img src="../assets/6.jpg" alt="Georges" width="300px">
        <img src="../assets/7.jpg" alt="Georges" width="300px">
        <img src="../assets/8.jpg" alt="Georges" width="300px">
        <img src="../assets/9.jpg" alt="Georges" width="300px">
        <img src="../assets/10.jpg" alt="Georges" width="300px">
        <img src="../assets/11.jpg" alt="Georges" width="300px">
        <img src="../assets/12.jpg" alt="Georges" width="300px">
    </div>





    <p>
    Именно ты решаешь, кто пройдет дальше!
    </p>

    <h3>Ютуб проекта</h3>

<iframe width="560" height="315"
src="https://www.youtube.com/embed/6mwMQqcRADI" title="YouTube video
player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
encrypted-media; gyroscope; picture-in-picture" allowfullscreen poster="../assets/youtube.jpg">
</iframe>

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
  color: #42b983;
}

images
{
display: inline;
margin: 0px;
padding: 0px;
}




</style>
