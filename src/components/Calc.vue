<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex mt-5 mb-4 xs12 sm8 offset-sm2>
        <v-form v-model="valid">
          <v-select
            :items='prices'
            item-text="title"
            item-value="values"
            :label="$vuetify.t('$vuetify.prices')"
            :hint="$vuetify.t('$vuetify.hits.prices')"
            persistent-hint
            return-object
            box
            v-model="form.prices"/>
          <v-text-field
            v-model="form.power"
            :label="$vuetify.t('$vuetify.power')"
            :hint="$vuetify.t('$vuetify.hits.power')"
            persistent-hint
            type='number'
            box
            required
            suffix='千瓦·时'
          ></v-text-field>
          <v-text-field
            v-model="form.hours"
            :label="$vuetify.t('$vuetify.hours')"
            :hint="$vuetify.t('$vuetify.hits.hours')"
            persistent-hint
            type='number'
            box
            required
            suffix='时'
          ></v-text-field>
        </v-form>
        <v-card>
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
  </v-container>
</template>

<script>
import { monthTotal, yearTotal, powerPrice } from './CalcMixis';
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    valid: false,
    form: {
      prices: {},
      power: 1,
      hours: 1,
    },
    prices: [],
  }),
  computed: {
    monthTotal() {
      return monthTotal(this.form.power, this.form.hours);
    },
    monthPrice() {
      return powerPrice(this.monthTotal, this.form.prices.powers, this.form.prices.values);
    },
    yearTotal() {
      return yearTotal(this.form.power, this.form.hours);
    },
    yearPrice() {
      return powerPrice(this.yearTotal, this.form.prices.powers, this.form.prices.values);
    },
  },
  created() {
    const prices = [
      {
        title: '长沙',
        values: [0.588, 0.638, 0.888],
        powers: [180, 350],
      },
    ];
    this.prices = prices;
    this.form.prices = prices[0];
  },
};
</script>
<style>
</style>
