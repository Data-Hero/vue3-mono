<template>
  <div>
    <span id="select">
      <div v-for="hello of helloList">
        <p>{{ hello }}</p>
      </div>
    </span>
    <VueHello name="world" v-on:update="setName"/>
    <button title="Save" @click="saveHello">Save</button>
  </div>
</template>

<script setup lang="ts">
import { VueHello }  from '@vue3-mono/vue-hello';
import { Hello }  from '@vue3-mono/interfaces';

import { Ref, ref, reactive } from 'vue';

let helloList: Ref<string[]> = ref([]);
let name: { name: string } = reactive({ name: "world" });

function saveHello() {
  const hello: Hello = {
    name: name.name
  }
  
  fetch("http://127.0.0.1:3000/hello", {
    method: "POST",
    mode: "cors", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify(hello)
  }).then((response) => {      
      if (response.status !== 200) { 
        console.log("Could not save hello") 
      } else {
        loadHello();
      }
    }, (error) => {
      console.log("Could not save hello");
    })
}

function loadHello() {    
  fetch("http://127.0.0.1:3000/hello", {
    method: "GET",
    mode: "cors", 
    credentials: "same-origin", 
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  }).then((response) => {  
      if (response.status !== 200) { 
        console.log("Could not load helloes");
        return;
      }
      return response.json()
    }, (error) => {
      console.log("Could not load helloes.");
      
    }).then((data) => {
      helloList.value = data;
    })
}


function setName(options: { name: string }) {    
  name.name = options.name;  
}
</script>

<style scoped>
#select {
  display: block;
  width: 250px;
  height: 400px;
  overflow: auto;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
  margin-left: 1rem;
}
</style>
