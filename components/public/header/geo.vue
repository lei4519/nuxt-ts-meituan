<template>
  <div class="m-geo">
    <i class="el-icon-location"/>北京
    <nuxt-link class="changeCity" to="changeCity">切换城市</nuxt-link>[ 香河 廊坊 天津 ]
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class HeaderGeo extends Vue {}
</script>

<style lang="scss" scoped>
.m-geo {
  color: #666;
  padding-top: 12px;
  .changeCity {
    margin: 0 4px;
    background-color: #f4f4f4;
    border: 1px solid #e5e5e5;
    color: #666;

    &:hover {
      color: #41b883;
    }
  }
}
</style>
