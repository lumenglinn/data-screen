<template>
  <div class="toilet-page">
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
      <toilet-center ref="centerRef" />
      <div :class="[footerShow ? 'animate__fadeInLeft' : 'animate__fadeOutLeft', isInitAnimated ? 'handle-duration' : '']"
        class="content-left animate__animated">
        <toilet-man @showCenter="handleCenter" />
        <toilet-environment />
        <toilet-flow :dataSource="state.left3" @updateData="getLeft3Data"/>
      </div>
      <div
        :class="[footerShow ? 'animate__fadeInRight' : 'animate__fadeOutRight', isInitAnimated ? 'handle-duration' : '']"
        class="content-right animate__animated">
        <toilet-woman @showCenter="handleCenter" />
        <toilet-environment />
        <toilet-flow :dataSource="state.left3" @updateData="getLeft3Data"/>
      </div>
      <div class="handle-content" @click="handleContent"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
const { proxy } = getCurrentInstance()

const centerRef = ref(null)

const state = reactive({
  left1: [], 
  left2: [],
  left3: [200, 300, 360, 600, 450, 800, 1200, 1600, 1450, 1500, 1780, 1670],
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

const handleCenter = () => {
  centerRef.value.handleModel(true)
}

</script>

<style lang="scss" scoped>
.toilet-page {
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
