import { reactive } from "vue";

let characters = [];
console.log(characters);

export const store = reactive;({
    searchText:"",
    characters: []
});
