export default {
  title: '电费计算器',
  desc: '计算下你准备买的电器一个月大概花多少钱',
  powerLadderDesc: '各个地区电价说明',
  power: '电器功率',
  powerUnit: '千瓦·时',
  hours: '运行时长',
  hoursUnit: '小时',
  prices: '所在地区',
  total: '结果',
  monthTotal: '每月度数',
  monthTotalPrice: '每月电费',
  yearTotal: '一年度数',
  yearTotalPrice: '一年电费',
  ladder: '{0}档',
  humanPrice: '{0}元',
  ladderPower: {
    first: '月用电量{0}（含）度以内',
    center: '月用电量{0}-{1}（含）度',
    end: '月用电量{0}度以上',
  },
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
