<template>
  <div class="main-data">
    <div class="data-item">
      <img class="data-icon" src="@/assets/images/home/top1.png" alt="">
      <div class="data-right">
        <div class="data-name">当日总销售</div>
        <count-to :start-val="0" :end-val="mainData.data" class="data" :duration='3500' />
        <div class="unit">(万元)</div>
      </div>
    </div>
    <div class="data-item">
      <img class="data-icon" src="@/assets/images/home/top2.png" alt="">
      <div class="data-right">
        <div class="data-name">能源销售</div>
        <count-to :start-val="0" :end-val="mainData.data" class="data" :duration='3500' />
        <div class="unit">(万元)</div>
      </div>
    </div>
    <div class="data-item">
      <img class="data-icon" src="@/assets/images/home/top3.png" alt="">
      <div class="data-right">
        <div class="data-name">零售销售</div>
        <count-to :start-val="0" :end-val="mainData.data" class="data" :duration='3500' />
        <div class="unit">(万元)</div>
      </div>
    </div>
    <div class="data-item">
      <img class="data-icon" src="@/assets/images/home/top4.png" alt="">
      <div class="data-right">
        <div class="data-name">商户销售</div>
        <count-to :start-val="0" :end-val="mainData.data" class="data" :duration='3500' />
        <div class="unit">(万元)</div>
      </div>
    </div>
    <div class="data-item">
      <img class="data-icon" src="@/assets/images/home/top5.png" alt="">
      <div class="data-right">
        <div class="data-name">车流情况</div>
        <count-to :start-val="0" :end-val="mainData.data" class="data" :duration='3500' />
        <div class="unit">(万辆)</div>
      </div>
    </div>
    <div class="data-item">
      <img class="data-icon" src="@/assets/images/home/top6.png" alt="">
      <div class="data-right">
        <div class="data-name">客流情况</div>
        <count-to :start-val="0" :end-val="mainData.data" class="data" :duration='3500' />
        <div class="unit">(万人)</div>
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


<style lang="scss" scoped></style>