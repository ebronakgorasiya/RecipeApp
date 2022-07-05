<template>
  <ul>
    <li>
      <router-link to="/recipe-list">recipe List</router-link>
    </li>
    <li>
      <router-link to="/">Add Recipe</router-link>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style scoped>
.router-link-active {
  background-color: #059669;
  color: white;
}
ul{
  margin: 10px;
  padding: 20px;
}
li{
  padding:10px;
}
</style>
