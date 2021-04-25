<template>
  <v-container class="pt-5">
    
    <v-card class="c-card mb-5" elevation="0">
      <div class="d-flex flex-no-wrap">
        <a href="javascript:;" class="c-banner">
          <div class="wrap-img" :style="{backgroundImage: 'url('+require('../assets/adele_21.jpg')+')'}">
            <!-- <img src="~../assets/adele_banner.jpg" alt="artist"> -->
            <svg width="60" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play fa-w-14 fa-5x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" color="white"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
          </div>
        </a>
        <div class="c-content d-flex flex-column justify-space-between pa-3" :style="{backgroundImage: 'url('+require('../assets/adele_banner.jpg')+')'}">
          <div>
            <v-card-title>
              Adele 21
            </v-card-title>
            <v-card-subtitle class="white--text">
              Lo mejor de Adele <span class="ml-4 secondary--text">321, 123 seguidores</span>
            </v-card-subtitle>
            <v-card-text class="pb-0">
              <v-list three-line class="pa-0">
                <v-list-item class="pa-0">
                  <v-list-item-content class="pa-0">
                    <v-list-item-subtitle>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
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

    <div class="c-grid">
      <div class="c-col" v-for="(item, index) in 10" :key="index">
        <div>
          <a href="javascript:;" class="c-banner">
            <div class="wrap-img" :style="{backgroundImage: 'url('+require('../assets/adele_21.jpg')+')'}">
              <!-- <img src="~../assets/adele_banner.jpg" alt="artist"> -->
              <svg width="32" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play fa-w-14 fa-5x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" color="white"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            </div>
            <v-btn
              dark
              icon
              absolute
              z-index="2"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </a>
        </div>
        <div class="c-title">Who You Are</div>
        <div class="c-subtitle">Jessie J</div>
      </div>
    </div>

  </v-container>
</template>

<script>
export default {
  
}
</script>
