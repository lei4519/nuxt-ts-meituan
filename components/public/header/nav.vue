<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl class="my">
          <dd>
            <nuxt-link to="/order">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">抵用券</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">账户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/order">手机APP</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/center">商家中心</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/order">登录商家中心</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">我想合作</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">免费手机开店</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">商家申请开票</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="/site">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烧烤</dd>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烧烤</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="javascript:;">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                >
              </a>
            </dd>
            <dd>
              <a href="javascript:;">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                >
              </a>
            </dd>
            <dd>
              <a href="javascript:;">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                >
              </a>
            </dd>
            <dd>
              <a href="javascript:;">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                >
              </a>
            </dd>
            <dd>
              <a href="javascript:;">
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                >
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class MyNav extends Vue {}
</script>

<style lang="scss" scoped>
.m-nav {
  float: right;
  margin: 0;
  padding: 0;
  z-index: 999;
  ::after {
    content: '';
    display: block;
    clear: both;
  }
  .nav {
    float: right;
    list-style: none;
    > li {
      float: left;
      width: 78px;
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
      text-align: center;
      cursor: pointer;
      a {
        color: #999;
        &:hover {
          color: #31bbac;
        }
      }
      &.list {
        dl {
          background-color: #fff;
          display: none;
          z-index: 999;
          dd {
            line-height: 35px;
            &:hover {
              color: #31bbac;
            }
          }
        }
        &.bd {
          &:hover {
            border-bottom: none;
          }
          dl {
            box-sizing: border-box;
            width: 106px;
            position: relative;
            left: -29px;
            top: -1px;
            border: 1px solid #e5e5e5;
            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
          }
        }
        &.site:hover {
          border-bottom: none;
        }
        .subContainer {
          box-sizing: border-box;
          background-color: #fff;
          padding: 30px 36px 36px 47px;
          width: 1190px;
          position: relative;
          left: -1113px;
          z-index: 999;
          border: 1px solid #e5e5e5;
          display: none;
          text-align: left;
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          &::before {
            content: ' ';
            position: absolute;
            top: -1px;
            right: 0;
            height: 4px;
            width: 76px;
            background: #fff;
          }
          > dl {
            box-sizing: border-box;
            text-align: left;
            display: inline-block !important;
            margin-right: 47px;
            dt {
              margin-bottom: 26px;
              font-size: 14px;
              color: #31bbac;
              text-align: center;
            }
            dd {
              width: 78px;
              display: inline-block;
              text-align: center;
            }
            &.hotel {
              width: 234px;
            }
            &.food {
              width: 156px;
            }
            &.movie {
              width: 90px;
              dd {
                width: 100%;
              }
            }
            &.app {
              width: 380px;
              flex: 1;
              text-align: center;
              dd {
                width: 60px;
                height: 73px;
                line-height: 73px;
                text-align: center;
                margin: 0 8px;
                img {
                  width: 60px;
                  height: 60px;
                }
              }
            }
          }
        }
        &:hover {
          border: 1px solid #e5e5e5;
          border-top: none;
          background-color: #fff;

          > dl {
            display: block;
            border: 1px solid #e5e5e5;
            position: relative;
            top: -1px;
            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            &.my {
              width: 76px;
              left: -1px;
            }
            &::before {
              content: ' ';
              display: block;
              background-color: #fff;
              height: 4px;
              width: 76px;
              position: absolute;
              top: -1px;
              right: 0;
            }
          }
          .subContainer {
            display: flex;
          }
        }
      }
    }
  }
}
</style>
