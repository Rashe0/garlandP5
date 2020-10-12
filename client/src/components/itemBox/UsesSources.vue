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
        <tr>
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
        <tr>
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
    };
  },
  props: ['sources', 'uses'],
};
</script>

<style>

</style>
