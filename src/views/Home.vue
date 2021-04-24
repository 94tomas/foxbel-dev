<template>
  <v-container>
    
    <v-card class="grey mb-5" elevation="0">
      <div class="d-flex flex-no-wrap">
        <v-avatar
          size="250"
          tile
        >
          <v-img src="https://api.deezer.com/artist/75798/image"></v-img>
        </v-avatar>
        <div class="d-flex flex-column justify-space-between pa-3">
          <div>
            <v-card-title class="text-h5">
              Adele 21
            </v-card-title>
            <v-card-subtitle>
              Lo mejor de Adele <span>321, 123 seguidores</span>
            </v-card-subtitle>
            <v-card-text class="pb-0">
              <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
            </v-card-text>
          </div>
          <v-card-actions>
            <v-btn
              height="31px"
              rounded
              width="115px"
              class="text-capitalize"
              color="primary"
              elevation="0"
            >
              Reproducir
            </v-btn>
            <v-btn
              height="31px"
              outlined
              rounded
              width="115px"
              color="primary"
              class="ml-4"
              elevation="0"
            >
              Seguir
            </v-btn>
            <v-menu
              bottom
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  icon
                  v-bind="attrs"
                  v-on="on"
                  class="ml-4"
                >
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
              </template>

              <v-list dense>
                <v-list-item link>
                  <v-list-item-title>Opciòn 1</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-title>Opciòn 2</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-actions>
        </div>
      </div>
    </v-card>

    <div class="text-h5 primary--text mb-5">Resultados</div>

    <div class="c-flex">
      <div class="c-col" v-for="(item, index) in 10" :key="index">
        <div>
          <v-img aspect-ratio="1" src="https://api.deezer.com/artist/75798/image"></v-img>
        </div>
        <div>Who You Are</div>
        <div>Jessie J</div>
      </div>
    </div>

  </v-container>
</template>

<script>
export default {
  
}
</script>
