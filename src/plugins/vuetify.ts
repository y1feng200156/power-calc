import Vue from 'vue';
import Vuetify from 'vuetify';
import en from 'vuetify/src/locale/en';
import zhHans from 'vuetify/src/locale/zh-Hans';
import zhCN from '../i18n/zh-Hans';
import ownerEn from '../i18n/en';

import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: { 'en': { ...en, ...ownerEn }, 'zh-Hans': { ...zhHans, ...zhCN } },
    current: 'zh-Hans',
  },
});
