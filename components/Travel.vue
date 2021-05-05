<template>
  <div class="latest-stories1 drugi">
        <div class="section1 yas">
        <div class="naslov">
            <h1>TRAVEL</h1>
            <div class="zuti-line"></div>
        </div>
        <div class="stories yas">
                <div class="sve sveopt td-picks1">
                <h1>LATEST STORIES </h1>
            <ul class="td-picks1-lista">
                <li><img src="../assets/img/mountain.jpg"> <div class="text-poli-slike"><p>TRAVEL</p><a href="#">Where to find warrior queens, fairies, and castles in Scotland</a></div></li>
                <li><img src="../assets/img/stacking-stones.jpg"> <div class="text-poli-slike1"><p>TRAVEL</p><a href="#">Why do people stack stones in the wild</a></div></li>
                <li><img src="../assets/img/fossil.jpg"> <div class="text-poli-slike1"><p>TRAVEL</p><a href="#">The forgotten fossil hunter who transformed Britain's Jurrastic Coast</a></div></li>
                <li class="manjeti"><img src="../assets/img/ski.jpg"> <div class="text-poli-slike1"><p>TRAVEL</p><a href="#">How the pandemic create two wildly different ski seasons...</a></div></li>
                <li class="manjeti"><img src="../assets/img/villa.jpg"> <div class="text-poli-slike1"><p>TRAVEL</p><a href="#">Vulcano tourism is booming, but is it too risky?</a></div></li>
            </ul>
                <a href="#" class="see-more see-more1 zut zutfs">SEE MORE</a>
            </div>
            <div class="najveca-slika11">
                <img src="../assets/img/whale.jpg" alt="">
                <div class="najveca-slika-tekst">
                    <h1>Explore Alaska's Wild Wonder's</h1>
                    <h6>READ</h6><!--onaj dio uz read fali-->
                </div>
            </div>

            <div class="manja11">
                <div class="manja11-slika border-bot">
                    <img src="../assets/img/seal.jpg" alt="">
                </div>
                <div class="manja11-tekst">
                    <h3>Experience the Magic of the Galapagos</h3>
                    <h6>BOOK A TRIP</h6><!--onaj dio uz read fali-->
                </div>
            </div>
            <div class="manja21">
                <div class="manja21-slika border-bot">
                    <img src="../assets/img/np.jpg" alt="">
                </div>
                <div class="manja21-tekst">
                    <p>ENVIRONMENT</p>
                    <h3>Explore America's National Parks</h3>
                    <h6>SEE TRIP</h6><!--onaj dio uz read fali-->
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.latest-stories1{
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
}
.manjitxt{
    font-size: 20px;
    display: flex;
    justify-self: center;
}
.naslov p{
    margin-top: 0px;
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
.sve li{
    margin:20px 20px 20px 0px;
}
.stories  p{
    font-size: 16px;
}
.td-picks, .td-picks1{
    transform: translateY(-60px);
    grid-column-start:1;
    grid-column-end:2;
    grid-row-start: 1;
    grid-row-end: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    list-style: none;
    text-align: left;
}
.td-picks h1{
    text-align: left;
    letter-spacing: 3px;
    width: 320px;
}
.td-picks li, .td-picks1 li{
    display: flex;
}
.td-picks li:hover a, .td-picks1 li:hover a{
    cursor: pointer;
    text-decoration: underline;
}
.td-picks li:hover img, .td-picks1 li:hover img{
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
    justify-content: space-around;
}
.text-poli-slike p:hover{
    text-decoration: underline;
    cursor: pointer;
}
.text-poli-slike1 a{
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600 !important;
}
.najveca-slika11 img{
    width: 100%;
    height: 100%;
    transition-duration: 0.5s;
}
.najveca-slika11 img:hover{
    transform: scale(1.2);
}
.hidden1{
    display: none;
}
.manja11-slika, .manja21-slika{
    width: 100%;
    height: 50%;
    overflow: hidden;
    /*background: url("img/baseball2.jpg") no-repeat;
    background-size: cover;*/
}
.manja11-slika img, .manja21-slika img{
    width: 100%;
    height: 100%;
    transition: 0.5s;
}
.manja11-slika img:hover, .manja21-slika img:hover{
    transform: scale(1.2);
}
.manja11-tekst, .manja21-tekst{
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
.drugi{
    background: url("../assets/img/travel.jpg");
    background-size: cover;
    position: relative;
}
.drugi::after{
    content:'';
    position:absolute;
    left:0;
    top:0;
    height:100%;
    width:100%;
    background:linear-gradient(rgba(70, 67, 67, 0.7), black);
  }
.yas{
    z-index: 2;
    background-color: transparent;
}
.text-poli-slike1 p:hover{
    text-decoration: underline;
    cursor: pointer;
}
.td-picks1{
    grid-column-start:3;
    grid-column-end:4;
    grid-row-start: 1;
    grid-row-end: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    list-style: none;
}
.td-picks1 li{
    display: flex;
}
.td-picks1 h1{
    width: 100px;
    border-left: 4px solid var(--zuta-boja);
    text-align: left;
    padding-left: 5px;
}
.prviz{
    transform: translateY(30px);
    border: none !important;
    width: 300px !important;
}
.td-picks1 li a{
    text-decoration: none;
    color: white;
    font-weight: bold;
}
.td-picks1 img{
    height: 100px;
    width: 100px;
}
.najveca-slika11{
    cursor: pointer;
    grid-column: 1/3;
    grid-row: 1/3;
    height: 50%;
    position: relative;
    overflow: hidden;
}
.manja11{
    cursor: pointer;
    position: relative;
    grid-row: 2/3;
    grid-column:2/3;
    height: 90%;
    background: white;
    overflow: hidden;
    color: black;
}
.manja21{
    cursor: pointer;
    position: relative;
    grid-row: 2/3;
    grid-column:1/2;
    background: white;
    height: 90%;
    color: black;
}
.zuti-line{
    width: 50px;
    height: 3px;
    margin-bottom: 20px;
    background-color: var(--zuta-boja);
}
@media only screen and (max-width: 1020px) {
    .latest-stories1{
        height: 2000px;
    }
    .najveca-slika11{
        grid-column: 1/6;
        margin-left: 20px;
        margin-right: 20px;
        height: 550px;
    }
    .manja11{
        width: 170%;
        margin-left: 205px;
        height: 550px;
        transform: translateY(170px);
    }
    .manja21{
        transform: translateY(170px);
        height: 550px;
        width: 180%;
        margin-left: 20px;
    }
    .td-picks1{
        grid-row: 3/5 !important;
        grid-column: 1/4 !important;
        transform: translateY(100px);
    }
    .td-picks1-lista{
        display: flex;
        flex-wrap: wrap;
        width: 1000px;
    }
    .td-picks1 h1{
        margin-left: 40px;
    }
}
@media only screen and (max-width: 760px) {
    .latest-stories1{
        height: 2500px;
    }
    .najveca-slika11{
        width: 61.5%;
    }
    .manja21{
        grid-row: 1/2;
        transform: translateY(570px)  scale(.95);
        width: 680px ;
        height: 500px;
    }
    .manja21-slika{
        height: 70%;
    }
    .manja11{
        grid-row: 2/3;
        width: 330%;
        height: 500px;
        transform: translate(-930px, 400px) scale(.97);
    }
    .td-picks1{
        transform: translateY(200px);
    }
    .td-picks1-lista li{
        width: 350px;
    }
}
@media only screen and (max-width: 700px) {
    .manja21{
        width: 600px ;
    }
    .manja11{
        width: 590px ;
        margin-left: 285px;
    }
    .najveca-slika11{
        width: 35.5%;
    }
    .td-picks1-lista{
        flex-direction: column;
    }
    .latest-stories1{
        height: 3000px !important;
    }
}
@media only screen and (max-width: 650px) {
    .najveca-slika11{
        width: 500px !important;
    }
    .manja21{
        width: 500px !important;
        margin-top: -160px;
    }
    .manja11{
        width: 500px ;
        margin-top: -230px;
        margin-left: 380px !important;
    }    
    .najveca-slika11{
        width: 29%;
        height: 400px;
    }
    .td-picks1-lista li{
        margin-top: 0%;
    }
    .sve{
        transform: translateY(-130px);
    }
}
@media only screen and (max-width: 501px) {
    .manja21{
        width: 460px !important;
        margin-left: 10px;
    }
    .najveca-slika11{
        width: 440px !important;
    }
    .manja11{
        width: 460px;
        margin-left: 420px !important;
        margin-top: -280px;
    }
    .see-more1{
        margin-left: 100px;
    }
}
@media only screen and (max-width: 360px) {
    .yas{
        height: 100px !important;
    }
    .najveca-slika11{
        width: 330px !important;
        height: 300px;
    }
    .manja21{
        width: 345px !important;
        height: 400px;
        margin-top: -250px;
        margin-left: 10px;
    }
   .manja11{
        width: 345px !important;
        height: 400px;
        margin-top: -450px;
        margin-left: 535px !important;
    }
    .sveopt{
        transform: translateY(-400px);
    }
}
</style>
