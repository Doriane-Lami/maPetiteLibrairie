<script setup>
defineProps(["livre"]);
const emit = defineEmits(["deleteL"]);
</script>

<template>
  <li>
    {{ livre.pourAfficher() }}
    <button @click="$emit('deleteL', livre.id)">Supprimer</button>
  </li>
</template>

<style></style>
