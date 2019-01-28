<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
      </el-col>
      <el-col :span="15" class="center">
        <div class="search-box">
          <input
            class="search-input"
            type="text"
            placeholder="搜索商家或地点"
            v-model="query"
            @focus="onfocus"
            @blur="onblur"
          >
          <button class="search-btn">
            <i class="el-icon-search"></i>
          </button>
          <div class="search-suggest" v-show="isFocus">
            <div class="search-noinput" v-show="!query">
              <div class="search-history">
                <h6 class="title">最近搜索</h6>
                <span class="search-history-clean">删除搜索历史</span>
                <dd>
                  <dl>
                    <a href="javascript:;">123</a>
                  </dl>
                  <dl>
                    <a href="javascript:;">123</a>
                  </dl>
                  <dl>
                    <a href="javascript:;">123</a>
                  </dl>
                </dd>
              </div>
              <h6 class="title">热门搜索</h6>
              <div class="search-hotword">
                <a
                  href="https://www.meituan.com/s/%E5%8C%97%E4%BA%AC%E6%95%85%E5%AE%AB%E5%8D%9A%E7%89%A9%E9%99%A2"
                >北京故宫博物院</a>
                <a
                  href="https://www.meituan.com/s/%E5%8C%97%E4%BA%AC%E6%AC%A2%E4%B9%90%E8%B0%B7"
                >北京欢乐谷</a>
                <a
                  href="https://www.meituan.com/s/%E6%95%85%E5%AE%AB%E7%8F%8D%E5%AE%9D%E9%A6%86"
                >故宫珍宝馆</a>
                <a
                  href="https://www.meituan.com/s/%E5%B0%9A%E9%9A%90%C2%B7%E6%B3%89%E9%83%BD%E5%B8%82%E7%94%9F%E6%B4%BB%E9%A6%86"
                >尚隐·泉都市生活馆</a>
                <a
                  href="https://www.meituan.com/s/%E9%9D%99%E4%B9%8B%E6%B9%96%E6%BB%91%E9%9B%AA%E5%9C%BA"
                >静之湖滑雪场</a>
              </div>
            </div>
            <div class="search-hasinput" v-show="query">
              <dd>
                <dl>
                  <a href="javascript:;">123</a>
                </dl>
                <dl>
                  <a href="javascript:;">123</a>
                </dl>
                <dl>
                  <a href="javascript:;">123</a>
                </dl>
                <dl>
                  <a href="javascript:;">123</a>
                </dl>
                <dl>
                  <a href="javascript:;">123</a>
                </dl>
              </dd>
            </div>
          </div>
          <div class="search-hotword">
            <a
              href="https://www.meituan.com/s/%E5%8C%97%E4%BA%AC%E6%95%85%E5%AE%AB%E5%8D%9A%E7%89%A9%E9%99%A2"
            >北京故宫博物院</a>
            <a href="https://www.meituan.com/s/%E5%8C%97%E4%BA%AC%E6%AC%A2%E4%B9%90%E8%B0%B7">北京欢乐谷</a>
            <a href="https://www.meituan.com/s/%E6%95%85%E5%AE%AB%E7%8F%8D%E5%AE%9D%E9%A6%86">故宫珍宝馆</a>
            <a
              href="https://www.meituan.com/s/%E5%B0%9A%E9%9A%90%C2%B7%E6%B3%89%E9%83%BD%E5%B8%82%E7%94%9F%E6%B4%BB%E9%A6%86"
            >尚隐·泉都市生活馆</a>
            <a
              href="https://www.meituan.com/s/%E9%9D%99%E4%B9%8B%E6%B9%96%E6%BB%91%E9%9B%AA%E5%9C%BA"
            >静之湖滑雪场</a>
          </div>
        </div>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund"></i>
            <p class="txt">随时退</p>
          </li>
          <li>
            <i class="single"></i>
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue"></i>
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class SearchBar extends Vue {
  query: string = ''
  isFocus: boolean = false

  onfocus(): void {
    this.isFocus = true
  }
  onblur(): void {
    setTimeout(() => {
      this.isFocus = false
    }, 200)
  }
}
</script>

<style lang="scss" scoped>
.search-panel {
  background-color: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
  padding-bottom: 35px;
  .m-header-searchbar {
    display: flex;
    width: 1190px;
    margin: 0 auto;
    .left {
      padding-top: 28px;
      padding-right: 60px;
      padding-bottom: 40px;
      font-size: 16px;
      min-width: 220px;
      height: 54px;
      box-sizing: content-box;
      > img {
        width: 126px;
        height: 46px;
      }
    }
    .center {
      padding-top: 30px;
      .search-box {
        position: relative;
        width: 550px;
        height: 40px;
        border: 1px solid #13d1be;
        border-radius: 4px;

        .search-input {
          box-sizing: border-box;
          width: 84%;
          line-height: 100%;
          height: 100%;
          padding: 10px;
          border: none;
          outline: none;
          font-size: 15px;
        }
        .search-btn {
          position: absolute;
          top: 0;
          right: 0;
          width: 88px;
          height: 40px;
          background-color: #13d1be;
          border: none;
          outline: none;
          &:active {
            background-color: #73e1ce;
          }
          i {
            font-weight: bold;
            color: #fff;
            font-size: 16px;
          }
        }
        .search-suggest {
          position: absolute;
          top: 41px;
          left: -1px;
          width: 84%;
          background-color: #fff;
          border: 1px solid #e5e5e5;
          border-top: none;
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
          color: #999;
          font-size: 12px;
          text-align: left;
          z-index: 999;

          .search-noinput {
            padding: 10px;
            .title {
              padding-bottom: 5px;
              color: #999;
              font-weight: bold;
            }
            .search-history {
              > dd {
                padding: 5px 3px 10px;
                a {
                  display: block;
                }
              }
            }
            .search-history-clean {
              position: absolute;
              top: 10px;
              right: 10px;
              cursor: pointer;
            }
            .search-hotword {
              line-height: 20px;
              overflow: hidden;
              width: auto;
              height: 25px;
              padding-top: 5px;
              margin-bottom: 5px;
              padding-left: 0;
            }
          }
          .search-hasinput {
            a {
              display: block;
              padding: 3px 10px;
              color: #333;
              &:hover {
                color: #41b883;
                background-color: #f8f8f8;
              }
            }
          }
        }
        .search-hotword {
          box-sizing: border-box;
          width: 550px;
          height: 25px;
          overflow: hidden;
          padding-top: 8px;
          padding-left: 12px;
          text-align: left;
          font-size: 12px;
          a {
            display: inline-block;
            color: #999;
            margin-right: 10px;
            margin-bottom: 3px;
            &:hover {
              color: #41b883;
            }
          }
        }
      }
    }
    .right {
      text-align: center;
      padding-top: 28px;
      .security {
        display: flex;
        list-style: none;
        li {
          padding: 0 5px;
        }
        i {
          font-style: normal;

          &:after {
            font-family: iconfont;
            font-size: 36px;
            color: #13d1be;
          }
        }
        .refund {
          &:after {
            content: '\e65f';
          }
        }

        .single {
          &:after {
            content: '\e652';
          }
        }

        .overdue {
          &:after {
            content: '\e65e';
          }
        }
      }
    }
  }
}
</style>
