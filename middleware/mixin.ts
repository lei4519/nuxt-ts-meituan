import { Vue, Component } from 'nuxt-property-decorator'

@Component
export class testMixin extends Vue {
  created() {
    console.log('mixin created')
  }
  mixin: string = '我是mixin'

  say() {
    alert(this.mixin)
  }
}
