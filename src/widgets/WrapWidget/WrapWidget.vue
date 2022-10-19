<!--
 * @Description: What's this for
 * @Autor: WangYuan
 * @Date: 2021-12-20 17:09:06
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-14 15:17:04
-->
<template>
  <div class="cnt">
    <div class="cnt-head h5-underline"></div>
    <div class="cnt-body">
      <slot class="nest-none"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "McContainer",
  props: {
    padding: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    $slot: {
      handler() {
        console.log("change slot");
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.cnt {
  border-radius: 10px;
  box-shadow: 0 4px 6px 0 rgba(12, 31, 80, 0.14);

  .cnt-head {
    height: 30px;
    background: url("https://file.qingflow.com/assets/widget/theme/header0.png");
    background-size: 100% 100%;
    font-size: 14px;
    color: #fff;
    letter-spacing: 1px;
  }
  .cnt-body {
    min-height: 40px;
    padding: 10px;
    background: #fff;
  }

  .nest-none {
  }
}
</style>