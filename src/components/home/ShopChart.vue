<template>
  <div ref="EcharRef" class="my-charts"></div>
</template>

<script setup>
const EcharRef = ref(null)
const { proxy } = getCurrentInstance()

onMounted(() => {
  const myChart = proxy.$echarts.init(EcharRef.value);
  myChart.setOption({
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: {
      type: 'category',
      inverse: true,
      axisLabel: {
        fontSize: proxy.$echartsSize(12),
        color: "#ffffff"
      },
      axisLine: { show: false },
      axisTick: { show: false },
      data: ['沙溪北区太仓工厂店', '沙溪南区', '沙溪北区工厂', '沙溪北区太仓工厂店', '沙溪北区太仓工厂店', '沙溪南区', '沙溪北区工厂', '沙溪北区太仓工厂店']
    },
    grid: {
      top: proxy.$echartsSize(10),
      bottom: proxy.$echartsSize(10),
      left: proxy.$echartsSize(120),
      show: false
    },
    series: [
      {
        data: [0.55, 0.42, 0.42, 0.4, 0.35, 0.29, 0.2, 0.1],
        type: 'bar',
        showBackground: true,
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
            barBorderRadius: [3, 3, 3, 3]
          },
        },
        barWidth: '65%',
        label: {
          normal: {
            show: true,
            position: 'right',
            fontSize: proxy.$echartsSize(10),
            color: '#ffffff',
            formatter: (params) => {
              return `${params.value}万元`
            }
          }
        }
      }
    ]
  });
});

</script>


<style scoped></style>


