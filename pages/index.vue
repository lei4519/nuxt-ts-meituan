<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { testMixin } from '~/middleware/mixin'

@Component
export default class ClassName extends testMixin {}
</script>

<style lang="scss" scoped>
</style>