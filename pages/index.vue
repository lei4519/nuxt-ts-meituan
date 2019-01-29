<template>
  <div class="index-container">
    <el-row class="banner-container">
      <el-col :span="5">
        <banner/>
      </el-col>
      <el-col :span="19">
        <life/>
      </el-col>
    </el-row>
    <el-row class="scenes-container container">
      <el-col :span="24">
        <div class="nav-container">
          <dl>
            <dt class="nav-item title">有格调</dt>
            <dd class="nav-item">全部</dd>
          </dl>
        </div>
        <div class="quality-area">
          <a href="javascript:;" class="quality-card" v-for="i in 6" :key="i">
            <div class="quality-img">
              <img
                src="http://p1.meituan.net/msmerchant/5dd98b8418200da23e7f163b2aacc98a4998250.jpg@414w_234h_1e_1c"
              >
            </div>
            <div class="quality-info">
              <div class="title" title="大教堂蛋糕 Kathedral（王府中环店）">大教堂蛋糕 Kathedral（王府中环店）</div>
              <div class="sub-title" title="饮品7选1">饮品7选1</div>
              <div class="price-info">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">45</span>
                </span>
                <span class="old-price">门市价¥58</span>
                <span class="sold bottom-right-info">王府井/东单</span>
              </div>
            </div>
          </a>
        </div>
      </el-col>
    </el-row>
    <el-row class="maoyan-container container">
      <el-col :span="24">
        <div class="nav-container">
          <dl>
            <dt class="nav-item title">猫眼电影</dt>
            <dd class="nav-item">正在热映</dd>
            <dd class="nav-item">即将上映</dd>
          </dl>
          <div class="more">全部 &gt;</div>
        </div>
        <div class="maoyan-area">
          <slider mode="slider">
            <div class="slider-item">
              <a href="javascript:;" v-for="i in 5" :key="i">
                <img
                  src="//p1.meituan.net/movie/426f1f3f1b145f763b75a60c7c39c44a535093.jpg@267w_371h_1e_1c"
                  class="image"
                >
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png"
                  class="film-mark"
                >
                <div class="film-info">
                  <p class="film-score">
                    观众评
                    <b>9.2</b>
                  </p>
                  <p class="film-name">大黄蜂</p>
                  <span class="buy-ticket">购票</span>
                </div>
              </a>
            </div>
            <div class="slider-item">
              <a href="javascript:;" v-for="i in 2" :key="i">
                <img
                  src="//p1.meituan.net/movie/426f1f3f1b145f763b75a60c7c39c44a535093.jpg@267w_371h_1e_1c"
                  class="image"
                >
                <img
                  src="//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png"
                  class="film-mark"
                >
                <div class="film-info">
                  <p class="film-score">
                    观众评
                    <b>9.2</b>
                  </p>
                  <p class="film-name">大黄蜂</p>
                  <span class="buy-ticket">购票</span>
                </div>
              </a>
            </div>
          </slider>
        </div>
      </el-col>
    </el-row>
    <el-row class="zhenguo-container container">
      <el-col :span="24">
        <div class="nav-container"></div>
        <div class="zhenguo-area"></div>
      </el-col>
    </el-row>
    <el-row class="recommend-container container">
      <el-col :span="24">
        <div class="nav-container"></div>
        <div class="recommend-area"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Banner from '~/components/index/menu.vue'
import Life from '~/components/index/life.vue'
import Slider from '~/components/base/slider.vue'

@Component({
  components: {
    Banner,
    Life,
    Slider
  }
})
export default class Main extends Vue {}
</script>

