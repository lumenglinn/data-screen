

<template>
  <div class="center-box security-camera" v-show="isShow">
    <swiper :slides-per-view="5" :slides-per-group="5" :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :speed="500" :space-between="5" :direction="'vertical'" :scrollbar="{ draggable: false }" :loop="true"
      :modules="modules" style="height: 8.64167vw" ref="mySwiper">
      <swiper-slide v-for="(item, index) in dataSource" :key="index" @click="switchStatus">
        <div class="table-box">
          <div class="data-item">{{ item.degree }}</div>
          <div class="data-item">{{ item.equipment }}</div>
          <div class="data-item">{{ item.description }}</div>
          <div class="data-item">{{ item.time }}</div>
          <div class="data-item" v-if="operation === 1">待确认</div>
        </div>
      </swiper-slide>
  </swiper>
  <!-- <div class="table-box">

      </div> -->
    <div class="close" @click="handleModel(false)"></div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
const modules = [Autoplay, Pagination, Navigation, A11y];
const isShow = ref(false)

const handleModel = (action) => {
  isShow.value = action
}

defineExpose({
  handleModel
})

</script>


<style lang="scss" scoped>
.car-center {
  .img-box {
    padding: 55px 37px 0;

    img {
      width: 100%;
    }
  }

  .car-info {
    padding: 26px 38px;
    display: flex;
    justify-content: space-between;

    .car-info-item {
      width: 50%;
    }

    .detail-content {
      padding: 15px 0 0 15px;
    }

    .detail {
      display: flex;
      font-size: 16px;
      font-weight: 700;
      line-height: 30px;
    }

    .label {
      width: 80px;
    }

    .info-title {
      display: block;
      position: relative;
      width: 484px;
      height: 29px;
      line-height: 29px;
      padding-left: 31px;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      background-image: linear-gradient(270deg, rgba(92, 188, 218, 0) 30%, #5cbcda 100%);

      &::before {
        content: "";
        width: 9px;
        height: 18px;
        position: absolute;
        left: 15px;
        top: 5px;
        background-color: #fff;
      }
    }
  }

  .small-img {
    margin: 24px;
    width: 150px;
    height: 103px;
  }
}
</style>


