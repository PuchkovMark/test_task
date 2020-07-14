<template>
    <div>

        <v-card v-for="contact in contacts" :key="contact.id" style="margin: 1rem;">
            <v-card-title>
                {{contact.name}}: {{contact.tel}}
                <v-btn icon color="indigo">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-btn icon color="indigo">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
            </v-card-title>
        </v-card>
      <v-col cols="12" style="display: flex; justify-content: center;">
        <v-btn class="mx-2" fab dark color="indigo">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </div>
</template>

<script>

    export default {
        name: 'home',
        data: () => ({
            contacts: null
        }),
        async mounted() {
            this.contacts = await this.$store.dispatch('fetchContacts')
        }
    }
</script>
