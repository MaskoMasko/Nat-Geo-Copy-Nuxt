<template>
      <div class="sign-up">
        <div class="sign-l">
        <h1>THE BEST OF NATIONAL GEOGRAPHIC DELIVERED TO YOUR INBOX</h1>
        <h5>Sign up for more inspiring photos, stories, and special offers from National Geographic.</h5>
        </div>
        <a href="#" class="yel-btn oth2">SIGN UP</a>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.sign-up{
    height: 302px;
    width: 100%;
    background: url("../assets/img/sign-bg.jpg");
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column ;
    color: white;
}
.sign-up h1, a{
    letter-spacing: 2px;
    margin: 0;
    justify-self: center;
}
.sign-up h5{
    padding: 20px;
    font-weight: 500;
    font-size: 20px;
}
.sign-l{
    text-align: center;
    width: 90%;
}
.yel-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 50px;
    background:var(--zuta-boja);
    font-weight: 700;
    text-decoration: none;
    color: black;
}
.yel-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 50px;
    background:var(--zuta-boja);
    font-weight: 700;
    text-decoration: none;
    color: black;
}
.oth2{
    color: black;
    position: relative;
}
.oth2::before{
    content: "";
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition:.2s ease-in-out;
}
.oth2{
    z-index: 1;
}
.oth2:hover::before{
    transform: scaleX(1);
}
.sign-up a{
    background: yellow;
}
</style>