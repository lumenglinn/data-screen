<template>
  <div class="layout">
    <div id="mars3dContainer" class="mars3d-container"></div>
    <div class="head">
      <div class="logo"></div>
      <div class="company"></div>
    </div>
    <div class="page-handle">
      <img class="page-handle-item" src="@/assets/images/layout/right-exit.png" @click="() => { }" alt="" />
      <img class="page-handle-item" src="@/assets/images/layout/right-full.png" @click="handleFullScreen" alt="" />
      <img class="page-handle-item" src="@/assets/images/layout/right-close.png" @click="closeWindow" alt="" />
    </div>
    <div class="date-wrap">
      <div class="date-wrap-left">
        <div class="date">{{ today.year }} - {{ today.month }} - {{ today.date }}</div>
        <div class="week">{{ today.day }} {{ today.Tip }}<span class="time">{{ today.h }}:{{ today.m }}</span>
        </div>
      </div>
      <div class="date-wrap-right">
        <div class="weather">
          <img :src="state.weatherObj.weatherIcon" alt="" class="weather-icon" />
          <div class="weather-label"><span class="f-w-400">32</span>优</div>

        </div>
        <div class="temperature ">20°C<span class="temp">4/17°C</span></div>
      </div>
    </div>
    <slot></slot>

    <div class="footer animate__animated"
      :class="[footerShow ? 'animate__fadeInUp' : 'animate__fadeOutDown', isInitAnimated ? 'handle-duration' : '']">
      <div class="guide-handle" @click="handleFooters"></div>
      <el-tooltip :content="item.hoverText" :offset="5" placement="top" v-for="(item) in pageList" :key="item.page"
        popper-class="cus-tooltip">
        <img class="guide-icon" :src="item.iconUrl" alt="" />
      </el-tooltip>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { handleFullScreen, closeWindow, formatDate } from '@/common/utils'
import homeIcon from '@/assets/images/layout/guide-home.png';
import carIcon from '@/assets/images/layout/guide-car.png';
import peopleIcon from '@/assets/images/layout/guide-people.png';
import qualityIcon from '@/assets/images/layout/guide-quality.png';
import parkingIcon from '@/assets/images/layout/guide-parking.png';
import commerceIcon from '@/assets/images/layout/guide-commerce.png';
import energyIcon from '@/assets/images/layout/guide-energy.png';
import monitorIcon from '@/assets/images/layout/guide-monitor.png';
import equipmentIcon from '@/assets/images/layout/guide-equipment.png';
import toiletIcon from '@/assets/images/layout/guide-toilet.png';
import lightIcon from '@/assets/images/layout/guide-light.png';
import broadcastIcon from '@/assets/images/layout/guide-broadcast.png';
import setIcon from '@/assets/images/layout/guide-set.png';

import sunnyIcon from '@/assets/images/layout/icon-sunny.png';
import snowIcon from '@/assets/images/layout/icon-snow.png';
import rainIcon from '@/assets/images/layout/icon-rain.png';
import overcastIcon from '@/assets/images/layout/icon-overcast.png';
import cloudyIcon from '@/assets/images/layout/icon-cloudy.png';
import * as mars3d from "mars3d";

const today = ref(formatDate())
// 天气对象
const state = reactive({
  weatherObj: {
    weather: 1
  }
})

state.weatherObj.weatherIcon = computed(() => {
  const map = {
    1: sunnyIcon,
    2: snowIcon,
    3: rainIcon,
    4: overcastIcon,
    5: cloudyIcon
  }
  return map[state.weatherObj.weather]
});

