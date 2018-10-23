<template>
  <div class="app-container">
    <mt-header fixed title="vue项目"></mt-header>
   
      <transition>
        <router-view></router-view>
      </transition>

    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-hly" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-hly" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-hly" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-hly" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>

export default {
  name: "App",

};
</script>

<style scoped>
  .app-container {
    padding: 40px 5px 50px 5px;
    background-color: #fff;
    overflow-x: hidden;
  }
  .v-enter {
    opacity: 0;
    transform: translate3d(100%,0,0)
  }
  .v-leave-to {
    opacity: 0;
    transform: translate3d(-100%,0,0);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all .5s
  }
    .mui-bar-tab .mui-tab-item-hly.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-hly {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-hly .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-hly .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
