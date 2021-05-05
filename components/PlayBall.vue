<template>
      <div class="play-ball">
        <div v-if="this.$route.params.pages == 'magazine'" class="section-play-ball">
        <!-- <img :src="`../assets/img/${playBall[1].img}.jpg`" alt=""> -->
        <h4>{{playBall[1].section}}</h4>
        <h1>{{playBall[1].naslov}}</h1>
        <p>{{playBall[1].opis}}</p>
        <button class="play-ball-btn oth">SEE THE PHOTO</button>
    </div>
    <div v-else class="section-play-ball">
        <!--<img :src="`/_nuxt/assets/img/${playBall[0].img}.jpg`" alt="">-->
        <h4>{{playBall[0].section}}</h4>
        <h1>{{playBall[0].naslov}}</h1>
        <p>{{playBall[0].opis}}</p>
        <button class="play-ball-btn oth">SEE PHOTOS</button>
    </div>
    </div>
</template>

<script>
import {playBall} from "@/assets/data.js"
export default {
    data(){
        return{
            playBall,
        }
    }
}
</script>

<style>
.play-ball{
    height: 710px;
    width: 100%;
    background: url("../assets/img/baseball.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    position: relative;
}
.section-play-ball{
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: 900px;
    height: 100%;
    background: transparent;
    transform: translateY(-50px);
    z-index: 2;
}
.section-play-ball h1{
    font-size: 50px;
    margin: 0;
}
.play-ball::after{
    content:'';
    position:absolute;
    left:0;
    top:0;
    height:100%;
    width:100%;
    background:linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.7));
  }
.play-ball-btn{
    cursor: pointer;
    font-weight: 700;
    width: 170px;
    height: 40px;
    background: transparent;
    border: 2px solid black;
}
.oth{
    color: black;
    position: relative;
}
.oth::before{
    content: "";
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition:.2s ease-in-out;
}
.oth{
    z-index: 1;
    transition: color .2s ease-in-out;
}
.oth:hover::before{
    transform: scaleX(1);
}
.oth:hover{
    color:white;
}


.oth2{
    color: black;
    position: relative;
}
.oth2::before{
    content: "";
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition:.2s ease-in-out;
}
.oth2{
    z-index: 1;
}
.oth2:hover::before{
    transform: scaleX(1);
}
@media only screen and (max-width: 962px){
    .play-ball{
        padding-left: 0px;
    }
    .section-play-ball{
        width: 90%;
        margin-left: -50px;
    }
}
@media only screen and (max-width: 770px){
    .play-ball *{
        margin-left: 10px;
    }
}
</style>
