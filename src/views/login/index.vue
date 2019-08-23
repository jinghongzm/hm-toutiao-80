<template>
  <div class="container">
    <el-card class="my-card">
      <img src="../../assets/images/logo_index.png" alt />
      <el-form :model="loginfrom">
        <el-form-item>
          <el-input v-model="loginfrom.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginfrom.code" placeholder="请输入密码" style='width:266px;margin-right:10px'></el-input>
          <el-button type="primary">验证码</el-button>
        </el-form-item>
         <el-form-item>
              <el-checkbox :value=true>我已阅读并同意用户协议和隐私条款</el-checkbox>
         </el-form-item>
      <el-form-item>
             <el-button type="primary" style="width:100%">登录</el-button>
      </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginfrom: {
        mobile: "",
        code: ""
      }
    };
  }
};
</script>

<style lang='less' scoped>
.container {
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .my-card {
    width: 400px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto 20px;
    }
  }
}
</style>
