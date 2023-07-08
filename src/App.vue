<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
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
