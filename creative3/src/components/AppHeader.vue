<template>
    <nav>
    <label for="show-menu" class="show-menu">Show Menu</label>
    <input type="checkbox" id="show-menu" role="button">
        <ul id="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/Selections">Selections</router-link></li>
        <li><router-link to="/Reviews">Reviews</router-link></li>
       
    </ul>   
    </nav>
</template>

<script>
 export default {
     name: 'AppHeader'
 }
</script>

<style scoped>
 /*Strip the ul of padding and list styling*/
 .clear {
     float: clear;
 }
 nav {
     display: grid;
 }
 ul {
     list-style-type:none;
     margin:0;
     padding:0;
 }

 /*Create a horizontal list with spacing*/
 li {
     display:inline-block;
     float: center;
     margin-right: 1px;
 }
 /*Style for menu links*/
 li a {
     display:block;
     margin-right: 50px;
     margin-left: 50px;
     height: 50px;
     text-align: center;
     line-height: 50px;
     color: blue;
     background: #ffe6ff;
     width: 150px;
     position: relative;
     font-family: 'Gill Sans';
     font-size: 18px;
 }
 /*Active color*/
 li a.active {
     color: red;
     background: blue;
 }
 /*Hover state for top level links*/
 li:hover a {
     font-size: 20px;
     color: red;
 }
 /*Style 'show menu' label button and hide it by default*/
 .show-menu {
     text-decoration: none;
     color: #fff;
     background: #FF5035;
     text-align: center;
     padding: 10px 0;
     display: none;
 }
 /*Hide checkbox*/
 input[type=checkbox]{
     display: none;
 }
 /*Show menu when invisible checkbox is checked*/
 input[type=checkbox]:checked ~ #menu{
     display: block;
 }
/* li:hover{
font-size: 20px;
 }*/
</style>
