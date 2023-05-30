<template>
  <div ref="EcharRef" class="my-charts parking-space-chart"></div>
</template>

<script setup>
const { proxy } = getCurrentInstance()
const EcharRef = ref(null)
const emit = defineEmits(['updateData'])
const timeType = ref(2)
const energyType = ref(1)
let myChart, chartOption

const props = defineProps({
  dataSource: {
    type: Array,
    default: []
  }
})

defineExpose({
  timeType,
  energyType
})

// 重新赋值
watch(() => props.dataSource, (newVal, oldVal) => {
  setEchartsOption()
}, { deep: true })

onMounted(() => {
  myChart = proxy.$echarts.init(EcharRef.value);
  setEchartsOption()
  window.addEventListener('resize', myChart.resize)
})


const setEchartsOption = () => {
  chartOption = {
    tooltip: {
      trigger: 'item'
    },
    // legend: {
    //   top: '5%',
    //   left: 'center'
    // },
    series: [
      {
        name: '性别',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '男' },
          { value: 735, name: '女' },
        ]
      }
    ]
  }
  myChart.setOption(chartOption)
}


</script>


<style lang="scss" scoped>
.parking-space-chart {
  width: 100%;
  height: 100%;
}
</style>

