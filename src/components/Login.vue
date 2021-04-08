<template>
  <div class="login">
    <el-form :model="loginForm" ref="loginForm" :rules="loginRules">
      <h2>喵喵商城登录</h2>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.mobile"
          name="loginForm.username"
          placeholder="请输入用户名/手机号"
          auto-complete="on"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          name="password"
          placeholder="请输入密码"
          auto-complete="on"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        mobile: "",
        password: "",
      },

      //表单验证
      loginRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    onSubmit() {
        console.log("submit");
          //let url = this.$forePath + "/dist/loginByPassword"; //1234
          let url = "http://10.249.44.159:8080/login/to_login";
          let parmas = {
            mobile: this.loginForm.mobile,
            password: this.loginForm.password
          };
          this.$http1.post(url, parmas)
            .then((res) => {
              console.log("====================================");
              console.log("登录", res);
              console.log("====================================");
            }) 
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 300px;
}
</style>