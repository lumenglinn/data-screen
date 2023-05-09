

<template>
  <div class="wrap services">
    <div class="wrap-title">服务质量</div>
    <div class="wrap-cont">
      <div class="service-head">
        <div class="service-item total">
          <div class="service-icon"></div>
          <div class="service-name">总任务</div>
          <div class="service-data">231</div>
        </div>
        <div class="service-item completed">
          <div class="service-icon"></div>
          <div class="service-name">已完成</div>
          <div class="service-data">231</div>
        </div>
        <div class="service-item incomplete">
          <div class="service-icon"></div>
          <div class="service-name">未完成</div>
          <div class="service-data">231</div>
        </div>
        <div class="service-item fail">
          <div class="service-icon"></div>
          <div class="service-name">不合格</div>
          <div class="service-data">231</div>
        </div>
      </div>
      <div class="list-table equipment">
        <div class="list-head">
          <div class="list-head-item">任务号</div>
          <div class="list-head-item">项目</div>
          <div class="list-head-item time">时间</div>
          <div class="list-head-item">是否合格</div>
        </div>
        <div class="list-body">
          <swiper :slides-per-view="5" :slides-per-group="5" :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :speed="500" :space-between="5" :direction="'vertical'" :scrollbar="{ draggable: false }" :loop="true"
            :modules="modules" style="height: 7.854167vw" ref="mySwiper">
            <swiper-slide v-for="(item, index) in dataSource" :key="index" class="list-data">
              <div class="data-item">{{ item.no }}</div>
              <div class="data-item">{{ item.name }}</div>
              <div class="data-item time">{{ item.time }}</div>
              <div class="data-item">
                <div class="result" :class="{ 'error': item.result === 1 }"></div>
              </div>
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
.services {
  width: 100%;

  .wrap-cont {
    padding-top: 13px;
    height: 231px;
  }

  .service-head {
    width: 457px;
    height: 26px;
    margin: 0 auto 0;
    display: flex;
    line-height: 26px;
    background: rgba(10, 62, 71, 0.8);
    border-radius: 4px;
    font-size: 14px;
    color: #ffffff;
  }

  .service-item {
    width: 25%;
    display: flex;
    font-weight: 200;
  }

  .service-icon {
    width: 14px;
    height: 8px;
    margin-top: 9px;
    margin-left: 7px;
    margin-right: 9px;
    background: #7ED321;
  }

  .completed .service-icon {
    background: #00FFFF;
  }

  .incomplete .service-icon {
    background: #9B9B9B;
  }

  .fail .service-icon {
    background: #E62A44;
  }

  .service-data {
    margin-left: 9px;
  }

  .data-item {
    line-height: 34px;
  }

  .data-item,
  .list-head-item {
    width: 22.3%;
  }

  .data-item.time,
  .list-head-item.time {
    width: 33%;
  }

  .result {
    width: 14px;
    height: 8px;
    margin: 10px auto 0;
    background: #00FFFF;

    &.error {
      background: #E62A44;
    }
  }
}
</style>


