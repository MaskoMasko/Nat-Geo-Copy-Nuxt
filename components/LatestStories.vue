<template>
  <div class="latest-stories">
        <div class="section1">
        <div class="naslov">
            <h1>LATEST STORIES</h1>
            <div class="manjitxt">
            <div class="trans-dio">
                <a href="#" class="zut">Subscribe</a>
                <div class="trans-box"></div>
            </div>
            <p> for full access to read stories from National Geographic.</p>
        </div>
        <div class="zuti-line"></div>
    </div>
        <div class="stories">
            <div class="td-picks">
            <h1 class="prviz z"><span class="only">I</span> TODAY'S PICKS</h1>
            <ul class="td-picks-lista">
                <li><img src="../assets/img/coronavirus.jpg"><div class="text-poli-slike"> <a href="#">Updates on the coronavirus pandemic</a></div></li>
                <li><img src="../assets/img/winter-path.jpg"> <div class="text-poli-slike"><p>ENVIRONMENT</p><a href="#">Big winter snows in the North could be fueled by Artcict sea ice loss</a></div></li>
                <li><img src="../assets/img/elephants.jpg"> <div class="text-poli-slike"><p>ANIMAL</p><p>PLANET POSSIBLE</p><a href="#">Elephants return to conflict-ridden national park</a></div></li>
                <li class="manjeti"><img src="../assets/img/mountain.jpg"> <div class="text-poli-slike"><p>TRAVEL</p><a href="#">Where to find warrior queens, fairies, and castles in Scotland</a></div></li>
                <li class="manjeti"><img src="../assets/img/coronavirus2.jpg"> <div class="text-poli-slike"><p>SCIENCE</p><p>CORONAVIRUS COVERAGE</p><a href="#">Vaccine offers protections for at least six months</a></div></li>
                <li class="manjeti"><img src="../assets/img/baseball.jpg"> <div class="text-poli-slike"><p>HISTORY & CULTURE</p><a href="#">How the first pitch became baseball's Opening Day tradition</a></div></li>
            </ul>
                <a class="see-more zut zutfs see-more3">SEE MORE</a>
                </div>
            <div class="najveca-slika">
                <img src="../assets/img/yawn.jpg" alt="">
                <div class="najveca-slika-tekst">
                    <p>ANIMALS</p>
                    <h1>Many mammals are contagious yawners-this might be why</h1>
                    <h6>READ</h6><!--onaj dio uz read fali-->
                </div>
            </div>

            <div class="manja1">
                <div class="manja1-slika" :class="[hm ? bordersa : '']" @mouseover="hm=true" @mouseleave="hm=false">
                    <img src="../assets/img/baseball2.jpg" alt="">
                </div>
                <div class="manja1-tekst">
                    <p>HISOTRY & CULTURE</p>
                    <h3>How the first pitch became baseball's Opening Day tradition</h3>
                    <h6>READ</h6><!--onaj dio uz read fali-->
                </div>
            </div>
            <div class="manja2">
                <div class="manja2-slika" :class="[hm2 ? bordersa : '']" @mouseover="hm2=true" @mouseleave="hm2=false">
                    <img src="../assets/img/forest.jpg" alt="">
                </div>
                <div class="manja2-tekst">
                    <p>ENVIRONMENT</p>
                    <h3>How coffee can help forests grow faster</h3>
                    <h6>READ</h6><!--onaj dio uz read fali-->
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            hm: false,
            bordersa:"border-bot",
            hm2:false,
            firstl:true
        }
    }
}
</script>

