

<template>
  <div ref="EcharRef" class="my-charts"></div>
</template>

<script setup>
const { proxy } = getCurrentInstance()
const EcharRef = ref(null)

const props = defineProps({
  dataSource: {
    type: Array,
    default: []
  }
})

onMounted(() => {
  const myChart = proxy.$echarts.init(EcharRef.value);
  myChart.setOption({
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
        data: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
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
        name: '辆',
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
        color: '#93E2EF',
        stack: '总量',
        showSymbol: false,//去除圆点
        smooth: true, //非折线
        areaStyle: {
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 1, 1, [
            {
              offset: 0,
              color: 'rgba(194,242,236,0.67)'
            },
            {
              offset: 1,
              color: 'rgba(216,216,216,0.00)'
            }
          ])
        },
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
  })
})

</script>


<style scoped></style>


