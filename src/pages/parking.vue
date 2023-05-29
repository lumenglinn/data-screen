<template>
  <div class="parking-page">
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
      <parking-alarm />
      <div :class="[footerShow ? 'animate__fadeInLeft' : 'animate__fadeOutLeft', isInitAnimated ? 'handle-duration' : '']"
        class="content-left animate__animated">
        <parking-space :dataSource="state.left1" ref="left1Ref" />
        <parking-monitor :dataSource="state.left2" @showMonitor="showMonitor" ref="left2Ref" />
        <parking-record :dataSource="state.left3" @showRecord="showRecord" ref="left3Ref" />
      </div>
      <div
        :class="[footerShow ? 'animate__fadeInRight' : 'animate__fadeOutRight', isInitAnimated ? 'handle-duration' : '']"
        class="content-right animate__animated">
        <parking-warning :dataSource="state.right1" @showConfirm="showConfirm" ref="right1Ref" />
        <parking-oil-warning :dataSource="state.right2" @showCamera="showCamera" @showPosition="handlePosition(true)"
          @showMonitor="showMonitor" ref="right2Ref" />
        <parking-illegal-stop :dataSource="state.right3" ref="right3Ref" />
      </div>
      <div class="handle-content" @click="handleContent"></div>
    </div>
    <parking-warning-info ref="confirmRef" @updateConfirm="updateConfirm" />
    <parking-bayonet ref="bayonetRef" @handleVideo="handleVideo" />
    <parking-monitor-dialog ref="monitorDialogRef" />
    <parking-vedio ref="vedioRef" />
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
const { proxy } = getCurrentInstance()

const monitorDialogRef = ref(null)
const bayonetRef = ref(null)
const vedioRef = ref(null)



