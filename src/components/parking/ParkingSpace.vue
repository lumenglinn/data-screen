<template>
  <div class="wrap parking-space">
    <div class="wrap-title">车位使用及入区率</div>
    <div class="wrap-cont">
      <div class="chart-handle">
        <div class="handle-box">
          <div class="handle-item" :class="{ 'active': areaType === 1 }" @click="switchArea(1)">AB区</div>
          <div class="handle-item" :class="{ 'active': areaType === 2 }" @click="switchArea(2)">A区</div>
          <div class="handle-item" :class="{ 'active': areaType === 3 }" @click="switchArea(3)">B区</div>
        </div>
      </div>
      <div class="space-box">
        <div class="space-item">
          <parking-space-chart class="space-chart" />
          <div class="space-info">
            <div class="info-name">总车位：<count-to :start-val="0" :end-val="820" :duration='2500' /></div>
            <div class="info-item">占用：<count-to :start-val="0" :end-val="820" :duration='2500' /></div>
            <div class="info-item">剩余：<count-to :start-val="0" :end-val="0" :duration='2500' /></div>
          </div>
        </div>
        <div class="space-item right">
          <parking-space-chart class="space-chart" />
          <div class="space-info">
            <div class="info-name">驶入率：<count-to :start-val="0" :end-val="115" :duration='2500' /></div>
            <div class="info-item">单车消费：<count-to :start-val="0" :end-val="820" :duration='2500' /></div>
            <div class="info-item">平均停留：<count-to :start-val="0" :end-val="0" :duration='2500' /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import countTo from "@/components/CountTo";
const areaType = ref(1)
const emit = defineEmits(['updateData'])

const props = defineProps({
  dataSource: {
    type: Array,
    default: []
  }
})

const switchArea = (val) => {
  areaType.value = val
  emit('updateData')
}
</script>


<style lang="scss" scoped>
.parking-space {
  .space-box {
    padding-top: 45px;
    display: flex;
    justify-content: center;

  }

  .space-item {
    width: 200px;
    padding-left: 40px;
  }

  .space-item:nth-child(2) {
    padding-left: 0;
  }

  .space-chart {
    width: 90px;
    height: 90px;
  }

  .space-info {
    .info-name {
      font-size: 21px;
      color: #02ECEC;
      font-weight: 700;
    }

    .info-item {
      padding-left: 28px;
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 6px;
        left: 0;
        width: 16px;
        height: 11px;
        background: #10DC56;
      }
    }

    .info-item:nth-child(3) {
      &::before {
        background: #CCCFCD;
      }
    }
  }

  .space-item.right {
    .info-item::before {
      background: #0AB1FB;
    }

    .info-item:nth-child(3) {
      &::before {
        background: #CCCFCD;
      }
    }
  }


}
</style>

