<template>
        <div class="slider-wrapper" @mouseenter="slajderPrvi()">
          <div class="slider items">
            <div class="wrapper">
              <div class="item slide category">
                <div class="rounded">
                  <h1>{{page.artikli[1].naslov}}</h1>
                  <h5>{{page.artikli[1].opis}}</h5>
                  <img src="@/assets/img/baseball2.jpg" alt="alt" />
                  </div>
              </div>
              <div class="item slide category">
                <div class="rounded">
                  <h1>{{page.artikli[0].naslov}}</h1>
                  <h5>{{page.artikli[0].opis}}</h5>
                  <img src="@/assets/img/winter-path.jpg" alt="alt" />
                  </div>
              </div>
              <div class="item slide category">
                <div class="rounded">
                  <h1>{{page.artikli[4].naslov}}</h1>
                  <h5>{{page.artikli[4].opis}}</h5>
                  <img src="@/assets/img/whale.jpg" alt="alt" />
                  </div>
              </div>
              <div class="item slide category">
                <div class="rounded">
                  <h1>{{page.artikli[3].naslov}}</h1>
                  <h5>{{page.artikli[3].opis}}</h5></div>
                  <img src="@/assets/img/ski.jpg" alt="alt" />
              </div>
              <div class="item slide category">
                <div class="rounded">
                  <h1>{{page.artikli[2].naslov}}</h1>
                  <h5>{{page.artikli[2].opis}}</h5>
                  <img src="@/assets/img/sign-bg.jpg" alt="alt" />
                  </div>
              </div>
              <div class="item slide category">
                <div class="rounded">
                  <h1>{{page.artikli[1].naslov}}</h1>
                  <h5>{{page.artikli[1].opis}}</h5>
                  <img src="@/assets/img/elephants.jpg" alt="alt" />
                </div>
              </div>
              <div class="item slide category">
                <div class="rounded">
                  <h1>{{page.artikli[0].naslov}}</h1>
                  <h5>{{page.artikli[0].opis}}</h5>
                  <img src="@/assets/img/diver.jpg" alt="alt" />
                </div>
              </div>
              <div class="item slide category">
                <div class="rounded">
                  <h1>{{page.artikli[4].naslov}}</h1>
                  <h5>{{page.artikli[4].opis}}</h5></div>
                  <img src="@/assets/img/baseball2.jpg" alt="alt" />
              </div>
              <div class="item slide category">
                <div class="rounded">
                  <h1>{{page.artikli[3].naslov}}</h1>
                  <h5>{{page.artikli[3].opis}}</h5></div>
                  <img src="@/assets/img/ski.jpg" alt="alt" />
              </div>
              <div class="item slide category">
                <div class="rounded">
                  <h1>{{page.artikli[2].naslov}}</h1>
                  <h5>{{page.artikli[2].opis}}</h5></div>
                  <img src="@/assets/img/whale.jpg" alt="alt" />
              </div>
              <div class="item slide category">
                <div class="rounded">
                  <h1>{{page.artikli[1].naslov}}</h1>
                  <h5>{{page.artikli[1].opis}}</h5>
                  <img src="@/assets/img/winter-path.jpg" alt="alt" /></div>
              </div>
              <div class="item slide category">
                <div class="rounded">
                  <h1>{{page.artikli[0].naslov}}</h1>
                  <h5>{{page.artikli[0].opis}}</h5></div>
                  <img src="@/assets/img/sign-bg.jpg" alt="alt" />
              </div>
            </div>
          </div>
          <nav>
            <div class="left disabled"><i class="fas fa-chevron-left"></i></div>
            <div class="right"><i class="fas fa-chevron-right"></i></div>
          </nav>
        </div>
</template>

