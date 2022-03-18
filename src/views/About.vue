!<template>
  <div style = "text-align:center;" v-if = "user">
      <NavBar/>
      <h3>This is an About Page</h3>
      <h2>Welcome to CPP</h2>
      <h3>Crypto Paper Portfolio (CPP) is app to track your crypto portfolio.
          <br> This is just a demo version and is made for learning pruposes. Please use accordingly. <br> <br>
      </h3>
      <LogOut/> <br> <br>

    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import LogOut from "../components/LogOut.vue"
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
    name : "AboutPage",

    components : {
        NavBar,
        LogOut,
    },

    data() {
        return {
            user:false,
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
    }

}
</script>

<style>

</style>