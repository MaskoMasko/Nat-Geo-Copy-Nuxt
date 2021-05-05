<template>
  <div @mouseover="checkPageName()">
       <div class="sve">
      <div class="nav"></div>
      <div v-if="page.name == 'magazine'" class="naslov za-mag"><div class="nas-mag"><h1>NATIONAL GEOGRAPHIC MAGAZINE</h1></div></div>
      <div v-else class="naslov"><div class="za-druge"><span class="only">I</span><h1>{{naslovStr}}</h1></div></div>
      <div v-if="page.name == 'magazine'" class="sve-slike-f">
          <div class="s1">
              <img :src="`/_nuxt/assets/img/${page.artikli[0].img}`" alt="whale">
              <a href="/magazine">MAGAZINE</a>
          <NuxtLink to="/magazine/nisto-whale">
              <h1>{{page.artikli[0].naslov}}</h1>
          </NuxtLink>
          </div>
          <div class="s2">
              <img src="" alt="">
              <div class="s2-tekst">
              <a href="/magazine">MAGAZINE</a>
          <NuxtLink to="/magazine/decode-whale-language">
            <h1>{{page.artikli[1].naslov}}</h1>
          </NuxtLink>
            </div>
          </div>
      </div>
      <div v-else class="grid-stvar-konta">
        <div class="grid-stvar">
            <div class="prva-s">
                <div class="prva-s-mali">
                <h5><a class="obican" :href="`/${page.name}`">{{naslovStr}}</a></h5>
                <h1>{{page.artikli[0].naslov}}</h1>
                <!--<img :src="`@/assets/img/${page.artikli[0].img}`" alt="nista">-->
                </div>
            </div>
            <div class="manja-s1">
                <div class="manja-s1-slika jedan" :class="[hm ? bordersa : '']" @mouseover="hm=true" @mouseleave="hm=false">
                    <img src="" alt="">
                </div>
                <div class="manja-s1-tekst">
                <h5><a class="obican" :href="`/${page.name}`">{{naslovStr}}</a></h5>
                <h3>{{page.artikli[1].naslov}}</h3>
                </div>
            </div>
            <div class="manja-s2">
                <div class="manja-s1-slika dva" :class="[hm2 ? bordersa : '']" @mouseover="hm2=true" @mouseleave="hm2=false">
                    <img src="" alt="">
                </div>
                <div class="manja-s1-tekst">
                <h5><a class="obican" :href="`/${page.name}`">{{naslovStr}}</a></h5>
                <h3>{{page.artikli[2].naslov}}</h3>
                </div>
            </div>
            <div class="manja-s3">
                <div class="manja-s1-slika tri" :class="[hm3 ? bordersa : '']" @mouseover="hm3=true" @mouseleave="hm3=false">
                    <img src="" alt="">
                </div>
                <div class="manja-s1-tekst">
                <h5><a class="obican" :href="`/${page.name}`">{{naslovStr}}</a></h5>
                <h3>{{page.artikli[3].naslov}}</h3>
                </div>
            </div>
            <div class="manja-s4">
                <div class="manja-s1-slika cet" :class="[hm4 ? bordersa : '']" @mouseover="hm4=true" @mouseleave="hm4=false">
                    <img src="" alt="">
                </div>
                <div class="manja-s1-tekst">
                <h5><a class="obican" :href="`/${page.name}`">{{naslovStr}}</a></h5>
                <h3>{{page.artikli[4].naslov}}</h3>
                </div>
            </div>
        </div>
      </div>
      <div v-if="page.name == 'magazine'">
      <div class="slika-tekst-btn">
          <div class="slika">
              <img src="@/assets/img/whale.jpg" alt="another whale image">
          </div>
          <div class="tekst-btn">
              <h4>Original Series on Disney+</h4>
              <p>From Academy Award-winning filmmaker and conservationist James Cameron, Secrets of the Whales plunges viewers deep into the epicenter of whale culture to experience the extraordinary communication skills and intercate social structures of five different whale species. Original Series Streaming April 22 on Disney+.</p>
                <button class="play-ball-btn oth mag-btn">LEARN MORE</button>
          </div>
      </div>
      <div class="praznina"></div>
      
      <div class="grid-stvar-konta">
        <div class="grid-stvar">
            <div class="prva-s">
                <div class="prva-s-mali">
                <h5><a class="obican" href="/magazine">MAGAZINE</a></h5>
                <!--<NuxtLink :to="`/magazine/${thisPageList[0].naslov}`">-->
                <h1>{{page.artikli[0].naslov}}</h1>
            <!-- </NuxtLink> -->
                </div>
            </div>
            <div class="manja-s1">
                <div class="manja-s1-slika jedan" :class="[hm ? bordersa : '']" @mouseover="hm=true" @mouseleave="hm=false">
                    <img src="" alt="">
                </div>
                <div class="manja-s1-tekst">
                <h5><a class="obican" href="/magazine">MAGAZINE</a></h5>
                <h3>{{page.artikli[1].naslov}}</h3>
                </div>
            </div>
            <div class="manja-s2">
                <div class="manja-s1-slika dva" :class="[hm2 ? bordersa : '']" @mouseover="hm2=true" @mouseleave="hm2=false">
                    <img src="" alt="">
                </div>
                <div class="manja-s1-tekst">
                <h5><a class="obican" href="/magazine">MAGAZINE</a></h5>
                <h3>{{page.artikli[2].naslov}}</h3>
                </div>
                </div>
            <div class="manja-s3">
                <div class="manja-s1-slika tri" :class="[hm3 ? bordersa : '']" @mouseover="hm3=true" @mouseleave="hm3=false">
                    <img src="" alt="">
                </div>
                <div class="manja-s1-tekst">
                <h5><a class="obican" href="/magazine">MAGAZINE</a></h5>
                <h3>{{page.artikli[3].naslov}}</h3>
                </div>
            </div>
            <div class="manja-s4">
                <div class="manja-s1-slika cet" :class="[hm4 ? bordersa : '']" @mouseover="hm4=true" @mouseleave="hm4=false">
                    <img src="" alt="">
                </div>
                <div class="manja-s1-tekst">
                <h5><a class="obican" href="/magazine">MAGAZINE</a></h5>
                <h3>{{page.artikli[4].naslov}}</h3>
                </div>
            </div>
        </div>
      </div>
      <div class="velika-slika">
          <!--samo slika -->
      </div>
      <div class="fte">
          <h1>FROM THE EDITOR</h1>
        <div class="zuti-line"></div>
          <div class="no">
              <div class="slika-fte">
                  <img src="@/assets/img/corals.jpg" alt="koralji">
              </div>
              <div class="tekst-fte">
                  <a href="/magazine">MAGAZINE</a>
                  <h3>Why we're optimistic we can save our oceans</h3>
                  <p>For all the threats to the ocean-warming, overfishing, pollution-a veteran undersea photographer sees ways to help and reasons for hope.</p>
              </div>
          </div>
      </div>
      <PlayBall/>
      <!-- PLAY BALL DIO -->
      <div class="planet-possible">
          <h1>PLANET POSSIBLE</h1>
          <p>Planet Possible seeks to inform, inspire, and empower us to live lightly on the planet. Visit this page to learn how to help protect the place that we call home.</p>
          <button class="play-ball-btn oth mag-btn">LEARN MORE</button>
      </div>
          <div class="praznina"></div>
             <div class="grid-stvar-konta">
        <div class="grid-stvar">
            <div class="prva-s">
                <div class="prva-s-mali">
                <h5><a class="obican" href="/magazine">MAGAZINE</a></h5>
                <h1>{{page.artikli[0].naslov}}</h1>
                </div>
            </div>
            <div class="manja-s1">
                <div class="manja-s1-slika jedan" :class="[hm ? bordersa : '']" @mouseover="hm=true" @mouseleave="hm=false">
                    <img src="" alt="">
                </div>
                <div class="manja-s1-tekst">
                <h5><a class="obican" href="/magazine">MAGAZINE</a></h5>
                <h3>{{page.artikli[1].naslov}}</h3>
                </div>
            </div>
            <div class="manja-s2">
                <div class="manja-s1-slika dva" :class="[hm2 ? bordersa : '']" @mouseover="hm2=true" @mouseleave="hm2=false">
                    <img src="" alt="">
                </div>
                <div class="manja-s1-tekst">
                <h5><a class="obican" href="/magazine">MAGAZINE</a></h5>
                <h3>{{page.artikli[2].naslov}}</h3>
                </div>
                </div>
            <div class="manja-s3">
                <div class="manja-s1-slika tri" :class="[hm3 ? bordersa : '']" @mouseover="hm3=true" @mouseleave="hm3=false">
                    <img src="" alt="">
                </div>
                <div class="manja-s1-tekst">
                <h5><a class="obican" href="/magazine">MAGAZINE</a></h5>
                <h3>{{page.artikli[3].naslov}}</h3>
                </div>
            </div>
            <div class="manja-s4">
                <div class="manja-s1-slika cet" :class="[hm4 ? bordersa : '']" @mouseover="hm4=true" @mouseleave="hm4=false">
                    <img src="" alt="">
                </div>
                <div class="manja-s1-tekst">
                <h5><a class="obican" href="/magazine">MAGAZINE</a></h5>
                <h3>{{page.artikli[4].naslov}}</h3>
                </div>
            </div>
        </div>
      </div>
      <div class="praznina"></div>
      <div v-if="page.name == 'magazine'" class="sve-slike-f">
          <div class="s1">
              <img :src="`/_nuxt/assets/img/${page.artikli[0].img}`" alt="whale">
              <a href="/magazine">MAGAZINE</a>
              <h1>{{page.artikli[0].naslov}}</h1>
          </div>
          <div class="s2">
              <img src="" alt="">
              <div class="s2-tekst">
              <a href="/magazine">MAGAZINE</a>
            <h1>{{page.artikli[1].naslov}}</h1>
            </div>
          </div>
      </div>
      </div>
      <div v-else class="storiii">
          <div class="prvi-storii">
            <div class="prva-s">
                <div class="prva-s-mali">
                <h5><a class="obican" :href="`/${page.name}`">{{naslovStr}}</a></h5>
                <h1>{{page.artikli[4].naslov}}</h1>
                <!--<img :src="`@/assets/img/${page.artikli[0].img}`" alt="nista">-->
                </div>
            </div>
          </div>
        <ul>
            <li class="lista-stori" v-for="item in thisPageList" :key="item.id">
                <img :src="`/_nuxt/assets/img/${item.img}.jpg`" alt="slia">
                <h4>{{ item.naslov }}</h4>
            </li>
        </ul>
          <button class="play-ball-btn oth ne-main" @click="loadMore()">LOAD MORE</button>
          <div class="kadi-su-slajderi">
              <div class="ma-da">
              <h1>GO FURTHER</h1>
                <div class="zuti-line"></div>
                </div>
              <h3>ANIMALS</h3>
                  <SlajderPrvi/>
                  <Prazno/>
                  <h3>ENIVRONMENT</h3>
                  <SlajderPrvi/>
                    <Prazno/>
                    <h3>SCIENCE</h3>
                  <SlajderPrvi/>
                    <Prazno/>
                    <h3>TRAVEL</h3>
                  <SlajderPrvi/>
                  <Prazno/>
                  <DrSlajder/>
          </div>
      </div>
      <!-- sad gredu oni slajderi -->
  </div>
  <SignUp/>
  <Kraj/>
  </div>