<script>
export default {
methods:{
  slajderPrvi(){

  var sliders = document.querySelectorAll(".slider-wrapper"); //div oko slider itemi ali samo jedan je pa bas i ne kap
  
  window.addEventListener("resize", () => { //kada se resiza
    for (let i = 0; i < sliders.length; i++) { //za svaki slider seta width od funk doli 
      setWrapperWidth(sliders[i]);  
    }
  });
  
  for (let i = 0; i < sliders.length; i++) { 
    let slider = sliders[i].querySelector(".slider"); //selekta slider od odredeneg slidera
    let wrapper = slider.querySelector(".wrapper"); //slekta wrapper od odredeneg slidera
    
    setWrapperWidth(sliders[i]); //width
    
    let navR = sliders[i].querySelector("nav .right"); //btn right and left od odredeneg slidera
    let navL = sliders[i].querySelector("nav .left");
    
    slider.addEventListener("scroll", () => { //kada slider scrolla (vjv livo i desno)
      if (slider.scrollLeft === 0) navL.classList.add("disabled");
      else navL.classList.remove("disabled"); //ako je na pocetku (tj x koor == 0) onda diseblas btn
      
      if (slider.scrollLeft >= wrapper.clientWidth - slider.clientWidth)
      navR.classList.add("disabled");
      else navR.classList.remove("disabled"); //isto samo u desno
    });
    
    if (navR)
    navR.addEventListener("click", (e) => { //click event
      navL.classList.remove("disabled");
      transition(slider, 0, slider.clientWidth, "right", () => { 
        if (slider.scrollLeft >= wrapper.clientWidth - slider.clientWidth) {
          navR.classList.add("disabled");
        }
      });
    });
    
    if (navL)
    navL.addEventListener("click", (e) => {
      navR.classList.remove("disabled");
      transition(slider, 0, slider.clientWidth, "left", () => {
        if (slider.scrollLeft == 0) navL.classList.add("disabled"); 
      });
    });
  }
  
  function transition(el, from, to, dir, cb) { //cb arg mora biti func
    let inc = from; //poc pos i think
    let spd = 30;
    let interval = setInterval(() => {
      if (inc >= to) { //to je width
        clearInterval(interval); //ako je width<=0 nema intervala
        spd = to - inc;
        cb(); // callback
      }
      el.scrollLeft = dir === "right" ? el.scrollLeft + spd : el.scrollLeft - spd; //odabrani slider gleda dali gre livo ili desno 
      inc += spd;
    }, 15); //ponoviti setInterval
  }
  
  function setWrapperWidth(sliderWrapper) { //slider width (parametar odabrani slider)
    let slider = sliderWrapper.querySelector(".slider"); //slider
    let wrapper = slider.querySelector(".wrapper"); //wrapper
    let slides = wrapper.querySelectorAll(".slide"); //slidovi
    wrapper.style.width = slides.length * slides[0].clientWidth + "px";//duzina slidovi * velicina prvega slajda
  }
}
},
    computed: {
        page(){
            return this.$store.getters.getPageByName(this.$route.params.pages)
       }
    },
}
</script>

<style>
  .slider-wrapper {
    position: relative;
  }
  .slider-wrapper nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    pointer-events: none;
  }
  .slider-wrapper nav div {
    width: 40px;
    height: 40px;
    background-color: #82ca9c;
    color: white;
    font-size: 21px;
    box-shadow: 0 0 6px 1px rgba(0,0,0, .3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.1s ease-out;
    pointer-events: all;
  }
  .slider-wrapper nav div:hover {
    background-color: #444;
  }
  .slider-wrapper nav div.disabled {
    opacity: 0;
    pointer-events: none;
  }
  .slider {
    width: 100%;
    overflow-x: scroll;
  }
  .slider .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .slider  .slide {
    width: 360px; /* a default width */
    padding-left: 15px;
    padding-right: 15px;
  }
  .slider .slide img {
    width: 400px;
    height: 400px;
  }
  .rounded{
    position: relative;
  }
  .rounded h1, .rounded h5{
    position: absolute;
    margin-left: 45px;
    color: white;
  }
  
  @media only screen and (max-width: 768px) {
    .slider  .slide {
      width: 50vw; /* a default width */
    }
  }
  
  @media only screen and (min-width: 768px) {
    .slider-wrapper {
      overflow: hidden;
      width: 100%;
    }
    .slider {
      position: relative;
      bottom: -18px;
    }
  }
</style>