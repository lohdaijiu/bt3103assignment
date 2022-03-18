<template>
  <NavBar/>
  <h3>This is Profit Page</h3>
  <AddCoin @added="change"/>
  <ProfitDisplay :key = "refreshComp" />
  <LogOut/>

</template>

<script>
import ProfitDisplay from '../components/ProfitDisplay.vue'
import AddCoin from '../components/AddCoin.vue'
import NavBar from '../components/NavBar.vue'
import LogOut from '../components/LogOut.vue'

export default {
  name: 'App',
  components: { 
    ProfitDisplay,
    AddCoin,
    NavBar,
    LogOut
    },
  data() {
    return {
      refreshComp:0
    }
  },
  methods:{
    change() {
      this.refreshComp += 1
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
