<template>
<div id="app">
    <h1>Add Recipe</h1>
    <form @submit.prevent="submitData">
        <div class="form">
            <div>
                <label for="recipe-name">Recipe Name</label><br />
                <input type="text" id="recipe-name" v-model="Rname" placeholder="Name of Recipe">
            </div>
            <div>
                <label for="cook-time">Time Of Cook</label><br />
                <input type="text" id="cook-time" v-model="CookTime" placeholder="Time Of Cook">
            </div>
            <div>
                <label for="total-serve">Total Serve</label><br />
                <input type="text" id="total-serve" v-model="TotalServe" placeholder="Total Serve">
            </div>
            <div>
                <label for="add-ingred-measure">Ingredients with measurement</label><br />
                <textarea name="" id="" cols="30" rows="10" v-model="IngMeas" placeholder="Ingredients with measurement"></textarea>
            </div>
            <div>
                <label for="method">Method</label><br />
                <input type="text" id="method" v-model="Method" placeholder="Method">
            </div>
            <div>
                <label for="chef-name">Chef Name</label><br />
                <input type="text" id="chef-name" v-model="ChefName" placeholder="Chef Name">
            </div>
            <div>
                <label for="status">Status</label><br />
                <input type="radio"  v-model="Status" placeholder="Status(UnPublish/Publish)" value="Publish">Publish
                <input type="radio" v-model="Status" placeholder="Status(UnPublish/Publish)" value="Unpublish">Unpublish
            </div>
            <!-- <div>
                <label for="status">Status</label><br />
                <input type="text" id="status" v-model="Status" placeholder="Status(UnPublish/Publish)">
            </div> -->
        </div>
        <button type="submit">Sbumit</button>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            Rname: '',
            CookTime: '',
            TotalServe: '',
            IngMeas: '',
            Method: '',
            ChefName: '',
            Status: '',
        }
    },
    methods: {
        submitData() {
            const recipe = {
                Rname: this.Rname,
                CookTime: this.CookTime + ' ' + 'Hour',
                TotalServe: this.TotalServe + ' ' + 'People',
                IngMeas: this.IngMeas,
                Method: this.Method,
                ChefName: this.ChefName,
                Status: this.Status.valueOf(),
            }
            if (
                this.Rname != '' &&
                this.CookTime != '' &&
                this.TotalServe != '' &&
                this.IngMeas != '' &&
                this.Method != '' &&
                this.ChefName != '' &&
                this.Status != ''
            ) {
                this.$store.commit('addRecipe', recipe)
                this.Rname != ''
                this.CookTime != ''
                this.TotalServe != ''
                this.IngMeas != ''
                this.Method != ''
                this.ChefName != ''
                this.Status != ''
                this.$router.push({
                    path: '/recipe-list'
                })
                console.log("Recipe Add Sucessfull");
            } else alert('Please fillup all the input box')
        },
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
form {
    background: whitesmoke;
    width: 400px;
    border-radius: 10px;
    text-align: center;
    margin: 0 auto;
    padding: 10px;
}

label {
    margin-right: 20px;
    margin-bottom: 10px;
}

.form>div {
    margin-bottom: 20px;
}

</style>
