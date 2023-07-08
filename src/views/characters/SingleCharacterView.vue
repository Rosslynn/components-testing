<template>
  <div class="c-single-character-view">
    <template v-if="isLoading">
      <h3>Cargando...</h3>
    </template>

    <template v-else>
      <div class="c-single-character-view__header mb-3">
        <div class="c-single-character-view__title mb-4">
          <p class="h4 mb-4">You are viewing more information about:
            <span class="font-weight-bold">
              {{ character.name }}
            </span>
          </p>
        </div>

        <div class="c-single-character-view__image">
          <img class="img-fluid" :src="character.image" :alt="character.name">
        </div>
      </div>

      <div class="c-single-character-view__body">
        <p class="mb-0">
          <span class="font-weight-bold">Specie:</span> {{ character.species }}
        </p>

        <p class="mb-0">
          <span class="font-weight-bold">Gender:</span> {{ character.gender }}
        </p>

        <p class="mb-0">
          <span class="font-weight-bold">Origin:</span> {{ character.origin.name }}
        </p>

        <p class="mb-0">
          <span class="font-weight-bold">Status:</span> {{ character.status }}
        </p>

        <p class="mb-0">
          <span class="font-weight-bold">Location:</span> {{ character.location.name }}
        </p>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'SingleCharacterView',
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      isLoading: true,
    };
  },
  async created() {
    try {
      await this.setSingleCharacter(this.id);
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    ...mapState(['character']),
  },
  methods: {
    ...mapActions(['setSingleCharacter']),
  },
};
</script>

<style lang="scss" scoped></style>
