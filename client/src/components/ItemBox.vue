<template>
  <v-container>
    <v-card>
      <v-card-title>{{ name }}</v-card-title>
      <v-tabs
        v-model="currentTab"
        center-active>
        <v-tab v-if='stats'>Stats and Materia</v-tab>
        <v-tab v-if='usesource'>Sources and Uses</v-tab>
        <v-tab v-if='crafting'>Crafting</v-tab>
      </v-tabs>
      <v-tabs-items v-model="currentTab">
        <v-tab-item>
          <StatsMateria
            v-if='stats'
            :stats='stats'
          />
        </v-tab-item>
        <v-tab-item>
          <UsesSources v-if='usesource' :uses-sources='usesource' />
        </v-tab-item>
        <v-tab-item>
          <CraftingList
            v-if='crafting'
            :crafting='crafting'
          />
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
      currentTab: 0,
      crafting: null,
      stats: null,
      usesource: null,
    };
  },
  watch: {
    selectedItem(value) {
      axios.get('http://104.248.59.153:5000/api/items')
        .then((response) => {
          const peepoo = response.data.find((item) => item.name === value);
          console.log(peepoo);
          console.log(response.data);
          axios.get('http://104.248.59.153:5000/api/items/' + peepoo._id) // eslint-disable-line
            .then((response2) => {
              const crafting = {
                craftingReq: response2.data.craftingRequirements,
                craftingIngr: response2.data.craftingIngredients,
              };
              const stats = {
                stat1: response2.data.mainStat1,
                stat2: response2.data.mainStat2,
                substat1: response2.data.subStat1,
                substat2: response2.data.subStat2,
                substat3: response2.data.subStat3,
                substat4: response2.data.subStat4,
                materia: response2.data.materiaSlots,
              };
              // const usesource = {
              //   sources: response2.data.sources,
              //   uses: response2.data.uses,
              // };
              this.crafting = crafting;
              this.stats = stats;
              // this.usesource = usesource;
            });
        });
    },
  },
  props: ['selectedItem'],
  computed: {
    name() {
      return this.selectedItem || 'Select an item';
    },
  },
  components: {
    StatsMateria,
    CraftingList,
    UsesSources,
  },
});
</script>
