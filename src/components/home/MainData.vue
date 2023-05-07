<template>
  <div class="main-data">
    <div class="data-item">
      <img class="data-icon" src="@/assets/images/home/top1.png" alt="">
      <div class="data-right">
        <div class="data-name">当日总销售</div>
        <count-to :start-val="0" :end-val="mainData.data" class="data" :duration='1000' />
      </div>
    </div>
    <div class="data-item">
      <img class="data-icon" src="@/assets/images/home/top2.png" alt="">
      <div class="data-right">
        <div class="data-name">能源销售</div>
        <count-to :start-val="0" :end-val="mainData.data" class="data" :duration='1000' />
      </div>
    </div>
    <div class="data-item">
      <img class="data-icon" src="@/assets/images/home/top3.png" alt="">
      <div class="data-right">
        <div class="data-name">零售销售</div>
        <count-to :start-val="0" :end-val="mainData.data" class="data" :duration='1000' />
      </div>
    </div>
    <div class="data-item">
      <img class="data-icon" src="@/assets/images/home/top4.png" alt="">
      <div class="data-right">
        <div class="data-name">商户销售</div>
        <count-to :start-val="0" :end-val="mainData.data" class="data" :duration='1000' />
      </div>
    </div>
    <div class="data-item">
      <img class="data-icon" src="@/assets/images/home/top5.png" alt="">
      <div class="data-right">
        <div class="data-name">车流情况</div>
        <count-to :start-val="0" :end-val="mainData.data" class="data" :duration='1000' />
      </div>
    </div>
    <div class="data-item">
      <img class="data-icon" src="@/assets/images/home/top6.png" alt="">
      <div class="data-right">
        <div class="data-name">客流情况</div>
        <count-to :start-val="0" :end-val="mainData.data" class="data" :duration='1000' />
      </div>
    </div>
  </div>
</template>

<script setup>
import countTo from "@/components/CountTo";

const props = defineProps({
  mainData: {
    type: Object,
    default: {}
  }
})

onMounted(() => {

});

</script>


<style lang="scss" scoped>
.main-data {
  width: 900px;
  position: absolute;
  top: 135px;
  left: 50%;
  margin-left: -450px;
  display: flex;
  justify-content: space-around;

  .data-item {
    width: 140px;
    display: flex;
    align-items: center;
  }

  .data-icon {
    width: 40px;
    height: 40px;
    margin-right: 9px;
  }

  .data-name {
    font-size: 18px;
    color: #50E3C2;
  }

  .data {
    font-size: 24px;
    color: #FFFFFF;
    // color: #cccccc;
  }
}
</style>