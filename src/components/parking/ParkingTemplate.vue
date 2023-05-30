<template>
  <div class="center-box parking-template" v-show="isShow">
    <div class="long-list">
      <div class="list-item" v-for="(item, index) in state.list" :key="index" @click="selectTemplate(item)">
        <div class="list-label">模板{{ index + 1 }}</div>
        <div class="list-value">{{ item }}</div>
      </div>
    </div>
    <div class="confirm-btn" @click="handleSave">保存</div>
    <div class="confirm-btn" @click="handleUse">使用</div>
    <div class="close" @click="handleModel(false)"></div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const isShow = ref(false)
const target = ref(null)
const template = ref(null)

const emit = defineEmits(['updateTemplate'])
const state = reactive({
  list: ['123234', '245666', '343666'],
  formData: {
    type: [],
    list: [],
    desc: ''
  },
  rules: [
    // subject: [{ required: true, message: '请输入补签主题', trigger: 'blur' }],
  ]
})

const selectTemplate = (val) => {
  template.value = val
}

const handleSave = (val) => {
}

const handleUse = (val) => {
  emit('updateTemplate', template.value )
}

const handleModel = (action, index) => {
  isShow.value = action
  target.value = index
}

defineExpose({
  handleModel
})

</script>

<style lang="scss" scoped>
.parking-template {
  height: 788px;

}
</style>


