<template>
  <div id="app">
    <trade-view ref="trade"></trade-view>
  </div>
</template>

<script>
import TradeView from './components/TVChartContainer'
export default {
  name: 'app',
  components: {
    TradeView
  },
  mounted() {
    this.$refs.trade.init('Coinbase:BTC/USD', 5)
  }
}
</script>

<style scoped>
  .app {
    text-align: center;
  }
  .app .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    background-color: #222;
    color: #fff;
  }
  .app .title {
    display: block;
    font-size: 1.5em;
  }
</style>


