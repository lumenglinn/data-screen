

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
      left: 40,
      right: 15,
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
            fontSize: 10,
            color: '#fff'
          }
        },
        boundaryGap: false,
        data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
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
        name: '(人)',
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
        color: '#F2D78D',
        stack: '总量',
        // showSymbol: false,//去除圆点
        // smooth: true, //非折线
        itemStyle: {
          normal: {
            lineStyle: {
              width: 4
            }
          }
        },
        data: [200, 300, 360, 600, 450, 800, 1200, 1600, 1450, 1500, 1780, 1690]
      }
    ]
  });
});

</script>


<style scoped></style>


