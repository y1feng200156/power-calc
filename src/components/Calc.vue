<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/hero.jpg')" height="500">
        <v-layout
          column
          align-center
          justify-center
        >
          <img :src="require('@/assets/calc.svg')" />
          <h1 class="white--text mb-2 display-1 text-xs-center">{{ $vuetify.t('$vuetify.title') }}</h1>
          <div class="subheading mb-3 text-xs-center">Photo by Manuel Will on Unsplash</div>
          <div class="subheading mb-3 text-xs-center">{{ $vuetify.t('$vuetify.desc') }}</div>
        </v-layout>
      </v-parallax>
    </section>
    <v-container>
      <v-layout
        text-xs-center
        wrap
      >
        <v-flex mt-2 mb-2 xs12 sm8 offset-sm2>
          <v-form v-model="valid" ref='form'>
            <v-select
              :items='prices'
              item-text="title"
              item-value="values"
              :label="$vuetify.t('$vuetify.prices')"
              :hint="$vuetify.t('$vuetify.hits.prices')"
              persistent-hint
              prepend-inner-icon='location_on'
              return-object
              box
              v-model="form.prices"/>
            <v-text-field
              min='1'
              v-model="form.power"
              :label="$vuetify.t('$vuetify.power')"
              :hint="$vuetify.t('$vuetify.hits.power')"
              persistent-hint
              type='number'
              :rules="powerRules"
              prepend-inner-icon='power'
              required
              box
              :suffix="$vuetify.t('$vuetify.powerUnit')"
            ></v-text-field>
            <v-text-field
              v-model="form.hours"
              min='1'
              max='24'
              :label="$vuetify.t('$vuetify.hours')"
              :hint="$vuetify.t('$vuetify.hits.hours')"
              :rules="hoursRules"
              persistent-hint
              type='number'
              prepend-inner-icon='access_alarms'
              box
              required
              :suffix="$vuetify.t('$vuetify.hoursUnit')"
            ></v-text-field>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
    <section>
      <v-parallax :src="require('@/assets/hero.jpg')" height="324">
        <v-container>
          <v-layout
            text-xs-center
            wrap
          >
            <v-flex mt-2 mb-4 xs12 sm8 offset-sm2>
              <v-card class="elevation-8">
                <v-card-title><h4>{{ $vuetify.t('$vuetify.total') }}</h4></v-card-title>
                <v-divider />
                <v-list dense>
                  <v-list-tile>
                    <v-list-tile-content>{{ $vuetify.t('$vuetify.monthTotal') }}{{ $vuetify.t('$vuetify.punctuation.colon')}}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ monthTotal }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>{{ $vuetify.t('$vuetify.monthTotalPrice') }}{{ $vuetify.t('$vuetify.punctuation.colon')}}</v-list-tile-content>
                    <v-list-tile-content class="align-end">￥{{ monthPrice }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>{{ $vuetify.t('$vuetify.yearTotal') }}{{ $vuetify.t('$vuetify.punctuation.colon')}}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ yearTotal }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>{{ $vuetify.t('$vuetify.yearTotalPrice') }}{{ $vuetify.t('$vuetify.punctuation.colon')}}</v-list-tile-content>
                    <v-list-tile-content class="align-end">￥{{ yearPrice }}</v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout
            column
            align-center
            justify-center
          >
            <div class="subheading text-xs-center"><code>以上的计算结果只是估算，与实际使用中有出入。</code></div>
          </v-layout>
        </v-container>
      </v-parallax>
    </section>
    <section>
      <v-container>
        <v-layout
          text-xs-center
          wrap
        >
        <v-flex mt-2 mb-2 xs12 sm8 offset-sm2>
          <v-card class="elevation-2">
            <v-card-title class="elevation-2"><h4>{{ $vuetify.t('$vuetify.powerLadderDesc') }}</h4></v-card-title>
            <v-divider />
            <v-list dense>
              <template v-for="(item, index) in prices">
                <v-subheader :key="index">
                  {{ item.title }}
                </v-subheader>
                <template v-for="(price, pIndex) in item.values">
                  <v-list-tile avatar :key="`${index}-${pIndex}`">
                    <v-list-tile-content :key="`${index}-${pIndex}-content`">
                      {{$vuetify.t('$vuetify.ladder', pIndex + 1)}}
                    </v-list-tile-content>
                    <v-list-tile-content :key="`${index}-${pIndex}-sub-content`" class="align-end">
                      <span class='text--primary'>{{ $vuetify.t('$vuetify.humanPrice', price) }}/{{ $vuetify.t('$vuetify.powerUnit') }}</span>
                      <span class='text--secondary'>
                        <template v-if="pIndex === 0">{{ $vuetify.t('$vuetify.ladderPower.first', item.powers[pIndex]) }}</template>
                        <template v-if="pIndex > 0 && pIndex + 1 < item.values.length">{{ $vuetify.t('$vuetify.ladderPower.center', item.powers[pIndex - 1], item.powers[pIndex]) }}</template>
                        <template v-if="pIndex + 1 === item.values.length">{{ $vuetify.t('$vuetify.ladderPower.end', item.powers[pIndex - 1]) }}</template>
                      </span>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider v-if="pIndex + 1 < item.values.length" :key="`${index}-${pIndex}-divider`" inset />
                </template>
                <v-divider v-if="index + 1 < prices.length" :key="`${index}-divider`" />
              </template>
            </v-list>
          </v-card>
        </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import numeral from 'numeral';
