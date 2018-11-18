export default {
  title: '电费计算器',
  power: '功率',
  hours: '运行时长',
  prices: '价格规则',
  total: '结果',
  monthTotal: '每月度数',
  monthTotalPrice: '每月电费',
  yearTotal: '一年度数',
  yearTotalPrice: '一年电费',
  punctuation: {
    colon: '：',
  },
  hits: {
    power: '请输入电器运行功率',
    hours: '请输入电器一天运行多少个小时',
    prices: '请选择所在地区',
  },
  rules: {
    common: {
      min: '不能小于{0}',
      max: '不能大于{0}',
      number: '必须为数字',
    },
    power: {
      blank: '请输入功率',
    },
    hours: {
      blank: '请输入时长',
    },
  },
};
