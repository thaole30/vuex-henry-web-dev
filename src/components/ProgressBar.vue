<template>
  <p class="progress-bar" v-if="this.$store.state.auth.isAuthenticated">
    Progress: {{ progress }}%
  </p>
</template>

<script>
export default {
  name: "Progressbar",
  computed: {
    progress() {
      return Math.round(
        (this.$store.state.todos.filter((item) => item.completed).length /
          this.$store.state.todos.length) *
          100
      );
    },
  },
};
</script>

<style>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>
