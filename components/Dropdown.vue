<template>
      <div class="dropdown">
        <div class="yesrit2">
        <div class="yesrit" @click="$emit('disable-dropdown')"><div class="strelica3"></div><div class="strelica4"></div></div>
        <a href="" class="pl ">Subscribe</a>
        <a href="" class="pl">Renew</a>
        <ul class="topics">
            <div class="topics-nas">
            <h4>TOPICS</h4><hr>
        </div>
            <li><a href="/animals">ANIMALS</a></li>
            <li><a href="/environment">ENVIRONMENT</a></li>
            <li><a href="/history-&-culture">HISOTRY & CULTURE</a></li>
            <li><a href="/science">SCIENCE</a></li>
            <li><a href="/travel">TRAVEL</a></li>
        </ul>
        <ul class="sites">
            <div class="topics-nas">
                <h4>SITES</h4><hr>
            </div>
            <li>WATCH TV!</li>
            <li>READ THE MAGAZINE</li>
            <li>VISIT NAT GEO FAMILY</li>
            <li>BOOK A TRIP</li>
            <li>INSPIRE YOUR KIDS</li>
            <li>LISTEN TO PODCASTS</li>
            <li>SHIO NAT GEO</li>
            <li>ATTEND A LIVE EVENT</li>
            <li>LEARN ABOUT OUR IMPACT</li>
            <li>SUPPORT OUR MISSION</li>
        </ul>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  components: { Navbar },
    methods:{
    yes(){
        alert("yes")
      this.yessir = false;
    }
  }, 
  data(){
    return{
      yessir:true,
      hidden:"hidden",
      not:""
    }
  }
}

</script>

<style>
@media only screen and (max-width: 780px){
    .pl{
        display: block;
        color: white;
        text-decoration: none;
        font-size: 15px;
        padding:10px;
    }
    .pl:hover{
        cursor: pointer;
        color: rgb(158, 152, 152);
    }
    .yesrit2{
        flex-direction: column;
        display: flex;
    } 
    .topics, .sites{
        padding: 10px;
        margin: 0;
    }
}
</style>