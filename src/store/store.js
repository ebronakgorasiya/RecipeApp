import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      recipeList: [
        {
          id: 1,
          Rname: 'Rice',
          CookTime: '2 Hour',
          TotalServe: '1 Public',
          IngMeas: 'Rice 200 gram',
          Method: 'Make a Boil in water',
          ChefName: 'Ronak',
          Status: 'Publish'
        },
      ],
    }
  },
  getters: {
    recipeList: (state) => {
      return state.recipeList
    },
  },
  mutations: {
    deleteRecipe(state, id) {
      const index = state.recipeList
        .map((x) => {
          return x.id
        })
        .indexOf(id)
      state.recipeList.splice(index, 1)
    },
    addRecipe(state, obj) {
      const recipe = {
        id: Date.now(),
        ...obj,
      }
      state.recipeList.push(recipe)
    },

    editRecipe(state, item) {
      const items = state.recipeList
      var foundIndex = items.findIndex((x) => x.id == item.id)
      items[foundIndex] = item
    },
  },
})

export default store
