<template>
<div>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            Sources
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="source in sources"
          :key="source.name"
        >
          <td>{{ source.name }}</td>
          <td>{{ source.value }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            Uses
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="use in uses"
          :key="use.name"
        >
          <td>{{ use.name }}</td>
          <td>{{ use.value }}</td>
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
      sources: [
      ],
      uses: [
        {
          name: 'Grand Company',
          value: '1691',
        },
      ],
    };
  },
};
</script>

<style>

</style>
