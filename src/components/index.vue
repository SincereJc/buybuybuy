<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="#/" class="router-link-active">首页</a> &gt;
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <!-- 分类 -->
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>
                                <li v-for="(item, index) in catelist" :key="index">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="(item, index) in item.subcates" :key="index">
                                                {{item.title}}&nbsp;
                                            </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">{{item.title}}</a>
                                            </dt>
                                            <dd>
                                                <a v-for="(item, index) in item.subcates" :key="index" :href="'/goods/'+item.id+'.html'">{{item.title}}</a>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--幻灯片 轮播图-->
                    <div class="left-705">
                        <div class="banner-img">
                            <div id="focus-box" class="focus-box">
                              <!-- element-ui的轮播图  -->
                              <!-- <el-carousel trigger="click" height="341px">
                                <el-carousel-item v-for="item in sliderlist" :key="item.id">
                                  <a href="#"><img style="display:block;height:100%" :src="item.img_url" alt=""></a>
                                </el-carousel-item>
                              </el-carousel> -->
                              <el-carousel :interval="4000" type="card" height="320px">
                                <el-carousel-item v-for="item in sliderlist" :key="item.id">
                                  <a href="#"><img style="display:block;height:100%" :src="item.img_url" alt=""></a>
                                </el-carousel-item>
                              </el-carousel>
                            </div>

                        </div>
                    </div>
                    <!--热卖-->
                    <div class="left-220">
                        <ul class="side-img-list">
                            <li v-for="(item, index) in toplist" :key="item.id">
                                <div class="img-box">
                                    <label>{{index+1}}</label>
                                    <img :src="item.img_url">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-98.html">{{item.title}}</a>
                                    <span>{{item.add_time | beautifyTime}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" v-for="(item, index) in message" :key="index">
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <a v-for="(item, index) in item.level2catelist" :key="index" :href="'/goods/'+item.subcateid+'.html'">{{item.subcatetitle}}</a>
                    <a :href="'/goods/'+item.level1cateid+'.html'">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="(item, index) in item.datas" :key="index">
                            <a :href="'#/site/goodsinfo/'+item.artID" class="">
                                <div class="img-box">
                                    <img :src="item.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{item.artTitle}}</h3>
                                    <p class="price">
                                        <b>{{item.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{item.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{item.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- <div class="section">
            <div class="main-tit">
                <h2>电脑办公</h2>
                <p>
                    <a href="/goods/43.html">电脑整机</a>
                    <a href="/goods/43.html">外设产品</a>
                    <a href="/goods/43.html">办公打印</a>
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li>
                            <a href="#/site/goodsinfo/92" class="">
                                <div class="img-box">
                                    <img src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200225107390.jpg">
                                </div>
                                <div class="info">
                                    <h3>联想（Lenovo） G510AM 15.6英寸笔记本电脑</h3>
                                    <p class="price">
                                        <b>2999</b>元</p>
                                    <p>
                                        <strong>库存 99</strong>
                                        <span>市场价：
                                            <s>4599</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#/site/goodsinfo/93" class="">
                                <div class="img-box">
                                    <img src="http://39.108.135.214:8899/upload/201504/20/201504200341260763.jpg">
                                </div>
                                <div class="info">
                                    <h3>Apple iMac MF883CH/A 21.5英寸一体机电脑</h3>
                                    <p class="price">
                                        <b>7200</b>元</p>
                                    <p>
                                        <strong>库存 10</strong>
                                        <span>市场价：
                                            <s>7988</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#/site/goodsinfo/94" class="">
                                <div class="img-box">
                                    <img src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200239192345.jpg">
                                </div>
                                <div class="info">
                                    <h3>金士顿（Kingston） DataTraveler SE9 32GB 金属U盘</h3>
                                    <p class="price">
                                        <b>79</b>元</p>
                                    <p>
                                        <strong>库存 100</strong>
                                        <span>市场价：
                                            <s>99</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#/site/goodsinfo/95" class="">
                                <div class="img-box">
                                    <img src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200242250674.jpg">
                                </div>
                                <div class="info">
                                    <h3>惠普（HP）LaserJet 2035商用黑白激光打印机（黑色）</h3>
                                    <p class="price">
                                        <b>1899</b>元</p>
                                    <p>
                                        <strong>库存 100</strong>
                                        <span>市场价：
                                            <s>2099</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#/site/goodsinfo/96" class="">
                                <div class="img-box">
                                    <img src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200253026047.jpg">
                                </div>
                                <div class="info">
                                    <h3>惠普(HP) Officejet Pro 8610商用彩色喷墨一体机</h3>
                                    <p class="price">
                                        <b>1999</b>元</p>
                                    <p>
                                        <strong>库存 100</strong>
                                        <span>市场价：
                                            <s>2099</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="main-tit">
                <h2>影音娱乐</h2>
                <p>
                    <a href="/goods/43.html">平板电视</a>
                    <a href="/goods/43.html">音响DVD</a>
                    <a href="/goods/43.html">影音配件</a>
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li>
                            <a href="#/site/goodsinfo/97" class="">
                                <div class="img-box">
                                    <img src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200258403759.jpg">
                                </div>
                                <div class="info">
                                    <h3>三星（SAMSUNG）UA40HU5920JXXZ 40英寸4K超高清</h3>
                                    <p class="price">
                                        <b>3299</b>元</p>
                                    <p>
                                        <strong>库存 100</strong>
                                        <span>市场价：
                                            <s>3599</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#/site/goodsinfo/98" class="">
                                <div class="img-box">
                                    <img src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200314272543.jpg">
                                </div>
                                <div class="info">
                                    <h3>奔腾（BNTN） 380功放+纽约至尊 套装家庭影院</h3>
                                    <p class="price">
                                        <b>4880</b>元</p>
                                    <p>
                                        <strong>库存 10</strong>
                                        <span>市场价：
                                            <s>5880</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#/site/goodsinfo/99" class="">
                                <div class="img-box">
                                    <img src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200318534459.jpg">
                                </div>
                                <div class="info">
                                    <h3>飞利浦（PHILIPS）DVP3690 全高清DVD影碟机播放器</h3>
                                    <p class="price">
                                        <b>399</b>元</p>
                                    <p>
                                        <strong>库存 100</strong>
                                        <span>市场价：
                                            <s>499</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#/site/goodsinfo/100" class="">
                                <div class="img-box">
                                    <img src="http://39.108.135.214:8899/imgs/FTuX2MTGiwOZjK-rjeZi4tls.jpg">
                                </div>
                                <div class="info">
                                    <h3>飞利浦（PHILIPS）55PUF6092/T3 55英寸</h3>
                                    <p class="price">
                                        <b>2999</b>元</p>
                                    <p>
                                        <strong>库存 49</strong>
                                        <span>市场价：
                                            <s>2999</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#/site/goodsinfo/101" class="">
                                <div class="img-box">
                                    <img src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200333240710.jpg">
                                </div>
                                <div class="info">
                                    <h3>Shinco/新科 S2300 无线麦克风 无线手持话筒 双手麦 KTV 舞台</h3>
                                    <p class="price">
                                        <b>199</b>元</p>
                                    <p>
                                        <strong>库存 20</strong>
                                        <span>市场价：
                                            <s>269</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="main-tit">
                <h2>服装类</h2>
                <p>
                    <a href="/goods/43.html">男装</a>
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li>
                            <a href="#/site/goodsinfo/102" class="">
                                <div class="img-box">
                                    <img src="http://39.108.135.214:8899/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg">
                                </div>
                                <div class="info">
                                    <h3>Hazzys哈吉斯2017新款男士长袖衬衫纯棉修身英伦衬衫显瘦商务衬衣</h3>
                                    <p class="price">
                                        <b>800</b>元</p>
                                    <p>
                                        <strong>库存 200</strong>
                                        <span>市场价：
                                            <s>1000</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#/site/goodsinfo/103" class="">
                                <div class="img-box">
                                    <img src="http://39.108.135.214:8899/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg">
                                </div>
                                <div class="info">
                                    <h3>骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫衣</h3>
                                    <p class="price">
                                        <b>198</b>元</p>
                                    <p>
                                        <strong>库存 100</strong>
                                        <span>市场价：
                                            <s>297</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
// 导入axios
import axios from "axios";
// 导入moment
import moment from "moment";

export default {
  name: "index",
  data: function() {
    return {
      catelist: [],
      sliderlist: [],
      toplist: [],
      message: []
    };
  },
  // 过滤器
  filters: {
    beautifyTime(value) {
      return moment(value).format("YYYY年MM月DD日");
    }
  },
  // 生命周期函数
  // 创建之前
  beforeCreate() {
    // console.log("beforeCreate");
    // console.log(this.message);
  },
  // 创建完毕 在这里面才可以访问到vue组件中的内容
  created() {
    // console.log("created");
    // console.log(this.message);
    axios
      .get("http://111.230.232.110:8899/site/goods/gettopdata/goods")
      .then(res => {
        // console.log(res);
        this.catelist = res.data.message.catelist;
        this.sliderlist = res.data.message.sliderlist;
        this.toplist = res.data.message.toplist;
      });
    axios.get("http://111.230.232.110:8899/site/goods/getgoodsgroup").then(res => {
        // console.log(res);
        this.message = res.data.message;
    })
  }
};
//  http://111.230.232.110:8899/site/goods/getgoodsgroup   res.data.message
</script>
 
<style>
</style>