</template>

<script>
import {animals, travel, environment, science, history} from "@/assets/data.js"
import {mapState} from "vuex"
export default {
    computed: {
        page(){
            return this.$store.getters.getPageByName(this.$route.params.pages)
       },
        art(){
            return this.$store.getters.getAtByName(this.$route.params.name)
       },
    },
    methods:{
        loadMore(){
            console.log(this.thisPageList)
            /*for(let i = 0; i<this.items.length; i++){
                if(i>2){
                    break;
                }else{
                    this.main.push(this.items[i])
                    this.items.shift(this.items[i])
                }
            }*/
        },
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
            }else if(this.thisPageList == "history"){
                this.naslovStr = "HISTORY";
                this.thisPageList = this.history;
            }
        },
    },
    data(){
        return{
            animals,
            travel,
            environment, 
            science, 
            history,
            thisPageList:this.$route.params.pages,
            naslovStr:"",
            hm: false,
            bordersa:"border-bot",
            hm2:false,
            hm3:false,
            hm4:false,
            firstl:true
        }
    },
}
</script>

<style scoped>
.nav{
    width: 100%;
    height: 20px;
}
.nas-mag{
    width: 650px;
    height: 300px;
    margin-left: -290px;
}
.za-mag{
    display: flex;
    justify-content: center;
}
.nas-mag h1{
    transform: translateY(170px);
    padding-left: 10px;
    border-left: 5px solid yellow;

}
.naslov{
    width: 100%;
    height: 350px;
    background:black;
    color: white;
}
.naslov h1, .naslov span{
    margin-right: 10px;
    font-size: 42px;
    margin-bottom: 20px;
}
.za-druge{
    display: flex;
    width: 60%;
    height: 100%;
    margin: auto;
    align-items: flex-end;
}
.za-druge h1{
    margin: 50px;
    margin-left: 0;
}
.za-druge span{
    margin-left: 100px;
    margin-bottom: 50px;
}
.sve-slike-f{
    width: 100%;
    height: 500px;
    display: flex;   
    align-items: center;
    justify-content: center;
    background: rgb(248, 242, 242);
}
.s1{
    width: 627px;
    margin-right: 20px;
    height: 80%;
    position: relative;
}
.s1 img{
    width: 100%;
    height: 100%;
    position: absolute;
}
.s1 h1{
    position: absolute;
    padding:20px;
    width: 90%;
    bottom: 5%;
    margin-bottom: 20px;
    color: white;
}
.s1 a{
    text-decoration: none;
    position: absolute;
    margin-bottom:30px;
    padding: 20px;
    width: 90%;
    bottom: 15%;
    color: white;
}
.s1 a:hover{
    cursor: pointer;
    text-decoration: underline;
}
.s2{
    width: 304px;
    height: 80%;
    background: rgb(90, 90, 151);
    display: flex;
    flex-direction: column;
}
.s2 img{
    height: 80%;
    width: 100%;
    color: rgb(105, 211, 105);
}
.s2-tekst{
    color: white;
    font-size: 12px;
    padding-left: 20px;
    margin-bottom: 50px;
}
.s2-tekst a{
    text-decoration: none;
    color: white;
}
.s2-tekst a:hover{
    text-decoration: underline;
    cursor: pointer;
}
.slika-tekst-btn{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.slika{
    width: 570px;
    height: 80%;
    background: rgb(180, 108, 108);
}
.slika img{
    width: 100%;
    height: 100%;
}
.tekst-btn{
    width: 380px;
    height: 80%;
    margin-top: 60px;
}
.tekst-btn h4, .tekst-btn p, .tekst-btn button{
    width: 80%;
    margin:20px;
}
.tekst-btn h4{
    font-size: 20px;
}
.tekst-btn p{
    font-size: 18px;
}
.grid-stvar{
    width: 951px;
    height: 700px;
    background:rgb(97, 128, 85);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
}
.grid-stvar-konta{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 900px;
}
.grid-stvar h3{
    color: white;
}
.prva-s{
    background: red;
    width: 100%;
    height: 100%;
    grid-column: 1/3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.prva-s-mali, .manja-s1-tekst{
    padding-top:20px;
    width: 90%;
    margin-left:auto;
    margin-right: auto;
    margin-bottom: 20px;
    color: white;
}
.obican{
    text-decoration: none;
    color: white;
}
.obican:hover{
    text-decoration: underline;
}
/* S1 */
.manja-s1{
    background: blue;
    width: 100%;
    height: 100%;
    grid-column: 3/4;
    display: flex;
    flex-direction: column;
    position: relative;
}
.manja-s1-slika{
    overflow: hidden;
    width: 100%;
    height: 60%;
    background: green;
}
.manja-s1-slika img{
    width: 100%;
    height: 100%;
    transition: 0.5s;
}
.manja-s1-slika img:hover{
    transform: scale(1.2);
}
.manja-s1-tekst{
    top:55%;
    position: absolute;
    text-align: left;
    margin-left: 20px;
}
/* S2 */
.manja-s2{
    background: green;
    width: 100%;
    height: 100%;
    grid-column: 1/2;
    grid-row:2/3;
    position: relative;
}
.only{
    color: yellow;
}
/* S3 */
.manja-s3{
    background: rgb(201, 201, 113);
    width: 100%;
    height: 100%;
    grid-column: 2/3;
    grid-row:2/3;
    position: relative;
}
/* S4 */
.manja-s4{
    background: magenta;
    width: 100%;
    height: 100%;
    grid-column: 3/4;
    grid-row:2/3;
    position: relative;
}
.velika-slika{
    width: 100%;
    height: 1200px;
    background: orange;
}
.fte{
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    padding-bottom: 50px;
}
.no{
    width: 952px;
    height: 70%;
    display: flex;
    margin-top: 30px;
}
.slika-fte{
    width:476px;
    height: 100%;
    background: yellow;
    position: relative;
    margin-right: 10px;
}
.slika-fte img{
    width: 100%;
    height: 100%;
    position: absolute;
    top:-2%;
    left:-2%;
}

.tekst-fte{
    width:333px;
    height: 100%;
    margin-left: 30px;
    margin-top: 80px;
}
.tekst-fte a{
    text-decoration: none;
    color: grey;
}
.tekst-fte a:hover{
    text-decoration: underline;
    cursor: pointer;
}
.tekst-fte h3{
    font-size: 26px;
}
.tekst-fte p{
    font-size: 20px;
}
.play-ball-dio{
    width: 100%;
    height: 600px;
}
.planet-possible{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 450px;
    flex-direction: column;
    text-align: center;
}
.planet-possible h1{
    font-size: 38px;
}
.planet-possible p{
    width: 40%;
    font-size: 18px;
    margin-bottom: 50px;
}
.zuti-line{
    width: 50px;
    height: 3px;
    margin-bottom: 20px;
    background-color: yellow;
}
.lista-stori img{
    width: 50%;
    height: 200px;
    background: red;
}
.lista-stori{
    display: flex;
    width: 500px;
    margin-left: auto;
    margin-right: 50%;
    padding-top: 10px;
    padding-bottom: 10px;
    background: lime;
}
.lista-stori h4{
    width: 40%;
    font-size: 20px;
    margin: auto;
}
.prvi-storii{
    width: 35%;
    height: 400px;
    margin-left: auto;
    margin-right: 40%;
    background: red;
}
.load-more{
    padding: 20px;
    margin: 20px 0 20px 40%;
}
.kadi-su-slajderi{
    width: 100%;
    height: 4700px;
    background:black;
}
.kadi-su-slajderi h1{
    color:white;
    font-size: 50px;
}
.kadi-su-slajderi h3{
    color: white;
    margin-left: 45.5%;
    padding:40px
}
.animals-slajder{
    width: 100%;
    height: 400px;
    background: green;
}
.kraj{
    position: absolute;
    bottom:-700%
}

.play-ball-btn{
    cursor: pointer;
    font-weight: 700;
    width: 170px;
    height: 40px;
    background: transparent;
    border: 2px solid black;
}
.mag-btn{
    width: 200px !important;
    background: yellow;
    border: none;
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
.ne-main{
    margin: 50px 0 50px 35%;
    width: 170px;
    height: 50px;
}
.zuti-line{
    width: 50px;
    height: 3px;
    margin-bottom: 20px;
    background-color: yellow;
}
.ma-da{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.ma-da h1{
    padding: 30px;
    padding-top: 60px;
}
.border-bot{
    border-bottom: 5px solid yellow;
}
@media only screen and (max-width:1100px){
    .sve-slike-f{
        flex-direction: column;
        height: 900px;
        margin: 20px;
    }
    .s1{
        height: 600px;
    }
    .s2{
        margin: 20px;
        margin-left: -320px; 
        height: 600px;       
    }
    .slika{
        width: 300px;
        height: 250px;
    }
    .tekst-btn h4{
        font-size: 20px;
    }
    .tekst-btn p{
        font-size: 18px;
    }
    .grid-stvar-konta{
        margin-bottom: 20px !important;
        height: 1500px;
        width: 700px;
        margin: auto;
    }
    .grid-stvar{
        height: 1500px;
        display: grid;
        grid-template-columns: 1fr 1fr ;
        grid-template-rows: 1fr 1fr 1fr;
    }
    .manja-s1{
        grid-row: 3/4;
        grid-column: 1/2;
    }
    .manja-s4{
        grid-row: 3/4;
        grid-column: 2/3;
    }
    .no{
        height: 300px;
        width: 700px;
        margin: 20px;
    }
    .tekst-fte{
        margin-top: 10px;
    }
}
@media only screen and (max-width:990px){
    .nas-mag{
        margin-left: 100px;
    }
    .planet-possible p{
        width: 70%;
    }
}
@media only screen and (max-width:625px){
    .sve-slike-f{
        margin-left: 0%;
        width: 100%;
    }
    .nas-mag h1{
        font-size: 28px;
    }
    .s2{
        width: 90%;
        margin-left: -10px;
        margin-right: 10px;
    }
    .s1{
        width: 90%;
        margin-left: -10px;
        margin-right: 10px;
    }
    .slika-tekst-btn, .no{
        flex-direction: column;
        height: 800px;
    }
    .no{
        margin-left: 220px;
    }
    .tekst-fte{
        margin-bottom: -10px;
        margin-left: 70px;
    }
    .slika-fte{
        width: 50%;
        margin-left: auto;
        margin-right: 275px;
    }
    .slika{
        height: 400px;
        margin-top: 20px;
        width: 90%;
        margin-left: 30px;
        margin-right: 10px;
    }
    .tekst-btn{
        margin-right: 20px;
        width:90%;
        margin-top: 0% ;
    }
    .mag-btn{
        width: 400px !important;
    }
    .grid-stvar{
        display: flex;
        flex-direction: column;
        height: 2500px;
    }
    .prva-s, .manja-s1, .manja-s2, .manja-s3, .manja-s4{
        margin-left:10px;
        width: 70%;
        height: 400px;
    }
     .manja-s1, .manja-s2, .manja-s3, .manja-s4{
         height: 500px !important;
     }
     .praznina{
         height: 500px;
     }
     .kraj{
    bottom:-1200%
     }
     .kraj2{
         position: absolute;
         bottom: 100%;
     }
}
@media only screen and (max-width:510px){
    .prva-s, .manja-s1, .manja-s2, .manja-s3, .manja-s4{
        width: 67%;
    }
}
@media only screen and (max-width:370px){
    .nas-mag h1{
        margin-left: -70px;
    }
    .s1, .s2{
        width: 80%;
        margin-left: -40px;
        margin-right: 10px;
        height: 40%;
    }
    .slika{
        margin-left: -30px;
        width: 75%;
    }
    .mag-btn{
        width: 250px !important;
    }
    .prva-s, .manja-s1, .manja-s2, .manja-s3, .manja-s4{
        margin-left:10px;
        width: 41%;
        height: 300px;
    }
    .fte h1{
        font-size: 20px;
        margin-left: -40px;
    }
    .zuti-line{
        transform: translateX(-20px);
    }
    .no{
        width: 130% !important;
    }
    .tekst-fte{
        font-size: 12px;
        transform: translateX(-70px);
        width: 50%;
    }
    .tekst-fte h3{
        font-size: 18px;
    }
    .tekst-fte p{
        font-size: 16px;
    }
    .planet-possible{
        transform: translateX(-30px);
    }
    .planet-possible h1{
        font-size: 20px;
    }
    .planet-possible p{
        font-size: 16px;
    }
    .mag-btn{
        width: 170px !important;
    }
}
</style>