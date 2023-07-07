<template>
  <div class="container">
    <div class="row">
     <div class="col">
      <div class="c-characters-wrapper d-flex flex-wrap justify-content-center">
        <character-component />
        <character-component />
        <character-component />
        <character-component />
        <character-component />
        <character-component />
        <character-component />
        <character-component />
      </div>
     </div>
    </div>
  </div>
</template>

<script>
import CharacterComponent from '@/components/CharacterComponent.vue';

export default {
  name: 'AllCharactersView',
  components: {
    CharacterComponent,
  },
};
</script>

<style lang="scss" scoped>
.c-characters-wrapper {
  gap: 30px;
}
</style>
