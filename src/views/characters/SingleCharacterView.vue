<template>
  <div class="c-single-character-view">
    <template v-if="isLoading">
      <h3>Cargando...</h3>
    </template>

    <template v-else>
      <div class="c-single-character-view__header mb-3">
        <div class="c-single-character-view__title mb-4">
          <p class="h4 mb-4">Estás viendo más información sobre:
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
          <span class="font-weight-bold">Especie:</span> {{ character.species }}
        </p>

        <p class="mb-0">
          <span class="font-weight-bold">Género:</span> {{ character.gender }}
        </p>

        <p class="mb-0">
          <span class="font-weight-bold">Origen:</span> {{ character.origin.name }}
        </p>

        <p class="mb-0">
          <span class="font-weight-bold">Estado:</span> {{ character.status }}
        </p>

        <p class="mb-0">
          <span class="font-weight-bold">Ubicación:</span> {{ character.location.name }}
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
