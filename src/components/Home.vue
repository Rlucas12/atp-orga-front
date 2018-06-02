<template>
  <v-data-table
    :headers="headers"
    :items="tournaments"
  >
    <template slot="items" slot-scope="props">
      <td><v-btn color="primary" v-on:click="goToDetails(props.item._id)">Go to details</v-btn></td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.description }}</td>
      <td>{{ props.item.image }}</td>
      <td>{{ props.item.localisation }}</td>
      <td>{{ props.item.matches.length }}</td>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  created() {
    this.$store.dispatch(
      'getTournaments',
      window.localStorage.getItem('tokentennis')
    )
  },
  computed: mapGetters({
    tournaments: 'tournaments'
  }),
  methods: {
    goToDetails: function(id) {
      this.$router.push({ name: 'tournamentDetail', params: {id} })
    }
  },
  data() {
    return {
      headers: [
        { text: 'Details', value: '_id', align: 'center' },
        { text: 'Name', value: 'name', align: 'center' },
        { text: 'Description', value: 'description', align: 'center' },
        { text: 'Image', value: 'image', align: 'center' },
        { text: 'Localisation', value: 'localisation', align: 'center' },
        { text: 'Match count', value: 'matches', align: 'center' },
      ]
    }
  }
}
</script>
