<!-- 监控预警 -->
<template>
  <div class="wrap security-warning">
    <div class="wrap-title">危化品车入区记录</div>
    <div class="wrap-cont">
      <div class="list-table">
        <div class="list-head">
          <div class="list-head-item">车牌号</div>
          <div class="list-head-item">卡口编号</div>
          <div class="list-head-item">时间</div>
          <div class="list-head-item">车辆类型</div>
        </div>
        <div class="list-body">
          <swiper :slides-per-view="5" :slides-per-group="1" :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :speed="500" :space-between="0" :direction="'vertical'" :scrollbar="{ draggable: false }" :loop="true"
            :modules="modules" style="height: 8.64167vw" ref="mySwiper">
            <swiper-slide v-for="(item, index) in dataSource" :key="index" @click="viewData">
              <div class="list-data">
                <div class="data-item">{{ item.number }}</div>
                <div class="data-item">{{ item.bayonet }}</div>
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
const emit = defineEmits(['showRecord'])
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
const viewData = () => {
  emit('showRecord')
}
</script>


<style lang="scss" scoped>
.security-warning {
  .wrap-cont {
    padding-top: 25px;
    height: 220px;
  }

  .data-item {
    line-height: 34px;
  }

  .data-item:nth-child(3),
  .list-head-item:nth-child(3) {
    width: 40%;
  }

  .data-item,
  .list-head-item {
    width: 20%;
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
    background: rgba(249, 29, 27, 0.22);
  }

  .alarm-img {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }

  .unconfirm,
  .isconfirm {
    width: 50px;
    height: 20px;
    line-height: 20px;
    background: #0C8FAF;
    text-align: center;
    border-radius: 1px;
    font-size: 14px;
    margin-top: 5px;
  }

  .isconfirm {
    box-shadow: inset 0px 0px 18px 1px rgba(0, 255, 255, 0.59);
    border-radius: 1px;
  }
}
</style>

