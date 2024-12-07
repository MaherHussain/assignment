<template>
  <div class="mx-auto">
    <main-header />
    <div class="container w-ful py-9 mx-auto min-h-screen">
      <router-view />
    </div>
    <main-footer />
  </div>
</template>

<script setup lang="ts">
import { MainHeader, MainFooter } from './components';
</script>

<style scoped>
.container {
  max-width:  1000px;
}
</style>
