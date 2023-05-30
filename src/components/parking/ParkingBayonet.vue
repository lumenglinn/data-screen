<template>
  <div class="center-box parking-warning-info" v-show="isShow">
    <div class="img-box">
      <img src="@/assets/images/parking/B.png" class="center-img" alt="" />
    </div>
    <div class="center-info">
      <div class="center-info-item">
        <div class="info-title">卡口信息</div>
        <div class="detail-content">
          <div class="detail">
            <div class="label">车牌号：</div>
            <div class="data">粤K22718</div>
          </div>
          <div class="detail">
            <div class="label">分区：</div>
            <div class="data">A区</div>
          </div>
          <div class="detail">
            <div class="label">时间：</div>
            <div class="data">2023-01-01 12:00</div>
          </div>
          <div class="detail">
            <div class="label">入区编号：</div>
            <div class="data">001</div>
          </div>
          <div class="detail">
            <div class="label">车辆类型：</div>
            <div class="data">小客车</div>
          </div>
        </div>
      </div>
      <div class="center-info-item">
        <div class="info-title">视频</div>
        <div class="video" @click="handleVideo">
          <img src="../../assets/images/traffic/small.png" class="small-img" alt="" />
          <div class="open-icon"></div>
        </div>
      </div>
    </div>
    <div class="close" @click="handleModel(false)"></div>
  </div>
</template>

<script setup>
const isShow = ref(false)
const target = ref(null)
const emit = defineEmits(['handleVideo'])

const handleModel = (action, index) => {
  isShow.value = action
  target.value = index
}

const handleVideo = () => {
  emit('handleVideo')
}

defineExpose({
  handleModel
})

</script>


<style lang="scss" scoped>
.parking-warning-info {
  height: 788px;

  .center-img {
    width: 781px;
    height: 478px;
  }

  .video {
    margin: 24px;
    width: 150px;
    height: 103px;
    position: relative
  }

  .small-img {
    width: 100%;
    height: 100%;
  }

  .open-icon {
    width: 42px;
    height: 37px;
    position: absolute;
    top: 36px;
    left: 54px;
    background: url(@/assets/images/common/open.png);
    background-size: 100%;
  }
}
</style>


