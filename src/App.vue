<script setup>
import { ref } from "vue";
import Header from "./components/Menu.vue";
</script>

<template>
<Header/>

<div class="container p-6 mx-auto ">
  <router-view />
 </div>
 
</template>

