<template>
  <div>
    <h1>Reviews</h1>
    <!--   <h2>{{ name }}</h2> -->
  
  
  <p>I absolutely loved my Totally Not Strawberry ice cream. The fact that it was blue instead of red just made it so much better  -  Davy Jones</p>
  <p>So simple, and yet so refreshing. I can't believe how many choices other places have. The limited choices here made it much easier to get what I wanted  -  A Thoroughly Frazzled Ice Cream Lover</p>
  <p>Wait, leave a review? How? Why? What's in it for me?  -  Some Grumpy Old Man</p>
  <p>I really recommend half chocolate and half vanilla. It's an oldie, but a goodie   -   Thomas Jefferson</p> 
</div>
  </template>

<script>
 export default {
   name: 'Profile',
   data () {
     return {


     }
   }
 }
</script>

<style scoped>
 img {
     max-width: 500px;
 }
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
p:hover{
    font-size: 25px;
    color: blue;
}
</style>
