<template>
  <div class="ratio-wrap">
    <div class="ratio-box">
      <div class="data f-w-900">
        <div>18%</div>
        <img v-if="ratioData.val > 1" class="icon-up-down" src="@/assets/images/home/up.png" alt="" />
        <img v-else class="icon-up-down" src="@/assets/images/home/down.png" alt="" />
        <div>0%</div>
      </div>
      <div class="ratio-name">入区率</div>
    </div>
    <div class="ratio-box">
      <div class="data f-w-900">8:2</div>
      <div class="ratio-name">客货比</div>
    </div>
    <div class="ratio-box">
      <div class="data">
        <div class="f-w-900">20</div>分
        <img v-if="ratioData.val > 1" class="icon-up-down" src="@/assets/images/home/down.png" alt="" />
        <img v-else class="icon-up-down" src="@/assets/images/home/up.png" alt="" />
        <div class="f-w-900">0%</div>
      </div>
      <div class="ratio-name">平均停留时间</div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  ratioData: {
    type: Object,
    default: {}
  }
})

onMounted(() => {
});


</script>


<style lang="scss" scoped>
.ratio-wrap {
  position: absolute;
  top: 75px;
  right: 18px;
  display: flex;
  text-align: center;

  .data {
    padding-top: 8px;
    display: flex;
    justify-content: center;
    font-size: 21px;
    align-items: center;
  }

  .icon-up-down {
    width: 20px;
    height: 20px;
    padding: 0 7px;
  }

  .ratio-box {
    width: 148px;
    height: 66px;
    // border: 2px solid rgba(54, 255, 251, 0.22);
    background: url(@/assets/images/home/ratio-bg.png) no-repeat center 0;
    background-size: 100%;
  }

  .ratio-box+.ratio-box {
    margin-left: 29px;
  }

  .ratio-name {
    font-size: 18px;
  }
}
</style>