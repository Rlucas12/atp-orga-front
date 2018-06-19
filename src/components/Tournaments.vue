<template>
  <div>
    <!-- MENU -->
    <sidebar :tournamentsIsActive="isActive" ></sidebar>
    
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
          <td class="text-xs-center"><v-btn color="primary" v-on:click="goToDetails(props.item._id)">Go to details</v-btn></td>
          <td class="text-xs-center">{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.description }}</td>
          <td class="text-xs-center"><img :src=" apiUrlImage + props.item.image" height="35"/></td>
          <td class="text-xs-center">{{ props.item.localisation }}</td>
          <td class="text-xs-center">{{ props.item.matches.length }}</td>
        </template>
      </v-data-table>
    </v-flex>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sidebar from './Sidebar'

export default {
  name: 'Tournaments',
  mounted() {
    this.apiUrlImage = process.env.API_URL_IMAGE
  },
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
      isActive: true,
      apiUrlImage: String,
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
  .tournamentList h1 { margin-bottom: 20px; font-family: 'Raleway'; font-weight: 500 }

  .datatable__actions { box-shadow: 0px 14px 100px 7px rgba(0, 0, 0, 0.1) }

  .table__overflow {
    border-radius: 10px 10px 0 0;
  }
  thead {
    background: #ED4264;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ED4264, #FFEDBC);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ED4264, #FFEDBC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  th { color: #FFF!important }
  th i { color: #FFF!important }
</style>
