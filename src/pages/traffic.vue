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
      <!-- <main-data :mainData="state.mainData" />
      <ratio-box :ratioData="state.ratioData" /> -->
      <div :class="[footerShow ? 'animate__fadeInLeft' : 'animate__fadeOutLeft', isInitAnimated ? 'handle-duration' : '']"
        class="content-left animate__animated">
        <!-- <car-type :dataSource="state.carTypeData" @updateData="getCarTypeData" ref="CarTypeRef" /> -->
        <source-chart :dataSource="state.sourceData" ref="serviceRef" />
        <record :dataSource="state.recordData" @updateData="getRecordData" ref="passengerRef" />
      </div>
      <!-- <div
        :class="[footerShow ? 'animate__fadeInRight' : 'animate__fadeOutRight', isInitAnimated ? 'handle-duration' : '']"
        class="content-right animate__animated">
        <car-flow :dataSource="state.carData" @updateData="getCarData" ref="carChartRef" />
        <holiday :dataSource="state.energyData" @updateData="getEnergyData" :energyObj="state.energyObj"
          ref="energyChartRef" />
        <black-list :dataSource="state.equipmentData" ref="equipmentRef" />
      </div> -->
      <div class="handle-content" @click="handleContent"></div>
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

const state = reactive({
  carTypeData: [
  ], // 车型
  carData: [20, 40, 30, 45, 55, 50, 40, 20, 25, 30, 25, 10], // 车流图表数据
  energyData: [1, 1.2, 1.5, 1.3, 2, 2.5, 2.2, 3, 2.5, 2.1, 2], // 能源图表数据
  recordData: [
    { no: '008', name: '粤K22718', time: '2023-01-01 12:00', type: 1 },
    { no: '008', name: '粤K22718', time: '2023-01-01 12:00', type: 1 },
    { no: '008', name: '粤K22718', time: '2023-01-01 12:00', type: 1 },
    { no: '008', name: '粤K22718', time: '2023-01-01 12:00', type: 1 },
    { no: '008', name: '粤K22718', time: '2023-01-01 12:00', type: 1 },
    { no: '008', name: '粤K22718', time: '2023-01-01 12:00', type: 1 },
    { no: '008', name: '粤K22718', time: '2023-01-01 12:00', type: 1 },
    { no: '008', name: '粤K22718', time: '2023-01-01 12:00', type: 1 },
    { no: '008', name: '粤K22718', time: '2023-01-01 12:00', type: 1 },
    { no: '008', name: '粤K22718', time: '2023-01-01 12:00', type: 1 },
  ], // 客流图表数据
  sourceData: {}, // 车辆来源
  equipmentData: [
    { type: '风机', run: '7/23', failure: '0/0' },
    { type: '风机', run: '7/23', failure: '0/4' },
    { type: '风机', run: '7/23', failure: '0/0' },
    { type: '风机', run: '7/23', failure: '0/0' }
  ], // 设备数据
  mainData: { data: 1900 }, // 顶部数据
  ratioData: { val: 9 }, // 右边比率数据
  energyObj: { val: 9 }, // 能耗数据
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
  getCarTypeData()
  getCarData()
  getSourceData()
  getEnergyData()
  getRecordData()
  getEquipmentData()
  refreshData()
}

// 5分钟刷新
const refreshData = () => {
  timer = setInterval(async () => {
    await getRatioData()
    await getMainData()
    await getCarTypeData()
    await getCarData()
    await getSourceData()
    await getEnergyData()
    await getRecordData()
    await getEquipmentData()
  }, 300000)
}

// 获取商铺数据
async function getCarTypeData () {
  // const params = {
  //   field: field.value,
  //   area: area.value,
  //   timeType: CarTypeRef.value.timeType
  // }
  // const res = await proxy.$http('post', 'getInfoForWeb', params)
  // setTimeout(() => {
  //   state.carTypeData = {
  //     yData: ['沙溪北区太仓工厂店', '沙溪南区', '沙溪北区工厂', '沙溪北区太仓工厂店', '沙溪北区太仓工厂店', '沙溪南区', '沙溪北区工厂', '沙溪北区太仓工厂店', '沙溪北区太仓工厂店', '沙溪南区', '沙溪北区工厂', '沙溪北区太仓工厂店'],
  //     data: [0.55, 0.42, 0.42, 0.4, 0.35, 0.29, 0.2, 0.1, 0.35, 0.29, 0.2, 0.1]
  //   }
  // }, 1000)
}

// 获取车辆来源数据
async function getSourceData () {
  setTimeout(() => {
    state.sourceData = {
      yData: ['广东 0.55万', '广西 0.55万', '江苏 0.55万', '河南 0.55万', '河北 0.55万', '北京 0.55万', '天津 0.55万', '湖北 0.55万', '广东 0.55万', '广西 0.55万', '江苏 0.55万', '河南 0.55万', '河北 0.55万', '北京 0.55万', '天津 0.55万', '湖北 0.55万'],
      data: [80, 70, 76, 60, 55, 53, 50, 45, 80, 70, 76, 60, 55, 53, 50, 45]
    }
  }, 1000)
}

// 获取客流数据
async function getRecordData () {
}

// 获取车流数据
async function getCarData () { }

// 获取能耗监测数据
async function getEnergyData () { }

// 获取设备监测数据
async function getEquipmentData () { }

// 获取右上角比率数据
async function getRatioData () { }

// 获取上方数据
async function getMainData () { }

const handleContent = () => {
  isInitAnimated.value = true
  footerShow.value = !footerShow.value
}

const switchArea = (val) => {
  area.value = val
}

const switchField = (val) => {
  field.value = val
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
