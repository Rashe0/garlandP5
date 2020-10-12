<template>
<div>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            Stat
          </th>
          <th>
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ stat1.statName }}</td>
          <td>{{ stat1.statValue }}</td>
        </tr>
        <tr>
          <td>{{ stat2.statName }}</td>
          <td>{{ stat2.statValue }}</td>
        </tr>
        <tr>
          <td>{{ substat1.statName }}</td>
          <td>{{ substat1.statValue }}</td>
        </tr>
        <tr>
          <td>{{ substat2.statName }}</td>
          <td>{{ substat2.statValue }}</td>
        </tr>
        <tr>
          <td>{{ substat3.statName }}</td>
          <td>{{ substat3.statValue }}</td>
        </tr>
        <tr>
          <td>{{ substat4.statName }}</td>
          <td>{{ substat4.statValue }}</td>
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
          <th>
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ materia.reqClass }}</td>
          <td>{{ materia.slotsNo }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>

<script>
export default {
  data() {
    return {};
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
