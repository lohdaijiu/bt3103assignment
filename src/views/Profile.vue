@<template>
    <div style = "text-align:center;" v-if = "user"></div>
    <NavBar/> 
    <div> <h3><strong> This is the profile page </strong></h3> </div>
    <div v-if = "user">
        <div>
            <img src = "@/assets/logo.png" style = "width:75px;height:75px;border-radius:50%;border:4px solid #333" />
        </div>
        <div>
            <p> Name : <strong>{{user.displayName}}</strong><br>
            Email: <strong>{{user.email}}</strong><br>
            Uid: <strong>{{user.uid}}</strong><br>
            Provider: <strong>{{user.providerData[0].providerId}}</strong> </p> 
        </div>
    </div>
    <LogOut/>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import LogOut from '../components/LogOut.vue'
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {

    components : {
        NavBar,
        LogOut
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