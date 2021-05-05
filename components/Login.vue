<style scoped>
.login-dio{
    position:absolute;
    width: 400px;
    height: 300px;
    background:beige;
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    position: relative;
    }
.login-dio img{
    min-width: 100px;
    height: 100px;
    background: green;
    margin: 10px;
}
.ea{
    width: 70%;
    padding: 10px;
}
.cont{
    width: 70%;
    padding: 10px;
    background: yellow;
}
hr{
    width:200px
}
.hm{
    display: flex;
    font-size: 14px;
}
.hm span{
    font-weight: 600;
    padding-left: 2px;
}
.iks{
    position: absolute;
    width: 25px;
    height: 25px;
    top:2%;
    right: 2%;
    cursor: pointer;
}
.p-dija{
    position: absolute;
    top: -30%;
    left: -40%;
    width: 25px;
    height: 25px;
    border-right: 3px solid black;
    transform: rotateZ(45deg);
}
.d-dija{
    position: absolute;
    bottom: -30%;
    left: -40%;
    width: 25px;
    height: 25px;
    border-right: 3px solid black;
    transform: rotateZ(-45deg);
}
.hidden{
    display: none;
}
</style>
<template>
    <div class="login-dio">
      <div class="iks" @click="$emit('disable-lform')">
          <div class="p-dija"></div>
          <div class="d-dija"></div>
      </div>
      <img src="" alt="ntg">
        <hr>
        <h4>Enter Your Email Address</h4>
        <input type="email" placeholder="Email Address" class="ea"><br>
        <button class="cont">CONTINUE</button>
        <div class="hm">
            <p>Need help signin in?</p><span>Visit our Support Center.</span>
        </div>
  </div>
</template>

<script>
export default {

}
</script>