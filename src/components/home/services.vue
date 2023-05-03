

<template>
  <div class="services">
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
        <div class="list-data" v-for="(item, index) in       dataSource      " :key="index">
          <div class="data-item">{{ item.no }}</div>
          <div class="data-item">{{ item.name }}</div>
          <div class="data-item time">{{ item.time }}</div>
          <div class="data-item">
            <div class="result" :class="{ 'error': item.result === 1 }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const dataSource = ref([
  { no: '193829199', name: '消防灭火器', time: '2023-01-01 12:00', result: 1 },
  { no: '193829199', name: '员工餐厅', time: '2023-01-01 12:00', result: 1 },
  { no: '193829199', name: '公共场所', time: '2023-01-01 12:00', result: 2 },
  { no: '193829199', name: '办公及生活', time: '2023-01-01 12:00', result: 2 },
  { no: '193829199', name: '出售的商品', time: '2023-01-01 12:00', result: 2 },
])

onMounted(() => {

});

</script>


<style lang="scss" scoped>
.services {
  width: 100%;
  padding-top: 13px;

  .service-head {
    width: 457px;
    margin: 0 auto;
    display: flex;
    line-height: 26px;
    background: #0A3E47;
    border-radius: 4px;
    font-size: 14px;
    color: #ffffff;
  }

  .service-item {
    width: 25%;
    display: flex;
  }

  .service-icon {
    width: 14px;
    height: 8px;
    margin-top: 10px;
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

  .data-item,
  .list-head-item {
    width: 22%;
  }

  .data-item.time,
  .list-head-item.time {
    width: 34%;
  }

  .result {
    width: 14px;
    height: 8px;
    margin: 10px auto 0;
    background: #7ED321;

    &.error {
      background: #E62A44;
    }
  }


  // .run {
  //   position: relative;
  //   padding-left: 30px;

  //   &::before {
  //     content: '';
  //     width: 14px;
  //     height: 8px;
  //     position: absolute;
  //     top: 6px;
  //     left: 0;

  //   }
  // }

  // .failure {
  //   position: relative;
  //   padding-left: 30px;

  //   &::before {
  //     content: '';
  //     width: 14px;
  //     height: 8px;
  //     position: absolute;
  //     top: 6px;
  //     left: 0;
  //     background: #E62A44;
  //   }
  // }

}
</style>


