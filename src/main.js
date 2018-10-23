// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import VuePreview from 'vue-preview'
import moment from 'moment'
import VueResource from 'vue-resource'

Vue.use(VuePreview);
// Vue.use(preview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// });
Vue.use(VueResource);
Vue.http.options.root = 'http://027xin.com:8899';
Vue.http.options.emulateJSON = true;

Vue.use(MintUI);
Vue.config.productionTip = false
Vue.filter('dateFormat', function(dateStr, pattern = "YYYY-MM-DD hh:mm:ss") {
   return moment(dateStr).format(pattern)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
