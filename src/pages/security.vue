<template>
  <div class="security-page">
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
      <security-alarm />
      <div :class="[footerShow ? 'animate__fadeInLeft' : 'animate__fadeOutLeft', isInitAnimated ? 'handle-duration' : '']"
        class="content-left animate__animated">
        <security-entrance-control :dataSource="state.left1" @switchStatus="handleStatus" ref="left1Ref" />
        <security-entrance-record :dataSource="state.left2" ref="left2Ref" />
        <security-equipment @showPosition="handlePosition(true)" @showFire="showFire" :dataSource="state.left3"
          ref="left3Ref" />
      </div>
      <div
        :class="[footerShow ? 'animate__fadeInRight' : 'animate__fadeOutRight', isInitAnimated ? 'handle-duration' : '']"
        class="content-right animate__animated">
        <security-warning :dataSource="state.right1" @showConfirm="showConfirm" ref="right1Ref" />
        <security-monitor :dataSource="state.right2" @showCamera="showCamera" @showPosition="handlePosition(true)"
          @showMonitor="showMonitor" ref="right2Ref" />
        <security-analysis :dataSource="state.right3" ref="right3Ref" />
      </div>
      <div class="handle-content" @click="handleContent"></div>
    </div>
    <security-camera ref="cameraRef" :dataSource="state.cameraData" />
    <security-fire ref="fireRef" :dataSource="state.fireData" />
    <security-confirm ref="confirmRef" @updateConfirm="updateConfirm" />
    <security-monitor-dialog ref="monitorDialogRef" />
    <security-camera-detail />
    <img src="@/assets/images/security/jiankong-2.png" v-if="position" @click="handlePosition(false)" class="jiankong-img"
      alt="">
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
const { proxy } = getCurrentInstance()

const confirmRef = ref(null)
const cameraRef = ref(null)
const fireRef = ref(null)
const position = ref(false)
const monitorDialogRef = ref(null)


