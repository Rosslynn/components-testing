<template>
  <div class="card" style="width: 18rem;">
    <img :src="character.image" class="card-img-top" alt="character image">

    <div class="card-body">
      <h5 class="card-title">{{ character.name }}</h5>

      <div class="card-text mb-3">
        <p class="mb-0">
          <span class="font-weight-bold">Specie:</span> {{ character.species }}
        </p>

        <p class="mb-0">
          <span class="font-weight-bold">Status:</span> {{ character.status }}
        </p>
      </div>

      <router-link
        :to="{ name: 'single-character', params: { id: character.id }}"
        class="btn btn-primary">
        View more
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterComponent',
  props: {
    character: {
      type: Object,
      required: true,
      validator(characterObject) {
        return ['name', 'status', 'species', 'image', 'id'].every((key) => key in characterObject);
      },
    },
  },
};
</script>
