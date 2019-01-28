<template>
  <el-row class="top-bar" :gutter="0">
    <el-col :span="4">
      <header-geo/>
    </el-col>
    <el-col :span="6">
      <user/>
    </el-col>
    <el-col :span="14">
      <my-nav/>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import HeaderGeo from '~/components/public/header/geo.vue'
import User from '~/components/public/header/user.vue'
import MyNav from '~/components/public/header/nav.vue'

@Component({
  components: {
    HeaderGeo,
    User,
    MyNav
  }
})
export default class TopBar extends Vue {}
</script>

<style lang="scss" scoped>
.top-bar {
  width: 1190px;
  margin: 0 auto;
}
</style>
