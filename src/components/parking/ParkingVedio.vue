<template>
  <div class="center-box parking-monitor-dialog" v-show="isShow">
    <div class="img-box">
      <video src="http://www.webkaka.com/tutorial/zhanzhang/2022/0729161/bridge.mp4" class="center-img" type="video/mp4"
        controls>
        <!-- <source > -->
      </video>
      <!-- <img src="@/assets/images/parking/B.png" class="center-img" alt="" /> -->
    </div>
    <div class="center-info">
      <div class="center-info-item">
        <div class="info-title">视频查询</div>
        <div class="detail-content">
          <div class="detail">
            <div class="label">开始时间：</div>
            <div class="data">2023-01-01 12:00:00<img src="@/assets/images/common/select-icon.png"
              class="icon-select" /></div>
          </div>
          <div class="detail">
            <div class="label">结束时间：</div>
            <div class="data">2023-01-01 12:00:00<img src="@/assets/images/common/select-icon.png"
              class="icon-select" /></div>
          </div>
          <div class="confirm-btn" @click="handleConfirm"><img src="@/assets/images/common/search.png"
              class="icon-search" /><span>查询</span></div>
        </div>
      </div>
    </div>
    <div class="close" @click="handleModel(false)"></div>
  </div>
</template>

<script setup>
const isShow = ref(false)
const target = ref(null)

const handleModel = (action, index) => {
  isShow.value = action
  target.value = index
}

defineExpose({
  handleModel
})

</script>

<style lang="scss" scoped>
.parking-monitor-dialog {
  height: 788px;

  .center-img {
    width: 781px;
    height: 478px;
  }

  .img-box video {
    width: 100%;
    height: 100%;
  }

  .video-small {
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

  .confirm-btn {
    top: 120px;
    left: 15px;
    width: 98px;
    height: 44px;
    line-height: 44px;
    display: flex;
    align-content: center;
  }
}
</style>


