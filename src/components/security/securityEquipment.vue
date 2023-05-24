<!-- 消防设备 -->
<template>
  <div class="wrap security-equipment">
    <div class="wrap-title">消防设备状态</div>
    <div class="wrap-cont">
      <div class="position" @click="handlePosition">位置</div>
      <div class="en-box">
        <div class="en-item">
          <img src="@/assets/images/security/eq1.png" class="en-left" alt="">
          <div class="en-right">
            <div class="en-data"><count-to :start-val="0" :end-val="16.35" class="data" :duration='2500' />℃</div>
            <div>消防栓</div>
          </div>
        </div>
        <div class="en-item margin">
          <img src="@/assets/images/security/eq2.png" class="en-left" alt="">
          <div class="en-right">
            <div class="en-data"><span :class="{ 'success': true }"><count-to :start-val="0" :end-val="51" class="data" :duration='2500' /></span><span class="split" /><span :class="{ 'danger': true }"><count-to :start-val="0" :end-val="123" class="data" :duration='2500' /></span></div>
            <div>点型烟感</div>
          </div>
        </div>
        <div class="en-item margin">
          <img src="@/assets/images/security/eq3.png" class="en-left" alt="">
          <div class="en-right">
            <div class="en-data"><count-to :start-val="0" :end-val="16.35" class="data" :duration='2500' /></div>
            <div>光束烟感</div>
          </div>
        </div>
        <div class="en-item">
          <img src="@/assets/images/security/eq4.png" class="en-left" alt="">
          <div class="en-right">
            <div class="en-data"><count-to :start-val="0" :end-val="16.35" class="data" :duration='2500' /></div>
            <div>点型温感</div>
          </div>
        </div>
        <div class="en-item margin">
          <img src="@/assets/images/security/eq5.png" class="en-left" alt="">
          <div class="en-right">
            <div class="en-data"><count-to :start-val="0" :end-val="16.35" class="data" :duration='2500' /></div>
            <div>排烟阀</div>
          </div>
        </div>
        <div class="en-item two">
          <img src="@/assets/images/security/eq6.png" class="en-left" alt="">
          <div class="en-right">
            <div class="en-data"><count-to :start-val="0" :end-val="16.35" class="data" :duration='2500' /></div>
            <div>防火阀</div>
          </div>
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
.security-equipment {
  .en-box {
    padding: 20px 30px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    align-content: space-between;
  }

  .en-item {
    width: 102px;
    height: 36px;
    padding: 10px 13px;
    background: rgba(16, 45, 44, 0.40);
    border: 1px solid rgba(92, 188, 218, 1);
    box-shadow: inset 0px 0px 12px 6px rgba(92, 188, 218, 0.44);
    border-radius: 6px;
    display: flex;
    align-items: center;
    font-weight: 700;
  }

  .en-item.margin {
    margin-left: 16px;
  }

  .en-item.two {
    width: 175px;

    .en-left {
      margin: 0 50px 0 28px;
    }
  }

  .en-item:nth-child(n+4) {
    margin-top: 14px;
  }

  .en-item:nth-child(n+4) {
    margin-top: 14px;
  }

  .en-left {
    width: 37px;
    height: 37px;
    margin-right: 5px;
  }

  .en-data {
    font-size: 18px;
    color: #36BBC6;
    .success {

    }
    .warn {

    }
    .danger {

    }
  }

  .position {}
}
</style>


