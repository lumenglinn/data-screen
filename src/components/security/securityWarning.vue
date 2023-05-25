<!-- 监控预警 -->
<template>
  <div class="wrap security-warning">
    <div class="wrap-title">监控预警</div>
    <div class="wrap-cont">
      <div class="list-table">
        <div class="list-head">
          <div class="list-head-item">级别</div>
          <div class="list-head-item">设备名称</div>
          <div class="list-head-item">描述</div>
          <div class="list-head-item">时间</div>
          <div class="list-head-item">操作</div>
        </div>
        <div class="list-body">
          <swiper :slides-per-view="5" :slides-per-group="5" :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :speed="500" :space-between="5" :direction="'vertical'" :scrollbar="{ draggable: false }" :loop="true"
            :modules="modules" style="height: 8.64167vw" ref="mySwiper">
            <swiper-slide v-for="(item, index) in dataSource" :key="index" @click="switchStatus">
              <div class="list-data">
                <div class="data-item"><img class="alarm-img" src="@/assets/images/security/alarm.png" alt="" />{{
                  item.degree }}</div>
                <div class="data-item">{{ item.equipment }}</div>
                <div class="data-item">{{ item.description }}</div>
                <div class="data-item">{{ item.time }}</div>
                <div class="data-item" v-if="item.operation === 1">
                  <div class="unconfirm">待确认</div>
                </div>
                <div class="data-item" v-if="item.operation === 2">
                  <div class="isconfirm">已确认</div>
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
.security-warning {
  .wrap-cont {
    padding-top: 25px;
    height: 220px;
  }

  .list-body {
    text-align: center;
  }

  .data-item {
    line-height: 34px;
  }

  .data-item:nth-child(4),
  .list-head-item:nth-child(4) {
    width: 32%;
  }

  .data-item,
  .list-head-item {
    width: 17%;
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


