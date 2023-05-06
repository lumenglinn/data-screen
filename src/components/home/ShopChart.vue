<template>
  <div class="wrap">
    <div class="wrap-title">商铺销售</div>
    <div class="wrap-cont">
      <div class="chart-handle">
        <div class="handle-box">
          <div class="handle-item" :class="{ 'active': timeType === 1 }" @click="switchTimeType(1)">年</div>
          <div class="handle-item" :class="{ 'active': timeType === 1 }" @click="switchTimeType(1)">月</div>
          <div class="handle-item" :class="{ 'active': timeType === 1 }" @click="switchTimeType(1)">日</div>
        </div>
      </div>
      <div ref="EcharRef" class="my-charts"></div>
    </div>
  </div>
</template>

<script setup>
const EcharRef = ref(null)
const { proxy } = getCurrentInstance()
const timeType = ref(1)

const props = defineProps({
  dataSource: {
    type: Object,
    default: {
      yData: [],
      data: []
    }
  }
})

onMounted(() => {
  const myChart = proxy.$echarts.init(EcharRef.value);
  const barOption = {
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: {
      type: 'category',
      inverse: true,
      axisLabel: {
        fontSize: proxy.$echartsSize(14),
        color: "#ffffff"
      },
      axisLine: { show: false },
      axisTick: { show: false },
      data: props.dataSource?.yData
    },
    grid: {
      top: proxy.$echartsSize(70),
      bottom: proxy.$echartsSize(15),
      left: proxy.$echartsSize(160),
      right: proxy.$echartsSize(28),
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
  }
  myChart.setOption(barOption);

  //自动滚动
  var timeOut = setInterval(() => {
    if (barOption.dataZoom[0].endValue == barOption.series[0].data.length) {
      barOption.dataZoom[0].endValue = 7;
      barOption.dataZoom[0].startValue = 0;
    } else {
      barOption.dataZoom[0].endValue = barOption.dataZoom[0].endValue + 1;
      barOption.dataZoom[0].startValue = barOption.dataZoom[0].startValue + 1;
    }
    //重新把配置项给实例对象
    myChart.setOption(barOption);
  }, 2000)

});

const switchTimeType = (val) => {
  timeType.value = val
}

</script>


<style scoped></style>


