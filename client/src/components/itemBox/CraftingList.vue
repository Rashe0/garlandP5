<template>
<div>
<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            Requirements
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="stat in stats"
          :key="stat.name"
        >
          <td>{{ stat.name }}</td>
          <td>{{ stat.value }}</td>
        </tr>
      </tbody>
    </template>
</v-simple-table>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            Ingredients
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Book',
          value: '2912',
        },
      ],
      stats: [
        {
          name: 'Craftsmanship',
          value: '2480',
        },
        {
          name: 'Control',
          value: '2195',
        },
      ],
    };
  },
};
</script>

<style>

</style>
