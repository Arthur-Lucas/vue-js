<script>
import { RouterView } from "vue-router";
import NavbarVue from "./components/navigation-component.vue";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default {
  created(){
    this.urlpick = getRandomInt(4)
  },
  data(){
    return{
      urlpick: null,
      url: ['https://images.unsplash.com/photo-1532501854787-31ce43c2b281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
      'https://wallpapercave.com/wp/wp2952650.jpg',
      'https://images.pexels.com/photos/1428277/pexels-photo-1428277.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1428277.jpg&fm=jpg',
      'https://p4.wallpaperbetter.com/wallpaper/748/380/62/desert-rocks-macos-mojave-stock-5k-wallpaper-preview.jpg']
      }
    }, 
  methods:{
    clickAfter: function(){

    }
  }
}


</script>

<template>
  <NavbarVue></NavbarVue>

  <RouterView></RouterView>
  <h2>Tuto slider image en Vue.JS</h2> 
  <div class="slider">
    <button v-on:click=""> 	&lt; </button>
    <img :src="url[urlpick]">
    <button > > </button>
  </div>
</template>

<style lang="scss">
  .slider{
    display: flex;
    img{
      height: 250px;
    }
  }
</style>
