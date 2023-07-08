<template>
  <div>
    <h1 class="p-5 text-center">
      <router-link :to="{ name: 'all-characters' }">Personajes de Rick y Morty :D</router-link>
    </h1>

    <div class="border-top border-bottom p-5">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharactersLayout',
};
</script>

<style lang="scss" scoped>

</style>
