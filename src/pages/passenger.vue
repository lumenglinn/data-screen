<template>
  <div class="passenger-page">
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
        <pass-chart :dataSource="state.left1" @updateData="getLeft1Data"/>
        <pass-holiday :dataSource="state.left2" @updateData="getLeft2Data"/>
        <pass-flow :dataSource="state.left3" @updateData="getLeft3Data"/>
      </div>
      <div
        :class="[footerShow ? 'animate__fadeInRight' : 'animate__fadeOutRight', isInitAnimated ? 'handle-duration' : '']"
        class="content-right animate__animated">
        <pass-structure :dataSource="state.right1" @updateData="getRight1Data"/>
        <pass-flow-infield :dataSource="state.right2"/>
        <pass-area-flow :dataSource="state.left3" @updateData="getLeft3Data"/>
      </div>
      <div class="handle-content" @click="handleContent"></div>
      <car-center ref="carCenterRef" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
const { proxy } = getCurrentInstance()

const carCenterRef = ref(null)

const state = reactive({
  left1: [200, 300, 360, 600, 450, 800, 1200, 1600, 1450, 1500, 1780, 1690],
  left2: {
    '2022': [500, 565, 600, 802, 765, 676, 547],
    '2023': [520, 585, 620, 782, 740, 700, 596]
  },
  left3: [20, 40, 30, 45, 55, 50, 40, 20, 25, 30, 25, 10], 
  right1:[1000, 2000, 3000, 5000, 4000],
  right2: {
      yData: ['餐厅     0.55万   ', '厕所     0.55万   ', '厕所     0.55万   ', '餐厅     0.55万   ', '餐厅     0.55万   ', '厕所     0.55万   ', '厕所     0.55万   ', '餐厅     0.55万   ', '厕所     0.55万   ', '餐厅     0.55万   ', '厕所     0.55万   ', '餐厅     0.55万   ', '厕所     0.55万   ', '厕所     0.55万   ', '餐厅     0.55万   ', '餐厅     0.55万   '],
      data: [80, 70, 76, 60, 55, 53, 50, 45, 80, 70, 76, 60, 55, 53, 50, 45]
    }, 
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
  getMainData()
  getRatioData()
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

async function getMainData() { }
async function getRatioData() { }
async function getLeft1Data() { }
async function getLeft2Data() { }
async function getLeft3Data() { }
async function getRight1Data() { }
async function getRight2Data() { }
async function getRight3Data() { }

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

</script>

<style lang="scss" scoped>
.passenger-page {
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
