<template>
    <div>
    <h1>Selections</h1>
    <h2>All orders come with 2 Super-Standardized Scoops<sup>tm</sup>. Choose from either 1 flavor or a mix of 2</h2>

    <div class ="selectionsGrid">
        <div class ="name">
            <h3>Name</h3>
            <p>Good Old Vanilla</p>
            <p>Traditional Chocolate</p>
            <p>Totally Not Strawberry</p>
            <p>Mint Chocolate Chip</p>
        </div>
        <div class ="description">
            <h3>Description</h3>
            <p><i><b>Everyone's Favorite Traditional Flavor</b></i></p>
            <p><i><b>Can you ever go wrong with Chocolate?</b></i></p>
            <p><i><b>Just like normal, but blue instead!</b></i></p>
            <p><i><b>Who likes that weird green color? Try our purple mint instead</b></i></p>
        </div>
<!--        <div class="picture">
            <h3>Pictures</h3>
            <a href = "https://www.flickr.com/photos/vegan-baking/6020447714/in/photolist-ab1nmE-4H9MJg-8sEr78-hxmCUG-6RqRgz-4qLeNp-2ape7B-2fMpqm-4oNwZc-5fjj24-y5xx5-7h2kWT-79fBxM-oA9DFY-FLjR7-aorszn-21q8E-dXnNH-4aj7jp-5G4P4Z-6qhGcW-6qhFL9-6qdx8v-6qhFis-3YT1tX-33fT32-6quxyD-LdVREs-6PeivY-8KCPR-9YH43t-4B3TnW-8DXEzU-8DXF6m-81VX6z-9yDhzz-8tuLWx-5fjjb6-5fjjkn-aAKmXj-27XUMd-U8R2yB-f3LTYw-5GL9Eo-d2jPwy-8gDXDp-8DXFoQ-8DUxKt-8DUyAt-6tnT6f"> <img class ="picture" v-bind:src="imagePath" alt="Vanilla"/>
                           </a>
                           <a href = "https://www.flickr.com/photos/mcauliflower/307387047/in/photolist-tarsF-bNmg7v-ddqYSQ-ahiE3o-nuYSGd-e1vF5S-6WkPYq-czFtFy-a99txN-7opsf-9qe9WG-8rfaY1-9oDtae-52A1in-bHAw9p-aocotv-9HUm8h-avi96v-REXfxC-fTZhFN-egnUZ4-bX9BkT-823HLk-ax6EtU-dNMK9P-g7X4zc-9VBZy2-9ohpYB-9WpZD3-pjevzn-4hXsCz-cWfrqN-dnRQix-b6HESP-qCA1Ko-a8wu64-9wvv23-9ebHYv-btxLC6-9pW49J-d1uzfw-9bWrma-QRZ4vi-9r9c9n-GHB9F5-cnbQuq-jissvG-9Wnmmh-apr595-ovKYzi"> <img class = "picture" v-bind:src="imagePath2" alt="Chocolate"/> </a>
                           <img class = "picture" v-bind:src="imagePath3" alt = "Blue"/>     
                           <img class = "picture" v-bind:src="imagePath4" alt = "Purple"/>
                       </div> 
                       --> 
    </div>
    </div>
</template>

<script>
    export default {
   name: 'Selections',
   data () {
            return {
                        imagePath: 'static/images/vanillaDish.jpg',
                                imagePath2: 'static/images/chocolateDish.jpg',
         
            imagePath3: 'static/images/blueIceCream.jpg',
            imagePath4: 'static/images/purpleIceCream.jpg'
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
h3 {
    font-family: 'Luminari';
    color: #00e6e6;
    font-size: 24px;
}
.selectionsGrid{
    display:grid;
    grid-template-areas:
        "name description picture";
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 50px;
    grid-template-rows: 500px;
    }

.name {
    text-align: center;
    grid-area: name;
    margins: auto;
    font-size: 22px;
    display: block;
    grid-gap: 80px;
    grid-template-rows: 50px;
}
.name p {
    font-size: 22px;
}


.description{
    text-align: center;
    grid-area: description;
    margins: auto;
}
.description p {
    font-size: 22px;
}
.picture {
    max-height: 80px; 
   width: 100px; 
    display: flex;
    flex-flow: row wrap;
    margin: 5px;
    grid-template-columns: 1fr 1fr;


}

</style>
