<!--
 * @Description: 设计页面容器
 * @Autor: WangYuan1
 * @Date: 2022-10-14 15:20:26
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-14 17:01:02
-->
<template>
  <div class="shell">
    <div class="shell-head"></div>
    <div class="shell-body">
      <slot></slot>
    </div>
    <div class="shell-height-tag">
      <span>iPhone 8手机高度</span>
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
@import "../../../style/variable";

.shell {
  position: relative;
  width: 375px;
  margin: 70px auto 200px auto;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);

  .shell-head {
    widows: 100%;
    height: 64px;
    background-image: url("../../../assets/phone-head.png");
    background-size: cover;
  }

  .shell-body {
    min-height: 667px;
    background: #fff;
  }

  .shell-height-tag {
    position: absolute;
    top: 731px;
    left: -130px;
    width: 130px;
    height: 1px;
    background: #dedede;
    text-align: left;

    span {
      position: absolute;
      top: -17px;
      font-size: 12px;
      color: $font-color;
    }
  }
}
</style>
