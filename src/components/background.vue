<template>
  <div id="background" >
    <canvas id="bg" v-bind:style="{width:data.width, height:data.height}" ></canvas>
    <!--v-bind:height='{{height}}' v-bind:width='{{width}}'-->
  </div>
</template>
<script>
onload=()=>{
    const trianglify = require('trianglify')
let pattern = trianglify({
    height: window.innerHeight,
    width: window.innerWidth,
    cell_size: 450,
    x_colors: ['#66CCFF', '#99CCFF', '#99FFFF'],
    y_colors: ['#339900', '#33CC99', '#33FFCC']
})
    pattern.canvas(document.getElementById('bg'))
}
let data={
    width:window.innerWidth,
    height: window.innerHeight
}
onresize=()=>{
    data.width= window.innerWidth,
  data.height=window.innerHeight
}
export default {
  name: 'hello',
  data () {
  data.width= window.innerWidth,
  data.height=window.innerHeight
    return {
          data
    }
  },

}
</script>
<style>
  #background {
    position: absolute;
    height: 0;
    left: 0;
    bottom: 0;
    top: 0;
    margin: auto
  }

</style>
