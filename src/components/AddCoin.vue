!<template>
    <div id = "header"><h1>Add Coins</h1></div>
    <div id = "form">
        <form id = "form1">
            <label for= "coin">Coin Name: </label>
            <input type="text" id="coin" placeholder="Enter Coin" required=""> <br><br>

            <label for= "ticker">Ticker: </label>
            <input type="text" id="ticker" placeholder="Valid Ticker" required=""><br><br>

            <label for= "buy">Buy Price: </label>
            <input type="number" id="buy" placeholder="Buy Price" required=""><br><br>

            <label for= "qty">Buy Quantity: </label>
            <input type="number" id="qty" placeholder="Quantity" required=""><br><br>

            <button type="button" v-on:click="savetodb()"> Save </button> 

        </form>
    </div>
</template>

<script>

import firebaseApp from '../firebase.js'
import { getFirestore } from "firebase/firestore"
import {doc, setDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);
import{getAuth} from "firebase/auth"

export default {
    methods: {
        async savetodb() {
            var a = document.getElementById("coin").value
            var b = document.getElementById("ticker").value
            var c = document.getElementById("buy").value
            var d = document.getElementById("qty").value
    
        //alert(" Saved! ")

        try{
            const auth = getAuth()
            const fbuser = auth.currentUser.email;
            const docRef = await setDoc(doc(db, String(fbuser), a), {
                Coin: a, Ticker : b, Buy_Price: c, Buy_Quantity:d
            })
            console.log(docRef)
            document.getElementById("form1").reset();
            this.$emit("added")
        } catch(error) {
            console.error(error);
        }
    }
    }
}

</script>

<style>
    #form{
    text-align: center;
    }

    form {
    text-align: right;
    display: inline-block;
    }   

    button[type=button] {
    margin-right: 100px;
}

    #header {
    background-color: lightgrey;
    text-align: center;
    font-size: 20px;
}

</style>