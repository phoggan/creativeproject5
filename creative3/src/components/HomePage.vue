<template>
    <div class="hero">
        <h1>Welcome to Pretty Mediocre Ice Cream!</h1>
        <br>
        <h2>We are a small, locally-owned ice cream parlor dedicated to quality over quantity. Our flavor selection may be small, but every batch is crafted with love and fine ingredients. Head over to our Selections page to view our menu</h2>
        <br>
        <br>
   <div class="doubleGrid">
       <div class="left">
           <a href = "https://www.flickr.com/photos/vegan-baking/6020447714/in/photolist-ab1nmE-4H9MJg-8sEr78-hxmCUG-6RqRgz-4qLeNp-2ape7B-2fMpqm-4oNwZc-5fjj24-y5xx5-7h2kWT-79fBxM-oA9DFY-FLjR7-aorszn-21q8E-dXnNH-4aj7jp-5G4P4Z-6qhGcW-6qhFL9-6qdx8v-6qhFis-3YT1tX-33fT32-6quxyD-LdVREs-6PeivY-8KCPR-9YH43t-4B3TnW-8DXEzU-8DXF6m-81VX6z-9yDhzz-8tuLWx-5fjjb6-5fjjkn-aAKmXj-27XUMd-U8R2yB-f3LTYw-5GL9Eo-d2jPwy-8gDXDp-8DXFoQ-8DUxKt-8DUyAt-6tnT6f"> <img v-bind:src="imagePath" alt="Vanilla"/>
           </a>

       </div>
       <div class="right">
           <a href = "https://www.flickr.com/photos/mcauliflower/307387047/in/photolist-tarsF-bNmg7v-ddqYSQ-ahiE3o-nuYSGd-e1vF5S-6WkPYq-czFtFy-a99txN-7opsf-9qe9WG-8rfaY1-9oDtae-52A1in-bHAw9p-aocotv-9HUm8h-avi96v-REXfxC-fTZhFN-egnUZ4-bX9BkT-823HLk-ax6EtU-dNMK9P-g7X4zc-9VBZy2-9ohpYB-9WpZD3-pjevzn-4hXsCz-cWfrqN-dnRQix-b6HESP-qCA1Ko-a8wu64-9wvv23-9ebHYv-btxLC6-9pW49J-d1uzfw-9bWrma-QRZ4vi-9r9c9n-GHB9F5-cnbQuq-jissvG-9Wnmmh-apr595-ovKYzi"> <img v-bind:src="imagePath2" alt="Chocolate"/> </a>
       </div>
   </div> 
    </div>
</template>

<script>
 export default {
     name: 'HomePage',
     data () {
     return {
        imagePath: 'static/images/vanillaDish.jpg',
        imagePath2: 'static/images/chocolateDish.jpg'
    }
     }
 }
</script>

<style scoped>
 body {
     padding: 0px;
     margin: 0px;
 }
 .hero {
     text-align: center;
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
     width: 70%;
 }
.doubleGrid {
    display:grid;
    grid-template-areas:
    "left right";
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px;

}

</style>