// 切页icon控制
const pageList = ref([
  { page: 'home', iconUrl: homeIcon, hoverText: '总览' },
  { page: 'car', iconUrl: carIcon, hoverText: '车流' },
  { page: 'people', iconUrl: peopleIcon, hoverText: '客流' },
  { page: 'quality', iconUrl: qualityIcon, hoverText: '质量' },
  { page: 'parking', iconUrl: parkingIcon, hoverText: '停车' },
  { page: 'commerce', iconUrl: commerceIcon, hoverText: '商业' },
  { page: 'energy', iconUrl: energyIcon, hoverText: '能耗' },
  { page: 'monitor', iconUrl: monitorIcon, hoverText: '监控' },
  { page: 'equipment', iconUrl: equipmentIcon, hoverText: '设备' },
  { page: 'toilet', iconUrl: toiletIcon, hoverText: '厕所' },
  { page: 'light', iconUrl: lightIcon, hoverText: '智慧灯杆' },
  { page: 'broadcast', iconUrl: broadcastIcon, hoverText: '广播' },
  { page: 'set', iconUrl: setIcon, hoverText: '设置' }
])
const footerShow = ref(true)
const isInitAnimated = ref(false)

const handleFooters = () => {
  isInitAnimated.value = true
  footerShow.value = !footerShow.value
}


onMounted(() => {
  var mapOptions = {
    scene: {
      center: {
        lat: 31.686288,
        lng: 117.229619,
        alt: 11333.9,
        heading: 359.2,
        pitch: -39.5,
      },
    },

    basemaps: [{
      "id": 2021,
      "pid": 10,
      "name": "天地图影像",
      "icon": "img/basemaps/tdt_img.png",
      "type": "group",
      "layers": [
        { "name": "底图", "type": "tdt", "layer": "img_d" },
        { "name": "注记", "type": "tdt", "layer": "img_z" }
      ],
      "show": true
    },],
  };
  var map = new mars3d.Map("mars3dContainer", mapOptions);


})
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  // background: #000;
  // background: url(@/assets/images/layout/bg.jpg) no-repeat center 0;
  // background: url(@/assets/images/layout/bg1.png) no-repeat center 0;
  background-size: cover;

  .head {
    width: 1880px;
    height: 88px;
    margin: 0 auto;
    background: url(@/assets/images/layout/head.png);
    background-size: 100%;
    position: absolute;
    top: 0;
    left: 0;

    .logo {
      width: 247px;
      height: 42px;
      position: absolute;
      top: 20px;
      left: 203px;
      background: url(@/assets/images/layout/logo.png);
      background-size: 100%;
    }

    .company {
      width: 555px;
      height: 40px;
      position: absolute;
      top: 19px;
      left: 693px;
      background: url(@/assets/images/layout/company.png) no-repeat center center;
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
    opacity: 1 !important;

    .guide-icon {
      display: flex;
      display: inline-block;
      position: relative;
      width: 24px;
      height: 24px;
    }
  }

  .guide-handle {
    width: 92px;
    height: 33px;
    position: absolute;
    bottom: 52px;
    left: 50%;
    margin-left: -46px;
    background: url(@/assets/images/layout/icon-bottom.png) no-repeat center bottom;
    background-size: 100%;
    opacity: 1 !important;
  }

  .handle-duration {
    animation-duration: 0.3s;
  }

  .page-handle {
    width: 112px;
    position: absolute;
    right: 46px;
    top: 48px;
    display: flex;
    justify-content: space-between;

    .page-handle-item {
      width: 24px;
      height: 24px;
    }
  }

  .date-wrap {
    position: absolute;
    right: 215px;
    top: 22px;
    color: #fff;
    display: flex;
    font-size: 16px;
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
      display: flex;
      align-items: center;
    }

    .weather-label {
      width: 48px;
      height: 19px;
      margin-bottom: 4px;
      background: #35CB9C;
      border-radius: 3px;
      line-height: 19px;
      text-align: center;
    }

    .weather-icon {
      width: 13px;
      height: 13px;
      margin-left: 30px;
      margin-right: 10px;
    }

    .temperature {
      font-weight: 700;
    }

    .temp {
      padding-left: 12px;
      font-weight: 400;
    }
  }
}
</style>
