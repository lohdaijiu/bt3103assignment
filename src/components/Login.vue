!<template>
  <div style = "text-align:center;">
    <h1 id = "mainHead">CRYPTO PAPER PORTFOLIO </h1>
    <div id="pagecontent">
        Crypto Paper Porfolio (CPP) is an app to track your crypto portfolio. <br>
        Enter coin details and get real time Profit and Loss update of your portfolio
    </div>
  </div>
  <button @click = "googleSignIn()">Google Sign In</button>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default {
    name:"Login",

    methods : {
        googleSignIn() {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then(
            this.$router.push('/about')
            ).catch((error) => {
            console.log(error)
            });

        },

    }    
}
</script>

<style scoped>
    #firebaseui-auth-container {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    #pagecontent {
        height: 100px;
        font-size: larger;
        font-weight: bold;
        text-align: center;
    }
    #mainHead {
        text-align: center;
        text-shadom: 2px 2px grey;
    }
</style>