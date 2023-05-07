

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
        data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
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
            type: 'dashed'
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


