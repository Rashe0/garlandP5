<template>
<div>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            Statistics
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ this.stat1.name }}</td>
          <td>{{ this.stat1.value }}</td>
        </tr>
        <tr>
          <td>{{ stat2.name }}</td>
          <td>{{ stat2.value }}</td>
        </tr>
        <tr>
          <td>{{ substat1.name }}</td>
          <td>{{ substat1.value }}</td>
        </tr>
        <tr>
          <td>{{ substat2.name }}</td>
          <td>{{ substat2.value }}</td>
        </tr>
        <tr>
          <td>{{ substat3.name }}</td>
          <td>{{ substat3.value }}</td>
        </tr>
        <tr>
          <td>{{ substat4.name }}</td>
          <td>{{ substat4.value }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            Materia slots
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ materia.name }}</td>
          <td>{{ materia.value }}</td>
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
  props: ['stats'],
  computed: {
    stat1() { return this.stats.stat1; },
    stat2() { return this.stats.stat2; },
    substat1() { return this.stats.substat1; },
    substat2() { return this.stats.substat2; },
    substat3() { return this.stats.substat3; },
    substat4() { return this.stats.substat4; },
    materia() { return this.stats.materia; },
  },
};
</script>

<style>

</style>
