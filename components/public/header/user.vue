<template>
  <div class="m-user">
    <template v-if="user">
      欢迎您,
      <span class="username">{{ user }}</span>
      [
      <nuxt-link to="/exit">退出</nuxt-link>]
    </template>
    <template v-else>
      <nuxt-link to="/login" class="login">立即登录</nuxt-link>
      <nuxt-link to="/register" class="register">注册</nuxt-link>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class User extends Vue {
  user: string = ''
}
</script>

<style lang="scss" scoped>
.m-user {
  font-size: 0;
  padding-top: 12px;
  margin-left: 15px;
  > a {
    font-size: 12px;
    margin-left: 10px;
    &.login {
      color: #41b883;
    }
  }
}
</style>