const state = reactive({
  left1: [],
  left2: [],
  left3: [
    { number: '粤K22718', bayonet: '001', time: '2023-01-01 12:00', type: '黑名单' },
    { number: '粤K22718', bayonet: '002', time: '2023-01-01 12:00', type: '危化品' },
    { number: '粤B22730', bayonet: '003', time: '2023-01-01 12:00', type: '黑名单' },
    { number: '粤A87788', bayonet: '004', time: '2023-01-01 12:00', type: '黑名单' },
    { number: '粤K22718', bayonet: '005', time: '2023-01-01 12:00', type: '危化品' },
    { number: '粤F22718', bayonet: '006', time: '2023-01-01 12:00', type: '黑名单' },
    { number: '粤G22718', bayonet: '007', time: '2023-01-01 12:00', type: '危化品' },
    { number: '粤C22718', bayonet: '008', time: '2023-01-01 12:00', type: '黑名单' },
    { number: '粤B22730', bayonet: '009', time: '2023-01-01 12:00', type: '危化品' },
    { number: '粤C22718', bayonet: '000', time: '2023-01-01 12:00', type: '黑名单' },
    { number: '粤K22718', bayonet: '001', time: '2023-01-01 12:00', type: '黑名单' },
    { number: '粤K22718', bayonet: '002', time: '2023-01-01 12:00', type: '危化品' },
    { number: '粤B22730', bayonet: '003', time: '2023-01-01 12:00', type: '黑名单' },
    { number: '粤A87788', bayonet: '004', time: '2023-01-01 12:00', type: '黑名单' },
    { number: '粤K22718', bayonet: '005', time: '2023-01-01 12:00', type: '危化品' },
    { number: '粤F22718', bayonet: '006', time: '2023-01-01 12:00', type: '黑名单' },
    { number: '粤G22718', bayonet: '007', time: '2023-01-01 12:00', type: '危化品' },
    { number: '粤C22718', bayonet: '008', time: '2023-01-01 12:00', type: '黑名单' },
    { number: '粤B22730', bayonet: '009', time: '2023-01-01 12:00', type: '危化品' },
    { number: '粤C22718', bayonet: '000', time: '2023-01-01 12:00', type: '黑名单' },
  ],
  right1: [
    { number: '粤K22718', bayonet: '001', time: '2023-01-01 12:00', type: '着火', disposal: 1 },
    { number: '粤K22718', bayonet: '002', time: '2023-01-01 12:00', type: '冒烟', disposal: 2 },
    { number: '粤B22730', bayonet: '003', time: '2023-01-01 12:00', type: '着火', disposal: 1 },
    { number: '粤A87788', bayonet: '004', time: '2023-01-01 12:00', type: '着火', disposal: 1 },
    { number: '粤K22718', bayonet: '005', time: '2023-01-01 12:00', type: '冒烟', disposal: 2 },
    { number: '粤F22718', bayonet: '006', time: '2023-01-01 12:00', type: '着火', disposal: 1 },
    { number: '粤G22718', bayonet: '007', time: '2023-01-01 12:00', type: '冒烟', disposal: 2 },
    { number: '粤C22718', bayonet: '008', time: '2023-01-01 12:00', type: '着火', disposal: 1 },
    { number: '粤B22730', bayonet: '009', time: '2023-01-01 12:00', type: '冒烟', disposal: 2 },
    { number: '粤C22718', bayonet: '000', time: '2023-01-01 12:00', type: '着火', disposal: 1 },
    { number: '粤K22718', bayonet: '001', time: '2023-01-01 12:00', type: '着火', disposal: 2 },
    { number: '粤K22718', bayonet: '002', time: '2023-01-01 12:00', type: '冒烟', disposal: 2 },
    { number: '粤B22730', bayonet: '003', time: '2023-01-01 12:00', type: '着火', disposal: 1 },
    { number: '粤A87788', bayonet: '004', time: '2023-01-01 12:00', type: '着火', disposal: 2 },
    { number: '粤K22718', bayonet: '005', time: '2023-01-01 12:00', type: '冒烟', disposal: 2 },
    { number: '粤F22718', bayonet: '006', time: '2023-01-01 12:00', type: '着火', disposal: 1 },
    { number: '粤G22718', bayonet: '007', time: '2023-01-01 12:00', type: '冒烟', disposal: 2 },
    { number: '粤C22718', bayonet: '008', time: '2023-01-01 12:00', type: '着火', disposal: 1 },
    { number: '粤B22730', bayonet: '009', time: '2023-01-01 12:00', type: '冒烟', disposal: 1 },
    { number: '粤C22718', bayonet: '000', time: '2023-01-01 12:00', type: '着火', disposal: 2 },
  ],
  right2: [
    { bayonet: '001', time: '2023-01-01 12:00', disposal: 1 },
    { bayonet: '001', time: '2023-01-01 12:00', disposal: 2 },
    { bayonet: '001', time: '2023-01-01 12:00', disposal: 1 },
    { bayonet: '002', time: '2023-01-01 12:00', disposal: 2 },
    { bayonet: '006', time: '2023-01-01 12:00', disposal: 1 },
    { bayonet: '001', time: '2023-01-01 12:00', disposal: 2 },
    { bayonet: '009', time: '2023-01-01 12:00', disposal: 1 },
    { bayonet: '001', time: '2023-01-01 12:00', disposal: 2 },
    { bayonet: '008', time: '2023-01-01 12:00', disposal: 2 },
    { bayonet: '001', time: '2023-01-01 12:00', disposal: 1 },
    { bayonet: '007', time: '2023-01-01 12:00', disposal: 1 },
    { bayonet: '001', time: '2023-01-01 12:00', disposal: 2 },
    { bayonet: '001', time: '2023-01-01 12:00', disposal: 1 },
    { bayonet: '009', time: '2023-01-01 12:00', disposal: 1 },
    { bayonet: '001', time: '2023-01-01 12:00', disposal: 2 },
    { bayonet: '001', time: '2023-01-01 12:00', disposal: 1 },
    { bayonet: '008', time: '2023-01-01 12:00', disposal: 2 },
    { bayonet: '001', time: '2023-01-01 12:00', disposal: 1 },
  ],
  right3: [
    { number: '粤K22718', bayonet: '001', time: '2023-01-01 12:00', type: '非停车区停车', disposal: 1 },
    { number: '粤K22718', bayonet: '002', time: '2023-01-01 12:00', type: '跨线停车', disposal: 2 },
    { number: '粤B22730', bayonet: '003', time: '2023-01-01 12:00', type: '非停车区停车', disposal: 1 },
    { number: '粤A87788', bayonet: '004', time: '2023-01-01 12:00', type: '跨线停车', disposal: 1 },
    { number: '粤K22718', bayonet: '005', time: '2023-01-01 12:00', type: '非停车区停车', disposal: 2 },
    { number: '粤F22718', bayonet: '006', time: '2023-01-01 12:00', type: '混型停车', disposal: 1 },
    { number: '粤G22718', bayonet: '007', time: '2023-01-01 12:00', type: '非停车区停车', disposal: 2 },
    { number: '粤C22718', bayonet: '008', time: '2023-01-01 12:00', type: '混型停车', disposal: 1 },
    { number: '粤B22730', bayonet: '009', time: '2023-01-01 12:00', type: '非停车区停车', disposal: 2 },
    { number: '粤C22718', bayonet: '000', time: '2023-01-01 12:00', type: '混型停车', disposal: 1 },
    { number: '粤K22718', bayonet: '001', time: '2023-01-01 12:00', type: '跨线停车', disposal: 2 },
    { number: '粤K22718', bayonet: '002', time: '2023-01-01 12:00', type: '非停车区停车', disposal: 2 },
    { number: '粤B22730', bayonet: '003', time: '2023-01-01 12:00', type: '混型停车', disposal: 1 },
    { number: '粤A87788', bayonet: '004', time: '2023-01-01 12:00', type: '非停车区停车', disposal: 2 },
    { number: '粤K22718', bayonet: '005', time: '2023-01-01 12:00', type: '跨线停车', disposal: 2 },
    { number: '粤F22718', bayonet: '006', time: '2023-01-01 12:00', type: '混型停车', disposal: 1 },
    { number: '粤G22718', bayonet: '007', time: '2023-01-01 12:00', type: '混型停车', disposal: 2 },
    { number: '粤C22718', bayonet: '008', time: '2023-01-01 12:00', type: '非停车区停车', disposal: 1 },
    { number: '粤B22730', bayonet: '009', time: '2023-01-01 12:00', type: '非停车区停车', disposal: 1 },
    { number: '粤C22718', bayonet: '000', time: '2023-01-01 12:00', type: '跨线停车', disposal: 2 },]
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

const showConfirm = (index) => {
  confirmRef.value.handleModel(true, index)
}

// 监控预警确认
const updateConfirm = (index) => {
  state.right1[index].operation = 2
}

const showCamera = () => {
  cameraRef.value.handleModel(true)
}

const showMonitor = () => {
  monitorDialogRef.value.handleModel(true)
}

const showRecord = () => {
  bayonetRef.value.handleModel(true)
}

const handleVideo = () => {
  vedioRef.value.handleModel(true)
}

</script>

<style lang="scss" scoped>
.parking-page {
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

  .jiankong-img {
    width: 1641px;
    height: 775px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
