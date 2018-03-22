<template>
<div id="app">
<div>
    <h1>Place an Order for When You Arrive!</h1>
    <h2>Order ahead and skip straight to the front of the line. Just fill out this form and give us an estimated time to have it ready by. Please allow at least 10 minutes for orders placed this way. And don't worry, we won't let your order melt!</h2>
</div> 

<div class ="orders">
    <form v-on:submit.prevent="addItem">
        <input type="text" v-model="name" placeholder="Name">
        <select v-model="flavor">
            <option value="Good Old Vanilla">Good Old Vanilla</option>
            <option value="Traditional Chocolate">Traditional Chocolate</option>
            <option value="Totally Not Strawberry">Totally Not Strawberry</option>
            <option value="Mint Chocolate Chip">Mint Chocolate Chip</option>
        </select>
        <input type="text" v-model="text" placeholder="Time"> 
        <button type="submit">Order</button>
    </form>
    <ul>
        <li v-for="item in activeItems">
        <label> {{item.id}} &nbsp; Name: {{item.name}} &nbsp; {{item.flavor}} &nbsp; Time for Pickup: {{item.text}}  &nbsp; &nbsp; &nbsp; &nbsp; Cancel Order? <button v-on:click="deleteOrder(item)" class ="delete"></button></label>
        </li>
    </ul>
</div>
</div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        name: 'Orders',
        data () {
            
            return {
                items: [],
                flavor: 'Good Old Vanilla',
                text: '',
                name: '',
            }
        },
        created: function() {
            this.getItems();
        },
        computed: {
            activeItems: function() {
                return this.items;
            },
        },
        methods: {
            addItem: function() {
                console.log('start addItem');
                axios.post("/api/items", {
                            flavor: this.flavor,       
                            text: this.text,
                            name: this.name,
                    }).then(response => {
                    console.log('response in addItem');
                    this.getItems(); 
                    this.flavor = 'Good Old Vanilla';
                    this.text = '';
                    this.name = '';
                    return true;
                    }).catch(err => {
                });
            },
            getItems: function() {
                console.log('start getItems');
                axios.get("/api/items").then(response => { 
                    console.log('response in getItems');
                    console.log(response);
                this.items = response.data;
                return true;
                 }).catch(err => {
               });
            },
            deleteOrder: function(item) {
                axios.delete("/api/items/" + item.id).then(response => {
                    this.getItems();
                    return true;
                    }).catch(err => {
                });
            },
},
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

li {
    
    padding: 5px;
    font-size: 15px;
    display: block;
    align-items: center;
}
label {
    display: block;
    font-size: 16px;  
  
}

input[type=text] {
    font-size: 1em;
    font-family: 'Apple Chancery';
}

select {
    font-size: 1em;
    font-family: 'Apple Chancery';
}

button {
    font-size: 1em;
    font-family: 'Apple Chancery';
}

.delete {
    background: red;
    height: 16px;
    width: 16px;
}

</style>
