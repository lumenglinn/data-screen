<template>
  <div class="wrap">
    <div class="wrap-title">预警分析</div>
    <div class="wrap-cont">
      <div ref="EcharRef" class="my-charts"></div>
    </div>
  </div>
</template>

<script setup>
import countTo from "@/components/CountTo";
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
        fontWeight: 700,
        show: true,
        textStyle: {
          color: '#ffffff',
          verticalAlign: 'bottom',
          fontSize: proxy.$echartsSize(16),
          align: 'left',
          padding: [0, 0, proxy.$echartsSize(10), proxy.$echartsSize(12)]
        }
      },
      axisLine: { show: false },
      axisTick: { show: false },
      data: props.dataSource?.yData
      // data: ['餐厅     0.55万', '厕所     0.55万', '餐厅     0.55万', '厕所     0.55万', '餐厅     0.55万', '厕所     0.55万']
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
      top: proxy.$echartsSize(50),
      bottom: proxy.$echartsSize(20),
      left: proxy.$echartsSize(55),
      right: proxy.$echartsSize(72),
      show: false
    },
    dataZoom: [{
      //滑动条
      yAxisIndex: 0, //这里是从X轴的0刻度开始
      show: false, //是否显示滑动条，不影响使用
      type: "slider", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
      startValue: 0, // 从头开始。
      endValue: 3, // 一次性展示5个。
    },],
    series: [
      {
        data: props.dataSource?.data,
        type: 'pictorialBar',
        symbolRepeat: "fixed",
        symbolMargin: 1, //图形的两边间隔
        symbol: "rect",
        symbolClip: true, //是否裁剪图形
        symbolSize: [3, 15],
        symbolPosition: "start", //图形的定位位置。
        showBackground: true,
        itemStyle: {
          barBorderRadius: proxy.$echartsSize(15),
          shadowBlur: proxy.$echartsSize(3),
          normal: {
            color: function (params) {
              var colorList = [
                ['#00FCFF', '#008297'],
                ['#0091FF', '#005EA4'],
                ['#901698', '#F157EE'],
                ['#40FBCB', '#009871']
              ];

              var colorItem = colorList[params.dataIndex%4];
              return new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: colorItem[0]
              },
              {
                offset: 1,
                color: colorItem[1]
              }
              ], false);
            },
            barBorderRadius: [4, 4, 4, 4]
          },
        },
        barWidth: '30%',
        label: {
          normal: {
            show: true,
            position: ['100%', proxy.$echartsSize(-12)],
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
      chartOption.dataZoom[0].endValue = 3;
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


