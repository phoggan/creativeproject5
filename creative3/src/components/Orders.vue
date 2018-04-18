<template>
<div>
    <div v-if="loggedIn">
        <place-order/>
    </div>
    <div v-else>
        <register/>
    </div>
</div>
</template>

<script>
 import Register from './Register';
 import PlaceOrder from './PlaceOrder';
 export default {
   name: 'Orders',
   components: {Register,PlaceOrder},
   computed: {
     loggedIn: function() {
       return this.$store.getters.loggedIn;
     },
   },
 }
</script>

<style scoped>
</style>
