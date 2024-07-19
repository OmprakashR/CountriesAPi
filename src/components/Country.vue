<template>
  <div class="w-full  pt-20 relative" >
    
    <div class="flex justify-between flex-col gap-5 md:flex-row  sticky top-14 pb-2 w-full z-20 dark:bg-slate-800 bg-white " >
      <div class="min-w-80">
        <div
          Class="dark:bg-slate-600 rounded-md items-center p-2 shadow shadow-slate-400  bg-white flex justify-start gap-4"
        >
          <ion-icon
            name="search" 
            class="text-slate-900 dark:text-white"
          >&nbsp;</ion-icon>
          <input  v-model="filterText" placeholder="Search for a country.."
            class="bg-transparent outline-none border-none shadow-none text-white "
          />
        </div>
      </div>
      <div class="pr-1 dark:bg-slate-600 bg-white rounded-md">
        <select  v-model="selectedRegion"
          class="dark:bg-slate-600 rounded-md w-full outline-none  shadow-slate-800 border-none  items-center p-2 text-slate-800 bg-white dark:text-white"
        >
          <option value="">Filter By Region</option>
          <option v-for="region in uniqueRegions" :key="region" :value="region">{{ region }}</option>
        </select>
      </div>
    </div>
 
    <div class="grid md:grid-cols-4  grid-cols-1  gap-12 mt-10  ">
      <div v-for="country in filteredCountries" :key="country.alpha3Code">
        <router-link :to="{ name: 'CountryDetails', params: { id: country.alpha3Code } }">
          <div class="dark:bg-slate-700 shadow-slate-400 rounded overflow-hidden shadow text-sm dark:text-white text-slate-900">
            <div
              class="max-h-48 h-48 min-h-48 mb-4 bg-cover"
              :style="{ backgroundImage: `url(${country.flags.svg})` }"
            ></div>
            <div class="p-6">
              <h2 class="font-bold text-xl mb-3">{{ country.name }}</h2>
              <p class="text-md">Population: {{ country.population }}</p>
              <p class="text-md">Region: {{ country.region }}</p>
              <p class="text-md">Capital: {{ country.capital }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import countrydata from "../data.json";

export default {
  name: "CountriesList",
  components: {
    RouterLink,
  },
  data() {
    return {
      countries: countrydata,
      filterText: "",
      selectedRegion: "",
    };
  },
  computed: {
    filteredCountries() {
      let filtered = this.countries;

      // Filter by text input
      filtered = filtered.filter(country =>
        country.name.toLowerCase().includes(this.filterText.toLowerCase())
      );

      // Filter by selected region
      if (this.selectedRegion) {
        filtered = filtered.filter(country => country.region === this.selectedRegion);
      }

      return filtered;
    },
    uniqueRegions() {
      // Get unique regions for select options
      const regions = new Set();
      this.countries.forEach(country => {
        regions.add(country.region);
      });
      return Array.from(regions);
    },
  },
};
</script>

  