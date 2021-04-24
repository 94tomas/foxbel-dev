<template>
  <v-app>

    <!-- <main-navigation>
      <slot/>
    </main-navigation> -->

<router-view></router-view>
    <!-- <v-footer
      app
      inset
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
// import MainNavigation from './layouts/MainNavigation'
export default {
  name: 'App',
  // components: {
  //   MainNavigation
  // },
  data() {
    return {
      
    }
  }
};
</script>
