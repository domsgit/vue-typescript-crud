<template>
  <div class="login-page">
    <div class="login-form-box">
      <el-row justify="center" align="middle">
        <el-col
          :xs="{ span: 24, offset: 0 }"
          :sm="{ span: 16, offset: 4 }"
          :md="{ span: 10, offset: 7 }"
          :lg="{ span: 8, offset: 8 }"
          :xl="{ span: 8, offset: 8 }"
        >
          <el-form
            class="login-form"
            label-position="left"
            label-width="80px"
            :model="formLogin"
            :rules="rules"
            ref="ruleForm"
          >
            <h1 class="title center">Vue后台管理通用系统</h1>
            <h2 class="subtitle center">登录</h2>
            <el-form-item label="邮箱" prop="email">
              <el-input
                :show-word-limit="true"
                clearable
                v-model="formLogin.email"
              >
                <el-tooltip
                  slot="append"
                  class="item"
                  effect="dark"
                  content="邮箱为3-25位"
                  placement="top-end"
                >
                  <el-button icon="el-icon-info"></el-button>
                </el-tooltip>
              </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                :show-password="true"
                :show-word-limit="true"
                type="password"
                clearable
                v-model="formLogin.password"
              >
                <el-tooltip
                  slot="append"
                  class="item"
                  effect="dark"
                  content="密码为3-25位"
                  placement="top-end"
                >
                  <el-button icon="el-icon-info"></el-button>
                </el-tooltip>
              </el-input>
            </el-form-item>
            <el-form-item class="center">
              <el-button type="primary" @click="login">登陆</el-button>
              <el-button @click="register">去注册</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { FormLoginRegister } from "@/models/index";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { removeNull } from "../utils/common";

const { log, error } = console;

@Component
export default class LoginPage extends Vue {
  formLogin: FormLoginRegister = {
    email: null,
    password: null
  };
  rules = {
    email: [
      { required: true, message: "请输入账号", trigger: "blur" },
      { min: 3, max: 25, message: "长度在 3 到 25 个字符", trigger: "blur" }
    ],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 3, max: 25, message: "长度在 3 到 25 个字符", trigger: "blur" }
    ]
  };
  mounted() {
    log(this.$route.params);
  }
  login() {
    console.log("login", this.formLogin);
    const { password, email } = this.formLogin;

    (this.$refs.ruleForm as any).validate((valid: any) => {
      if (valid) {
        (this as any).$http
          .post(this.$urls.login, {
            user: {
              password,
              email
            }
          })
          .then((res: any) => {
            log(res);
            const {
              data: {
                user: { token }
              }
            } = res;
            if (token) {
              localStorage.setItem("token", token);
              this.$router.push({ name: "CrudDemo", params: {} });
            }
          })
          .catch((error: any) => {
            const {response: {status}} = error;
            console.log(error)
            console.log(status)
            
          });
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }
  register() {
    this.$router.push({ name: "Register", params: removeNull(this.formLogin) });
  }
}
</script>

<style scoped lang="less">
.login-page {
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & .login-form-box {
    width: 100%;
    .title {
      font-size: 1.5rem;
    }
    .subtitle {
      font-size: 1rem;
    }
  }
  & .center {
    text-align: center;
  }
  /deep/ .el-input-group__append,
  /deep/ .el-input-group__prepend {
    background-color: transparent;
    border: none;
  }
}
</style>
