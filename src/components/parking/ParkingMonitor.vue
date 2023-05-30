<template>
  <div class="wrap parking-monitor">
    <div class="wrap-title">危化品车位监测</div>
    <div class="wrap-cont">
      <div class="monitor-item">
        <img src="@/assets/images/parking/A.png" class="monitor-img" alt="" @click="handleMonitor">
        <div class="position">A区</div>
      </div>
      <div class="monitor-item">
        <img src="@/assets/images/parking/B.png" class="monitor-img" alt="" @click="handleMonitor">
        <div class="position">B区</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['showMonitor'])

const handleMonitor = () => {
  emit('showMonitor')
}

</script>


<style lang="scss" scoped>
.parking-monitor {
  .wrap-cont {
    display: flex;
    justify-content: center;
  }

  .monitor-item {
    margin: 31px 0 0 40px;
    width: 50%;
    z-index: 1;
  }

  .monitor-item:nth-child(2) {
    margin-left: 0;
  }

  .monitor-img {
    width: 183px;
    height: 163px;
  }

  .position {
    padding-top: 6px;
    font-weight: 700;
  }
}
</style>

