<template>
  <div class="center-box security-fire" v-show="isShow">
    <div class="wrap">
      <div class="wrap-title">离线相机</div>
    </div>
    <div class="center-table">
      <div class="list-table">
        <div class="list-head">
          <div class="list-head-item">分区</div>
          <div class="list-head-item">位置</div>
          <div class="list-head-item">描述</div>
          <div class="list-head-item">报警时间</div>
          <div class="list-head-item">IP号</div>
        </div>
        <div class="list-body">
          <swiper :slides-per-view="5" :slides-per-group="5" :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :speed="500" :space-between="5" :direction="'vertical'" :scrollbar="{ draggable: false }" :loop="true"
            :modules="modules" style="height: 8.64167vw" ref="mySwiper">
            <swiper-slide v-for="(item, index) in dataSource" :key="index" @click="viewData">
              <div class="list-data">
                <div class="data-item">{{ item.area }}</div>
                <div class="data-item">{{ item.position }}</div>
                <div class="data-item">{{ item.description }}</div>
                <div class="data-item">{{ item.time }}</div>
                <div class="data-item">{{ item.IP }}</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
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

const handleModel = (action) => {
  isShow.value = action
}

defineExpose({
  handleModel
})

</script>


<style lang="scss" scoped>
.security-fire {}
</style>


