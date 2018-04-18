<template>
<div>
   <ul id="menu">
    <li class="right" v-if="loggedIn"><a @click="logout" href="#">Logout</a></li>
    <li class="right" v-if="loggedIn">{{user.username}}</li>
    
    
    <form v-else class="right" v-on:submit.prevent="login">
        <h1>Log in to your account</h1>
        <br>
    <input class="narrow" v-model="emailL" placeholder="Email Address">
    <input class ="narrow" type = "password" v-model="passwordL" placeholder="Password">
    <button class="primary" type="submit">Login</button>
      </form>
  </ul>
  <br> 
  <br>
<form v-on:submit.prevent="register">
    <h1>Register if you don't have an account</h1>  
    <h2>1. Choose a user name (this is how you will be identified)</h2>
    <input class="narrow" v-model="username" placeholder="User Name">
    <br>
    <br>
      <h2>2. Create an account</h2>
      <input class="wide" v-model="name" placeholder="First and Last Name"><br/>
      <input class="narrow" v-model="email" placeholder="Email Address">
      <input class="narrow" type="password" v-model="password" placeholder="Password">
      <button class="alternate" type="submit">Register</button>
    </form>
    <p class="error">{{registerError}}</p>
  </div>
</template>

<script>
 export default {
   name: 'Register',
   data () {
     return {
       username: '',
       email: '',
       password: '',
       name: '',
       passwordL: '',
       emailL: '',
     }
   },
   computed: {
     registerError: function() {
       return this.$store.getters.registerError;
     },
    user: function() {
       return this.$store.getters.user;
     },
     loggedIn: function() {
       return this.$store.getters.loggedIn;
     },
     loginError: function() {
       return this.$store.getters.loginError;
     },
   },
   methods: {
     register: function() {
       this.$store.dispatch('register',{
     username: this.username,
         email: this.email,
         password: this.password,
     name: this.name,
       });
     },
    login: function() {
       this.$store.dispatch('login',{
         email: this.emailL,
         password: this.passwordL,
       }).then(user => {
     this.emailL = '';
     this.passwordL = '';
       });
     },
     logout: function() {
       this.$store.dispatch('logout');
     }
   }
 }
</script>

<style scoped>
   p {
color: #FF0345;
font-family: 'Apple Chancery';
font-size: 18px;
width: 80%;
margin-left: 10%;
margin-right: 10%;
}
h1 {
     font-size: 2.5em;
     letter-spacing: .2rem;
     color: #999;
     margin-bottom: 2px;
     font-family: 'Indie Flower', cursive;
}
h2 {
    font-family: 'Apple Chancery';
    font-size: 25px;
} 
img {
     width: 100px;
}

h3 {
    font-family: 'Apple Chancery';
    font-size: 15px;
}
 h1 {
     margin-bottom: 0px;
 }
 h2 {
     margin-top: 0px;
     margin-bottom: 10px;
 }
 .narrow {
     width: 170px;
     font-size: 16px;
     text-align: center;
     margin: 5px;
 }
 .wide {
     width: 370px;
     font-size: 16px;
     text-align: center;
 }
 button {
    font-size: 15px;
 }
</style>
