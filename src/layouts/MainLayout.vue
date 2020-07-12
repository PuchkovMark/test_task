<template>
    <div>
        <div class="app-main-layout">

            <Header />

            <main class="app-content">
                <div class="app-page">
                    <router-view/>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header'

    export default {
        name: "MainLayout",
        components: {
            Header
        }
    }
</script>

<style scoped>

</style>