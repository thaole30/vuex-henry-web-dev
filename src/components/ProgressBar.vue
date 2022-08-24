<template>
  <p class="progress-bar" v-if="this.$store.state.auth.isAuthenticated">
    Progress: {{ progress }}%
  </p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Progressbar",
  computed: mapGetters(["doneTodos", "progress"]),
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
