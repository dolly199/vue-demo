<template>
    <div>
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item, index) in imgList" :key="index">
                <img :src="item.img" alt="">
            </mt-swipe-item>
            
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4">
            <router-link to="/home/newslist">
              <img src="../../assets/images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4">
            <router-link to="/home/photolist">
              <img src="../../assets/images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4">
            <router-link to="/home/goodslist">
              <img src="../../assets/images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4">
            <router-link to="#">
              <img src="../../assets/images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4">
            <router-link to="#">
              <img src="../../assets/images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4">
            <router-link to="#">
              <img src="../../assets/images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div>
            </router-link>
          </li>
      </ul> 

    </div>

    
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      imgList: []
    };
  },
  created() {
    this.getLunBo();
  },
  methods: {
    getLunBo() {
      this.$http.get("http://027xin.com:8899/api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.imgList = result.body.message;
        } else {
          Toast("获取图片失败");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: lightblue;
    }
    &:nth-child(2) {
      background-color: lightgreen;
    }
    &:nth-child(3) {
      background-color: lightyellow;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  .mui-table-view-cell {
    border: none;
    img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>

