<template>
  <div class="container">
    <input type="text" v-model="name" autofocus />
    <p class="hello">Hello, {{ name }}!</p>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from "vue";

const props = defineProps<{
  name: "world" | "hero";
}>();
const emit = defineEmits(['update'])

let name: Ref<string> = ref(props.name ?? "world");

watch(name, async (newName) => {
  emit('update', { name: newName});
}, { deep: true })
</script>

<style scoped>
input {
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: center;
}
.hello {
  font-family: Arial, Helvetica, sans-serif;
  color: #353535;
  font-size: 1.2rem;
}
</style>
