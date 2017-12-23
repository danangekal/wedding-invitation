// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueHead from 'vue-head'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

// load css
import 'uikit/src/less/uikit.theme.less'

// loads the Icon plugin
UIkit.use(Icons)

Vue.config.productionTip = false

Vue.use(VueHead)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
