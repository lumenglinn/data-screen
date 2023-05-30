

<template>
  <div class="security-alarm">
    <div class="alarm-box">
      <div class="alarm-item">
        <img class="alarm-img" src="@/assets/images/common/alarm-icon.png" alt="" />
        <count-to :start-val="0" :end-val="1" class="data" :duration='5000' />
      </div>
      <div class="alarm-item">
        <img class="alarm-img" src="@/assets/images/common/alarm-icon.png" alt="" />
        <count-to :start-val="0" :end-val="2" class="data" :duration='5000' />
      </div>
      <div class="alarm-item">
        <img class="alarm-img" src="@/assets/images/common/alarm-icon.png" alt="" />
        <count-to :start-val="0" :end-val="3" class="data" :duration='5000' />
      </div>
    </div>
  </div>
</template>

<script setup>
import countTo from "@/components/CountTo";

</script>


<style lang="scss" scoped>
.security-alarm {
  position: absolute;
  top: 88px;
  right: 20px;

  .alarm-box {
    width: 484px;
    display: flex;
    justify-content: space-between;
  }

  .alarm-item {
    width: 102px;
    height: 43px;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
  }

  .alarm-item:nth-child(1) {
    background: url(@/assets/images/common/warn1.png) no-repeat;
    background-size: 100%;
  }

  .alarm-item:nth-child(2) {
    background: url(@/assets/images/common/warn2.png) no-repeat;
    background-size: 100%;
  }

  .alarm-item:nth-child(3) {
    background: url(@/assets/images/common/warn3.png) no-repeat;
    background-size: 100%;
  }

  .alarm-img {
    margin: 0 6px 0 30px;
    width: 28px;
    height: 28px;
  }
}
</style>


