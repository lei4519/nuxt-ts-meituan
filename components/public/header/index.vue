<template>
  <div class="m-header">
    <el-row>
      <el-col>
        <top-bar/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <search-bar/>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TopBar from '~/components/public/header/topbar.vue'
import SearchBar from '~/components/public/header/search-bar.vue'

@Component({
  components: {
    TopBar,
    SearchBar
  }
})
export default class MyHeader extends Vue {}
</script>

<style lang="scss" scoped>
.m-header {
  background-color: #f8f8f8;
  color: #999;
  width: 100%;
  font-size: 12px;
}
</style>
