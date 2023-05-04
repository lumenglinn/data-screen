

<template>
  <div ref="EcharRef" class="my-charts"></div>
</template>

<script setup>
const EcharRef = ref(null)
const { proxy } = getCurrentInstance()

const props = defineProps({
  dataSource: {
    type: Array,
    default: []
  }
})

onMounted(() => {
  const myChart = proxy.$echarts.init(EcharRef.value);
  myChart.setOption({
    xAxis: {
      type: 'category',
      axisLabel: {
        interval: 1,
        textStyle: {
          fontSize: proxy.$echartsSize(10),
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
        fontSize: proxy.$echartsSize(12),
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
      top: proxy.$echartsSize(45),
      bottom: proxy.$echartsSize(30),
      left: proxy.$echartsSize(50),
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

</script>


<style scoped></style>


