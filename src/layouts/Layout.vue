<template>
  <div class="Layout">
    <el-container class="container">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="100px">Aside</el-aside>
        <el-container>
          <el-main>
            <slot></slot>
          </el-main>
          <el-footer class="copyright">
            版权所有 © 2019-{{ currentYear }}
            <a
              class="github-link"
              href="https://github.com/domsgit/vue-typescript-crud"
            >
              domsgit/vue-typescript-crud
            </a>
            授权许可遵循MIT licence
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Layout extends Vue {
  currentYear: number = new Date().getFullYear();
}
</script>

<style scoped lang="scss">
.Layout {
  width: 100%;
  height: 100%;
  .container {
    height: 100%;
  }
  .copyright {
    line-height: 60px;
    text-align: center;
    .github-link {
      text-decoration: none;
    }
    .github-link:hover {
      text-decoration: underline;
    }
  }
}
</style>