const state = reactive({
  left1: [
    { position: '1号门', description: '宿舍门', status: 1 },
    { position: '2号门', description: '餐厅门', status: 1 },
    { position: '3号门', description: '大门', status: 2 },
    { position: '4号门', description: '宿舍门', status: 1 },
    { position: '5号门', description: '餐厅门', status: 2 },
    { position: '6号门', description: '大门', status: 1 },
    { position: '7号门', description: '宿舍门', status: 2 },
    { position: '8号门', description: '餐厅门', status: 1 },
    { position: '3号门', description: '大门', status: 2 },
    { position: '4号门', description: '宿舍门', status: 1 },
    { position: '5号门', description: '餐厅门', status: 2 },
    { position: '6号门', description: '大门', status: 1 },
    { position: '7号门', description: '宿舍门', status: 2 },
    { position: '8号门', description: '餐厅门', status: 1 },
  ],
  left2: [
    { number: '239029', name: '王小二', time: '2023-01-21 12:00', type: '出' },
    { number: '232329', name: '张大大', time: '2023-01-01 13:00', type: '出' },
    { number: '234029', name: '王利利', time: '2023-01-01 14:00', type: '入' },
    { number: '538899', name: '王小二', time: '2023-01-01 15:00', type: '出' },
    { number: '339029', name: '李小冬', time: '2023-01-06 12:00', type: '入' },
    { number: '639779', name: '王小二', time: '2023-01-11 12:00', type: '入' },
    { number: '739029', name: '李小冬', time: '2023-01-01 12:00', type: '出' },
    { number: '932229', name: '王小二', time: '2023-01-13 12:00', type: '入' },
    { number: '237729', name: '王利利', time: '2023-01-01 12:00', type: '出' },
    { number: '538899', name: '王小二', time: '2023-01-01 15:00', type: '出' },
    { number: '339029', name: '李小冬', time: '2023-01-06 12:00', type: '入' },
    { number: '639779', name: '王小二', time: '2023-01-11 12:00', type: '入' },
    { number: '739029', name: '李小冬', time: '2023-01-01 12:00', type: '出' },
    { number: '932229', name: '王小二', time: '2023-01-13 12:00', type: '入' },
    { number: '237729', name: '王利利', time: '2023-01-01 12:00', type: '出' },
  ],
  left3: [],
  right1: [
    { degree: '重要', equipment: '东围墙50', description: '越界', time: '2023-01-01 12:00', operation: 1 },
    { degree: '重要', equipment: '东围墙30', description: '越界', time: '2023-01-01 12:00', operation: 1 },
    { degree: '次要', equipment: '西围墙50', description: '越界', time: '2023-01-01 12:00', operation: 2 },
    { degree: '重要', equipment: '东围墙70', description: '越界', time: '2023-01-01 12:00', operation: 1 },
    { degree: '很次要', equipment: '西围墙80', description: '越界', time: '2023-01-01 12:00', operation: 1 },
    { degree: '重要', equipment: '东围墙40', description: '越界', time: '2023-01-01 12:00', operation: 2 },
    { degree: '重要', equipment: '东围墙20', description: '越界', time: '2023-01-01 12:00', operation: 1 },
    { degree: '重要', equipment: '西围墙50', description: '越界', time: '2023-01-01 12:00', operation: 1 },
    { degree: '重要', equipment: '东围墙50', description: '越界', time: '2023-01-01 12:00', operation: 1 },
    { degree: '重要', equipment: '东围墙30', description: '越界', time: '2023-01-01 12:00', operation: 1 },
    { degree: '次要', equipment: '西围墙50', description: '越界', time: '2023-01-01 12:00', operation: 1 },
    { degree: '重要', equipment: '东围墙70', description: '越界', time: '2023-01-01 12:00', operation: 1 },
    { degree: '次要', equipment: '西围墙80', description: '越界', time: '2023-01-01 12:00', operation: 1 },
    { degree: '重要', equipment: '东围墙40', description: '越界', time: '2023-01-01 12:00', operation: 1 },
    { degree: '重要', equipment: '东围墙20', description: '越界', time: '2023-01-01 12:00', operation: 1 },
    { degree: '重要', equipment: '西围墙50', description: '越界', time: '2023-01-01 12:00', operation: 1 },
  ],
  right2: [],
  right3: {
    yData: ['越界', '打架斗殴', '人员聚集', '越界', '高温', '打架斗殴', '人员聚集', '高温', '打架斗殴', '越界', '打架斗殴', '越界', '打架斗殴', '人员聚集', '越界', '越界'],
    data: [11, 14, 15, 12, 18, 20, 11, 16, 13, 15, 15, 15, 14, 19]
  },
  fireData: [
    { IP: '123456', description: '点型烟感', area: 'AB区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '639779', description: '排烟阀', area: 'A区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '339029', description: '点型烟感', area: 'B区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '639779', description: '点型温感', area: 'AB区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '339029', description: '光束烟感', area: 'A区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '639779', description: '消防栓', area: 'B区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '339029', description: '点型烟感', area: 'A区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '639779', description: '光束烟感', area: 'B区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '339029', description: '点型烟感', area: 'AB区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '339029', description: '点型烟感', area: 'B区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '639779', description: '排烟阀', area: 'A区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '538899', description: '点型烟感', area: 'B区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '538899', description: '光束烟感', area: 'A区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '339029', description: '消防栓', area: 'A区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '339029', description: '排烟阀', area: 'AB区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '639779', description: '点型烟感', area: 'B区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '339029', description: '点型温感', area: 'B区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '538899', description: '光束烟感', area: 'AB区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '639779', description: '点型烟感', area: 'A区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '339029', description: '排烟阀', area: 'B区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '538899', description: '光束烟感', area: 'A区', position: '停车场', time: '2023-02-02 12:00' },
    { IP: '339029', description: '点型烟感', area: 'AB区', position: '停车场', time: '2023-02-02 12:00' },
  ],
  cameraData: [
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
    { area: 'A区', position: '停车场', description: '越界', time: '2023-01-01 12:00', IP: '192.168.1.23' },
  ]
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

// 门禁控制 开/关
const handleStatus = (index, val) => {
  state.left1[index].status = val
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

const handlePosition = (action = false) => {
  position.value = action
}

const showFire = () => {
  fireRef.value.handleModel(true)
}

const showMonitor = () => {
  monitorDialogRef.value.handleModel(true)
}
// const handleCenter = () => {
//   carCenterRef.value.handleModel(true)
//   console.log(carCenterRef.value.isShow, 1)
// }

</script>

<style lang="scss" scoped>
.security-page {
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
