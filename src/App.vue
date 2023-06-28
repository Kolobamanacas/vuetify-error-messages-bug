<template>
  <v-text-field
    label="Plain text input"
    rounded="true"
    variant="solo"
    type="text"
    :error-messages="['Field is required.', 'Field must contain more than 8 characters.']"
  >
  </v-text-field>
</template>

<script setup lang="ts">
</script>
