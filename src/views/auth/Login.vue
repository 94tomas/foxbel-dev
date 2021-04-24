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
          href="https://connect.deezer.com/oauth/auth.php?app_id=475022&redirect_uri=http://localhost:8080/&perms=basic_access,email"
        >
          Entrar
        </v-btn>
      </v-card-text>
    </v-card>

  </v-container>
</template>
