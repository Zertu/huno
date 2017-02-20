<template>
  <div id="info">
    <div class="infos">
      <div class="infos-child">
        <h2>blog</h2>
      </div>
      <div class="division "></div>
      <div class="infos-child  infos-child-first">
        a blog writen by sb
      </div>
      <div class="division division-first"></div>
      <div class="infos-child infos-child-second">
          <div>
              
        <span><a href='/home'>首页</a></span>
        <span><<router-link to="/about">关于</router-link></span>
        <span> <a href='/archive'>归档</a></span>
        
          </div>
        <span ><a href='https://github.com/Zertu' class="am-icon-github"></a></span>
      </div>
    </div>
  </div>
</template>
<script>
import VueRouter from "vue-router";
export default {
  name: 'info',
  components: {
    about
  }
}   
</script>
<style>


</style>
