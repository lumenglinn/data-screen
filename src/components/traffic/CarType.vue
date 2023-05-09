

<template>
  <div class="wrap">
    <div class="wrap-title">客流</div>
    <div class="wrap-cont">
      <div class="chart-handle">
        <div class="handle-box">
          <div class="handle-item" :class="{ 'active': field === 1 }" @click="switchField(1)">内场</div>
          <div class="handle-item" :class="{ 'active': field === 2 }" @click="switchField(2)">外场</div>
        </div>
        <div class="handle-box">
          <div class="handle-item" :class="{ 'active': timeType === 1 }" @click="switchTimeType(1)">年</div>
          <div class="handle-item" :class="{ 'active': timeType === 2 }" @click="switchTimeType(2)">月</div>
          <div class="handle-item" :class="{ 'active': timeType === 3 }" @click="switchTimeType(3)">日</div>
        </div>
      </div>
      <div ref="EcharRef" class="my-charts"></div>
    </div>
  </div>
</template>

<script setup>
const { proxy } = getCurrentInstance()
const EcharRef = ref(null)
const emit = defineEmits(['updateData'])
const timeType = ref(1)
const field = ref(1)
const xData = ref(['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'])
let myChart, chartOption

const props = defineProps({
  dataSource: {
    type: Array,
    default: []
  }
})

defineExpose({
  timeType,
  field
})

// 重新赋值
watch(() => props.dataSource, (newVal, oldVal) => {
  resetXData()
  setEchartsOption()
}, { deep: true })

onMounted(() => {
  myChart = proxy.$echarts.init(EcharRef.value);
  setEchartsOption()
  window.addEventListener('resize', myChart.resize)
})

const setEchartsOption = () => {
  chartOption = {
    // legend: {
    //   orient: 'horizontal',
    //   icon: 'rect',
    //   right: 10,
    //   textStyle: {
    //     color: '#fff',
    //     fontSize: '12',
    //     fontWeight: 700
    //   }
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      top: proxy.$echartsSize(70),
      bottom: proxy.$echartsSize(50),
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
    xAxis: [
      {
        type: 'category',
        axisLabel: {
          interval: 0,
          textStyle: {
            fontSize: proxy.$echartsSize(14),
            color: '#fff'
          }
        },
        boundaryGap: false,
        data: xData.value,
        axisLine: {
          lineStyle: {
            color: '#FFFFFF',
            width: proxy.$echartsSize(1),
          }
        },
      }
    ],
    yAxis: [
      {
        name: '(人)',
        type: 'value',
        //刻度值
        axisLabel: {
          textStyle: {
            fontSize: proxy.$echartsSize(14),
            color: '#fff'
          }
        },
        //网格
        splitLine: {
          // show: false,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255,255,255,0.49)'
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#ffffff"
          }
        },
        axisTick: { color: "#b0c2f9" },
      }
    ],
    series: [
      {
        type: 'line',
        color: '#F2D78D',
        stack: '总量',
        // showSymbol: false,//去除圆点
        // smooth: true, //非折线
        itemStyle: {
          normal: {
            lineStyle: {
              width: proxy.$echartsSize(4)
            }
          }
        },
        data: props.dataSource
      }
    ]
  }
  myChart.setOption(chartOption)
}

const resetXData = () => {
  switch (timeType.value) {
    case 1:
      xData.value = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      break;
    case 2:
      xData.value = ['1日', '5日', '9日', '13日', '17日', '21日', '25日', '29日']
      break;
    case 3:
      xData.value = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22: 00']
      break;
    default:
      break;
  }
}

const switchTimeType = (val) => {
  timeType.value = val
  emit('updateData')
}

const switchField = (val) => {
  field.value = val
  emit('updateData')
}

</script>


<style scoped></style>


