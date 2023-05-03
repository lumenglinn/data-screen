

<template>
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
</template>

<script setup>
import { ref } from 'vue'
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

}
</style>


