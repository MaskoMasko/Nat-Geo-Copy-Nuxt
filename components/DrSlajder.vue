<template>
<div @mouseover="drSlajder()" class="haah">
    <div class="slider-window">
        <div class="slider2">
          <div class="abssve jedan">
            <img src="@/assets/img/whale.jpg" alt="">
            <h4>MAGAZINE</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <h3>READ</h3>
          </div>
          <div class="abssve devet" id="lastImg">
            <h4>MAGAZINE</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <h3>READ</h3>
            <img src="@/assets/img/mountain.jpg" alt="">
          </div>
            <img src="" alt="">
            <div class="abssve dva"><img src="@/assets/img/villa.jpg" alt="">
            <h4>MAGAZINE</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h3>READ</h3>
              </div>
            <div class="abssve cet"><img src="@/assets/img/diver.jpg" alt="">
            <h4>MAGAZINE</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h3>READ</h3>
              </div>
          <div class="abssve pet"><img src="@/assets/img/forest.jpg" alt="">
          <h4>MAGAZINE</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h3>READ</h3>
            </div>
          <div class="abssve sest"><img src="@/assets/img/whale.jpg" alt="">
          <h4>MAGAZINE</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h3>READ</h3>
            </div>
          <div class="abssve devet"><img src="@/assets/img/mountain.jpg" alt="">
        <h4>MAGAZINE</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure doloremque voluptatem dolore quos eveniet</p>
            <h3>READ</h3>
            </div>
          <div class="abssve dva" id="firstImg"><img src="@/assets/img/villa.jpg" alt="">            <h4>MAGAZINE</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure doloremque voluptatem dolore quos eveniet</p>
            <h3>READ</h3>
            </div>
          <div class="abssve devet"><img src="@/assets/img/diver.jpg" alt="">
          <h4>MAGAZINE</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure doloremque voluptatem dolore quos eveniet</p>
            <h3>READ</h3>
            </div>
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <div class="left">
        <div class="liv"></div>
      </div>
      <div class="right">
        <div class="rig"></div>
      </div>
</div>
</template>

<script>
export default {
    methods:{
        drSlajder(){
    const carouselSlide = document.querySelector(".slider2");
    const carouselImages = document.querySelectorAll(".slider2 div");
    
    const rightBtn = document.querySelector(".left")
    const leftBtn = document.querySelector(".right")
    
    var counter = 1;
    var size = carouselImages[0].clientWidth + 40;//40 are margins

    carouselSlide.style.transform = "translateX(" + (-size*counter) +"px)";
    carouselImages[2].style.transform = "scale(1.8)"
    carouselImages[2].style.zIndex = 10;
    
    leftBtn.addEventListener("click", ()=>{
        if(counter >= carouselImages.length - 1) return;
        carouselImages[counter+2].style.transform = "scale(1.8)"
        carouselImages[counter+2].style.zIndex = 10  
        carouselImages[counter+1].style.transform = "scale(1)"  
        carouselImages[counter+1].style.zIndex = 1 
        carouselSlide.style.transition = "0.8s ease-in-out";
        counter++;
        carouselSlide.style.transform = "translateX(" + (-size*counter) +"px)";
        })
        
    rightBtn.addEventListener("click", ()=>{
        if(counter <= 0) return;
        carouselImages[counter].style.transform = "scale(1.8)"  
        carouselImages[counter].style.zIndex = 10  
        carouselImages[counter+1].style.transform = "scale(1)"  
        carouselImages[counter+1].style.zIndex = 1  
        carouselSlide.style.transition = "0.8s ease-in-out";
        counter--;
        carouselSlide.style.transform = "translateX(" + (-size*counter) +"px)";
    })
        
    carouselSlide.addEventListener("transitionend", ()=>{
        if(carouselImages[counter+1].id == "lastImg"){
          carouselSlide.style.transition = "none";
          counter = carouselImages.length - 4;
          carouselSlide.style.transform = "translateX(" + (-size*(counter)) + "px)";
          carouselImages[counter+1].style.transform = "scale(1.8)"
          carouselImages[counter+1].style.zIndex = 10
          carouselImages[counter].style.transform = "scale(1)"
          carouselImages[counter].style.zIndex = 1
          carouselImages[1].style.transform = "scale(1)"
          carouselImages[1].style.zIndex = 1
        }


        if(carouselImages[counter].id == "firstImg"){
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = "translateX(" + (-size*counter) + "px)";
            carouselImages[counter+1].style.transform = "scale(1.8)"
            carouselImages[counter+1].style.zIndex = 10
            carouselImages[counter].style.transform = "scale(1)"
            carouselImages[counter].style.zIndex = 1
          carouselImages[carouselImages.length-1].style.transform = "scale(1)"
          carouselImages[carouselImages.length-1].style.zIndex = 1

        }
    })
    }
    }
}
</script>

<style>
.haah{
  position: relative;
}
.slider-window{
    width: 730px;
    margin: auto;
    overflow: hidden;
}
.slider2{
    margin-top: 30px;
    display: flex;
    width: 100%;
    height: 500px;
}
.abssve{
    min-width: 200px;
    height: 400px;
    margin: 20px;
    position: relative;
    color: white;
    text-align: center;
}
.abssve img{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
}
.abssve h4{
    position: absolute;
    z-index: 2;
    transform: translateY(140px);
    top: -15%;
    left: 30%;
    font-size: 14px;
}
.abssve p{
    position: absolute;
    z-index: 2;
    transform: translateY(140px);
    font-size: 12px;
    width: 75%;
    top: 10%;
    left: 13%;
}
.abssve h3{
    position: absolute;
    z-index: 2;
    transform: translateY(140px);
    top:40%;
    left: 37%;
    font-size: 8px !important;
    letter-spacing: 1px;
    padding: 10px;
    background: yellow;
    color: black;
}
.liv{
  width: 20px;
  height: 20px;
  transform: rotateZ(45deg);
  border-left: 3px solid grey;
  border-bottom: 3px solid grey;
  position: absolute;
  top: 38%;
  left: 29.5%;
}
.rig{
  width: 20px;
  height: 20px;
  transform: rotateZ(45deg);
  border-right: 3px solid grey;
  border-top: 3px solid grey;
  position: absolute;
  top: 38%;
  right: 30%;
}
</style>