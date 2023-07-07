<template>
  <div class="container">
    <div class="row">
     <div class="col-12">
      <div class="l-grid d-flex flex-wrap justify-content-center">
        <div class="l-grid__item">
          <character-component />
        </div>

        <div class="l-grid__item">
          <character-component />
        </div>

        <div class="l-grid__item">
          <character-component />
        </div>

        <div class="l-grid__item">
          <character-component />
        </div>

        <div class="l-grid__item">
          <character-component />
        </div>

        <div class="l-grid__item">
          <character-component />
        </div>

        <div class="l-grid__item">
          <character-component />
        </div>

        <div class="l-grid__item">
          <character-component />
        </div>
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
.l-grid {
  gap: 30px;
}
</style>
