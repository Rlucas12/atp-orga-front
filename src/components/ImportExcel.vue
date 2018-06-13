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
        <div class="mainDiv">
          <v-flex xs6 offset-xs3>
            <p>Select tournament</p>
            <v-text-field
              :counter="50"
              label="Tournament name"
              required
              v-model="tournamentName"
            ></v-text-field>
          </v-flex>
          <label>
            <div class="importDiv" v-if='canImport()'>
                <h2>Import <br>Excel file</h2>
                <v-icon color="white" size="160px" class="iconUpload">cloud_upload</v-icon>
                <input type="file" accept=".csv" name="csv" @change="handleFileUpload($event.target.files)" />
            </div>
          </label>
        </div>
    </v-flex>
    
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sidebar from './Sidebar'
import axios from "axios";

export default {
  name: 'ImportExcel',
  components: {
    sidebar: Sidebar
  },
  data() {
    return {
      isActive: true,
      tournamentName: undefined,
      files: new FormData(),
    }
  },
  methods: {
    canImport() {
      return this.tournamentName != undefined && this.tournamentName != ''
    },
    handleFileUpload(fileList){
      this.files.append("csv", fileList[0], fileList[0]);
      axios.post(`${process.env.API_URL}/importCSV/${this.tournamentName}`, this.files, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(result => {
          console.dir(result.data);
      }, error => {
          console.error(error);
      });
    }
  }
}
</script>

<style>
  .toolbarIcn { margin-left: 50px }

  .mainDiv { margin-top: 100px; }
  .importDiv {
    height: 60vh;
    width: 100%;
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
    position: absolute;
    left: 0;
    right: 0;
  }

  label { cursor: pointer; }

  input[type=file] {
    outline: 0;
    opacity: 0;
    pointer-events: none;
    user-select: none;
  }
</style>
