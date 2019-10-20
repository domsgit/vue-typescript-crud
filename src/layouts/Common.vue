<template>
  <div class="common">
    <Layout>
      <transition name="move" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Layout from "./Layout.vue";

@Component({
  components: {
    Layout
  }
})
export default class Common extends Vue {}
</script>

<style scoped lang="less">
.common {
  width: 100%;
  height: 100%;
}
</style>
