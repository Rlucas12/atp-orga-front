<template>
  <v-navigation-drawer v-model="drawer" permanent absolute>
    <!-- <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar> -->
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <img src="./../assets/logo.svg" alt="Tennisify" width="220px"/>
      <v-list-tile v-for="item in items" :key="item.title" @click="clickEvent">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    methods: {
      clickEvent () {},
    },
    data () {
      return {
        drawer: true,
        items: [
          { title: 'HOME', icon: 'home' },
          { title: 'TOURNAMENTS', icon: 'dashboard' },
          { title: 'IMPORT EXCEL', icon: 'dashboard' },
          { title: 'SETTING', icon: 'settings' }
        ],
        right: null
      }
    }
  }
</script>

<style scoped>
  img {
    margin: 20px 0 200px 0;
  }
</style>
