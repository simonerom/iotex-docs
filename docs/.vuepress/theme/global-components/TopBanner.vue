<template>
  <div class="banner">
    <div class="banner-text">
      <a href="https://halo.iotex.io" target="_blank">
        <div class="subtitle can-hide">Get your next project funded »</div>
        <b>Halo Grants Program is now</b>
        <div class="neon">open</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">

@media (max-width: $MQMobile)
  .can-hide
    display none

.banner-text {
  margin: auto;
  margin-top .1rem
  text-align center
}

.subtitle
  display inline

.banner
  position: fixed;
  top: 0px;
  left: 0rem;
  right 0
  z-index 20
  width: 1278;
  height: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5)
  background: rgb(33,0,36);
  background: linear-gradient(90deg, rgba(33,0,36,1) 3%, rgba(9,100,121,1) 40%, rgba(115,201,145,1) 100%);
  .neon
    font-weight: 400;
    font-style: italic;
    font-size .85rem
    color: #fff;
    padding: 3px 5px;
    margin-left .2rem
    margin-right .3rem
    display inline
    border: 1px solid #fff;
    border-radius: 6px;
    text-transform: uppercase;
    text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 8px #ff0080, 0 0 12px #ff0080, 0 0 18px #ff0080, 0 0 25px #ff0080, 0 0 35px #ff0080;
  a
    font-weight 300
    color #cafff7
    display inline
    margin-left 1rem
  a::after
    margin-left: .3rem
    //content: "\203A";
</style>
