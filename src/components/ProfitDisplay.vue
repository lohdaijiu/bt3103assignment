!<template>
  <div id = "header"><h1>Current Porfolio</h1></div>

    <table id = "table">
        <tr>
            <th>S.No</th>
            <th>Coin</th>
            <th>Ticker</th>
            <th>Buy_Price</th>
            <th>Buy_Quantity</th>
            <th>Current_Price</th>
            <th>Profit</th>
            <th>Options</th>
        </tr>

    </table> <br><br>

    <div id = "totalProfit"><h1>Placeholder  </h1></div>
</template>

<script>

import ccxt from "ccxt"
import firebaseApp from '../firebase.js'
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);
import {getAuth} from "firebase/auth"

export default {
    mounted(){
    async function display() {
        const auth = getAuth();
        const user = auth.currentUser.email;
        let z = await getDocs(collection(db, String(user)))
        let ind = 1
        var tp = 0

        z.forEach((docs) => {
            let yy = docs.data()
            var table = document.getElementById("table")
            var row = table.insertRow(ind)

            var coin = (yy.Coin)
            var price = (yy.Buy_Price)
            var quantity = (yy.Buy_Quantity)
            var ticker = (yy.Ticker)

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(7);

            cell1.innerHTML = ind;
            cell2.innerHTML = coin;
            cell3.innerHTML = ticker;
            cell4.innerHTML = price;
            cell5.innerHTML = quantity;
            cell6.innerHTML = 0;
            cell7.innerHTML = 0;

            cell7.className = "profits"

            var bu = document.createElement("button")
            bu.className = "bwt"
            bu.id = String(coin)
            bu.innerHTML = "DELETE"
            bu.onclick = function(){
                deleteC(coin)
            }
            cell8.appendChild(bu)

            val(ticker)

            async function val(ticker) {
                let binance = new ccxt.binance()
                let x = await binance.fetch_ohlcv(ticker, "5m")
                cell6.innerHTML = x[499][4]
                cell7.innerHTML = Math.round(quantity * (-parseFloat(price) + parseFloat(cell6.innerHTML)))
                tp = tp + parseFloat(cell7.innerHTML)
                document.getElementById("totalProfit").innerHTML = ("Total Profit is : " + String(tp))
            }
            ind+= 1
        })
    }
    display()

    async function deleteC(coin) {
        alert("deleting")
        var x = coin
        await deleteDoc(doc(db, "Portfolio", x))
        let tb = document.getElementById("table")
        while (tb.rows.length > 1) {
            tb.deleteRow(1)
        }
        document.getElementById("totalProfit").innerHTML = ""
        display()
    }
    }
}
</script>

<style>
    #header {
    background-color: lightgrey;
    text-align: center;

}

table {
    text-align: center;
    width: 100%;
}

tr, th {
    border: 1px solid black;
}

#totalProfit {
    background-color: lightgrey;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
}
</style>