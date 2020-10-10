<template>
  <v-container>
    <v-card>
      <v-card-title>{{ name }}</v-card-title>
      <v-tabs
        v-model="currentTab"
        center-active>
        <v-tab>Stats and Materia</v-tab>
        <v-tab>Sources and Uses</v-tab>
        <v-tab>Crafting</v-tab>
      </v-tabs>
      <v-tabs-items v-model="currentTab">
        <v-tab-item>
          <StatsMateria/>
        </v-tab-item>
        <v-tab-item>
          <UsesSources/>
        </v-tab-item>
        <v-tab-item>
          <CraftingList/>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import StatsMateria from './itemBox/StatsMateria.vue';
import CraftingList from './itemBox/CraftingList.vue';
import UsesSources from './itemBox/UsesSources.vue';

export default Vue.extend({
  name: 'Box',
  data() {
    return {
      name: 'NAME',
      currentTab: 0,
    };
  },
  watch: {
    selectedItem(value) {
      axios.get('http://localhost:5000/api/items')
        .then((response) => {
          const peepoo = response.data.find((item) => item.name === value);
          console.log(peepoo);
          console.log(response.data);
        });
    },
  },
  props: ['selectedItem'],
  components: {
    StatsMateria,
    CraftingList,
    UsesSources,
  },
});
</script>
