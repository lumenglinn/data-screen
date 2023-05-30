<template>
  <div class="center-box security-confirm" v-show="isShow">
    <div class="img-box">
      <img src="@/assets/images/security/jiankong-1.png" alt="" />
    </div>
    <div class="center-info">
      <div class="center-info-item">
        <div class="info-title">预警相机浏览</div>
        <div class="detail-content">
          <div class="detail">
            <div class="label">分区：</div>
            <div class="data">A区</div>
          </div>
          <div class="detail">
            <div class="label">位置：</div>
            <div class="data">停车场</div>
          </div>
          <div class="detail">
            <div class="label">描述：</div>
            <div class="data">越界</div>
          </div>
          <div class="detail">
            <div class="label">时间：</div>
            <div class="data">2023-01-01 12 : 00</div>
          </div>
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
.security-confirm {
  .confirm-btn {
    position: absolute;
    top: 70px;
    left: 60px;
    width: 134px;
    height: 58px;
    background: rgba(0, 0, 0, 0.22);
    border: 4px solid rgba(92, 188, 218, 0.47);
    box-shadow: inset 0px 1px 32px 0px rgba(86, 177, 205, 1);
    border-radius: 16px;
    text-align: center;
    line-height: 58px;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
  }
}
</style>


