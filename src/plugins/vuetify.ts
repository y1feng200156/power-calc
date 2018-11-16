import Vue from 'vue';
import Vuetify from 'vuetify';
import zhHans from 'vuetify/src/locale/zh-Hans';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  locale: {
    locales: { 'zh-hans': zhHans },
    current: 'zh-Hans',
  },
});
