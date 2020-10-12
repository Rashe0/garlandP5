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
        <tr>
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
        <tr>
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
    };
  },
  props: ['craftingReq', 'craftingIngr'],
};
</script>

<style>

</style>
