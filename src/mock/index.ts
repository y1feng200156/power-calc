import Vue from 'vue';
import axios from 'axios';
import Mock from 'mockjs';
import MockAdapter from 'axios-mock-adapter';

const instance = axios.create({
  baseURL: '/',
  method: 'get',
  timeout: 10000,
});

Object.defineProperty(Vue.prototype, '$ajax', { value: instance });
const mock = new MockAdapter(instance);

mock.onGet('/power_bases').reply(() => [
  200,
  Mock.mock([
    {
      title: '湖南',
      values: [0.588, 0.638, 0.888],
      powers: [180, 350],
    },
    {
      title: '贵州',
      values: [0.4556, 0.5056, 0.7556],
      powers: [170, 310],
    },
  ]),
]);
