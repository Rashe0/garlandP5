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
        <tr>
          <td>Unlock item</td>
          <td>{{ craftingReq.unlockItem }}</td>
        </tr>
        <tr>
          <td>Craftsmanship</td>
          <td>{{ craftingReq.reqCraft }}</td>
        </tr>
        <tr>
          <td>Control</td>
          <td>{{ craftingReq.reqControl }}</td>
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
  props: ['crafting'],
  computed: {
    craftingReq() { return this.crafting.craftingReq; },
    craftingIngr() { return this.crafting.craftingIngr; },
  },
};
</script>

<style>

</style>
