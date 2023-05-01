

<template>
  <div ref="EcharRef" style="width: 330px; height: 170px"></div>
</template>

<script setup>
import { ref } from 'vue'
import * as echarts from "echarts";
const EcharRef = ref(null)

// defineProps({
//   cusOption: Object,
// })

onMounted(() => {
  const myChars = echarts.init(EcharRef.value);
  myChars.setOption({
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
      top: 50,
      bottom: 25,
      left: 50,
      right: 15,
      show: false
    },
    axisTick: {
      // length: -2,
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
            fontSize: 10,
            color: '#fff'
          }
        },
        boundaryGap: false,
        data: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
        axisLine: {
          lineStyle: {
            color: '#FFFFFF',
            width: 1,
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
            fontSize: 12,
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
        color: '#93E2EF',
        stack: '总量',
        showSymbol: false,//去除圆点
        smooth: true, //非折线
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
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
              width: 4
            }
          }
        },
        data: [20, 40, 30, 45, 55, 50, 40, 20, 25, 30, 25, 10]
      }
    ]
  });
});

</script>


<style scoped></style>


