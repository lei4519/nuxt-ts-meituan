import { Vue, Component } from 'vue-property-decorator'

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
