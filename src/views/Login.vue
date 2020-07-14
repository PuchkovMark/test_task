<template>
    <div>
        <v-card
                class="mx-auto"
                max-width="344"
                style="font-family: Roboto, sans-serif"
        >
            <form @submit.prevent="submitHandler">
                <v-card-text>
                    <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Password"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                            text
                            type="submit"
                    >
                        Войти
                    </v-btn>
                </v-card-actions>
            </form>
        </v-card>
    </div>
</template>

<script>

    export default {
        name: "Login",
        data: () => ({
            show1: false,
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            password: '',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match'),
            },
        }),
        methods: {
            async submitHandler() {
                try {
                    const data = await this.$store.dispatch('fetchData')
                    if (this.email === data.email && this.password === data.password) {
                        await this.$store.dispatch('login')
                        await this.$router.push('/')
                    }
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>

<style scoped>

</style>