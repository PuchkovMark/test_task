<template>
  <div id="app">
    <v-app>
      <component :is="layout">  <!--generick component -->
        <router-view/>
      </component>
    </v-app>
  </div>
</template>

<script>
  import EmptyLayout from "./layouts/EmptyLayout";
  import MainLayout from "./layouts/MainLayout";

  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    },
    components: {
      EmptyLayout, MainLayout
    }
  }
</script>

<style lang="scss">
  @import 'assets/index.css';
</style>
