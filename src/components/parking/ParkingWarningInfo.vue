<template>
  <div class="center-box parking-warning-info" v-show="isShow">
    <div class="img-box">
      <img src="@/assets/images/parking/B.png" class="center-img" alt="" />
    </div>
    <div class="center-info">
      <div class="center-info-item">
        <div class="info-title">预警信息</div>
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
            <div class="label">车位号：</div>
            <div class="data">001</div>
          </div>
          <div class="detail">
            <div class="label">事件类型：</div>
            <div class="data">危化品着火</div>
          </div>
        </div>
      </div>
      <div class="center-info-item">
        <div class="confirm-btn" @click="handleConfirm">
          <img src="@/assets/images/common/laba.png" alt="">
        </div>
      </div>
    </div>
    <div class="close" @click="handleModel(false)"></div>
  </div>
</template>

<script setup>
const isShow = ref(false)
const target = ref(null)
const emit = defineEmits(['updateConfirm'])

const handleModel = (action, index) => {
  isShow.value = action
  target.value = index
}

const handleConfirm = () => {
  emit('updateConfirm', target.value)
  isShow.value = false
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

  .confirm-btn {
    position: absolute;
    top: 70px;
    left: 180px;
    width: 80px;
    height: 80px;
    background: rgba(0, 0, 0, 0.22);
    border: 4px solid rgba(92, 188, 218, 0.47);
    box-shadow: inset 0px 1px 32px 0px rgba(86, 177, 205, 1);
    border-radius: 16px;
    cursor: pointer;

    img {
      margin: 10px;
      width: 60px;
      height: 60px;
    }
  }
}
</style>


