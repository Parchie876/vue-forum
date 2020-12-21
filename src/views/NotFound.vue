<template>
  <div class="col-full">
    <div class='_404'>404</div>
    <p class='_2'>oops, we couldn't find the page you are looking for. Why dont you 
    <router-link :to="{name: 'HomePage'}"> go home instead?</router-link>
    </p>
  </div>
</template>
<script>
export default {}
</script>
<style  scoped>

._404 {
  font-size: 250px;
  height: 270px;
  letter-spacing: 15px;
}

._2 {
  font-size: 50px;
  font-weight: 100;
}
div {
    text-align: center;
}
</style>
    
