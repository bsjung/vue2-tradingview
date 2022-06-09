<template>
  <div id="app">
    <trading-view ref="trade"></trading-view>
  </div>
</template>

<script>
import TradingView from './components/TradingView'
export default {
  name: 'app',
  components: {
    TradingView
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


