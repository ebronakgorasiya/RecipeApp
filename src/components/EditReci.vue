<template>
<div v-if="showing" @click.self="close">
    <button aria-label="close" @click.prevent="close">
        ×
    </button>
    <form @submit.prevent="submitData">
        <div class="form">
            <div>
                <label for="recipe-name">Recipe Name</label><br />
                <input type="text" id="recipe-name" ref="Rname" :value="editRecipeId.Rname" placeholder="Name of Recipe">
            </div>
            <div>
                <label for="cook-time">Time Of Cook</label><br />
                <input type="text" id="cook-time" :value="editRecipeId.CookTime" ref="CookTime" placeholder="Time Of Cook">
            </div>
            <div>
                <label for="total-serve">Total Serve</label><br />
                <input type="text" id="total-serve" :value="editRecipeId.TotalServe" ref="TotalServe" placeholder="Total Serve">
            </div>
            <div>
                <label for="add-ingred-measure">Ingredients with measurement</label><br />
                <textarea name="" id="" cols="30" rows="10" :value="editRecipeId.IngMeas" ref="IngMeas" placeholder="Ingredients with measurement"></textarea>
            </div>
            <div>
                <label for="method">Method</label><br />
                <input type="text" id="method" :value="editRecipeId.Method" ref="Method" placeholder="Method">
            </div>
            <div>
                <label for="chef-name">Chef Name</label><br />
                <input type="text" id="chef-name" :value="editRecipeId.ChefName" ref="ChefName" placeholder="Chef Name">
            </div>
            <div>
                <label for="status">Status</label><br />
                <input type="radio"  value="Publish">Publish
                <input type="radio" value="Unpublish">Unpublish
            </div>
            <!-- <div>
                <label for="status">Status</label><br />
                <input type="text" id="status" :value="editRecipeId.Status" ref="Status">
            </div> -->
        </div>
        <button type="submit">Sbumit</button>
    </form>
</div>
</template>

<script>
export default {
    props: {
        showing: {
            required: true,
            type: Boolean,
        },
        editRecipeId: {},
    },
    data() {
    return {
       inputs:[{
        ingredientsName:'',
        unit:'',
        numberOfunit:''
      }],
    }
    
  },
    methods: {
        close() {
            this.$emit('close')
        },
        submitData() {
            if (
                this.$refs.Rname.value != '' &&
                this.$refs.CookTime.value != '' &&
                this.$refs.TotalServe.value != '' &&
                this.$refs.IngMeas.value != '' &&
                this.$refs.Method.value != '' &&
                this.$refs.ChefName.value != '' &&
                this.$refs.Status.value != ''
            ) {
                const recipe = {
                    id: this.editRecipeId.id,
                    Rname: this.$refs.Rname.value,
                    CookTime: this.$refs.CookTime.value,
                    TotalServe: this.$refs.TotalServe.value,
                    IngMeas: this.$refs.IngMeas.value,
                    Method: this.$refs.Method.value,
                    ChefName: this.$refs.ChefName.value,
                    Status: this.$refs.Status.value,
                }
                this.$store.commit('editRecipe', recipe)
                this.$emit('close')
                console.log("Recipe Edit Sucessfull")
            } else alert('Empty Input not allowed')
        },
    },
}
</script>

<style>

</style>
