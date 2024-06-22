<script setup lang="ts">
import { RouterView } from 'vue-router'
import TodoHeader from './components/TodoHeader.vue';
</script>

<template>
  <TodoHeader />
  <RouterView />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

* {
  font-family: "Roboto", 'sans-serif';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.containe {
  max-width: 1100px;
  margin: 0 auto;
}
</style>