<template>
  <div class="center-box parking-broadcast" v-show="isShow">
    <el-form ref="formDataRef" model="formData" :rules="state.rules" label-width="180px">
      <el-form-item label="广播设备" prop="type">
        <el-checkbox-group v-model="state.formData.type">
          <el-checkbox label="all" name="type">全选</el-checkbox>
          <el-checkbox label="A" name="type">区</el-checkbox>
          <el-checkbox label="B" name="type">区</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item prop="list">
        <el-checkbox-group v-model="state.formData.list">
          <el-checkbox :label="{ item }" name="type" v-for="(item, index) in state.list" :key="index" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item prop="desc">
        <el-input v-model="state.formData.desc" type="textarea" suffix-icon="el-icon-date" />
      </el-form-item>
    </el-form>
    <div class="confirm-btn" @click="handleConfirm">确定</div>
    <div class="confirm-btn" @click="handleConfirm">取消</div>
    <div class="close" @click="handleModel(false)"></div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const isShow = ref(true)
const target = ref(null)
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

const handleModel = (action, index) => {
  isShow.value = action
  target.value = index
}

defineExpose({
  handleModel
})

</script>

<style lang="scss" scoped>
.parking-broadcast {
  height: 788px;

  .center-img {
    width: 781px;
    height: 478px;
  }

  .img-box video {
    width: 100%;
    height: 100%;
  }

  .video-small {
    margin: 24px;
    width: 150px;
    height: 103px;
    position: relative
  }

  .small-img {
    width: 100%;
    height: 100%;
  }

  .open-icon {
    width: 42px;
    height: 37px;
    position: absolute;
    top: 36px;
    left: 54px;
    background: url(@/assets/images/common/open.png);
    background-size: 100%;
  }

  .confirm-btn {
    top: 120px;
    left: 15px;
    width: 98px;
    height: 44px;
    line-height: 44px;
    display: flex;
    align-content: center;
  }
}
</style>


