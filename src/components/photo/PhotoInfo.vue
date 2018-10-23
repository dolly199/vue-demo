<template>
    <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <vue-preview :slides="list" @close="show"></vue-preview>
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
</div>
</template>
<script>
import Vue from "vue";

import comment from "../../components/subcomponents/comment";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.show();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    show() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
            item.msrc = item.src;
            this.list = result.body.message;
          });
        }
      });
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>
<style lang="scss" scoped>
/deep/ .my-gallery {
  display: flex;
  flex-wrap: wrap;
  figure {
    width: 33.33%;
    margin: 0;
    padding: 3px;
    img {
      width: 100%;
    }
  }
}
</style>

