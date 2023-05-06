

<template>
  <div class="wrap equipment">
    <div class="wrap-title">设备监测</div>
    <div class="equipment-box">
      <div class="equipment-item">
        <div class="item-content">
          <div>总数</div>
          <div class="equipment-data">
            <count-to :start-val="0" :end-val="999" class="data" :duration='2500' />
          </div>
        </div>
      </div>
      <div class="equipment-item">
        <div class="item-content">
          <div>在线率</div>
          <div class="equipment-data">
            <count-to :start-val="0" :end-val="79" class="data" :duration='2500' />%
          </div>
        </div>
      </div>
      <div class="equipment-item">
        <div class="item-content">
          <div>故障</div>
          <div class="equipment-data error">
            <count-to :start-val="0" :end-val="6" class="data" :duration='2500' />
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-cont">
      <div class="list-table equipment">
        <div class="list-head">
          <div class="list-head-item">类型</div>
          <div class="list-head-item">运行</div>
          <div class="list-head-item">故障</div>
        </div>
        <div class="list-body">
          <div class="list-data" v-for="(item, index) in dataSource" :key="index">
            <div class="data-item">{{ item.type }}</div>
            <div class="data-item"><span class="run">{{ item.run }}</span></div>
            <div class="data-item"><span class="failure">{{ item.failure }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import countTo from "@/components/CountTo";
const dataSource = ref([
  { type: '风机', run: '7/23', failure: '0/0' },
  { type: '风机', run: '7/23', failure: '0/4' },
  { type: '风机', run: '7/23', failure: '0/0' },
  { type: '风机', run: '7/23', failure: '0/0' }
])

onMounted(() => {

});

</script>


<style lang="scss" scoped>
.equipment {
  .run {
    position: relative;
    padding-left: 30px;

    &::before {
      content: '';
      width: 14px;
      height: 8px;
      position: absolute;
      top: 6px;
      left: 0;
      background: #7ED321;
    }
  }

  .failure {
    position: relative;
    padding-left: 30px;

    &::before {
      content: '';
      width: 14px;
      height: 8px;
      position: absolute;
      top: 6px;
      left: 0;
      background: #E62A44;
    }
  }

  .equipment-box {
    display: flex;
    justify-content: space-between;
  }

  .equipment-item {
    margin-top: 15px;
    position: relative;
    width: 140px;
    height: 55px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 30px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.59;
      background: rgba(74, 74, 74, 0.61);
      border: 1px solid rgba(147, 226, 239, 1);
      box-shadow: inset 0px 0px 39px 2px rgba(92, 188, 218, 0.82);
    }
  }

  .item-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .equipment-data {
    color: #00BEE2;
    font-size: 18px;
    line-height: 18px;

    &.error {
      color: #FF5959;
    }
  }

  .wrap-cont {
    height: 176px;
  }

}
</style>


