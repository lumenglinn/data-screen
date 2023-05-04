

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
      top: proxy.$echartsSize(50),
      bottom: proxy.$echartsSize(25),
      left: proxy.$echartsSize(40),
      right: proxy.$echartsSize(15),
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
            fontSize: proxy.$echartsSize(10),
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
            fontSize: proxy.$echartsSize(12),
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
  });
});

</script>


<style scoped></style>


