<template>
    <div>
        <Navbar />

        <v-row>
            <v-col cols="12" style="display: flex; justify-content: center;">
                <router-view />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar'

    export default {
        name: "MainLayout",
        components: {
            Navbar
        }
    }
</script>

<style scoped>

</style>