<template>
  <div>
    <header>
      <div class="container">
        <nuxt-link to="/" class="logo">美团</nuxt-link>
        <div class="login-box">
          <span class="tip">已有美团账号?</span>
          <nuxt-link to="/login" class="login-btn">登录</nuxt-link>
        </div>
      </div>
    </header>
    <section>
      <nuxt></nuxt>
    </section>
    <footer>©meituan.com 京ICP证070791号 京公网安备11010502025545号</footer>
  </div>
</template>

<style lang="scss" scoped>
header {
  min-width: 980px;
  border-bottom: 2px solid #2bb8aa;
  color: #666;
  .container {
    position: relative;
    padding: 10px 0;
    text-align: right;
    .logo {
      position: absolute;
      left: 0;
      display: inline-block;
      width: 54px;
      height: 36px;
      background-position: -669px -748px;
      background-image: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
      font-size: 0;
    }
    .login-box {
      display: inline-block;
      line-height: 36px;
      .tip {
        vertical-align: sub;
      }
      .login-btn {
        display: inline-block;
        margin-left: 10px;
        padding: 3px 10px;
        background-image: linear-gradient(to bottom, #2ec3b4, #2db3a6);
        font-size: 12px;
        line-height: 1.7;
        letter-spacing: 0.1em;
        border-width: 0 0 1px;
        border-style: solid;
        border-radius: 2px;
        user-select: none;
        cursor: pointer;
        color: #fff;
      }
    }
  }
}
footer {
  border-top: 1px solid #eee;
  padding-top: 20px;
  text-align: center;
  font-size: 12px;
  color: #999;
}
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class BlankLayout extends Vue {}
</script>
