<template>
  <div class="head-component">
    <h1 class="head-title">Vue后台管理通用系统</h1>
    <el-input
      class="search-input"
      placeholder="请输入内容"
      v-model="searchContent"
      clearable>
    </el-input>
    <div>
      姓名
      <i class="el-icon-setting"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Head extends Vue {
  searchContent: string = '';

}
</script>

<style scoped lang="scss">
.head-component {
  width: 100%;
  height: 100%;
  background-color: #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  .head-title {
    margin: 0px;
    height: 100%;
    line-height: 60px;
  }
  .search-input {
    width: 300px;
  }
}
</style>
