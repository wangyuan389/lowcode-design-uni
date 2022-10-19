<!--
 * @Description: 设计页面容器
 * @Autor: WangYuan1
 * @Date: 2022-10-14 15:20:26
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-19 14:58:32
-->
<template>
  <div class="shell">
    <div class="shell-head"></div>
    <div class="shell-body">
      <slot></slot>
    </div>
    <div class="shell-height-tag">
      <div>iPhone8首屏</div>
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
    left: -115px;
    width: 115px;
    height: 1px;
    border-top: 1px dashed #bbb;
    text-align: left;

    div {
      position: absolute;
      top: -17px;
      width: 90px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 4px;
      background: #e3e5e9;
      font-size: 12px;
      font-weight: 400;
      color: #595961;
    }
  }
}
</style>
