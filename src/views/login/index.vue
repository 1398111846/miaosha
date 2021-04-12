<template>
  <div class="login">
    <el-card class="login-form-layout">
      <el-form :model="loginForm" ref="loginForm" :rules="loginRules">
        <h2>喵喵商城后台管理系统</h2>
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            name="loginForm.username"
            placeholder="请输入用户名"
            auto-complete="on"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            name="password"
            placeholder="请输入密码"
            auto-complete="on"
            :type="pwdType"
            @keyup.enter.native="onSubmit"
          >
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            style="width: 25%"
            type="primary"
            :loading="loading"
            @click="onSubmit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { isValidUsername } from "../../utils/validate";
import { setCookie, getCookie } from "../../utils/support";
//import { getCookie } from "../../utils/support";

export default {
  name: "login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isValidUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error("密码不能小于3位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
      },
      //表单验证
      loginRules: {
        username: [
          {
            required: true,
            validator: validateUsername,
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            validator: validatePass,
            trigger: "blur",
          },
        ],
      },
      pwdType: "password",
      loading: false,
    };
  },

  created() {
    this.loginForm.username = getCookie("username");
    this.loginForm.password = getCookie("password");
    //console.log(this.loginForm.username, this.loginForm.password);
    if (
      this.loginForm.username === undefined ||
      this.loginForm.username == null ||
      this.loginForm.username === ""
    ) {
      this.loginForm.username = "admin";
    }
    if (
      this.loginForm.password === undefined ||
      this.loginForm.password == null
    ) {
      this.loginForm.password = "";
    }
  },

  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },

    onSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then(() => {
              this.loading = false;
              setCookie("username", this.loginForm.username, 15);
              setCookie("password", this.loginForm.password, 15);
              this.$router.push({ path: "/" });
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("参数验证不合法！");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 500px;
  margin: 160px auto;
}
.el-input {
  width: 300px;
}
</style>