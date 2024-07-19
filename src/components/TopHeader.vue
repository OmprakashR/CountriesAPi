<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>

    <div class="flex justify-between">
      <div class="min-w-80">
        <div
          Class="dark:bg-slate-600 rounded-md items-center p-2 bg-white flex justify-start gap-4"
        >
          <ion-icon
            name="search"
            class="text-slate-900 dark:text-white"
          >&nbsp;</ion-icon>
          <input placeholder="Search for a country.."
            class="bg-transparent outline-none border-none shadow-none text-white "
          />
        </div>
      </div>
      <div class="pr-1 dark:bg-slate-600 bg-white rounded-md">
        <select
          class="dark:bg-slate-600 rounded-md w-full outline-none border-none shadow-none items-center p-2 bg-white text-white"
        >
          <option value="">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
 
</template>
