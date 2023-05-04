<template>
  <div class="layout">
  <!-- <div class="head">
      <div class="logo"></div>
      <div class="company"></div>
    </div>
    <div class="top-handle-wrap">
      <div class="handle-box">
        <div class="handle-item">AB区</div>
        <div class="handle-item active">A区</div>
        <div class="handle-item">B区</div>
      </div>
      <div class="handle-box">
        <div class="handle-item">内场</div>
        <div class="handle-item active">外场</div>
        </div>
      </div> -->
    <div class="page-handle">
      <img class="page-handle-item" src="../assets/layout/right-short.png" @click="exitFullscreen" alt="" />
      <img class="page-handle-item" src="../assets/layout/right-full.png" @click="fullScreen" alt="" />
      <img class="page-handle-item" src="../assets/layout/right-close.png" @click="closeWindow" alt="" />
    </div>
    <div class="date-wrap">
      <div class="date-wrap-left">
        <div class="date">2023 - 04 - 17</div>
        <div class="week">周一 下午<span class="time">16:00</span>
        </div>
      </div>
      <div class="date-wrap-right">
        <div class="weather"><span class="f-w-400">32</span>优</div>
        <div class="temperature ">20°C<span class="temp">4/17°C</span></div>
      </div>
    </div>
    <slot></slot>
    <div class="footer">
      <div class="guide-handle"></div>
      <img class="guide-icon" :src="item.iconUrl" v-for="(item) in pageList" :key="item.page" alt="" />
    </div>
  </div>
</template>
<script setup>
import { fullScreen, exitFullscreen, closeWindow } from '@/common/utils'
import homeIcon from '../assets/layout/guide-home.png';
import carIcon from '../assets/layout/guide-car.png';
import peopleIcon from '../assets/layout/guide-people.png';
import qualityIcon from '../assets/layout/guide-quality.png';
import parkingIcon from '../assets/layout/guide-parking.png';
import commerceIcon from '../assets/layout/guide-commerce.png';
import energyIcon from '../assets/layout/guide-energy.png';
import monitorIcon from '../assets/layout/guide-monitor.png';
import equipmentIcon from '../assets/layout/guide-equipment.png';
import toiletIcon from '../assets/layout/guide-toilet.png';
import lightIcon from '../assets/layout/guide-light.png';
import broadcastIcon from '../assets/layout/guide-broadcast.png';
import setIcon from '../assets/layout/guide-set.png';

// 切页icon控制
const pageList = ref([
  { page: 'home', iconUrl: homeIcon, hoverText: '总览' },
  // { page: 'car', iconUrl: carIcon, hoverText: '车流' },
  // { page: 'people', iconUrl: peopleIcon, hoverText: '客流' },
  // { page: 'quality', iconUrl: qualityIcon, hoverText: '质量' },
  // { page: 'parking', iconUrl: parkingIcon, hoverText: '停车' },
  // { page: 'commerce', iconUrl: commerceIcon, hoverText: '商业' },
  // { page: 'energy', iconUrl: energyIcon, hoverText: '能耗' },
  // { page: 'monitor', iconUrl: monitorIcon, hoverText: '监控' },
  // { page: 'equipment', iconUrl: equipmentIcon, hoverText: '设备' },
  // { page: 'toilet', iconUrl: toiletIcon, hoverText: '厕所' },
  // { page: 'light', iconUrl: lightIcon, hoverText: '智慧灯杆' },
  // { page: 'broadcast', iconUrl: broadcastIcon, hoverText: '广播' },
  // { page: 'set', iconUrl: setIcon, hoverText: '设置' }
])

// const fullScreen = () {

// }

</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  // background: url(../assets/layout/bg.jpg) no-repeat center 0;
  // background-size: cover;

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

  .top-handle-wrap {
    font-size: 18px;
    color: #ffffff;
    font-weight: 600;

    .handle-box {
      display: flex;
      box-shadow: inset 0px 0px 18px 1px rgba(0, 255, 255, 0.59);
    }

    .handle-box:nth-child(1) {
      position: absolute;
      top: 88px;
      left: 20px;
    }

    .handle-box:nth-child(2) {
      position: absolute;
      top: 88px;
      left: 307px;
    }

    .handle-item {
      padding: 4px 11px;
    }

    .active {
      background-color: #5BDBD3;
      border-radius: 4px;
    }
  }

  .page-handle {
    width: 112px;
    position: absolute;
    right: 30px;
    top: 50px;
    display: flex;
    justify-content: space-between;

    .page-handle-item {
      width: 24px;
      height: 24px;
    }
  }

  .date-wrap {
    position: absolute;
    right: 194px;
    top: 23px;
    color: #fff;
    display: flex;
    font-size: 18px;
    font-weight: 200;
    line-height: 22px;

    .date-wrap-left {
      padding-right: 10px;
      border-right: 2px solid rgba(255, 255, 255, 1);
    }

    .date {
      font-weight: 400;
    }

    .time {
      padding-left: 4px;
    }

    .date-wrap-right {
      padding-left: 10px;
    }

    .weather {
      width: 48px;
      height: 19px;
      margin-bottom: 4px;
      background: #35CB9C;
      border-radius: 3px;
      line-height: 19px;
      text-align: center;
    }

    .temperature {
      font-weight: 700;
    }

    .temp {
      padding-left: 12px;
      font-weight: 400;
    }
  }

  .guide-icon {
    position: relative;

    &::before {
      content: 'aaa';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      background: #ccc;
      width: 50px;
      height: 50px;
    }
  }
  .guide-handle {
    width: 80px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 50%;
    background: url(../assets/layout/icon-bottom.png) no-repeat center 0;
    background-size: 100%;    
  }
}
</style>
