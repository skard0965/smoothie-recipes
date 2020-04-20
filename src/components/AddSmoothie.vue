<template>
<div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add New Smoothie Recipe
    <form @submit.prevent="AddSmoothie">
        <div class="field title">
            <label for="title">Smoothie Title</label>
            <input type="text" name="title" v-model="title">
        </div>
        <div class="field add-ingredient">
            <label for="add-ingredient">Add an ingredient</label>
            <input type="text" name="add-ingredient" @keyup.enter.prevent="addIng" v-model="another">

            <ul class="posted-ingredients">
                <li  v-for="(ing,index) in ingredients" :key="index">
                    <span class="chip">{{ing}}</span>
                </li>

            </ul>
        </div>

        <div class="field center-align">
            <p v-if="feedback" class="red-text">{{feedback}}</p>
            <button class="btn pink">Add Smoothie</button>
        </div>

    </form>
    </h2>
</div>
</template>

<script>
export default {
    name:'AddSmoothie',
    data(){
        return {
            title:null,
            another:null,
            ingredients:[],
            feedback:null,

        }
    },
    methods:{
        AddSmoothie(){
            console.log(this.title)
        },
        addIng(){
            if(this.another){
                this.ingredients.push(this.another);
                this.feedback=null;
                this.another=null;
            }else{
                this.feedback="You must enter a value to add an ingredient"
            }
        }
    }

}
</script>

<style>
.add-smoothie {
    margin-top:60px;
    padding:20px;
    max-width: 500px;
}

.add-smoothie h2 {
    font-size: 2em;
    margin:20px auto;
}

.add-smoothie .field{
    margin: 20px auto;
}

.red-text {
    font-size: 13px;
}
</style>