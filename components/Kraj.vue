<template>
<div>
  <div class="kraj">
        <div class="last-cont">
        <ul class="prva-lista">
            <h5>LEGAL</h5>
            <li class="el"><a href="#">Terms of Use</a></li>
            <li class="el"><a href="#">Privacy Policy</a></li>
            <li class="el"><a href="#">Interset-Based Ads</a></li>
            <li class="el"><a href="#">EU Privacy Rights</a></li>
            <li class="el"><a href="#">Cookie Policy</a></li>
            <li class="el"><a href="#"> Privacy Preferences</a></li>
        </ul>
        <ul class="prva-lista lista2">
            <h5>OUR SITES</h5>
            <li class="el"><a href="#">Nat Geo Home</a></li>
            <li class="el"><a href="#">Attend a Live Event</a></li>
            <li class="el"><a href="#">Book a Trip</a></li>
            <li class="el"><a href="#">Buy Maps</a></li>
            <li class="el"><a href="#">Inspire Your Kids</a></li>
            <li class="el"><a href="#">Shop Nat Geo</a></li>
            <li class="el"><a href="#">Visit D.C.Museum</a></li>
            <li class="el"><a href="#">Watch TV</a></li>
            <li class="el"><a href="#">Learn About Our Impact</a></li>
            <li class="el"><a href="#">Support our Mission</a></li>
            <li class="el"><a href="#">Nat Geo Partners</a></li>
            <li class="el"><a href="#">Masthead</a></li>
            <li class="el"><a href="#">Press Room</a></li>
            <li class="el"><a href="#">Advertise With Us</a></li>
        </ul>
        <ul class="prva-lista">
            <h5>JOIN US</h5>
            <li class="el"><a href="#">Subscribe</a></li>
            <li class="el"><a href="#">Customer Service</a></li>
            <li class="el"><a href="#">Renew Subscription</a></li>
            <li class="el"><a href="#">Manage Your Subscription</a></li>
            <li class="el"><a href="#">Work at Nat Geo</a></li>
            <li class="el"><a href="#">Sign up for Our Newsletters</a></li>
            <li class="el"><a href="#">Contribute to Protect the Planet</a></li>
            <li class="el"><a href="#">Pitch a Story</a></li>
        </ul>
        <ul class="prva-lista">
            <h5>FOLLOW US</h5>
        <div class="socials">
            <li class="el"><a href="#"><img src="../assets/img/facebook.jpg" alt="social"></a></li>
            <li class="el"><a href="#"><img src="../assets/img/instagram.jpg" alt="social"></a></li>
            <li class="el"><a href="#"><img  src="../assets/img/twitter.jpg" alt="social"></a></li>
        </div>
            <li class="el"><a href="#">United States (Change)</a></li>
        </ul>
        </div>
    </div>
    <div class="cpy">
        <img src="../assets/img/National-Geographic-logo-bl.jpg" alt="slika" id="slika" width="180px" height="70px">
        <p>Copyright © 1996-2015 National Geographic SocietyCopyright © 2015-2021 National Geographic Partners, LLC. All rights reserved</p>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style>
.kraj{
    height: 700px;
    width: 100%;
    background: black;
}
.kraj ul{
    transform: translateY(-30px);
    margin: 30px;
    list-style: none;
    color:white;
}
.last-cont{
    padding-top: 40px;
    transform: translateX(-50px);
    width: 90% !important;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}
.el a{
    font-size: 12px;
    text-decoration: none;
    color: white;
}
.el{
    margin: 10px;
}
.socials{
    display: flex;
}
.cpy{
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    background:black;
    color: grey;
    border-top:1px solid white;
}
.cpy img{
    margin-top: 20px;
}
.cpy p{
    margin-top: 40px;
}
.socials img{
    width: 25px;
    height: 25px;
}
@media only screen and (max-width: 780px){
    .kraj{
        height: 900px;
    }
    .last-cont{
        width: 678px;
        flex-wrap: wrap;
    }
    .lista2{
        padding-left: 120px;
    }
}
@media only screen and (max-width: 600px){
    .prva-lista{
        width: 20%;
    }
    .kraj{
        height: 1070px;
    }
    .lista2{
        padding-left: 20px;
    }
    .cpy{
        font-size: 12px;
    }
}
@media only screen and (max-width: 360px){
    .kraj{
        height: 200vh;
        overflow: hidden;
    }
    .prva-lista li{
        width: 200px;
    }
    .cpy p{
        font-size: 8px;
        width: 35%;
    }
}
</style>