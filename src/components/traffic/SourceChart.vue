<template>
  <div class="wrap">
    <div class="wrap-title">商铺销售</div>
    <div class="wrap-cont">
      <div ref="EcharRef" class="my-charts"></div>
    </div>
  </div>
</template>

<script setup>
const { proxy } = getCurrentInstance()
const EcharRef = ref(null)
const timeType = ref(2)
const emit = defineEmits(['updateData'])
let timer, myChart, chartOption

const props = defineProps({
  dataSource: {
    type: Object,
    default: {
      yData: [],
      data: []
    }
  }
})

console.log(props.dataSource, 888)

defineExpose({
  timeType
})

// 重新赋值
watch(() => props.dataSource, (newVal, oldVal) => {
  if (timer) clearInterval(timer)
  setEchartsOption()
}, { deep: true })

onMounted(() => {
  myChart = proxy.$echarts.init(EcharRef.value);
  setEchartsOption()
  window.addEventListener('resize', myChart.resize)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
});

const setEchartsOption = () => {
  chartOption = {
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: {
      type: 'category',
      inverse: true,
      axisLabel: {
        fontSize: proxy.$echartsSize(14),
        color: "#ffffff",
        fontWeight: 700
      },
      axisLine: { show: false },
      axisTick: { show: false },
      data: props.dataSource?.yData
    },
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
      top: proxy.$echartsSize(55),
      bottom: proxy.$echartsSize(15),
      left: proxy.$echartsSize(160),
      right: proxy.$echartsSize(45),
      show: false
    },
    dataZoom: [{
      //滑动条
      yAxisIndex: 0, //这里是从X轴的0刻度开始
      show: false, //是否显示滑动条，不影响使用
      type: "slider", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
      startValue: 0, // 从头开始。
      endValue: 7, // 一次性展示5个。
    },],
    series: [
      {
        data: props.dataSource?.data,
        type: 'bar',
        showBackground: false,
        itemStyle: {
          barBorderRadius: proxy.$echartsSize(15),
          shadowBlur: proxy.$echartsSize(3),
          normal: {
            color: new proxy.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
              offset: 0,
              color: '#70A3D1'
            }, {
              offset: 1,
              color: '#4485C2'
            }]),
            barBorderRadius: [4, 4, 4, 4]
          },
        },
        barWidth: '60%',
        label: {
          normal: {
            show: true,
            position: 'right',
            fontSize: proxy.$echartsSize(10),
            fontWeight: 700,
            color: '#ffffff',
            formatter: (params) => {
              return `${params.value}%`
            }
          }
        }
      }
    ]
  }
  myChart.setOption(chartOption);
  rollData()
}

const rollData = () => {
  //自动滚动
  timer = setInterval(() => {
    if (chartOption.dataZoom[0].endValue == chartOption.series[0].data.length) {
      chartOption.dataZoom[0].endValue = 7;
      chartOption.dataZoom[0].startValue = 0;
    } else {
      chartOption.dataZoom[0].endValue = chartOption.dataZoom[0].endValue + 1;
      chartOption.dataZoom[0].startValue = chartOption.dataZoom[0].startValue + 1;
    }
    //重新把配置项给实例对象
    myChart.setOption(chartOption);
  }, 2000)
}


</script>


<style scoped></style>


