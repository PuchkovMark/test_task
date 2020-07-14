<template>
    <div>
        <v-row>
            <v-col cols="12" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
                <router-view />
            </v-col>
        </v-row>
    </div>
</template>

<script>

    export default {
        name: "EmptyLayout",
    }
</script>

<style scoped>

</style>