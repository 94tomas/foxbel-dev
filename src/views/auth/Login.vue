<template>
  <v-container class="d-flex justify-center align-center" style="height:100%">
    
    <v-card>
      <v-card-title>
        Iniciar sesión
      </v-card-title>
      <v-card-text>
        <v-btn
          block
          color="primary"
          @click="loginWithDeezer"
        >
          <!-- href="https://connect.deezer.com/oauth/auth.php?app_id=475022&redirect_uri=http://localhost:8080/&perms=basic_access,email" -->
          Entrar
        </v-btn>
      </v-card-text>
    </v-card>

  </v-container>
</template>
<script>
export default {
  methods: {
    loginWithDeezer() {
      window.DZ.login(response => {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          window.DZ.api('/user/me', response => {
            console.log(response);
            if (!response.error) {
              localStorage.setItem('auth', true)
              localStorage.setItem('name', response.name)
              this.$router.push('/')
            }
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      }, {perms: 'basic_access,email,manage_library,offline_access'});
    }
  },
}
</script>
