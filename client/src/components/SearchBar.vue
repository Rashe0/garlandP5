<template>
  <v-container>
    <div>
      <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      @input="input"
      dense
      label="Search..."
      >
      </v-autocomplete>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'SearchBar',

  data: () => ({
    loading: false,
    search: null,
    select: null,
  }),
  props: ['items', 'value'],
  methods: {
    input(e) {
      this.$emit('input', e);
    },
  },
};
</script>
