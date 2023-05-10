

<template>
  <div class="wrap car-type">
    <div class="wrap-title">车型流量</div>
    <div class="wrap-cont">
      <div class="type-lists">
        <div class="type-item" v-for="(item, index) in state.typeList" :key="index">
          <div class="type-item-left">
            <img class="car-icon" :src="item.img" alt="">
          </div>
          <div class="type-item-right">
            <div class="type">{{ item.type }}<span class="ratio">{{ item.ratio }}</span></div>
            <count-to :start-val="0" :end-val="item.data" class="num" :duration='3500' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import car1 from '@/assets/images/traffic/car1.png';
import car2 from '@/assets/images/traffic/car2.png';
import car3 from '@/assets/images/traffic/car3.png';
import car4 from '@/assets/images/traffic/car4.png';
import car5 from '@/assets/images/traffic/car5.png';
import car6 from '@/assets/images/traffic/car6.png';
const { proxy } = getCurrentInstance()

const state = reactive({
  typeList: [
    { type: '小客车', img: car1, ratio: '40%', data: 32333 },
    { type: '大客车', img: car2, ratio: '40%', data: 32333 },
    { type: '小货车', img: car3, ratio: '40%', data: 32333 },
    { type: '大客车', img: car4, ratio: '40%', data: 32333 },
    { type: '危化品', img: car5, ratio: '40%', data: 32333 },
    { type: '其他', img: car6, ratio: '40%', data: 32333 }
  ], // 车型

})




const props = defineProps({
  dataSource: {
    type: Array,
    default: []
  }
})




onMounted(() => {

})



</script>


<style lang="scss" scoped>
.car-type {
  // width: 484px;
  .type-lists {
    width: 484px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .type-item {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    // align-items: center;
  }
  .ratio {
    padding-left: 10px;
  }


}
</style>


