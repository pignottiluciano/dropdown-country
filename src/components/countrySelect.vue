<template>
  <section class="contries-section">
    <h2>Select Your Country</h2>
    <CountrySelect :valueCountry="countryselectnow" v-model="countryselectnow" />
    <p>Selected Country: {{ countryselectnow }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CountrySelect from './dropdownCountries.vue'

export default defineComponent({
  components: { CountrySelect },
  setup() {
    const countryselectnow = ref<string>('')

    return {
      countryselectnow
    }
  }
})
</script>

<style scoped lang="scss">
.contries-section {
  height: 100%;
  width: 100%;
  padding: 24px;
}
</style>
