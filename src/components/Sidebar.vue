<template>
  <v-navigation-drawer v-model="drawer" permanent absolute>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <img src="./../assets/logo.svg" alt="Tennisify" width="220px"/>
      <v-list-tile v-for="item in items" :key="item.title" @click="clickEvent" class="sidebarItem">
        <span class="active-blur" v-if="item.isActive"></span>
        <span class="active" v-if="item.isActive"></span>
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
          { title: 'HOME', icon: 'home', isActive: false },
          { title: 'TOURNAMENTS', icon: 'dashboard', isActive: true },
          { title: 'IMPORT EXCEL', icon: 'dashboard', isActive: false },
          { title: 'SETTING', icon: 'settings', isActive: false }
        ],
        right: null
      }
    }
  }
</script>

<style scoped>
  img { margin: 20px 0 200px 0 }

  .sidebarItem { height: 50px }
  .active {
    height: 110%;
    width: 6px;
    position: absolute;
    float: left;
    margin-left: -16px;
    border-radius: 0 1px 1px 0;
    background: #ED4264;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #ED4264, #FFEDBC);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #ED4264, #FFEDBC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .active-blur {
    height: 110%;
    width: 6px;
    position: absolute;
    float: left;
    margin-left: -15px;
    background: #ED4264;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #ED4264, #FFEDBC);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #ED4264, #FFEDBC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    filter: blur(4px)
  }
</style>
