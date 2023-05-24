<!-- 门禁出入记录 -->
<template>
  <div class="wrap security-entrance-control">
    <div class="wrap-title">门禁出入记录</div>
    <div class="wrap-cont">
      <div class="list-table">
        <div class="list-head">
          <div class="list-head-item">工号卡</div>
          <div class="list-head-item">姓名</div>
          <div class="list-head-item">时间</div>
          <div class="list-head-item">出/入</div>
        </div>
        <div class="list-body">
          <swiper :slides-per-view="5" :slides-per-group="5" :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :speed="500" :space-between="5" :direction="'vertical'" :scrollbar="{ draggable: false }" :loop="true"
            :modules="modules" style="height: 8.64167vw" ref="mySwiper">
            <swiper-slide v-for="(item, index) in dataSource" :key="index" @click="viewData">
              <div class="list-data">
                <div class="data-item">{{ item.number }}</div>
                <div class="data-item">{{ item.name }}</div>
                <div class="data-item">{{ item.time }}</div>
                <div class="data-item">{{ item.type }}</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['viewData'])
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
const switchStatus = () => {
  // emit('viewData')
}
</script>


<style lang="scss" scoped>
.security-entrance-control {
  // width: 100%;

  .wrap-cont {
    padding-top: 25px;
    height: 220px;
  }

  .list-body {
    // padding: 0 10px;
    text-align: center;
  }

  .data-item {
    line-height: 34px;
  }

  .data-item:nth-child(1),
  .list-head-item:nth-child(1) {
    width: 14%;
  }

  .data-item,
  .list-head-item {
    width: 18%;
  }

  .data-item.time,
  .list-head-item.time {
    width: 30%;
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
}
</style>


