<template>
  <div class="container">
    <div class="row">
     <div class="col-12">
      <div class="l-grid d-flex flex-wrap justify-content-center">
        <div v-for="character of characters" :key="character.id" class="l-grid__item">
          <character-component :character="character" />
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
import CharacterComponent from '@/components/CharacterComponent.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AllCharactersView',
  components: {
    CharacterComponent,
  },
  computed: {
    ...mapState(['characters']),
  },
  async created() {
    try {
      await this.setAllCharacters();
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions(['setAllCharacters']),
  },
};
</script>

<style lang="scss" scoped>
.l-grid {
  gap: 30px;
}
</style>
