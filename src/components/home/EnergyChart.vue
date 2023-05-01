

<template>
  <div ref="EcharRef" style="width: 330px; height: 145px"></div>
</template>

<script setup>
import { ref } from 'vue'
import * as echarts from "echarts";
const EcharRef = ref(null)

onMounted(() => {
  const myChars = echarts.init(EcharRef.value);
  myChars.setOption({
    xAxis: {
      type: 'category',
      axisLabel: {
        interval: 1,
        textStyle: {
          fontSize: 10,
          color: '#fff'
        }
      },
      axisTick: {
        interval: 'auto'
        // lineStyle: {
        //   color: '#FFFFFF',
        //   width: 1,
        // }
      },
      boundaryGap: false,
      data: ['08:00', '08:00', '10:00', '10:00', '12:00', '12:00', '14:00', '14:00', '16:00', '16:00', '18:00'],
      // show: false,
      // data: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
    },
    yAxis: {
      type: 'value',
      // inverse: true,
      axisLabel: {
        fontSize: 12,
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
      // data: ['沙溪北区太仓工厂店', '沙溪南区', '沙溪北区工厂', '沙溪北区太仓工厂店', '沙溪北区太仓工厂店', '沙溪南区', '沙溪北区工厂', '沙溪北区太仓工厂店']
    },
    grid: {
      top: 45,
      bottom: 30,
      left: 50,
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
        data: [1, 1.2, 1.5, 1.3, 2, 2.5, 2.2, 3, 2.5, 2.1, 2],
        type: 'bar',
        // showBackground: true,
        itemStyle: {
          barBorderRadius: 15,
          // shadowBlur: 3,
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
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

</script>


<style scoped></style>


