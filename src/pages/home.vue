<template>
  <div class="register-page">
    222
    <a href="tel:4008040080" class="call"></a>
    <!-- <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="formData.phone" name="phone" placeholder="请输入手机号" maxlength="11" type="number" :rules="rules.phone" clearable />
        <van-field v-model="formData.smsCode" name="smsCode" placeholder="请输入验证码" maxlength="6" type="number" :rules="rules.smsCode" clearable>
          <template #button>
            <Sms-code-btn v-model="codeFlag" @click="getSmsCode"></Sms-code-btn>
          </template>
        </van-field>
        <van-field v-model="formData.userName" name="userName" placeholder="请输入姓名" :rules="rules.userName" clearable />
        <van-field v-model="formData.idCard" name="idCard" placeholder="请输入身份证号码" :rules="rules.idCard" clearable />
        <div class="protocol-box flex-box flex-ver-v">
          <div>
            <van-checkbox @change="changeCheck" :disabled="checkDisable" v-model="isCheck" :icon-size="$px2vw(14)" shape="square"></van-checkbox>
          </div>
          <div class="protocol-text">已阅读并同意<span class="t-color-info" @click="protocolView">《推广业务承诺书及隐私政策》</span></div>
        </div>
        <div class="submit-btn">
          <van-button round block type="primary" native-type="submit" :loading="loading">登录/注册</van-button>
        </div>
      </van-cell-group>
    </van-form> -->
    <!-- <TPdfViewer ref="pdfViewer"></TPdfViewer> -->
  </div>
</template>

<script setup>
  // import store from '@/store/index'
  // import { isPhone, isIdCard } from '@/common/formValidate.js'
  // import { setToken, isLogin } from '@/common/auth'
  // import { getCode } from '@/common/wechat'
  // import { objToUrl } from '@/common/utils'

  // const APPID = import.meta.env.VITE_APPID
  // const ENV = import.meta.env.VITE_ENV
  // const userInfo = store.user()
  // const { proxy } = getCurrentInstance() // vue实例
  // const router = useRouter() // 路由
  // const route = useRoute()
  // const { code, identifyCode, source } = route.query
  // const { pathname, origin } = window.location

  // const codeFlag = ref(false) // 短信验证码
  // const isCheck = ref(false) // 勾选协议
  // const loading = ref(false)

  // 若缓存有从缓存取
  // const sessionObj = sessionStorage.getItem('registerObj')
  // 响应数据
  // let formData = reactive(
  //   sessionObj
  //     ? JSON.parse(sessionObj)
  //     : {
  //         userName: '',
  //         smsCode: '',
  //         phone: '',
  //         idCard: ''
  //       }
  // )
  // sessionObj && sessionStorage.removeItem('registerObj')

  // const rules = reactive({
  //   phone: [
  //     { required: true, message: '请输入手机号' },
  //     { validator: isPhone, message: '请输入正确的手机号', trigger: 'onBlur' }
  //   ],
  //   smsCode: [{ required: true, message: '请输入验证码' }],
  //   userName: [{ required: true, message: '请输入姓名' }],
  //   idCard: [
  //     { required: true, message: '请输入身份证号码' },
  //     { validator: isIdCard, message: '请输入正确的身份证号码', trigger: 'onBlur' }
  //   ]
  // })

  // 生命周期
  // onMounted(() => {
    // if (isLogin()) {
    //   router.push('/home')
    // }
    // if (route.query && route.query.isCheck) {
    //   isCheck.value = true
    //   checkDisable.value = true
    // }
  // })

  // methods
  // 提交
  // async function onSubmit() {
  //   if (!isCheck.value) {
  //     return proxy.$toast({
  //       message: '请阅读并勾选相关协议'
  //     })
  //   }
  //   const params = {
  //     ...formData,
  //     appId: APPID,
  //     code,
  //     source: source || 2,
  //     isHandlingErr: true
  //   }
  //   loading.value = true
  //   const res = await proxy.$http('post', 'register', params)
  //   if (res.head && res.head.resCode === '000000') {
  //     const { token, userid, entUser } = res.data
  //     if (token) {
  //       setToken(token)
  //       userInfo.setUseInfo(userid, entUser)
  //       if (identifyCode) {
  //         bindPerson()
  //       } else {
  //         jumpHome()
  //       }
  //     }
  //   } else {
  //     loading.value = false
  //     const query = Object.assign({}, route.query)
  //     delete query.code
  //     delete query.state
  //     sessionStorage.setItem('registerObj', JSON.stringify(formData))
  //     // 后端报错
  //     proxy.$dialog
  //       .alert({
  //         message: res.head.resMsg,
  //         confirmButtonText: '返回修改'
  //       })
  //       .then(() => {
  //         getCode(`${origin}${pathname}${objToUrl(query)}`)
  //       })
  //       .catch(() => {})
  //   }
  // }

  // 绑定邀请关系
  // async function bindPerson() {
  //   const res = await proxy.$http('post', 'bindPerson', { identifyCode })
  //   if (res.head && res.head.resCode === '000000') {
  //     jumpHome()
  //   }
  // }

  // const jumpHome = () => {
  //   proxy.$toast.success('注册成功')
  //   setTimeout(() => {
  //     router.push('/home')
  //   }, 1500)
  // }

  // 协议预览
  // const pdfViewer = ref(null)
  // const checkDisable = ref(false)
  // const changeCheck = (val) => {
  //   if (val && checkDisable.value === false) {
  //     protocolCheck()
  //   }
  // }
  // function protocolCheck(code) {
  //   sessionStorage.setItem('registerObj', JSON.stringify(formData)) // 用于处理保存已填界面，跳转后，数据丢失问题
  //   router.push({
  //     path: '/Protocol',
  //     query: { noAuth: 1 }
  //   })
  // }
  // const protocolView = () => {
  //   sessionStorage.setItem('registerObj', JSON.stringify(formData)) // 用于处理保存已填界面，跳转后，数据丢失问题
  //   pdfViewer.value.showPdf({
  //     code: `${
  //       ENV === 'production' ? 'https://oss-bucket-prod-pub.oss-cn-shenzhen.aliyuncs.com' : 'https://oss-bucket-test-pub01.oss-cn-shenzhen.aliyuncs.com'
  //     }/prod/supply/template/market/%E6%8E%A8%E5%B9%BF%E4%B8%9A%E5%8A%A1%E6%89%BF%E8%AF%BA%E4%B9%A6%E5%8F%8A%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96.pdf`
  //   })
  // }

  // 获取短信验证码
  // async function getSmsCode() {
  //   const { phone } = formData
  //   if (!phone) {
  //     return proxy.$toast({
  //       message: '请输入手机号'
  //     })
  //   }
  //   if (!codeFlag.value) {
  //     const res = await proxy.$http('post', 'sendSmsCode', phone)
  //     if (res.head.resCode === '000000') {
  //       codeFlag.value = true
  //     }
  //   }
  // }
</script>

<style lang="scss" scoped>

</style>
