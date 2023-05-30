<!-- 监控预警 -->
<template>
  <div class="wrap parking-oil-warning">
    <div class="wrap-title">违停车辆提醒调度</div>
    <div class="wrap-cont">
      <div class="list-table">
        <div class="list-head">
          <div class="list-head-item">车牌号</div>
          <div class="list-head-item">车位号</div>
          <div class="list-head-item">时间</div>
          <div class="list-head-item">预警类型</div>
          <div class="list-head-item">处置</div>
        </div>
        <div class="list-body">
          <swiper :slides-per-view="5" :slides-per-group="5" :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :speed="500" :space-between="0" :direction="'vertical'" :scrollbar="{ draggable: false }" :loop="true"
            :modules="modules" style="height: 8.64167vw" ref="mySwiper">
            <swiper-slide v-for="(item, index) in dataSource" :key="index" @click="switchStatus(index)">
              <div class="list-data">
                <div class="data-item">{{ item.number }}</div>
                <div class="data-item">{{ item.bayonet }}</div>
                <div class="data-item">{{ item.time }}</div>
                <div class="data-item">{{ item.type }}</div>
                <div class="data-item" v-if="item.disposal === 1">是</div>
                <div class="data-item" v-if="item.disposal === 2">否</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['showConfirm'])
import { reactive } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
const modules = [Autoplay, Pagination, Navigation, A11y];

const props = defineProps({
  dataSource: {
    type: Array,
    default: []
  }
})
const switchStatus = (index) => {
  emit('showConfirm', index)
}
</script>


<style lang="scss" scoped>
.parking-oil-warning {
  .wrap-cont {
    padding-top: 25px;
    height: 220px;
  }

  .data-item {
    line-height: 34px;
  }

  .data-item,
  .list-head-item {
    width: 17%;
  }

  .data-item:nth-child(2),
  .list-head-item:nth-child(2),
  .data-item:nth-child(5),
  .list-head-item:nth-child(5) {
    width: 14%;
  }

  .data-item:nth-child(4),
  .list-head-item:nth-child(4) {
    width: 23%;
  }

  .data-item:nth-child(3),
  .list-head-item:nth-child(3) {
    width: 32%;
  }

  .list-table {
    padding: 0 0;
  }

  .list-head {
    padding: 0 10px 10px;
  }

  .list-data {
    padding: 0 10px;
    line-height: 16px;
    cursor: pointer;
  }

  .list-data:hover {
    background: rgba(55, 123, 136, 0.48);
  }

  .list-data:active {
    background: rgba(20, 127, 244, 0.43);
  }

}
</style>

