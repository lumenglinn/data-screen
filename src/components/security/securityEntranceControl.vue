<!-- 门禁控制 -->
<template>
  <div class="wrap security-entrance-control">
    <div class="wrap-title">门禁控制</div>
    <div class="wrap-cont">
      <div class="list-table">
        <div class="list-head">
          <div class="list-head-item">序号</div>
          <div class="list-head-item">位置</div>
          <div class="list-head-item">描述</div>
          <div class="list-head-item time">状态</div>
          <div class="list-head-item">车辆类型</div>
        </div>
        <div class="list-body">
          <swiper :slides-per-view="5" :slides-per-group="5" :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :speed="500" :space-between="5" :direction="'vertical'" :scrollbar="{ draggable: false }" :loop="true"
            :modules="modules" style="height: 8.64167vw" ref="mySwiper">
            <swiper-slide v-for="(item, index) in dataSource" :key="index" @click="viewData">
              <div class="list-data">
                <div class="data-item">{{ index + 1 }}</div>
                <div class="data-item">{{ item.position }}</div>
                <div class="data-item">{{ item.description }}</div>
                <div class="data-item">
                  <div class="handle-box">
                    <div class="handle-item" :class="{ 'active': item.status === 1 }" @click="switchStatus(1)">年</div>
                    <div class="handle-item" :class="{ 'active': item.status === 2 }" @click="switchStatus(2)">月</div>
                  </div>
                </div>
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


