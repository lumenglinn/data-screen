<template>
  <div class="traffic-page">
    <div class="content">
      <div class="top-handle-wrap">
        <div class="handle-box">
          <div class="handle-item" :class="{ 'active': area === 'AB' }" @click="switchArea('AB')">AB区</div>
          <div class="handle-item" :class="{ 'active': area === 'A' }" @click="switchArea('A')">A区</div>
          <div class="handle-item" :class="{ 'active': area === 'B' }" @click="switchArea('B')">B区</div>
        </div>
        <div class="handle-box">
          <div class="handle-item" :class="{ 'active': field === 'inField' }" @click="switchField('inField')">内场</div>
          <div class="handle-item" :class="{ 'active': field === 'outField' }" @click="switchField('outField')">外场</div>
        </div>
      </div>
      <car-main-data :mainData="state.mainData" />
      <car-ratio-box :ratioData="state.ratioData" />
      <div :class="[footerShow ? 'animate__fadeInLeft' : 'animate__fadeOutLeft', isInitAnimated ? 'handle-duration' : '']"
        class="content-left animate__animated">
        <car-type :dataSource="state.left1" @updateData="getLeft1Data" ref="CarTypeRef" />
        <car-source-chart :dataSource="state.left2" ref="serviceRef" />
        <car-record :dataSource="state.left3" @viewData="handleCenter" @updateData="getLeft3Data"
          ref="passengerRef" />
      </div>
      <div
        :class="[footerShow ? 'animate__fadeInRight' : 'animate__fadeOutRight', isInitAnimated ? 'handle-duration' : '']"
        class="content-right animate__animated">
        <car-flow :dataSource="state.right1" @updateData="getRight1Data" ref="carChartRef" />
        <car-holiday :dataSource="state.right2" @updateData="getRight2Data" ref="energyChartRef" />
        <car-black-list :dataSource="state.right3" @viewData="handleCenter" ref="equipmentRef" />
      </div>
      <div class="handle-content" @click="handleContent"></div>
      <car-center ref="carCenterRef" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
const { proxy } = getCurrentInstance()

const CarTypeRef = ref(null)
const serviceRef = ref(null)
const passengerRef = ref(null)
const carChartRef = ref(null)
const energyChartRef = ref(null)
const equipmentRef = ref(null)
const carCenterRef = ref(null)

const state = reactive({
  left1: [], 
  left2: {
      yData: ['山西     0.55万   ', '山东     0.55万   ', '江苏     0.55万   ', '河南     0.55万   ', '河北     0.55万   ', '北京     0.55万   ', '天津     0.55万   ', '湖北     0.55万   ', '广东     0.55万   ', '广东     0.55万   ', '江苏     0.55万   ', '河南     0.55万   ', '河北     0.55万   ', '北京     0.55万   ', '天津     0.55万   ', '湖北     0.55万   '],
      data: [80, 70, 76, 60, 55, 53, 50, 45, 80, 70, 76, 60, 55, 53, 50, 45]
    },
  left3: [
    { no: '001', name: '晋G34528', time: '2023-01-01 12:30', type: '小轿车' },
    { no: '002', name: '晋K22718', time: '2023-02-11 12:20', type: '小轿车' },
    { no: '003', name: '晋A40710', time: '2023-04-21 11:00', type: '大货车' },
    { no: '004', name: '晋K22718', time: '2023-03-19 09:00', type: '小轿车' },
    { no: '005', name: '晋H22712', time: '2023-05-07 11:00', type: '小客车' },
    { no: '006', name: '晋B32985', time: '2023-03-22 12:55', type: '小轿车' },
    { no: '007', name: '晋K22713', time: '2023-02-16 10:07', type: '小轿车' },
    { no: '008', name: '晋G34528', time: '2023-01-01 09:54', type: '小货车' },
    { no: '009', name: '晋K22718', time: '2023-04-21 08:10', type: '小轿车' },
    { no: '000', name: '晋C89944', time: '2023-05-07 19:10', type: '小轿车' },
  ], 
  right1: [20, 40, 30, 45, 55, 50, 40, 20, 25, 30, 25, 10], 
  right2: {
    '2022': [500, 565, 600, 802, 765, 676, 547],
    '2023': [520, 585, 620, 782, 740, 700, 596]
  },
  right3: [
    { no: '001', name: '晋K22718', time: '2023-01-01 12:00', type: '黑名单' },
    { no: '002', name: '晋C89944', time: '2023-05-07 19:10', type: '黑名单' },
    { no: '003', name: '晋A40710', time: '2023-02-11 12:20', type: '黑名单' },
    { no: '004', name: '晋K22718', time: '2023-03-19 09:00', type: '黑名单' },
    { no: '005', name: '晋B32985', time: '2023-01-01 12:00', type: '黑名单' },
    { no: '006', name: '晋K22718', time: '2023-04-21 08:10', type: '黑名单' },
    { no: '007', name: '晋K22713', time: '2023-03-22 12:55', type: '黑名单' },
    { no: '008', name: '晋A40710', time: '2023-01-01 12:00', type: '黑名单' },
    { no: '009', name: '晋B32985', time: '2023-05-07 11:00', type: '黑名单' },
  ], // 设备数据
  mainData: { data: 1900 }, // 顶部数据
  ratioData: { val: 9 }, // 右边比率数据
})

const field = ref('outField') // 场内/场外
const area = ref('A') // A区/B区/AB区
const footerShow = ref(true)
const isInitAnimated = ref(false)
let timer = null

// 刷新页面数据
watch([field, area], (newVal, oldVal) => {
  if (timer) clearInterval(timer)
  initData()
})

onMounted(() => {
  initData()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
});

const initData = () => {
  getRatioData()
  getMainData()
  getLeft1Data()
  getLeft2Data()
  getLeft3Data()
  getRight1Data()
  getRight2Data()
  getRight3Data()
  refreshData()
}

// 5分钟刷新
const refreshData = () => {
  timer = setInterval(async () => {
    await getRatioData()
    await getMainData()
    await getLeft1Data()
    await getLeft2Data()
    await getLeft3Data()
    await getRight1Data()
    await getRight2Data()
    await getRight3Data()
  }, 300000)
}

async function getLeft1Data() { }
async function getLeft2Data() { }
async function getLeft3Data() { }
async function getRight1Data() { }
async function getRight2Data() { }
async function getRight3Data() { }

// 获取右上角比率数据
async function getRatioData() { }

// 获取上方数据
async function getMainData() { }

const handleContent = () => {
  isInitAnimated.value = true
  footerShow.value = !footerShow.value
}

const switchArea = (val) => {
  area.value = val
  proxy.$mitt.emit("switchArea", val)
}

const switchField = (val) => {
  field.value = val
}

const handleCenter = () => {
  carCenterRef.value.handleModel(true)
  console.log(carCenterRef.value.isShow, 1)
}

</script>

<style lang="scss" scoped>
.traffic-page {
  .handle-content {
    height: 100px;
    width: 13px;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -50px;
    background: url(@/assets/images/layout/icon-center.png) no-repeat center 0;
    background-size: 100%;
    opacity: 1 !important;
  }

  .handle-duration {
    animation-duration: 0.5s;
  }
}
</style>
