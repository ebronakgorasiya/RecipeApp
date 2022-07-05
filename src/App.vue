<template>
<div id="app">
    <nav>
        <router-link to="/recipe-list">Recipe List</router-link> |
        <router-link to="/add-recipi">Add Recipe</router-link>
    </nav>
    <router-view></router-view>
</div>

</template>

<script>
// import DeskBoard from './components/DeskBoard.vue';

// import AddContact from './components/AddRecipi.vue'
// import ContactList from './components/RecipeList.vue'
export default {
    components: {
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}
</style>
