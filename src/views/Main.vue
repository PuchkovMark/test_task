<template>
  <div class="home">
    <div class="wrap">
      <table class="main-table">
        <thead>
        <tr>
          <td><strong>Amount</strong></td>
          <td><strong>Price</strong></td>
          <td><strong>Total</strong></td>
        </tr>
        </thead>
        <tr v-for="(bid, index) in arrBids" :key="index">
          <td>{{(bid[0])}}</td>
          <td>{{Math.floor(bid[1] * 1000) / 1000}}</td>
          <td>{{(bid[0] * bid[1]).toFixed(3)}}</td>
        </tr>
      </table>
    </div>
    <div class="wrap">
      <table class="main-table">
        <thead>
        <tr>
          <td><strong>Amount</strong></td>
          <td><strong>Price</strong></td>
          <td><strong>Total</strong></td>
        </tr>
        </thead>
        <tr v-for="(ask, index) in arrAsks" :key="index">
          <td>{{ask[0]}}</td>
          <td>{{Math.floor(ask[1] * 1000) / 1000}}</td>
          <td>{{(ask[0] * ask[1]).toFixed(3)}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    currency: null,
    subCurrency: null,
    arrAsks: [],
    arrBids: [],
  }),
  async mounted() {
    this.currency = await this.$store.dispatch('getCurrency')
    this.arrAsks = this.currency.asks
    this.arrBids = this.currency.bids
    console.log(this.arrAsks)
  },
}
</script>

<style scoped>
  .home {
    width: 90%;
    display: flex;
    justify-content: center;
    position: absolute;
    height: 85%;
  }
  .wrap {
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    margin: 2rem;
  }
  .wrap:hover {
    overflow: scroll;
  }
  .main-table {
    border: 1px solid silver;
    width: 45%;
  }
  .main-table td {
    border: 1px solid silver;
  }
  @media screen and (max-width: 700px) {
    .home {
      flex-direction: column;
    }
  }
</style>
