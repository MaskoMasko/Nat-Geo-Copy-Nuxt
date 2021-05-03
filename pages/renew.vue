
<template>
<div class="renew-dio">
  <div class="renew-nav">
      <div class="img-conta">
          <img src="" alt="">
      </div>
  </div>
  <div class="zacnt">
  <div class="forms-dio">
      <div class="taj">
      <p class="first">Login to manage your National Geographic magazine account and gifts.</p>
      <span>For International National Geographic magazine subscribers only. If you are a subscriber in the U.S. or Canada, please click here.</span>
      <input type="email" name="" id="" class="nisto bud em" placeholder="Email">
      <input type="password" name="" id="" class="nisto bud" placeholder="Password">
      <div class="yes"><input type="checkbox" name="" id="" class="nisto bud-lol"><span>Remember me?</span></div>
      <hr>
      <p class="fyp">Forgot your password?</p>
      <button type="submit" class="nisto sg">SIGN IN</button>
      <button type="submit" class="nisto rn">REGISTER AS A NEW USER</button>
      <p class="pn">Please note, we’re working on combining all accounts into a single login, but in the meantime, you'll need to create a new account to access our customer care website.</p>
      </div>
  </div>
  </div>
  <div class="renew-kraj">
      <div class="prvi-kraj">
        <div class="ngo">
            <h4>National Geographic Offers</h4>
            <hr>
            <ul>
                <li>New Subscriptions</li>
                <li>Gift Subscriptions</li>
            </ul>
        </div>
        <div class="cs">
            <h4>Customer Service</h4>
            <hr>
            <ul>
                <li>Important Customer Alerts</li>
                <li>Frequently Asked Querstions</li>
                <li>Email Customer Service</li>
            </ul>
        </div>
        <div class="ngp">
            <h4>National Geographic Publications</h4>
            <hr>
            <ul>
                <li>National Geographic History</li>
                <li>National Geographic Kids</li>
                <li>National Geographic Kids</li>
                <li>National Geographic Little Kids</li>
                <li>National Geographic Traveller</li>
            </ul>
        </div>
      </div>
        <div class="dr-kraj">
        <div class="spr">
            <p>Copyright © 2018 National Geographic LLC. All rights reserved.</p>
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
            <a href="">neki@email.com</a>
        </div>
        <div class="socials">
            <hr>
            <h4>Follow</h4>
            <img src="" alt="social">
            <img src="" alt="social">
            <img src="" alt="social">
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
html{
    width: 100%;
    overflow-x: hidden;
}
.renew-dio{
    width: 100%;
    height: 1200px;
    background-color: whitesmoke;
}
.renew-nav{
    width: 100%;
    height: 75px;
    background: black;
}
.img-conta{
    width: 200px;
    height: 100%;
}
.img-conta img{
    width: 100%;
    height: 100%;
}
.zacnt{
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.forms-dio{
    width: 500px;
    height: 600px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}
.nisto{
    border: 1px solid black;
    width: 80%;
}
.first{
    font-size: 16px;
    font-weight: 600;
}
.taj{
    width: 80%;
}
.bud{
    padding: 15px;
    margin: 10px;
}
.bud-lol{
    width: 30px;
    margin-left: -20px;
}
.yes{
    display: flex;
    margin-left: 40px;
    text-align: center;
}
.yes span{
    transform: translateY(-4px);
}
hr{
    margin: 20px;
}
.bud:focus{
    outline: 2px solid aqua;
}
.fyp{
    color: grey;
    padding-bottom: 10px;
}
.fyp:hover{
    cursor: pointer;
    text-decoration: underline;
}
.sg{
    background: yellow;
    border: none;
    padding: 15px;
    margin: 10px;
}
.rn{
    background: black;
    color:white;
    border: none;
    padding: 15px;
    margin: 10px;
}
.pn{
    font-weight: 100;
    font-size: 15px;
    padding: 20px;
}
.renew-kraj{
    position: absolute;
    width: 100%;
    background: rgb(218, 217, 217);
    border-top:1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.prvi-kraj{
    width: 900px;
    height: 200px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
}
.ngo{
    width: 350px;
    height: 200px;
}
.cs{
    width: 350px;
    height: 200px;
}
.ngp{
    width: 350px;
    height: 200px;
}
.ngp h4, .cs h4, .ngo h4{
    margin-left: 20px;
}
.dr-kraj{
    width: 900px;
    height: 200px;
    margin-top: 50px;
    display: flex;
}
.spr{
    width: 600px;
    height: 200px;
    margin-left: auto;
}
.spr a{
    text-decoration: none;
    color: black;
}
.spr a:hover{
    text-decoration: underline;
}
.socials{
    display: flex;
    margin-right: 70px;
    width: 200px;
}
.socials h4{
    font-size: 20px;
}
@media only screen and (max-width:1100px){
    .zacnt{
        margin:30px;
        margin-left: 10px;
    }
    .renew-kraj{
        height: 1000px;
    }
    .prvi-kraj{
        width: 200px;
    }
    .prvi-kraj, .dr-kraj{
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
    .dr-kraj{
        margin-top: 200px;
        text-align: center;
        align-items: center;
    }
    .socials{
        flex-direction: column;
        margin: 0%;
    }
    .spr{
        margin: 0%;
    }
    .prvi-kraj ul{
        padding: 0%;
        list-style-type: none;
    }
}
@media only screen and (max-width:595px){
    .zacnt{
        transform: scale(.8);
        margin-left: -10px;
    }
    .em{
        margin-top:30px;
    }
    .pn{
        margin-top: 0px;
    }
}
@media only screen and (max-width:370px){
    .zacnt{
        height: 600px;
    }
    .forms-dio{
        margin-left: -25px;
        height: 700px;
    }
    .renew-kraj{
        width: 320px;
    }
    .spr{
        width: 30%;
    }
}
</style>