<style>
:root{
    --zuta-boja: rgb(255, 204, 0);
}
/*LATEST STORIES */
.latest-stories{
    width: 100%;
    height: 1300px;
    background: black;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
}
.section1{
    background: black;
    text-align: center;
    width: 1050px;
    color: white;
    height: 100%;
    overflow: hidden;
}
.naslov{
    padding-bottom: 30px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    font-size: 28px;
}
.manjitxt{
    font-size: 20px;
    display: flex;
    justify-self: center;
}
.naslov p{
    margin-top: -20px;
    margin-left: 8px;
    font-size: 20px;
}
.text-poli-slike p, .text-poli-slike1 p{
    font-size: 16px;
}
.stories{
    height: 80%;
    width: 100%;
    background-color: black;
    display: grid;
    row-gap: 70px;
    column-gap: 50px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 5%;
}
.stories  p{
    font-size: 16px;
}
.td-picks-lista li{
    padding: 10px;
    margin-left: -50px;
}
.td-picks, .td-picks1{
    width: 300px;
    grid-column-start:1;
    grid-column-end:2;
    grid-row-start: 1;
    grid-row-end: 3;
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: left;
    justify-content: flex-end;
}
.td-picks li, .td-picks1 li{
    width: 450px;
}
.td-picks li p:hover{
    text-decoration: underline;
}
.td-picks li:hover a, .td-picks1 li:hover a{
    cursor: pointer;
    text-decoration: underline;
}
.td-picks img:hover, .td-picks1 img:hover{
    cursor: pointer;
}
.see-more{
    cursor: pointer;
    width: fit-content;
    text-decoration: underline 3px var(--zuta-boja);
    color: white;
}
.wn{
    margin-left: 100px;
}
.td-picks li a{
    text-decoration: none;
    color: white;
    font-weight: bold;
}
.td-picks img{
    height: 100px;
    width: 100px;
}
.see-more2{
    text-decoration: underline 2px var(--zuta-boja);
}
.text-poli-slike, .text-poli-slike1{
    margin-left: 10px;
    text-align: left;
    height: 100px;
    height: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.text-poli-slike p:hover{
    text-decoration: underline;
    cursor: pointer;
}
.text-poli-slike p{
    margin: 0;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.text-poli-slike a, .text-poli-slike1 a{
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600 !important;
}
.najveca-slika{
    cursor: pointer;
    grid-column: 2/4;
    grid-row: 1/3;
    height: 50%;
    position: relative;
    overflow: hidden;
    /*background: url("img/yawn.jpg") no-repeat;
    background-size:cover;*/
}
.najveca-slika img, .najveca-slika11 img{
    width: 100%;
    height: 100%;
    transition-duration: 0.5s;
}
.najveca-slika img:hover, .najveca-slika11 img:hover{
    transform: scale(1.2);
}
.najveca-slika-tekst{
    position: absolute;
    text-align: left;
    margin-left: 15px;
    margin-right: 250px;
    bottom:10%;
}
.manja1{
    cursor: pointer;
    position: relative;
    grid-row: 2/3;
    grid-column:2/3;
    height: 90%;
    background: white;
    overflow: hidden;
    color: black;
}
.hidden1{
    display: none;
}
.manja1-slika, .manja2-slika, .manja11-slika, .manja21-slika{
    width: 100%;
    height: 50%;
    overflow: hidden;
    /*background: url("img/baseball2.jpg") no-repeat;
    background-size: cover;*/
}
.manja1-slika img, .manja2-slika img, .manja11-slika img, .manja21-slika img{
    width: 100%;
    height: 100%;
    transition: 0.5s;
}
.manja1-slika img:hover, .manja2-slika img:hover, .manja11-slika img:hover, .manja21-slika img:hover{
    transform: scale(1.2);
}
.manja1-tekst, .manja2-tekst,.manja11-tekst, .manja21-tekst{
    top:55%;
    position: absolute;
    text-align: left;
    margin-left: 20px;
}
.manja2{
    cursor: pointer;
    position: relative;
    grid-row: 2/3;
    grid-column:3/4;
    height: 90%;
    background: white;
    color:black;
}
.z{
    font-size: 30px !important;
}
.see-more3{
    font-size: 16px !important; 
}
.trans-dio{
    text-align: right;
    width: auto;
}
.trans-dio a{
    text-decoration:none;
    color:white;
    border-bottom: 2px solid var(--zuta-boja);
    position: relative;
    z-index: 2;
}

.trans-box{
    transform: translateY(-20px);
    width: 96px;
    height: 25px;
    transition:0.5s;
}
.zuti-line{
    width: 50px;
    height: 3px;
    margin-bottom: 20px;
    background-color: var(--zuta-boja);
}
.border-bot{
    border-bottom: 5px solid var(--zuta-boja);
}
.only{
    color: var(--zuta-boja);
}



/* RESIZE */
@media only screen and (max-width: 1020px) {
    .latest-stories{
        width: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 1fr 1fr 1fr;
        height: auto !important;
    }
    .najveca-slika{
        grid-column: 1/4;
        margin: 40px;
        margin-left: 4%;
        height: 40%;
    }
    .manja1{
        margin-top: -20%;
        margin-left: 6%;
        grid-column: 1/3;
        width: 70%;
        height: 80%;
    }
    .manja2{
        height: 80% !important;
        margin-top: -20%;
        transform: translate(150px);
        width: 69% !important;
        grid-column: 2/4 !important;
    }
    .td-picks{
        grid-row: 3/5 !important;
        grid-column: 1/4 !important;
        height: 450px;
        margin-top: -200px;
        margin-left: 50px;
    }
    .td-picks-lista{
        display: flex;
        flex-wrap: wrap;
        width: 1000px;
    }
    .td-picks-lista li{
        width:400px;
    }
    .see-more{
        width: 88px !important;
        margin-left: 300px;
    }
}
@media only screen and (max-width: 840px) {
    .manja2{
        transform: translateX(115px);
    }
}
</style>