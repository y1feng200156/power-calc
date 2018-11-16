<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">{{ $vuetify.t('$vuetify.title') }}</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <Calc/>
    </v-content>
  </v-app>
</template>

<script>
import Calc from './components/Calc';

export default {
  name: 'App',
  components: {
    Calc,
  },
  data() {
    return {
      //
    };
  },
};
</script>
