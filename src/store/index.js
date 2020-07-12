import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async getCurrency() {
      return (await fetch('https://www.binance.com/api/v1/depth?symbol=BNBBTC&limit=500')).json()
    },
    subscribeCurrency() {
      let connection = null
      let res = []

      connection = new WebSocket("wss://stream.binance.com:9443/ws/bnbbtc@depth")

      connection.onopen = function (event) {
        console.log(event)
        console.log('Successful')
      }

      connection.onmessage = function (event) {
        res.push(event.data)
        //console.log("There", res)
      }
      return res
    }
  },
  modules: {
  }
})
