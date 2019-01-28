<template>
  <div class="life-container">
    <nav class="life-nav">
      <a href="http://waimai.meituan.com" title="美团外卖">美团外卖</a>
      <a href="//maoyan.com" title="猫眼电影">猫眼电影</a>
      <a href="//hotel.meituan.com" title="美团酒店">美团酒店</a>
      <a
        href="//phoenix.meituan.com/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=nav_bar"
        title="民宿／公寓"
      >民宿／公寓</a>
      <a href="//emis.meishi.meituan.com/merchantsSettled" title="商家入驻">商家入驻</a>
      <a href="//gongyi.meituan.com/" title="美团公益">美团公益</a>
    </nav>
    <div class="life-content">
      <dl class="top">
        <dd>
          <slider>
            <div
              class="slider-item"
              style="background-image:url(http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg)"
            ></div>
            <div
              class="slider-item"
              style="background-image:url(http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg)"
            ></div>
            <div
              class="slider-item"
              style="background-image:url(http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg)"
            ></div>
            <div
              class="slider-item"
              style="background-image:url(http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg)"
            ></div>
            <div
              class="slider-item"
              style="background-image:url(https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png)"
            ></div>
          </slider>
        </dd>
        <dd>
          <div
            class="pic-1"
            style="background-image:url(http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
          ></div>
        </dd>
        <dd class="users">
          <div class="avatar">
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg">
          </div>
          <h3 class="username">Hi!你好</h3>
          <a href="javascript:;" class="login">注册</a>
          <a href="javascript:;" class="login">立即登录</a>
        </dd>
      </dl>
      <dl class="bottom">
        <dd>
          <div
            class="pic-2"
            style="background-image:url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
          ></div>
        </dd>
        <dd>
          <div
            class="pic-2"
            style="background-image:url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
          ></div>
        </dd>
        <dd>
          <div
            class="pic-1"
            style="background-image:url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
          ></div>
        </dd>
        <dd class="download-app">
          <div class="qrcode-box">
            <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
          </div>
          <h3 class="app-name">美团APP手机版</h3>
          <p class="sl">
            <span class="red">1元起</span>
            <span class="gary">吃喝玩乐</span>
          </p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Slider from '../base/slider.vue'
@Component({
  components: {
    Slider
  }
})
export default class Life extends Vue {}
</script>

<style lang="scss" scoped>
$colors: #fbc700 #ed1e24 #f04d4e #fdc411 #31bbac #f04d4e;
@for $i from 1 through length($colors) {
  .life-nav > a:nth-child(#{$i}):hover {
    color: nth($colors, $i);
  }
}
.life-container {
  position: relative;
  .life-nav {
    position: absolute;
    top: -45px;
    left: 20px;
    > a {
      color: #222;
      font-weight: 700;
      font-size: 16px;
      margin: 0 20px;
    }
  }
  .life-content {
    .pic-1 {
      width: 100%;
      height: 100%;
      background-size: 150px;
    }
    .pic-2 {
      width: 100%;
      height: 100%;
      background-size: 270px;
    }
    .top {
      margin-top: 10px;
      display: grid;
      grid-template: 240px / 3.4fr 1fr 240px;
      .slider {
        width: 542px;
        .slider-item {
          width: 542px;
          height: 240px;
          transition: all 0.5s;
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: cover;
        }
      }
      dd {
        margin-left: 10px;
        background: #fff;
        &:first-child {
          margin-left: 0;
        }
      }
      .users {
        border: 1px solid #e5e5e5;
        padding-top: 30px;
        .avatar {
          text-align: center;
          margin-bottom: 4px;
          img {
            width: 47px;
            height: 47px;
            border-radius: 50%;
            border: 4px solid #e5e5e5;
          }
        }
        .username {
          font-size: 16px;
          color: #222;
          text-align: center;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 6em;
          margin: 0 auto;
        }
        .login {
          display: block;
          width: 118px;
          margin: 10px auto 15px;
          background-color: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 40px;
          color: #333;
          text-align: center;
          font-size: 14px;
          line-height: 38px;
          &:hover {
            background-color: #f6f6f6;
            transition: background-color 0.5s;
          }
        }
      }
    }
    .bottom {
      box-sizing: border-box;
      margin-top: 10px;
      display: grid;
      grid-template: 165px / 1.7fr 1.7fr 1fr 240px;
      dd {
        margin-left: 10px;
        background: #fff;
        &:first-child {
          margin-left: 0;
        }
      }
      .download-app {
        text-align: center;
        border: 1px solid #e5e5e5;
        .qrcode-box {
          margin-top: 10px;
          img {
            width: 95px;
            height: 95px;
          }
        }
        .app-name {
          font-size: 16px;
          font-weight: 500;
          color: #222;
        }
        .sl {
          font-size: 12px;
          font-weight: 500;
          margin-top: 2px;
          color: #3f3f3f;
          .red {
            color: #ec5330;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
