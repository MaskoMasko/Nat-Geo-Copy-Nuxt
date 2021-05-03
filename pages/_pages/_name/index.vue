<template>
<div @mousemove="checkPageName()">
  <div class="poslika">
  <img :src="`/_nuxt/assets/img/${art.img}`" alt="">
  <div class="idkhowtocallthisone">
    <div class="zasebni">
  <h5><a class="obican" :href="`/${page.name}`">{{naslovStr}}</a><span class="only">I</span></h5>
  <h5>NEWS</h5>
  </div>
  <h1 class="yes">{{art.title}}</h1>
  <h3 class="yes">{{art.opis}}</h3>
  </div>
  </div>
  <div class="lorem-dio">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nisi sunt! At, minima voluptas delectus ratione sapiente voluptates aspernatur blanditiis nostrum mollitia consequuntur odio, earum facere, distinctio saepe expedita? Illum?
  <h1>samo da si skratin bla bla</h1>
  </div>
</div>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed: {
        art(){
            return this.$store.getters.getAtByName(this.$route.params.name)
       },
        page(){
            return this.$store.getters.getPageByName(this.$route.params.pages)
       },
    },
    data(){
      return{
        thisPageList:this.$route.params.pages,
        naslovStr:""
      }
    },
    methods:{
             checkPageName(){
          if(this.thisPageList == "animals"){
              this.naslovStr = "ANIMALS";
              this.thisPageList = this.animals;
          }else if(this.thisPageList == "travel"){
              this.naslovStr = "TRAVEL";
              this.thisPageList = this.travel;
          }else if(this.thisPageList == "environment"){
              this.naslovStr = "ENVIRONMENT";
              this.thisPageList = this.environment;
          }else if(this.thisPageList == "science"){
              this.naslovStr = "SCIENCE";
              this.thisPageList = this.science;
          }else if(this.thisPageList == "magazine"){
            this.naslovStr = "MAGAZINE",
            this.thisPageList = this.magazine 
          }
       }
    }
}
</script>

<style scoped>

.yes{
  width: 500px;
  height: 100px;
  color: white;
}
.poslika{
  width: 100%;
  height: 97vh;
  background: rgb(112, 153, 112);
  position: relative;
}
.poslika img{
  position: absolute;
  top:0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.obican{
  position: relative;
    text-decoration: none;
    color: white;
    z-index: 10;
}
.obican:hover{
    text-decoration: underline;
}
.only{
    color: yellow;
    position: relative;
    z-index: 10;
}
.idkhowtocallthisone{
  display: flex;
  position: absolute;
  bottom: 0%;
  z-index: 10;
  font-size: 20px;
  color: white;
  flex-direction: column;
  margin: 20px;
}
.idkhowtocallthisone span{
  margin-right:40px;
  margin-left: 40px;
}
.zasebni{
  display: flex;
  padding: 40px;
  padding-left: 0;
}
.lorem-dio{
  width: 50%;
  margin: auto;
}
@media only screen and (max-width:1100px){
  .poslika{
    height: 500px;
  }
  .yes{
    margin-left: 0px;
  }
}
@media only screen and (max-width:370px){
  .poslika{
    width: 144%  !important;
  }
}
</style>