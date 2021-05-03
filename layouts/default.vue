<template>
  <div  @mouseover="thisOne()">
    <Login :class="[forF ? hidden : not]" @disable-lform="toggleLFormN()"/>
    <Navbar @toggle-dropdown="yes()" @toggle-login-form="toggleLForm()"/>
    <Dropdown :class="[yessir ? hidden : not]" @disable-dropdown="yes2()"/>
    <Nuxt />
  </div>
</template>

<script>
export default {
    methods:{
    yes(){
      this.yessir = false;
    },
    yes2(){
      this.yessir = true;
    },
    thisOne(){
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.querySelector(".navbar").style.transform = "translateY(0%)";
        } else {
          document.querySelector(".navbar").style.transform = "translateY(-100%)";
        }
        prevScrollpos = currentScrollPos;
      }
    },
    toggleLForm(){
      this.forF = false;
    },
    toggleLFormN(){
      this.forF = true;
    }
  },
data(){
    return{
      yessir:true,
      hidden:"hidden",
      not:"",
      forF:true
    }
  }
}
</script>

<style>
body{
    padding: 0%;
    margin: 0%;
    font-family: GeoBrandBold,CenturyGothic,AppleGothic,Gill Sans,Gill Sans MT,sans-serif;
    font-weight:400;
}
#slika{
    transform: translateY(-10px);
    margin-left: -15px;
}
.navbar{
    position:fixed;
    z-index: 10;
    height: 50px;
    width: 100%;
    background: white;
    transition: 0.5s;
    overflow: hidden;
    display: flex;
    font-weight: 600;
    font-size: 14px;
}
.nav-menu{
    margin-right: -10px;
    width: 100%;
}
.nav-lista{
    max-width: 500px;
    display: flex;
    list-style: none;
    float: right;
    justify-content: space-evenly;
    transform: translateY(-12px);
}
.nav-lista li{
    padding-top:15px
}
.nav-lista a{
    text-decoration: none;
    padding:15px;
    color: black;
    font-size: 13px;
    letter-spacing: 2px;
}
.dropdown-icon{
    position: absolute;
    width: 25px;
    height: 50px;
    background: white;
    right: 0%;
    top: 0%;
}
.drp{
    width:100px;
}
.str{
    width: 7px;
    height: 7px;
    background: white;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotateZ(-45deg);
}
.strelica1{
    position: absolute;
    right: 20%;
    top:30%
}
.strelica2{
    position: absolute;
    right: 20%;
    top:40%
}
.just{
    background-color: black;
    padding: 25px 0px;
    position: relative;
}
.subscribe{
    position: absolute;
    top: 0;
    left: 0;
    color: white !important;
    padding-top: 25px !important;
    padding-bottom: 25px !important;
    letter-spacing: 2px;
    font-weight: 550;
    z-index: 0;
}
.nista{
    padding: 0 !important;
    margin: 0 !important;
}
.renew{
    cursor: pointer;
    font-weight: 300;
    padding: 0 !important;
    margin: 10px;
    font-size: 16px !important;
    text-decoration: underline 3px rgb(255, 204, 0)!important;
    height: min-content;
}
.zut{
    color: white;
    position: relative;
}
.zut::before{
    content: "";
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--zuta-boja);
    z-index: -1;
    transform: scaleY(0);
    transform-origin: bottom;
    transition:.2s ease-in-out;
}
.zut{
    z-index: 1;
    transition: color .2s ease-in-out;
}
.zut:hover::before{
    transform: scaleY(1);
}
.zut:hover{
    color:black;
}
.zut2{
    color: white;
    position: relative;
}
.zut2::before{
    content: "";
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: var(--zuta-boja);
    transform: scaleX(0);
    transform-origin: left;
    transition:.2s ease-in-out;
}
.zut2{
    z-index: 1;
    transition: color .2s ease-in-out;
}
.zut2:hover::before{
    transform: scaleX(1);
}
.zut2:hover{
    color:black !important;
}


.dropdown{
    position: absolute;
    width: 100%;
    height: 100%;
    background:black;
    z-index: 10;
    display: block;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 300px;
}
.pl{
    display: none;
}
.topics-nas{
    display: flex;
    width: 100px;
}
.topics-nas hr{
    margin-top: 30px;
    margin-left: 10px;
    width: 100%;
    height: .1px;
    color: grey;
}
.topics, .sites{
    margin-top: auto;
    height: 70%;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    list-style: none;
}
.topics li, .sites li{
    cursor: pointer;
}
.topics li a{
    text-decoration: none;
    color: white;
}
.sites li:hover{
    color: white;
    transition: color .5s;
}
.topics:hover li a{
    color: grey;
    transition: .5s; 
}
.cja{
    display: none;
}
.topics li:hover a{
    color:white !important;
    z-index: 100;
}
.topics h4, .sites h4{
    text-align: left;
    color: grey;
}
.topics li{
    text-align: left;
    color: white;
    font-size: 42px;
    font-weight: 600;
}
.sites li{
    font-size: 22px;
    color: yellow;
    font-weight: 600;
}
.hidden{
    display:none;
}
.yesrit{
    position: absolute;
    right: 0;
    width: 50px;
    height: 50px;
}
.yesrit:hover{
    background-color: rgb(187, 179, 179);
    border-radius: 15px;
    cursor: pointer;
}
.strelica3{
    top: 35%;
    left: 35%;
    width: 10px;
    height: 10px;
    transform: rotateZ(45deg);
    border-top: 2px solid grey;
    border-left: 2px solid grey;
    position: absolute;
}
.strelica4{
    top: 50%;
    left: 35%;
    position: absolute;
    transform: rotateZ(45deg);
    width: 10px;
    height: 10px;
    transform: rotateZ(45deg);
    border-top: 2px solid grey;
    border-left: 2px solid grey;
}
.sve li{
    margin:20px 20px 20px 0px;
}
</style>
