<script setup>
import { ref } from "vue";
import Header from "./components/Menu.vue";
</script>

<template>
<Header/>

<main class="container p-6 mx-auto ">
  <router-view />
 </main>
 
</template>

