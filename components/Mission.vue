<template>
      <div class="mission-div">
        <div class="mission-naslov">
            <h1>THE NATIONAL GEOGRAPHIC SOCIETY MISSION</h1>
            <div class="zuti-line"></div>
        </div>
        <div class="mission-section">
            <img src="../assets/img/diver.jpg" alt="">
        <div class="mission-tekst">
            <h1>National Geographic's nonprofit work</h1>
            <p>The National Geographic's Society invests in innovative leaders in science, exloration, education and storytelling to illuminate and protect the wonder of our world.</p>
            <button class="play-ball-btn oth oth3">LEARN MORE</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.mission-div{
    height: 750px;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
}
.mission-naslov{
    text-align: center; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.mission-section{
    display: flex;
    margin: 50px;
}
.mission-section img{
    width: 500px;
    height: 400px;
}
.mission-tekst{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    margin-left:50px;
    font-size: 18px;
}
.mission-tekst h1{
    font-size: 30px;
}
.mission-tekst p{
    font-weight: 100;
    margin-bottom: 2rem;
}
@media only screen and (max-width: 962px){
    .mission-section img{
        transform: scale(0.8);
    }
    .mission-tekst{
        transform: translateX(-70px);
        width: 40%;
    }
    .mission-naslov{
        width: 80%;
    }
}
@media only screen and (max-width: 780px){
    .mission-div{
        height: 1000px;
    }
    .mission-section{
        display: flex;
        flex-direction: column;
    }
    .mission-tekst{
        height: 260px;
        width: 95%;
    }
    .oth3{
        width: 110%;
        padding: 15px;
    }
    .mission-section img{
        transform: scale(1.2);
        margin-left: 20px;
        margin-bottom: 30px;
    }
}
@media only screen and (max-width: 600px){
    .mission-tekst h1{
        font-size: 26px;
    }
    .mission-tekst{
        padding-left: 50px;
    }
    .mission-tekst p{
        width: 95%;
    }
}
</style>