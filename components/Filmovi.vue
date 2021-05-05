<template>
    <div class="filmovi" @mouseenter="zaFilm()">
        <h1>NAT GEO TV</h1>
        <div class="about-movie">
        <h2>GENIUS: ARETHA</h2>
        <h5>Explore Aretha Franklin’s musical genius, her incomparable career, and the immeasurable impact she has had on music and culture. Watch the first two episodes of Genius: Aretha for free now, no sign-in required.</h5></div>
        <a href="" class="zut see-more2">WATCH NOW</a>
        <div class="showcase taj-dio">
            <div class="vrh">
            <h3>DISCOVER MORE NAT GEO TV</h3>
            <a href="" class="zut">SEE SHOWS</a>
            </div>
            <div class="slike-filmovi">
                <div class="slajder">
                    <div class="cont-img"><img src="@/assets/img/toranj.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/toranj.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/toranj.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/toranj.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/toranj.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/za2.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/za2.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/za2.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/za2.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/za2.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/sure.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/sure.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/sure.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/sure.jpg" alt="" class="slike-f"></div>
                    <div class="cont-img"><img src="@/assets/img/sure.jpg" alt="" class="slike-f"></div>
                </div>
            </div>
            <div class="strelica-desno"></div>
            <div class="strelica-livo bilo"></div>
        </div>
    </div>

</template>

<script>
export default {
    methods:{
          zaFilm(){
              const slider = document.querySelector('.slajder');
  const btnLeft = document.querySelector('.strelica-livo');
  const btnRight = document.querySelector('.strelica-desno');
  console.log(btnLeft)
  let cur = 0;
  btnRight.addEventListener("click", function(){
    if(cur == 2){
      cur--
        btnRight.classList.add("bilo");
      }
    cur++;
    console.log(cur)
    slider.style.transform = `translateX(-${cur*33.3}%)`;
    btnLeft.classList.remove("bilo");
})
btnLeft.addEventListener("click", function(){
  if(cur == 0){
    cur ++;
    btnLeft.classList.add("bilo")
  }
  cur--;
  console.log(cur)

  slider.style.transform = `translateX(-${cur * 33.3}%)`;
  btnRight.classList.remove("bilo")
})
    }
    }
}
</script>

<style>
.slajder{
    transition-duration: .5s;
}
.filmovi{
    height: 1012.75px;
    width: 100%;
    background: url("../assets/img/forest.jpg");
    overflow: hidden;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}
.filmovi::after{
    content:'';
    position:absolute;
    left:0;
    top:0;
    height:100%;
    width:100%;
    background:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1));
  }
/*
.filmovi video{
    width: 80%;
    height: 80%;
    transform: scaleX(1.7);
    position: relative;
}
.filmovi video::after{
    content:'';
    position:absolute;
    left:0;
    top:0;
    height:100%;
    width:100%;
    background:black;
  }
*/
.filmovi h1{
    z-index: 2;
    margin: 90px;
    font-size: 54px;
}
.about-movie{
    z-index: 2;
    text-align: center;
    width: 800px;
    letter-spacing: 2px;
}
.about-movie h2{
    letter-spacing: 2px;
}
.about-movie h5{
    font-size: 20px;
    font-weight: 400;
}
.filmovi a{
    z-index: 2;
}
.showcase{
    z-index: 2;
    position: relative;
}
.showcase h3{
    letter-spacing: 2px;
}
.vrh{
    width: 1000px;
    display: flex;
    grid-template-columns: 1fr 1fr;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
}
.vrh h3{
    margin-left: 45px;
    text-align: start;
}
.vrh a{
    text-decoration: none;
    color: white;
    text-decoration: underline 2px var(--zuta-boja);
    text-align: right;
    height: fit-content;
    margin-top: 20px;
    margin-right: 15px;
}
.slike-filmovi{
    display: flex;
    width: 940px;
    height: 300px;
    position: relative;
    padding: 0%;
    overflow-x: hidden;
    transform: translateX(40px);
}
.cont-img{
    cursor: pointer;
    min-width: 170px;
    height: 300px;
    overflow: hidden;
    margin:0px 10px;
}
.slike-filmovi img:hover{
    transform: scale(1.1);
}
.slike-filmovi img{
    transition: .3s;
    overflow-x: hidden;
}
.slike-f{   
    width: 170px;
    height: 300px;
}
.slajder{
    display: flex;
}
.strelica-desno{
    position: absolute;
    top: 50%;
    z-index: 100;
    width: 15px;
    height: 15px;
    transform: rotateZ(45deg);
    border-top: 3px solid white;
    border-right: 3px solid white;
    right: -2%;

}
.strelica-livo{
    left: 0%;
    top: 50%;
    position: absolute;
    width: 15px;
    height: 15px;
    transform: rotateZ(45deg);
    border-bottom: 3px solid white;
    border-left: 3px solid white;
}
.strelica-livo:hover{
    border-bottom: 3px solid grey;
    border-left: 3px solid grey;
}
.strelica-desno:hover{
    border-top: 3px solid grey;
    border-right: 3px solid grey;
}
.bilo{
    display: none;
}

@media only screen and (max-width: 1150px){
    .showcase{
        transform: scaleX(.8);
    }
    .slike-filmovi{
        transition: .5s;
    }
}
@media only screen and (max-width: 1030px){
    .showcase{
        transform: scale(.7);
    }
}
@media only screen and (max-width: 868px){
.about-movie{
        width: 90%;
    }
    .showcase{
        transform: scale(0.6);
    }
    .vrh{font-size: 28px;}
    .vrh a{
        transform: translateY(20px);
    }
}
@media only screen and (max-width: 780px){
    .filmovi h1{
        font-size: 45px;
        margin-bottom: 50px;
    }
    .about-movie{
        width: 90%;
        transform: translateX(-20px);
    }
    .slike-filmovi, .vrh{
        transform: translateX(-80px);
    }
    .slike-filmovi{
        margin-left: 35px;
    }
    .strelica-livo{
        left: -80px;
    }
    .strelica-desno{
        right: 70px;
    }
}
@media only screen and (max-width: 660px){
    .slike-filmovi, .vrh{
        transform: translateX(-80px);
    }
    .slike-filmovi{
        margin-left: 35px;
    }
    .strelica-livo{
        left: -80px;
        top:230px;
    }
    .strelica-desno{
        top:230px;
        right: 70px;
    }
    .showcase{
        transform: scale(0.45);
    }
    .z{
        font-size: 14px;
    }
    .showcase{
        margin-left: 70px;
    }
    .about-movie h5{
        margin-left: 25px;
    }
}
@media only screen and (max-width: 360px){
    .showcase{
        transform: scale(0.34);
        margin-left: 55px;
    }
    .filmovi h1{
        font-size: 32px;
        width: 250px;
    }
}
</style>