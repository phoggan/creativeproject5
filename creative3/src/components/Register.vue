<template>
<div>
   <ul id="menu">
    <li class="right" v-if="loggedIn"><a @click="logout" href="#">Logout</a></li>
    <li class="right" v-if="loggedIn">{{user.username}}</li>
  
    <form v-else class="right" v-on:submit.prevent="login">
    <h3>Log in to your account</h3>
    <input v-model="emailL" placeholder="Email Address">
    <input type = "password" v-model="passwordL" placeholder="Password">
    <button class="primary" type="submit">Login</button>
      </form>
    </ul>
<form v-on:submit.prevent="register">
    <h3>Register if you don't have an account</h3>  
    <p>1. Choose a user name (this is how you will be known by others on Red Bird).</p>
      <input class="narrow" v-model="username" placeholder="User Name">
      <p>2. Create an account.</p>
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
 } 
img {
     width: 100px;
}

h3 {
    font-family: 'Apple Chancery';
}
 h1 {
     margin-bottom: 0px;
 }
 h2 {
     margin-top: 0px;
     font-size: 1.2em;
     font-weight: normal;
     margin-bottom: 50px;
 }
 .narrow {
     width: 170px;
 }
 .wide {
     width: 370px;
 }
</style>
