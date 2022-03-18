<template>
    <div v-if = "user">
    <NavBar/>
    <h3>This is Home Page</h3>
  <WelcomeCpp/>
  <AddCoin @added="change"/>
  <ProfitDisplay :key = "refreshComp" />
  <LogOut/>
  </div>

</template>

<script>
import WelcomeCpp from '../components/WelcomeCpp.vue'
import ProfitDisplay from '../components/ProfitDisplay.vue'
import AddCoin from '../components/AddCoin.vue'
import NavBar from '../components/NavBar.vue'
import LogOut from '../components/LogOut.vue'
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
  name: 'App',
  data() {
      return {
          user : false,
          refreshComp:0
      }
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            this.user = user;
        }
    })
    },
  components: { 
    ProfitDisplay,
    WelcomeCpp,
    AddCoin,
    NavBar,
    LogOut
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
