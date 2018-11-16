import Vue from 'vue';
import Vuetify from 'vuetify';
import zhCN from '../i18n/zh-CN';
import en from 'vuetify/src/locale/en';
import pl from 'vuetify/src/locale/pl';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: { en, pl, 'zh-CN': zhCN },
    current: 'zh-CN',
  },
});
