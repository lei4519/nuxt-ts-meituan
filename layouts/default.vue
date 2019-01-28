<template>
  <el-container class="layout-default">
    <el-header>
      <my-header/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import MyHeader from '~/components/public/header/index.vue'

@Component({
  components: {
    MyHeader
  }
})
export default class DefaultLayouts extends Vue {}
</script>

<style lang="scss">
.layout-default {
  -webkit-font-smoothing: antialiased;
  font-family: '-apple-system', BlinkMacSystemFont, Roboto, 'Helvetica Neue',
    'MIcrosoft YaHei', sans-serif !important;
  background-color: #f8f8f8;
  .el-header,
  .el-main,
  .el-footer {
    height: auto !important;
    width: 1190px;
    margin: 0 auto;
    padding: 0;
    overflow: unset;
  }
  .el-header {
    width: 100%;
  }
}
</style>
