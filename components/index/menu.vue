<template>
  <div class="menu-container">
    <div class="category-nav-container">
      <div class="category-nav-title">
        <h2>全部分类</h2>
      </div>
      <div class="category-nav-content">
        <ul @mouseleave="mouseLeave" @mouseover="mouseEnter">
          <li class="nav-li" v-for="(item, i) in menu" :key="i">
            <i :class="item.type"></i>
            <span class="nav-text-wrapper">
              <span v-for="(href, index) in item.href" :key="index">
                <a :href="href">{{item.name[index]}}</a>
                <template v-if="item.href.length > 0 && item.href.length - 1 !== index">/&nbsp;</template>
              </span>
              <span v-if="item.hot" class="nav-promotion">HOT</span>
            </span>
            <i class="arrow"></i>
          </li>
        </ul>
      </div>
      <div
        class="category-nav-detail-wrapper"
        v-show="kind"
        @mouseenter="detailEnter"
        @mouseleave="detailLeave"
      >
        <div class="category-nav-detail">
          <div class="title">
            <h3>
              <a href="javascript:;" class="link-detail">丽人</a>
            </h3>
            <a class="more" href="javascript:;">
              更多
              <i class="arrow"></i>
            </a>
          </div>
          <div class="content">
            <a href="javascript:;" class="link-detail-text">代金券</a>
            <a href="javascript:;" class="link-detail-text">代金券</a>
            <a href="javascript:;" class="link-detail-text">代金券</a>
            <a href="javascript:;" class="link-detail-text">代金券</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Banner extends Vue {
  menu = [
    {
      type: 'food',
      href: ['https://bj.meituan.com/meishi/'],
      name: ['美食'],
      hot: 0
    },
    {
      type: 'waimai',
      href: ['https://waimai.meituan.com'],
      name: ['外卖'],
      hot: 0
    },
    {
      type: 'hotel',
      href: ['https://hotel.meituan.com'],
      name: ['酒店'],
      hot: 1
    },
    {
      type: 'zhenguo',
      href: [
        'https://phoenix.meituan.com/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=nav'
      ],
      name: ['榛果民宿'],
      hot: 0
    },
    {
      type: 'maoyan',
      href: ['https://maoyan.com/films?utm_source=meituanweb'],
      name: ['猫眼电影'],
      hot: 0
    },
    {
      type: 'plane',
      href: [
        'https://www.meituan.com/flight/',
        'https://www.meituan.com/train/'
      ],
      name: ['机票', '火车票'],
      hot: 0
    },
    {
      type: 'ktv',
      href: [
        'https://bj.meituan.com/xiuxianyule/',
        'https://bj.meituan.com/xiuxianyule/c10/'
      ],
      name: ['休闲娱乐', 'KTV'],
      hot: 0
    },
    {
      type: 'life',
      href: ['https://bj.meituan.com/shenghuo/'],
      name: ['生活服务'],
      hot: 0
    },
    {
      type: 'beauty',
      href: [
        'https://bj.meituan.com/jiankangliren/',
        'https://bj.meituan.com/jiankangliren/c74/',
        'https://bj.meituan.com/jiankangliren/c20423/'
      ],
      name: ['丽人', '美发', '医学美容'],
      hot: 0
    },
    {
      type: 'married',
      href: [
        'https://bj.meituan.com/jiehun/',
        'https://bj.meituan.com/jiehun/c20198/',
        'https://bj.meituan.com/jiehun/c20210/'
      ],
      name: ['结婚', '婚纱摄影', '婚宴'],
      hot: 0
    },
    {
      type: 'child',
      href: [
        'https://bj.meituan.com/qinzi/',
        'https://bj.meituan.com/qinzi/c20108/',
        'https://bj.meituan.com/qinzi/c20045/'
      ],
      name: ['亲子', '儿童乐园', '幼教'],
      hot: 0
    },
    {
      type: 'sport',
      href: [
        'https://bj.meituan.com/yundongjianshen/',
        'https://bj.meituan.com/yundongjianshen/c20253/'
      ],
      name: ['运动健身', '健身中心'],
      hot: 0
    },
    {
      type: 'decorate',
      href: [
        'https://bj.meituan.com/jiazhuang/',
        'https://bj.meituan.com/jiazhuang/c20182/',
        'https://bj.meituan.com/jiazhuang/c20771/'
      ],
      name: ['家装', '建材', '家居'],
      hot: 0
    },
    {
      type: 'education',
      href: [
        'https://bj.meituan.com/jiaoyupeixun/',
        'https://bj.meituan.com/xuexipeixun/c20287/'
      ],
      name: ['学习培训', '音乐培训'],
      hot: 0
    },
    {
      type: 'medical',
      href: [
        'https://bj.meituan.com/yiliao/',
        'https://bj.meituan.com/chongwu/c20691/',
        'https://bj.meituan.com/aiche/'
      ],
      name: ['医疗健康', '宠物', '爱车'],
      hot: 0
    },
    {
      type: 'bar',
      href: [
        'https://bj.meituan.com/xiuxianyule/c234/',
        'https://bj.meituan.com/xiuxianyule/c230/'
      ],
      name: ['酒吧', '密室逃脱'],
      hot: 0
    }
  ]
  kind: string = ''
  timer: number

  mouseLeave(): void {
    this.timer = setTimeout(() => {
      this.kind = ''
    }, 150)
  }
  mouseEnter(e): void {
    if (e.target.tagName !== 'LI') return
    this.kind = e.target.querySelector('i').className
  }
  detailEnter(): void {
    clearTimeout(this.timer)
  }
  detailLeave(): void {
    this.kind = ''
  }
}
</script>

