<template>
  <div class="post">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="tournament" class="content">
      <div>{{ tournament.name }}</div>
      <div>{{ tournament.localisation }}</div>
      <div v-for="match in tournament.matches" v-bind:key="match._id">
        <div>{{ match }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TournamentDetail",
  data() {
    return {
      loading: false,
      tournament: null,
      error: null
    };
  },
  created() {
    this.fetchTournament();
  },
  methods: {
    fetchTournament() {
      axios
        .get(`http://localhost:3000/api/tournaments/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "tokentennis"
            )}`
          }
        })
        .then(({ data }) => {
          this.loading = false;
          this.tournament = data;
        })
        .catch(e => (this.error = e));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
