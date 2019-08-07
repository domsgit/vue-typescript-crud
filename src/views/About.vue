<template>
  <div class="about">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  created() {
    (this as any).getPayloads();
  }
})
export default class AboutPage extends Vue {
  // @Prop() private title!: string;
  title: string = "about";
  getPayloads(): any {
    // console.log(this.$axios);
    // this.$axios.get("/api/payload.json").then((res: any) => {
    //   console.log(res);
    // });
  }
}
</script>

<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
  color: green;
}
</style>
