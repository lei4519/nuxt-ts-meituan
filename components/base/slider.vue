<template>
  <div class="slider">
    <div class="slider-content" ref="sliderBox">
      <slot></slot>
    </div>
    <div class="toggle">
      <div class="prev" @click.stop="prev"></div>
      <div class="next" @click.stop="next"></div>
    </div>
    <ul class="indicator" ref="indicator" v-if="indicator">
      <li
        v-for="(dot, i) in indicatorLen"
        :key="i"
        :class="{'active': index === i}"
        @mouseenter="toggle(i)"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Slider extends Vue {
  @Prop({
    type: Boolean,
    default: true
  })
  indicator!: boolean
  @Prop({
    type: String,
    default: 'fade'
  })
  mode!: string
  @Prop({
    type: Boolean,
    default: false
  })
  loop!: boolean

  index: number = 0
  parentNode: any
  children: any
  indicatorBox: any
  indicatorLen: number = 0
  len: number = 0
  width: number = 0
  flag: boolean = true
  mounted() {
    this.init()
  }
  init(): void {
    this.parentNode = this.$refs.sliderBox as any
    this.children = this.parentNode.children
    this.len = this.indicatorLen = this.children.length
    this.width = this.parentNode.parentNode.offsetWidth
    const isToggle = this.len * this.width > this.width
    isToggle && this.parentNode.parentNode.classList.add('toggle')

    if (this.mode === 'fade') {
      this.parentNode.classList.add('fade')
      this.children[this.index].classList.add('active')
      this.toggle = (i: number): void => {
        i = i < 0 ? this.len - 1 : i > this.len - 1 ? 0 : i
        this.children[this.index].classList.remove('active')
        this.children[i].classList.add('active')
        this.index = i
      }
    } else if (this.mode === 'slider') {
      this.loop && this.cloneLoopNode(-this.width)
      this.parentNode.classList.add('slider')
      this.parentNode.style.width = this.width * this.len + 'px'
      setTimeout(() => {
        this.parentNode.style.transition = 'all .5s'
      }, 16)
    }
  }
  toggle(i: number): void {
    if (this.loop) {
      if (!this.flag) return
      this.flag = false
    }
    if (this.loop) {
      this.index = i
      i += 1
    } else {
      i = Math.min(this.len - 1, Math.max(0, i))
      this.index = i
    }
    this.parentNode.style.transform = `translateX(${-(i * this.width)}px)`
  }
  prev(): void {
    this.toggle(this.index - 1)
  }
  next(): void {
    this.toggle(this.index + 1)
  }
  loopHandle(): void {
    this.flag = true
    if (this.index === this.indicatorLen) {
      this.index = 0
      this.parentNode.style.transition = 'none'
      this.parentNode.style.transform = 'translateX(-542px)'
      setTimeout(() => {
        this.parentNode.style.transition = 'all .5s'
      }, 16)
    } else if (this.index < 0) {
      this.index = this.indicatorLen - 1
      this.parentNode.style.transition = 'none'
      this.parentNode.style.transform = `translateX(${-(
        this.indicatorLen * this.width
      )}px)`
      setTimeout(() => {
        this.parentNode.style.transition = 'all .5s'
      }, 16)
    }
  }
  cloneLoopNode(width: number): void {
    let cloneNodeF = this.parentNode.firstChild.cloneNode()
    let cloneNodeL = this.parentNode.lastChild.cloneNode()
    this.parentNode.insertBefore(cloneNodeL, this.children[0])
    this.parentNode.appendChild(cloneNodeF)
    this.len = this.children.length
    this.parentNode.style.transform = `translateX(${width}px)`
    this.parentNode.addEventListener('transitionend', () => {
      this.loopHandle()
    })
  }
}
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  &.toggle:hover {
    .toggle {
      .next,
      .prev {
        opacity: 1;
      }
    }
  }
  .slider-content {
    height: 100%;
    &.fade {
      .slider-item {
        position: absolute;
        opacity: 0;
        &.active {
          opacity: 1;
        }
      }
    }
    &.slider {
      white-space: nowrap;
      letter-spacing: 0;
      .slider-item {
        display: inline-block;
        letter-spacing: normal;
      }
    }
  }
  .toggle {
    .next,
    .prev {
      transition: opacity 0.5s;
      opacity: 0;
      position: absolute;
      z-index: 1;
    }
    .next {
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(#000, 0.5);
      &::after {
        content: '';
        position: absolute;
        top: 11px;
        left: 9px;
        width: 15px;
        height: 15px;
        border-top: 3px solid #fff;
        border-right: 3px solid #fff;
        transform: rotate(45deg);
      }
    }
    .prev {
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(#000, 0.5);
      &::after {
        content: '';
        position: absolute;
        top: 11px;
        right: 9px;
        width: 15px;
        height: 15px;
        border-top: 3px solid #fff;
        border-left: 3px solid #fff;
        transform: rotate(-45deg);
      }
    }
  }
  .indicator {
    list-style: none;
    position: absolute;
    left: 50%;
    bottom: 8px;
    transform: translateX(-50%);
    font-size: 0;
    > li {
      display: inline-block;
      width: 10px;
      height: 2px;
      margin-right: 10px;
      background-color: #fff;
      opacity: 0.2;
      &::after {
        content: '';
        position: absolute;
        top: -8px;
        bottom: -8px;
        width: 10px;
      }
      &.active {
        opacity: 1;
      }
    }
  }
}
</style>