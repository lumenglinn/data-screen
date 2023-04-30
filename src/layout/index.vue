

<template>
  <div class="layout">
    <div class="head">
      <div class="logo"></div>
      <div class="company"></div>
    </div>
    <div class="content">
      <div class="content-left">
        <div class="wrap">
          <div class="wrap-title">
            车位使用及入区率
          </div>
          <div class="wrap-cont wrap-1"></div>
        </div>
        <div class="wrap">
          <div class="wrap-title">

          </div>
          <div class="wrap-cont wrap-2"></div>
        </div>
        <div class="wrap">
          <div class="wrap-title">

          </div>
          <div class="wrap-cont wrap-3"></div>
        </div>
      </div>
      <div class="content-right">
        <div class="wrap">
          <div class="wrap-title">

          </div>
          <div class="wrap-cont wrap-4"></div>
        </div>
        <div class="wrap">
          <div class="wrap-title">

          </div>
          <div class="wrap-cont wrap-5"></div>
        </div>
        <div class="wrap">
          <div class="wrap-title">

          </div>
          <div class="wrap-cont wrap-6"></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <img class="guide-icon" src="../assets/layout/guide-home.png" alt="">
      <img class="guide-icon" src="../assets/layout/guide-car.png" alt="">
      <img class="guide-icon" src="../assets/layout/guide-people.png" alt="">
      <img class="guide-icon" src="../assets/layout/guide-quality.png" alt="">
      <img class="guide-icon" src="../assets/layout/guide-parking.png" alt="">
      <img class="guide-icon" src="../assets/layout/guide-commerce.png" alt="">
      <img class="guide-icon" src="../assets/layout/guide-energy.png" alt="">
      <img class="guide-icon" src="../assets/layout/guide-monitor.png" alt="">
      <img class="guide-icon" src="../assets/layout/guide-equipment.png" alt="">
      <img class="guide-icon" src="../assets/layout/guide-toilet.png" alt="">
      <img class="guide-icon" src="../assets/layout/guide-light.png" alt="">
      <img class="guide-icon" src="../assets/layout/guide-broadcast.png" alt="">
      <img class="guide-icon" src="../assets/layout/guide-set.png" alt="">
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  background: url(../assets/layout/bg.jpg) no-repeat center 0;
  background-size: cover;

  .head {
    width: 1880px;
    height: 88px;
    margin: 0 auto;
    background: url(../assets/layout/head.png);
    background-size: 100%;

    .logo {
      width: 247px;
      height: 42px;
      position: absolute;
      top: 20px;
      left: 203px;
      background: url(../assets/layout/logo.png);
      background-size: 100%;

    }

    .company {
      width: 555px;
      height: 40px;
      position: absolute;
      top: 19px;
      left: 693px;
      background: url(../assets/layout/company.png) no-repeat center center;
      background-size: 100%;
    }
  }

  .content {
    .wrap {
      margin-top: 15px;
    }

    .wrap-title {
      display: block;
      position: relative;
      width: 484px;
      height: 29px;
      line-height: 29px;
      padding-left: 31px;
      color: #fff;
      font-size: 18px;
      background-image: linear-gradient(270deg, rgba(92, 188, 218, 0.00) 17%, #5CBCDA 100%);


    }

    .wrap-title::before {
      content: '';
      width: 9px;
      height: 18px;
      position: absolute;
      left: 15px;
      top: 5px;
      background-color: #fff;
    }

    .wrap-cont {
      width: 484px;
      height: 244px;
      margin-top: 15px;
      opacity: 0.25;
      border: 4px solid rgba(92, 188, 218, 1);
      box-shadow: inset 0px 0px 114px 6px rgba(92, 188, 218, 1);
      border-radius: 14px;
    }

    .wrap1 {
      height: 244px;
    }

    .content-left {
      position: absolute;
      left: 21px;
      top: 183px;
      width: 484px;
      // height: 925px;
    }

    .content-right {
      position: absolute;
      right: 21px;
      top: 198px;
      width: 484px;
      height: 925px;
    }
  }

  .footer {
    width: 557px;
    height: 52px;
    position: absolute;
    bottom: 0px;
    left: 681px;
    background: rgba(26, 75, 83, 0.48);
    border: 1px solid rgba(0, 253, 254, 0.51);
    box-shadow: inset 0px 0px 12px 6px rgba(92, 188, 218, 0.5);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .guide-icon {
      width: 24px;
      height: 24px;

    }
  }
}
</style>
