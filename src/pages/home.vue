<template>
  <div class="home-page">
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
      <home-top />
      <home-ratio :ratioData="ratioData" />
      <div :class="[footerShow ? 'animate__fadeInLeft' : 'animate__fadeOutLeft', isInitAnimated ? 'handle-duration' : '']"
        class="content-left animate__animated">
        <shop-chart class="bar-chart" :dataSource="shopData" ref="shopChartRef" />
        <services :dataSource="serviceData" ref="serviceRef" />
        <passenger-chart :dataSource="passengerData" ref="passengerRef" />
      </div>
      <div
        :class="[footerShow ? 'animate__fadeInRight' : 'animate__fadeOutRight', isInitAnimated ? 'handle-duration' : '']"
        class="content-right animate__animated">
        <car-chart :dataSource="carData" ref="carChartRef" />
        <energy-chart :dataSource="energyData" :energyObj="energyObj" ref="energyChartRef" />
        <equipment ref="equipmentRef" />
      </div>
      <div class="handle-content" @click="handleContent"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
const { proxy } = getCurrentInstance()

const shopChartRef = ref(null)
const serviceRef = ref(null)
const passengerRef = ref(null)
const carChartRef = ref(null)
const energyChartRef = ref(null)
const equipmentRef = ref(null)

const shopData = reactive({
  yData: ['沙溪北区太仓工厂店', '沙溪南区', '沙溪北区工厂', '沙溪北区太仓工厂店', '沙溪北区太仓工厂店', '沙溪南区', '沙溪北区工厂', '沙溪北区太仓工厂店', '沙溪北区太仓工厂店', '沙溪南区', '沙溪北区工厂', '沙溪北区太仓工厂店'],
  data: [0.55, 0.42, 0.42, 0.4, 0.35, 0.29, 0.2, 0.1, 0.35, 0.29, 0.2, 0.1]
})// 商铺图表数据
const carData = reactive([20, 40, 30, 45, 55, 50, 40, 20, 25, 30, 25, 10])// 车流图表数据
const energyData = reactive([1, 1.2, 1.5, 1.3, 2, 2.5, 2.2, 3, 2.5, 2.1, 2])// 能源图表数据
const passengerData = reactive([200, 300, 360, 600, 450, 800, 1200, 1600, 1450, 1500, 1780, 1690]) // 客流图表数据
// 服务质量数据
const serviceData = reactive([
  { no: '193829199', name: '消防灭火器', time: '2023-01-01 12:00', result: 1 },
  { no: '193829199', name: '员工餐厅', time: '2023-01-01 12:00', result: 1 },
  { no: '193829199', name: '公共场所', time: '2023-01-01 12:00', result: 2 },
  { no: '193829199', name: '办公及生活', time: '2023-01-01 12:00', result: 2 },
  { no: '193829199', name: '出售的商品', time: '2023-01-01 12:00', result: 2 },
  { no: '193829199', name: '消防灭火器', time: '2023-01-01 12:00', result: 1 },
  { no: '193829199', name: '员工餐厅', time: '2023-01-01 12:00', result: 1 },
  { no: '193829199', name: '公共场所', time: '2023-01-01 12:00', result: 2 },
  { no: '193829199', name: '办公及生活', time: '2023-01-01 12:00', result: 2 },
  { no: '193829199', name: '出售的商品', time: '2023-01-01 12:00', result: 2 },
])

// 顶部数据
const topData = reactive({
  data: 1900,
})

// 右边比率数据
const ratioData = reactive({
  val: 9
})

// 能耗数据
const energyObj = reactive({
  val: 9
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
  getShopData()
  getCarData()
  getServerData()
  getEnergyData()
  getPassengerData()
  getEquipmentData()
  refreshData()
}

// 5分钟刷新
const refreshData = () => {
  timer = setInterval(async () => {
    await getRatioData()
    await getMainData()
    await getShopData()
    await getCarData()
    await getServerData()
    await getEnergyData()
    await getPassengerData()
    await getEquipmentData()
  }, 300000)
}

// 获取商铺数据
async function getShopData() {
  // const params = {
  //   field: field.value,
  //   area: area.value
  // }
  // const res = await proxy.$http('post', 'getInfoForWeb', params)
}

// 获取服务质量数据
async function getServerData() { }

// 获取右上角比率数据
async function getRatioData() { }

// 获取上方数据
async function getMainData() { }

// 获取客流数据
async function getPassengerData() { }

// 获取车流数据
async function getCarData() { }

// 获取能耗监测数据
async function getEnergyData() { }

// 获取设备监测数据
async function getEquipmentData() { }

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
.home-page {
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
