<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});
import {useDark, useToggle} from "@vueuse/core";
const isDark = useDark({
selector: 'body',
attribute: 'data-mode',
valueDark: 'dark',
valueLight: 'light',
})
const isToggle = useToggle( isDark)
const count = ref(0);
</script>

<template>
  <header class="fixed w-full z-10">
    <menu
      class="flex justify-between p-4 dark:bg-gray-800  bg-slate-100 text-slate-900 dark:text-white font-bold"
    >
      <h1>Where in the world?</h1>

      <span class="flex justify-center gap-3">
        <label @click="isToggle()"> 
          <ion-icon
            name="moon"
            class="text-slate-900 dark:text-white"
          ></ion-icon>
        </label>
        Dark Mode
      </span>
    </menu>
  </header>
</template>
