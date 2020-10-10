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
            Materia slots
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="materia in materias"
          :key="materia.name"
        >
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
      stats: [
        {
          name: 'Damage',
          value: '166',
        },
        {
          name: 'Auto-attack',
          value: '127.92',
        },
        {
          name: 'Intelligence',
          value: '558',
        },
        {
          name: 'Vitality',
          value: '543',
        },
        {
          name: 'Critical Hit',
          value: '472',
        },
        {
          name: 'Determination',
          value: '330',
        },
      ],
      materias: [
        {
          name: 'Alchemist',
          value: '2',
        },
      ],
    };
  },
};
</script>

<style>

</style>
