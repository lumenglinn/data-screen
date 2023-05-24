<!-- 常用监控 -->
<template>
  <div class="wrap security-monitor">
    <div class="wrap-title">常用监控</div>
    <div class="wrap-cont">
      <div class="monitor-head">
        <div class="online">在线：<count-to :start-val="0" :end-val="2310" class="data" :duration='2500' /></div>
        <div class="online">离线：<count-to :start-val="0" :end-val="2310" class="data" :duration='2500' /></div>
        <div class="position" @click="handlePosition">位置</div>
      </div>
      <div class="monitor-box">
        <div class="monitor-item">
          <div  class="monitor-content"></div>
          <div class="tips">北区热成像</div>
        </div>
        <div class="monitor-item">
          <div  class="monitor-content"></div>
          <div class="tips">北区热成像</div>
        </div>
        <div class="monitor-item">
          <div  class="monitor-content"></div>
          <div class="tips">北区热成像</div>
        </div>
        <div class="monitor-item">
          <div  class="monitor-content"></div>
          <div class="tips">北区热成像</div>
        </div>
        <div class="monitor-item">
          <div  class="monitor-content"></div>
          <div class="tips">北区热成像</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['showPosition'])
import countTo from "@/components/CountTo";

const mySwiper = ref(null)
const props = defineProps({
  dataSource: {
    type: Array,
    default: []
  },
  energyObj: {
    type: Object,
    default: {}
  }
})

onMounted(() => {
  console.log(mySwiper)
});


const handlePosition = () => {
  emit('showPosition')
}
</script>


<style lang="scss" scoped>
.security-monitor {

}
</style>


