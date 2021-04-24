<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      :permanent="($vuetify.breakpoint.smAndUp) ? perDrawer : false"
      color="secondary"
      width="260"
      class="c-nav"
    >
      <!-- :permanent="($vuetify.breakpoint.mdAndUp) ? perDrawer : false" -->
      <!-- :permanent="$vuetify.breakpoint.mdAndUp" -->
      <v-list-item class="wrap-logo">
        <v-list-item-content>
          <a href="/">
            <img src="~../assets/logo.png" alt="Foxbel">
          </a>
        </v-list-item-content>
      </v-list-item>
      <!-- list menu -->
      <v-list dense flat v-for="(item, i) in links" :key="i">
        <v-subheader class="c-title">{{ item.title }}</v-subheader>
        <v-list-item-group
          color="primary"
          class="c-nav"
        >
          <v-list-item
            v-for="(row, j) in item.list"
            :key="j"
            :to="row.url"
          >
            <v-list-item-content>
              <v-list-item-title v-text="row.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      elevation="0"
      color="white"
      class="ml-6"
    >
      <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer" v-show="!$vuetify.breakpoint.smAndUp"></v-app-bar-nav-icon>
      <!-- <v-btn
        class="mr-0"
        @click.stop="perDrawer = !perDrawer"
        icon
        color="primary"
        v-show="$vuetify.breakpoint.mdAndUp"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
      <v-text-field
        placeholder="Buscar"
        dense
        outlined
        rounded
        hide-details
        append-icon="mdi-magnify"
        @input="searchPlay($event)"
      ></v-text-field>
      <v-spacer></v-spacer>

      <!-- menu account -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            color="primary"
            text
            class="text-capitalize"
          >
            <v-icon>mdi-account</v-icon>
            <span class="grey--text">Francisco M.</span>
          </v-btn>
        </template>
        <v-list dense min-width="200px">
          <v-list-item link>
            <v-icon>mdi-account</v-icon>
            <v-list-item-title>Mi cuenta</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link @click="logout">
            <v-icon>mdi-logout</v-icon>
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer
      app
      class="pa-0"
      color="primary"
    >
      <v-row dense align="center">
        <v-col cols="4">
          <v-card class="transparent" elevation="0">
            <div class="d-flex align-center">
              <v-avatar
                size="100"
                tile
              >
                <v-img src="https://picsum.photos/seed/picsum/200/300"></v-img>
              </v-avatar>
              <div>
                <v-card-title class="text-h5 white--text">
                  Canción
                </v-card-title>
                <v-card-subtitle class="white--text">
                  Artista - Álbum
                </v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="4" class="text-center">
          <v-row no-gutters dense align="center">
            <v-col cols="4" class="text-right">
              <v-btn dark icon large>
                <v-icon>mdi-skip-previous</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn fab class="c-btn-play" elevation="0">
                <v-icon>mdi-play</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4" class="text-left">
              <v-btn dark icon large>
                <v-icon>mdi-skip-next</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4" class="text-right">
          <v-card class="transparent px-3" elevation="0">
            <div class="d-flex align-center justify-end">
              <div style="width:100px">
                <v-slider
                  max="100"
                  min="0"
                  color="white"
                  hide-details
                  value="50"
                  class="c-slider"
                ></v-slider>
              </div>
              <div>
                <v-btn dark icon large class="ml-2">
                  <v-icon>mdi-volume-low</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card>
          <!-- <v-row no-gutters dense align="center">
            <v-col cols="4" offset="4">
              <v-slider
                max="100"
                min="0"
                color="white"
                hide-details
                height="50px"
              ></v-slider>
            </v-col>
            <v-col cols="4" class="text-right">
              <v-btn dark icon>
                <v-icon>mdi-volume-low</v-icon>
              </v-btn>
            </v-col>
          </v-row> -->
        </v-col>
      </v-row>
    </v-footer>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      drawer: null,
      perDrawer: true,
      links: [
        {
          title: 'Mi Librería',
          list: [
            {title: 'Recientes', url: '/recientes'},
            {title: 'Artistas', url: ''},
            {title: 'Álbums', url: ''},
            {title: 'Canciones', url: ''},
            {title: 'Estaciones', url: ''},
          ]
        },
        {
          title: 'Playlist',
          list: [
            {title: 'Metal', url: ''},
            {title: 'Para bailar', url: ''},
            {title: 'Rock 90s', url: ''},
            {title: 'Baladas', url: ''},
          ]
        }
      ]
    }
  },
  mounted() {
    // if (localStorage.getItem('code')) {
    //   this.getDataUser()
    // }
  },
  methods: {
    logout() {
      localStorage.removeItem('code')
      this.$router.push('/login')
    },
    async getDataUser() {
      // await axios.get(`https://connect.deezer.com/oauth/access_token.php?app_id=475022&secret=5bbc0b653f7a9212a0bce48173297855&code=${localStorage.getItem('code')}`)
      // .then(response => {
      //   console.log(response)
      // })
      // .catch(error => {
      //   console.log(error)
      // })
    },
    async searchPlay(event) {
      console.log(event);
      await axios.get(`https://api.deezer.com/search?access_token=5bbc0b653f7a9212a0bce48173297855&q=eminem`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
}
</script>