!<template>
  <div id = "logged" v-if="user">
      <div id = "nav">
          <router-link to="/home">Home</router-link> | 
          <router-link to="/about">About</router-link> | 
          <router-link to="/onlyprofit">Profits</router-link> | 
          <router-link to="/profile">Profile</router-link> | 
      </div>
  </div>

</template>

<script>
import {getAuth, onAuthStateChanged} from 'firebase/auth';
export default {
    name : "NavBar",

    data() {
        return {
            user: false,
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
#nav {
    padding : 30pm;
    text-align: center;
}

#nav a {
    font-weight: bold;
    color: blue;
}

#nav a.router-link-exact-active {
    color: green
}
</style>