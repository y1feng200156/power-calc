<template>
    <Calc/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Calc from '@/components/Calc.vue'; // @ is an alias to /src

@Component({
  components: {
    Calc,
  },
})
export default class Home extends Vue {}
</script>
