<template>
  <div>
    <!-- MENU -->
    <sidebar></sidebar>
    
    <!-- TOOLBAR -->
    <v-flex xs10 offset-xs2>
      <v-toolbar>
        <v-toolbar-items class="toolbarIcn">
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-flex>

    <!-- TOURNAMENTS LIST DATATABLE -->
    <v-flex xs8 offset-xs3 class="tournamentList">
      <h1>Tournaments</h1>
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
    </v-flex>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sidebar from './Sidebar'

export default {
  name: 'HelloWorld',
  created() {
    this.$store.dispatch(
      'getTournaments',
      window.localStorage.getItem('tokentennis')
    )
  },
  components: {
    sidebar: Sidebar
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

<style>
  .toolbarIcn { margin-left: 50px }
  .tournamentList { margin-top: 150px; text-align: initial }
  .tournamentList h1 { margin-bottom: 20px }
</style>
