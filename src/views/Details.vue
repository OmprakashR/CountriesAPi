<script>
import countrydata from "../data.json";

export default {
  props: ["id"],
  computed: {
    country() {
      console.log(this.id);
      return countrydata.find((country) => country.alpha3Code === this.id);
      console.log(countrydata)
    },
    formattedLanguages() {
      return this.country.languages.map((lang) => lang.name).join(", ");
    },
    formattedCurrencies() {
      return this.country.currencies.map((curr) => curr.name).join(", ");
    },
    formattedPopulation() {
      // Format population with commas
      return this.country.population.toLocaleString();
    },
    formattedTopLevelDomain() {
      return this.country.topLevelDomain.join(", ");
    },
    formattedBordercountries() {
      return this.country.borders.join(", ");
    },
    formattedBorders() {
      return this.country && this.country.borders
        ? this.country.borders.map(borderCode => {
            return countrydata.find(country => country.alpha3Code === borderCode);
          })
        : [];
    },
  },
};
</script>

<template>
  <div class="my-16">
    <router-link
      to="/"
      class="shadow px-4 py-3 shadow-slate-600 dark:text-white rounded-md"
    >
      <ion-icon
        name="chevron-back-outline"
        class="text-slate-900 dark:text-white"
      ></ion-icon>
      Back</router-link
    >
  </div>
  <div class="flex-col md:flex-row items-center ">
    <div class="w-full md:w-1/2 ">
      <div class="dark:bg-slate-700/50 bg-slate-200 rounded-xl p-5">
      <img :src="country.flags.svg" class="country-flag w-full " alt="Flag" />
    </div>
  </div>
    <div class="md:p-8 p-2 w-full md:w-1/2 ">
      <h2 class="dark:text-white text-slate-600 mt-5 font-black text-lg md:text-4xl mb-6">
        {{ country.name }} Details
      </h2>
      <div class="grid grid-1 md:grid-cols-2 text-slate-900 dark:text-white text-sm md:text-md gap-4">
        <p><strong>Native Name:</strong> {{ country.nativeName }}</p>
        <p><strong>Top Level Domain:</strong> {{ formattedTopLevelDomain }}</p>
        <p><strong>Population:</strong> {{ formattedPopulation }}</p>
        <p><strong>Currencies:</strong> {{ formattedCurrencies }}</p>
        <p><strong>Region : </strong>{{ country.region }}</p>
        <p><strong>Languages:</strong> {{ formattedLanguages }}</p>
        <p><strong>Sub Region : </strong>{{ country.subregion }}</p>
        <p></p>
        <p><strong>Capital: </strong>{{ country.capital }}</p>
      </div>
 <p  class="mt-5 dark:text-white text-slate-800" v-if="country.borders && country.borders.length > 0">Borders Countries:</p>
    <div   class="flex gap-5 mt-5  flex-wrap   dark:text-white text-slate-800 "  v-if="country.borders && country.borders.length > 0">
      <div v-for="border in formattedBorders" :key="border.alpha3Code">
        <router-link class="shadow p-2 whitespace-nowrap rounded-md bg-slate-300 dark:bg-slate-900" :to="{ name: 'CountryDetails', params: { id: border.alpha3Code } }">
          {{ border.name }}
        </router-link>
      </div>
    </div>
    <p v-else class="mt-5 dark:text-white text-slate-800">No bordering countries found.</p>
    </div>
    
  </div>
</template>
