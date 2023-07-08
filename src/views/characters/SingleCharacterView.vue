<template>
  <div>
    <code>{{  character  }}</code>
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
  async created() {
    try {
      await this.setSingleCharacter(this.id);
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

<style lang="scss" scoped>

</style>
