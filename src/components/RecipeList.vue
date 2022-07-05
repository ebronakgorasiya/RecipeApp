<template>
<div>
    <h1>Recipe List</h1>
    <p class="total-count">Total Recipe : {{this.$store.getters.recipeList.length}}</p>
    <table>
        <edit-recipe :showing="exampleModalShowing" :editRecipeId="editRecipeId" @close="exampleModalShowing = false"></edit-recipe>
        <tr>
            <th>Name Of Recipes</th>
            <th>Time to cook</th>
            <th>Total serve</th>
            <th>Ingredients with measurement</th>
            <th>Method</th>
            <th>Chef</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
        <tr v-for="item in getRecipes" :key="item.id">
            <td>
                <p>{{ item.Rname }}</p>
            </td>
            <td>
                <p>{{ item.CookTime }}</p>
            </td>
            <td>
                <p>{{ item.TotalServe }}</p>
            </td>
            <td>
                <p>{{ item.IngMeas }}</p>
            </td>
            <td>
                <p>{{ item.Method }}</p>
            </td>
            <td>
                <p>{{ item.ChefName }}</p>
            </td>
            <td>
                <p>{{ item.Status }}</p>
            </td>
            <td>
                <button @click="deleteRecipe(item.id)">Delete</button>
                <button @click="editRecipe(item)">Edit</button>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
import EditReci from './EditReci.vue'
export default {
    components: {
        'edit-recipe': EditReci,
        //recipeList: [],
    },
    data() {
        return {
            exampleModalShowing: false,
            editRecipeId: null,
            
        }
    },
    computed: {
        getRecipes() {
            return this.$store.getters.recipeList
        },
        
    },

    methods: {
        deleteRecipe(id) {
            this.$store.commit('deleteRecipe', id)
            console.log("Recipe Delete Sucessfull")
        },
        editRecipe(id) {
            this.editRecipeId = id
            this.exampleModalShowing = true
        },
    },
}
</script>

<style>
table,
th,
td {
    border: 1px solid black;
}

th,
td {
    padding: 10px;
}

p {
    text-align: center;
}

button {
    margin-right: 5px;
}
.total-count{
    font-size:20px;
    font-weight: bold;
}
</style>
