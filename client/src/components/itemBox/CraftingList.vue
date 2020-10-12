<template>
<div>
<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            Requirements
          </th>
          <th>
            Quantity
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if='craftingReq'>
          <td>{{ craftingReq.unlockItem }}</td>
          <td>{{ craftingReq.reqCraft }}</td>
        </tr>
      </tbody>
    </template>
</v-simple-table>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            Ingredient
          </th>
          <th>
            Quantity
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ing in craftingIngr" :key="ing.itemName">
          <td>{{ ing.itemName }}</td>
          <td>{{ ing.quantity }}</td>
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
