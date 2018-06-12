<template>
  <div>
    <!-- MENU -->
    <sidebar :importExcelIsActive='isActive'></sidebar>
    
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

    <!-- IMPORT EXCEL -->
    <v-flex xs6 offset-xs4>
        <div class="importDiv" @click="consoleMe">
            <h2>Import <br>Excel file</h2>
            <v-icon color="white" size="160px" class="iconUpload">cloud_upload</v-icon>
        </div>
    </v-flex>
    
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sidebar from './Sidebar'

export default {
  name: 'ImportExcel',
  components: {
    sidebar: Sidebar
  },
  methods: {
      consoleMe () {
          this.$router.push('/tournaments')
      }
  },
  data() {
    return {
        isActive: true
    }
  }
}
</script>

<style>
  .toolbarIcn { margin-left: 50px }

  .importDiv {
    height: 60vh;
    width: 100%;
    margin-top: 150px;
    position: relative;
    background: #ED4264;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom right, #ED4264, #FFEDBC);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom right, #ED4264, #FFEDBC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 16px;
    cursor: pointer;
}

  .importDiv h2 { 
      color: #FFF;
      position: absolute;
      left: 0;
      right: 0;
      top: 40%;
      margin-top: -120px
}
  
  .iconUpload {
    height: 160px;
    top: 50%;
    margin-top: -80px;
    position: relative;
}
</style>
