

<template>
  <div class="wrap record">
    <div class="wrap-title">服务质量</div>
    <div class="wrap-cont">
      <div class="list-table">
        <div class="list-head">
          <div class="list-head-item">编号</div>
          <div class="list-head-item">车牌号</div>
          <div class="list-head-item">卡口编号</div>
          <div class="list-head-item time">时间</div>
          <div class="list-head-item">车辆类型</div>
        </div>
        <div class="list-body">
          <swiper :slides-per-view="5" :slides-per-group="5" :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :speed="500" :space-between="5" :direction="'vertical'" :scrollbar="{ draggable: false }" :loop="true"
            :modules="modules" style="height: 7.854167vw" ref="mySwiper">
            <swiper-slide v-for="(item, index) in dataSource" :key="index" class="list-data">
              <div class="data-item">{{ index+1 }}</div>
              <div class="data-item">{{ item.name }}</div>
              <div class="data-item">{{ item.no }}</div>
              <div class="data-item time">{{ item.time }}</div>
              <div class="data-item">小轿车</div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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

</script>


<style lang="scss" scoped>
.record {
  width: 100%;

  .wrap-cont {
    padding-top: 13px;
    height: 231px;
  }

  .service-data {
    margin-left: 9px;
  }

  .data-item {
    line-height: 34px;
  }

  .data-item,
  .list-head-item {
    width: 19%;
  }

  .data-item.time,
  .list-head-item.time {
    width: 24%;
  }
}
</style>


