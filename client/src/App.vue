<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <SearchBar :items='this.items'
    v-model="selectedItem"/>
    </v-app-bar>

    <v-main>
      <ItemBox :selectedItem='this.selectedItem'/>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar.vue';
import ItemBox from './components/ItemBox.vue';

export default {
  name: 'App',

  components: {
    SearchBar,
    ItemBox,
  },

  data: () => ({
    items: [],
    selectedItem: null,
  }),
  created() {
    axios.get('http://localhost:5000/api/items')
      .then((response) => {
        response.data.forEach((item) => {
          this.items.push({
            text: item.name,
            value: item.id,
          });
        });
      });
  },
};
</script>
