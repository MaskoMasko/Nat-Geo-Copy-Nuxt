<template>
<div>
    <nav class="navbar">
        <div>
            <NuxtLink to="/"><img src="../assets/img/main-logo.png" alt="slika" id="slika" width="180px" height="70px"></NuxtLink>
        </div>
        <div class="nav-menu">
            <ul class="nav-lista">
                <li class="sb lg ovadva"><a href="#" @click="$emit('toggle-login-form')">LOGIN</a></li>
                <li class="cry"><a href="#"><img src="../assets/img/search-icon.png" alt="" height="20px" width="20px"></a></li>
                <li class="cry"><a class="nista"><NuxtLink class="renew zut" to="/renew">Renew</NuxtLink></a></li>
                <li class="sb sbs sb2 ovadva"><span class="just"><a class="subscribe zut2" href="#">SUBSCRIBE</a></span></li>
                <li><div class="drp" @click="$emit('toggle-dropdown')"><a href="#"><p class="cry mn">MENU</p><div class="dropdown-icon"><div class="strelica2 str"></div><div class="strelica1 str"></div></div></a></div></li>
                <li><div class="dropdown-icon dmoe hidden1" @click="$emit('toggle-dropdown')"><div class="strelica2 str"></div><div class="strelica1 str"></div></div></li>
            </ul>
        </div>
    </nav>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#slika{
    transform: translateY(-10px);
    margin-left: -15px;
}
.navbar{
    font-family: GeoBrandBold,CenturyGothic,AppleGothic,Gill Sans,Gill Sans MT,sans-serif;
    font-weight:400;
    position:fixed;
    z-index: 10;
    height: 50px;
    width: 100%;
    background: white;
    transition: 0.5s;
    overflow: hidden;
    display: flex;
    font-weight: 600;
    font-size: 14px;
}
.nav-menu{
    margin-right: -10px;
    width: 100%;
}
.nav-lista{
    max-width: 500px;
    display: flex;
    list-style: none;
    float: right;
    justify-content: space-evenly;
}
.nav-lista li{
    padding-top:15px
}
.nav-lista a{
    text-decoration: none;
    padding:15px;
    color: black;
    font-size: 13px;
    letter-spacing: 2px;
}
.dropdown-icon{
    position: absolute;
    width: 25px;
    height: 50px;
    background: white;
    right: 2.7%;
    top: 0%;
}
.dropdown-icon:hover{
    cursor: pointer;
}
.drp{
    width:100px;
}
.str{
    width: 7px;
    height: 7px;
    background: white;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotateZ(-45deg);
}
.strelica1{
    position: absolute;
    right: 20%;
    top:30%
}
.strelica2{
    position: absolute;
    right: 20%;
    top:40%
}
.just{
    background-color: black;
    padding: 25px 0px;
    position: relative;
}
.subscribe{
    position: absolute;
    top: 0;
    left: 0;
    color: white !important;
    padding-top: 25px !important;
    padding-bottom: 25px !important;
    letter-spacing: 2px;
    font-weight: 550;
    z-index: 0;
}
.nista{
    padding: 0 !important;
    margin: 0 !important;
}
.renew{
    cursor: pointer;
    font-weight: 300;
    padding: 0 !important;
    margin: 10px;
    font-size: 16px !important;
    text-decoration: underline 3px rgb(255, 204, 0)!important;
    height: min-content;
}
.zut{
    color: white;
    position: relative;
}
.zut::before{
    content: "";
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: yellow;
    z-index: -1;
    transform: scaleY(0);
    transform-origin: bottom;
    transition:.2s ease-in-out;
}
.zut{
    z-index: 1;
    transition: color .2s ease-in-out;
}
.zut:hover::before{
    transform: scaleY(1);
}
.zut:hover{
    color:black;
}
.zut2{
    color: white;
    position: relative;
}
.zut2::before{
    content: "";
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: yellow;
    transform: scaleX(0);
    transform-origin: left;
    transition:.2s ease-in-out;
}
.zut2{
    z-index: 1;
    transition: color .2s ease-in-out;
}
.zut2:hover::before{
    transform: scaleX(1);
}
.zut2:hover{
    color:black !important;
}
.mn{
    transform: translateY(-27px);
    padding-left: 15px;
}
@media only screen and (max-width: 780px){
    .cry{
        display: none;
    }
    .sb{
        transform: translateX(65px);
    }

}
@media only screen and (max-width: 530px){
    .nav-lista{
        width:110%;
    }
    .sbs{
        transform: translateY(-1px);
        width: 200px;
    }
    .sb2{
        margin-left: 50px;
    }
    .lg{
        margin-right: 20px;
    }
    .dropdown-icon{
        transform: translateX(-160px);
    }
}
@media only screen and (max-width: 360px){
    .navbar img{
        display: none;
    }
    .sb{
        z-index: 10;
    }
    .nav-lista li{
        transform: translateX(70px);
    }
    .dmoe{
        transform: translateX(-90px);
    }
}
</style>