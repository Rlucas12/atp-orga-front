<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text class="px-0">
            <div>Tennisify</div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-card-text class="px-0">
            <v-container grid-list-md text-xs-center>
              <v-text-field
                v-model="email"
                label="Email"
                required
              ></v-text-field>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-card-text class="px-0">
            <v-container grid-list-md text-xs-center>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <div>
      <v-btn color="primary" v-on:click="login">Login !</v-btn>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'login',
  methods: {
    login: function() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    }
  },
  data: () => {
    return {
      email: '',
      password: ''
    };
  }
};
</script>
