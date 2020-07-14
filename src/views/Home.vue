<template>
    <div>

        <v-card v-for="(contact, index) in contacts" :key="index" style="margin: 1rem;">
            <v-card-title>
                {{contact.name}}: {{contact.tel}}
                <v-btn icon color="indigo" @click="deleteContact(contact.name, contact.tel)">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-btn icon color="indigo" @click="selectContacts(contact.name, contact.tel)">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
            </v-card-title>
        </v-card>
      <v-col cols="12" style="display: flex; justify-content: center;">
        <v-btn class="mx-2" fab dark color="indigo" @click="addAnyContact">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>

        <v-overlay
                absolute
                opacity=0.46
                v-model="overlayUpdate"
                z-index="100"
        >
            <v-card>
                <v-card-title>
                    <v-text-field v-model="selectedName" solo style="margin: 1rem" hide-details clearable></v-text-field>
                    :
                    <v-text-field v-model="selectedTel" solo style="margin: 1rem" hide-details clearable></v-text-field>
                    <v-btn icon color="green" @click="updateContact">
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                    <v-btn icon color="red" @click="overlayUpdate = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
            </v-card>

        </v-overlay>

        <v-overlay
                absolute
                opacity=0.46
                v-model="overlayAdd"
                z-index="100"
        >
            <v-card>
                <v-card-title>
                    <v-text-field v-model="selectedName" solo style="margin: 1rem" hide-details clearable></v-text-field>
                    :
                    <v-text-field v-model="selectedTel" solo style="margin: 1rem" hide-details clearable></v-text-field>
                    <v-btn icon color="green" @click="addContact">
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                    <v-btn icon color="red" @click="overlayAdd = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
            </v-card>

        </v-overlay>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'home',
        data: () => ({
            contacts: null,
            overlayUpdate: false,
            overlayAdd: false,
            selectedName: null,
            selectedTel: null,
            selectedContact: null,
        }),
        async mounted() {
            this.contacts = await (await fetch('http://localhost:3000/contacts')).json()
        },
        methods: {
            async deleteContact(name, tel) {
                const res = this.contacts.find(el => el.name === name && el.tel === tel)
                console.log(res.id)
                await axios.delete('http://localhost:3000/contacts/' + res.id)
                this.contacts = await (await fetch('http://localhost:3000/contacts')).json()
            },
            selectContacts(name, tel) {
                this.overlayUpdate = true
                this.selectedName = null
                this.selectedTel = null
                this.selectedContact = null
                this.selectedName = name
                this.selectedTel = tel
                this.selectedContact = this.contacts.find(el => el.name === name && el.tel === tel)
                console.log(this.selectedContact)
            },
            async updateContact() {
                const name = this.selectedName
                const tel = this.selectedTel
                const id = this.selectedContact.id
                const updatedContact = {
                    name,
                    tel
                }
                await axios.put('http://localhost:3000/contacts/' + id, updatedContact)
                this.contacts = await (await fetch('http://localhost:3000/contacts')).json()
                this.selectedName = null
                this.selectedTel = null
                this.overlayUpdate= false
            },
            addAnyContact() {
                this.overlayAdd = true
                this.selectedName = null
                this.selectedTel = null
            },
            async addContact() {
                const name = this.selectedName
                const tel = this.selectedTel
                const id = Number(Math.random() + Math.random())
                const newContact = {
                    id,
                    name,
                    tel
                }
                //this.contacts.push(newContact)
                console.log(this.contacts)
                await axios.post('http://localhost:3000/contacts', newContact)
                this.contacts = await (await fetch('http://localhost:3000/contacts')).json()
                this.overlayAdd = false
            }
        }
    }
</script>
