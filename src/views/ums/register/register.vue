<template>
  <div class="register">
    <el-card class="registerForm-form-layout">
      <el-form :model="registerForm" ref="registerForm" :rules="registerRules">
        <h2>喵喵商城管理员注册</h2>
        <el-form-item prop="username">
          <el-input
            v-model="registerForm.username"
            name="registerForm.username"
            placeholder="请输入用户名"
            auto-complete="on"
          ></el-input>
        </el-form-item>

        <el-form-item prop="nickName">
          <el-input
            v-model="registerForm.nickName"
            name="registerForm.nickName"
            placeholder="请输入姓名"
            auto-complete="on"
          ></el-input>
        </el-form-item>

        <el-form-item prop="email">
          <el-input
            v-model="registerForm.email"
            name="registerForm.email"
            placeholder="请输入邮箱"
            auto-complete="on"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="registerForm.password"
            name="registerForm.password"
            placeholder="请输入密码"
            auto-complete="on"
            :type="pwdType"
            @keyup.enter.native="onSubmit"
          >
          </el-input>
        </el-form-item>

        <el-form-item prop="note">
          <el-input
            v-model="registerForm.note"
            name="registerForm.note"
            placeholder="备注"
            auto-complete="on"
            type="textarea"
            :rows="5"
            style="width: 300px"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            style="width: 25%"
            type="primary"
            :loading="loading"
            @click="onSubmit"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { isValidUsername } from "../../../utils/validate";
import {createAdmin} from "../../../api/login"
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
      registerForm: {
        username: "",
        nickName: "",
        note: "",
        email: "",
        password: "",
        icon: "cnm",
      },
      //表单验证
      registerRules: {
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

  

  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },

    onSubmit() {
        createAdmin(this.registerForm).then(() => {
            this.$message({
                message:'注册成功',
                type:'success'
            })
        })
    }
   
  },
};
</script>

<style scoped>
.registerForm-form-layout {
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