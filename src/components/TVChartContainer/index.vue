<template>
    <div class="trade-view" id="trade-view" />
</template>

<script>
import { widget } from './api/charting_library.min';
import Datafeed from './api/'

export default {
  data() {
    return {
      widget: null,
      symbol: null,
      interval: null,
      cacheData: {},
      lastTime: null,
      getBarTimer: null,
      isLoading: true,
      containerId: {
        default: 'tv_chart_container',
        type: String,
      }
    }
  },
  created() {
  },
  methods: {
    init(symbol = 'Coinbase:BTC/USD', interval = 5) {
      if (!this.widget) {
        this.widget = new widget({
          symbol: symbol,
          interval: interval,
          fullscreen: true,
          container_id: 'trade-view',
          datafeed: Datafeed,
          library_path: '/static/charting_library/',
          disabled_features: ['header_symbol_search'],
          enabled_features: [],
          timezone: 'Asia/Seoul',
          locale: 'ko',
          debug: false
        })
        this.symbol = symbol
        this.interval = interval
      }
    }
  }
}
</script>

<style scoped>
    #trade-view {
        height: calc(100vh - 80px);
    }
</style>

