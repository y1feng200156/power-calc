<template>
  <v-app light>
    <v-toolbar app class='white'>
      <v-toolbar-title class="headline text-uppercase">
        <img :src="require('@/assets/windpower.svg')" height="20">
        <span class="font-weight-light">{{ $vuetify.t('$vuetify.title') }}</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>