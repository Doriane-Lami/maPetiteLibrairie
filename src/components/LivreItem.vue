<script setup>
defineProps(["livre"]);
</script>

<template>
  <li>
    {{ livre.pourAfficher() }}
  </li>
</template>

<style></style>