import { monthTotal, yearTotal, powerPrice } from './CalcMixis';

@Component({
  components: {},
})
export default class Calc extends Vue {
  public valid: boolean = true;
  public form: any = {
    prices: {},
    power: 2200,
    hours: 3,
  };
  public prices: any[] = [];
  public powerRules: any = [
    (v: any) => {
      if (!!!v) {
        return this.$vuetify.t('$vuetify.rules.power.blank');
      }
      return true;
    },
    (v: any) => {
      if (isNaN(Number(v))) {
        return this.$vuetify.t('$vuetify.rules.common.number');
      }
      return true;
    },
    (v: any) => {
      if (v / 1 < 1) {
        return this.$vuetify.t('$vuetify.rules.common.min', 1);
      }
      return true;
    },
  ];

  public hoursRules: any = [
    (v: any) => {
      if (!!!v) {
        return this.$vuetify.t('$vuetify.rules.hours.blank');
      }
      return true;
    },
    (v: any) => {
      if (isNaN(Number(v))) {
        return this.$vuetify.t('$vuetify.rules.common.number');
      }
      return true;
    },
    (v: any) => {
      if (v / 1 < 1) {
        return this.$vuetify.t('$vuetify.rules.common.min', 1);
      }
      return true;
    },
    (v: any) => {
      if (v / 1 > 24) {
        return this.$vuetify.t('$vuetify.rules.common.max', 24);
      }
      return true;
    },
  ];
  get monthTotal(): number {
    if (!!this.$refs.form && !this.$refs.form.validate()) {
      return 0;
    }
    return monthTotal(this.form.power, this.form.hours);
  }

  get monthPrice(): number {
    return numeral(powerPrice(this.monthTotal, this.form.prices.powers, this.form.prices.values)).format('￥0,0[.]00');
  }

  get yearTotal(): number {
    if (!!this.$refs.form && !this.$refs.form.validate()) {
      return 0;
    }
    return yearTotal(this.form.power, this.form.hours);
  }

  get yearPrice(): number {
    return numeral(powerPrice(this.yearTotal, this.form.prices.powers, this.form.prices.values)).format('￥0,0[.]00');
  }

  public created() {
    const prices = [
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
    ];
    this.prices = prices;
    this.form.prices = prices[0];
  }
}
</script>
<style>
</style>