<style lang="scss" scoped>
.menu-container {
  position: relative;
  z-index: 999;
  a {
    color: #fff;
  }
  .category-nav-container {
    margin-top: -50px;
    width: 230px;
    box-sizing: border-box;
    background: -webkit-linear-gradient(
      -90deg,
      rgba(2, 181, 157, 0.85) 2%,
      rgba(22, 146, 183, 0.85) 100%
    );
    .category-nav-title {
      height: 50px;
      padding-top: 15px;
      box-sizing: border-box;

      > h2 {
        font-size: 16px;
        font-weight: 400;
        margin-left: 15px;
        color: #fff;
      }
    }

    .category-nav-content {
      &:hover {
        ~ .category-nav-detail-wrapper {
          display: block;
        }
      }
      > ul {
        padding: 10px 0 8px;
        list-style: none;
        li {
          position: relative;
          box-sizing: border-box;
          height: 25.5px;
          padding: 2px 12px;
          font-size: 13px;
          line-height: 20px;
          color: #fff;
          cursor: pointer;
          .nav-promotion {
            display: inline-block;
            padding: 0 7px;
            font-size: 12px;
            border-radius: 10px;
            opacity: 0.5;
            transform: translateY(-1px) scale(0.9);
            color: #02b59d;
            background-color: #fff;
          }
          &:hover {
            background-color: rgba(#fff, 0.1);
            i,
            .nav-promotion {
              opacity: 1;
            }
          }
        }
        i {
          font-family: meituan;
          font-size: 14px;
          font-style: normal;
          opacity: 0.3;
          margin-right: 11px;

          &::before {
            width: 14px;
            height: 14px;
            display: inline-block;
          }
        }

        .food {
          &:before {
            content: '\e622';
          }
        }

        .waimai {
          &:before {
            content: '\e630';
          }
        }

        .hotel {
          &:before {
            content: '\e62a';
          }
        }

        .zhenguo {
          &:before {
            content: '\e631';
          }
        }

        .maoyan {
          &:before {
            content: '\e62c';
            position: relative;
            left: -2px;
          }
        }

        .plane {
          &:before {
            content: '\e632';
          }
        }

        .ktv {
          &:before {
            content: '\e627';
          }
        }

        .life {
          &:before {
            content: '\e633';
          }
        }

        .beauty {
          &:before {
            content: '\e626';
            transform: scale(0.7);
          }
        }

        .married {
          &:before {
            content: '\e629';
          }
        }

        .child {
          &:before {
            content: '\e623';
          }
        }

        .sport {
          &:before {
            content: '\e62b';
          }
        }

        .decorate {
          &:before {
            content: '\e625';
          }
        }

        .education {
          &:before {
            content: '\e624';
          }
        }

        .medical {
          &:before {
            content: '\e628';
          }
        }

        .bar {
          &:before {
            content: '\e621';
          }
        }

        .arrow {
          width: 4px;
          height: 4px;
          border-bottom: 1px solid #fff;
          border-right: 1px solid #fff;
          transform: rotate(-45deg);
          display: block;
          position: absolute;
          right: 13px;
          top: 0;
          bottom: 0;
          margin: auto;
          opacity: 1;
        }
      }
    }
  }
  .category-nav-detail-wrapper {
    position: absolute;
    overflow: hidden;
    top: 60px;
    left: 230px;
    width: 400px;
    height: 416px;
    background-color: #fff;
    .category-nav-detail {
      padding: 0 30px;
      .title {
        display: flex;
        justify-content: space-between;
        height: 22px;
        line-height: 22px;
        margin-top: 22px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e5e5e5;
        .link-detail {
          font-size: 16px;
          font-weight: 500;
          color: #222;
        }
        .more {
          font-size: 12px;
          color: #999;
          font-weight: 400;
          margin-right: 6px;
          position: relative;
        }
      }
      .content {
        .link-detail-text {
          margin: 10px 16px 0 0;
          color: #999;
          font-size: 12px;
          line-height: 15px;
          display: inline-block;
          &:hover {
            color: #31bbac;
          }
        }
      }
    }
  }
}
</style>