<style lang="scss" scoped>
.hover-trigon {
  position: relative;
}
.container {
  margin: 40px auto;
  .nav-container {
    width: 100%;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    color: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    position: relative;
    > dl {
      font-size: 0;
      .nav-item {
        display: inline-block;
        font-size: 13px;
        padding: 0 5px;
        cursor: pointer;
        text-transform: uppercase;
        position: relative;
      }
      > dd {
        &:hover {
          &::after {
            display: block;
          }
        }
        &::after {
          display: none;
          position: absolute;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 7px solid #fff;
          content: ' ';
          width: 2px;
          height: 0;
          top: 37px;
          left: 0;
          right: 0;
          margin: auto;
        }
      }
      .title {
        font-size: 16px;
        margin: 0 10px 0 13px;
      }
    }
    .more {
      position: absolute;
      top: 0;
      right: 12px;
      font-size: 13px;
    }
  }
}
.scenes-container {
  .nav-container {
    background-color: rgb(190, 164, 116);
    background-image: linear-gradient(
      to right,
      rgb(194, 176, 142) 3%,
      rgb(190, 164, 116) 100%
    );
  }
  .quality-area {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 11px 10px 10px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-sizing: border-box;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    .quality-card {
      box-sizing: border-box;
      padding: 10px;
      width: 33.33%;
      height: 314px;
      background: #fff;
      transition: background-color 0.5s;
      border-radius: 4px;
      &:hover {
        background-color: #f4f4f4;
      }
      .quality-img {
        background: url(//p0.meituan.net/codeman/ae846a35c5f42565206c3c7b47be3a5310601.png)
          50% 50%;
        background-size: cover;
        max-width: 100%;
        width: 100%;
        height: 208px;
        margin-bottom: 11px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }
      }
      .quality-info {
        .title {
          font-size: 16px;
          color: #222;
          height: 22px;
          line-height: 22px;
          margin-bottom: 8px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
        }
        .sub-title {
          font-size: 12px;
          color: #999;
          line-height: 18px;
          height: 18px;
          margin-bottom: 7px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .price-info {
          height: 27px;
          overflow: hidden;
          margin-bottom: 10px;
          .price-symbol {
            font-size: 14px;
            color: #be9e4d;
            font-weight: 500;
            letter-spacing: -0.5px;
          }
          .current-price {
            font-size: 22px;
            color: #be9e4d;
            margin-right: 6px;
            letter-spacing: -0.8px;
          }
          .old-price {
            font-size: 12px;
            color: #999;
            text-decoration: line-through;
          }
          .bottom-right-info {
            font-size: 12px;
            float: right;
            color: #999;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
.maoyan-container {
  .nav-container {
    background: linear-gradient(
        to right,
        rgb(250, 60, 104) 2%,
        rgb(254, 70, 77) 97%
      )
      rgb(250, 60, 104);
  }
  .maoyan-area {
    background-color: #fff;
    padding: 20px 10px;
    border: 1px solid #e5e5e5;
    border-top: 0;
    .slider {
      width: 1168px;
      .slider-item {
        > a {
          display: inline-block;
          height: 297px;
          width: 214px;
          margin-right: 20px;
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: 50%;
          position: relative;
          &:first-child {
            margin-left: 10px;
          }
          &:last-child {
            margin-right: 10px;
          }
          .image {
            width: 100%;
            border-radius: 4px;
          }
          .film-mark {
            position: absolute;
            top: 10px;
            z-index: 99;
            left: -6px;
            height: 20px;
            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
            width: auto;
            border: 0;
          }
          .film-info {
            height: 100px;
            width: 100%;
            position: absolute;
            bottom: 0;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            background-image: linear-gradient(
              -180deg,
              rgba(0, 0, 0, 0) 0,
              rgba(29, 45, 55, 0.8) 99%
            );
            p {
              line-height: normal;
            }
            .film-score {
              font-size: 12px;
              color: #fff;
              margin-top: 48px;
              padding-left: 10px;
              font-weight: 500;
              > b {
                font-size: 16px;
                color: #fd9827;
                font-weight: 500;
              }
            }
            .film-name {
              color: #fff;
              padding-left: 10px;
              font-size: 16px;
              width: 6em;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-weight: 500;
            }
            .buy-ticket {
              position: absolute;
              right: 10px;
              bottom: 10px;
              background-color: #ff4949;
              border-radius: 100px;
              color: #fff;
              line-height: 20px;
              font-size: 14px;
              padding: 2px 12px 3px;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>

