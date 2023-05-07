

<template>
  <div class="wrap energy">
    <div class="wrap-title">能耗监测</div>
    <div class="energy-box">
      <div class="energy-item">
        <div class="item-content">
          <div class="energy-left">今日用水:14.60t</div>
          <div class="energy-right">
            <img v-if="energyObj.val > 1" class="icon-up-down" src="@/assets/images/home/up.png" alt="" />
            <img v-else class="icon-up-down" src="@/assets/images/home/down.png" alt="" />
            0%
          </div>
        </div>
      </div>
      <div class="energy-item">
        <div class="item-content">
          <div class="energy-left">今日用水:14.60t</div>
          <div class="energy-right">
            <img v-if="energyObj.val > 1" class="icon-up-down" src="@/assets/images/home/up.png" alt="" />
            <img v-else class="icon-up-down" src="@/assets/images/home/down.png" alt="" />
            0%
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-cont">
      <div class="chart-handle">
        <div class="handle-box">
          <div class="handle-item" :class="{ 'active': field === 1 }" @click="switchField(1)">内场</div>
          <div class="handle-item" :class="{ 'active': field === 1 }" @click="switchField(1)">外场</div>
        </div>
        <div class="handle-box">
          <div class="handle-item" :class="{ 'active': timeType === 1 }" @click="switchTimeType(1)">年</div>
          <div class="handle-item" :class="{ 'active': timeType === 1 }" @click="switchTimeType(1)">月</div>
          <div class="handle-item" :class="{ 'active': timeType === 1 }" @click="switchTimeType(1)">日</div>
        </div>
      </div>
      <div ref="EcharRef" class="my-charts"></div>
    </div>
  </div>
</template>

<script setup>
const EcharRef = ref(null)
const { proxy } = getCurrentInstance()

const props = defineProps({
  dataSource: {
    type: Array,
    default: []
  },
  energyObj: {
    type: Object,
    default: {}
  }
})

const timeType = ref(1)
const field = ref(1)

defineExpose({
  timeType,
  field
})

onMounted(() => {
  const myChart = proxy.$echarts.init(EcharRef.value);
  myChart.setOption({
    xAxis: {
      type: 'category',
      axisLabel: {
        interval: 1,
        textStyle: {
          fontSize: proxy.$echartsSize(14),
          color: '#fff'
        }
      },
      axisTick: {
        interval: 'auto'
      },
      boundaryGap: false,
      data: ['08:00', '08:00', '10:00', '10:00', '12:00', '12:00', '14:00', '14:00', '16:00', '16:00', '18:00'],
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        fontSize: proxy.$echartsSize(14),
        color: "#ffffff"
      },
      minInterval: 1,
      axisLine: { show: false },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      axisTick: { show: false },
    },
    grid: {
      top: proxy.$echartsSize(70),
      bottom: proxy.$echartsSize(45),
      left: proxy.$echartsSize(60),
      right: proxy.$echartsSize(28),
      show: false
    },
    axisTick: {
      length: -2,
      lineStyle: {
        type: 'dotted',
        color: '#3447A2',
        width: 0,
      }
    },
    series: [
      {
        data: props.dataSource,
        type: 'bar',
        itemStyle: {
          barBorderRadius: 15,
          normal: {
            color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#50E4DF'
            }, {
              offset: 1,
              color: 'rgba(136,243,241,0.00) '
            }]),
            barBorderRadius: [10, 10, 10, 10]
          },
        },
        barWidth: '25%',
      }
    ]
  });
});

const switchTimeType = (val) => {
  timeType.value = val
}

const switchField = (val) => {
  field.value = val
}

</script>


<style lang="scss" scoped>
.energy {
  .energy-box {
    display: flex;
    justify-content: space-between;
  }

  .energy-item {
    margin-top: 15px;
    position: relative;
    width: 230px;
    height: 38px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 38px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.59;
      background: rgba(74, 74, 74, 0.61);
      border: 1px solid rgba(147, 226, 239, 1);
      box-shadow: inset 0px 0px 39px 2px rgba(92, 188, 218, 0.82);
    }
  }

  .item-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .energy-left {
    padding-left: 10px;
  }

  .energy-right {
    padding-right: 10px;
    display: flex;
    align-items: center;
    font-weight: 900;
    font-size: 18px;
  }

  .icon-up-down {
    padding-right: 6px;
  }

  .wrap-cont {
    height: 191px;
  }
}
</style>


