var app = new Vue ({

        el: '#root',

        data: {
            
                contacts: [
                        {
                            name: 'Michele',
                            avatar: '_1',
                            visible: true,
                            messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Fabio',
                            avatar: '_2',
                            visible: true,
                            messages: [
                                {
                                date: '20/03/2020 16:30:00',
                                message: 'Ciao come stai?',
                                status: 'sent'
                                },
                                {
                                date: '20/03/2020 16:30:55',
                                message: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received'
                                },
                                {
                                date: '20/03/2020 16:35:00',
                                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent'
                                }
                            ],
                        },
                        {
                            name: 'Samuele',
                            avatar: '_3',
                            visible: true,
                            messages: [
                                {
                                date: '28/03/2020 10:10:40',
                                message: 'La Marianna va in campagna',
                                status: 'received'
                                },
                                {
                                date: '28/03/2020 10:20:10',
                                message: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent'
                                },
                                {
                                date: '28/03/2020 16:15:22',
                                message: 'Ah scusa!',
                                status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Alessandro B.',
                            avatar: '_4',
                            visible: true,
                            messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Si, ma preferirei andare al cinema',
                                status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Alessandro L.',
                            avatar: '_5',
                            visible: true,
                            messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Ricordati di chiamare la nonna',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Va bene, stasera la sento',
                                status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Claudia',
                            avatar: '_6',
                            visible: true,
                            messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao Claudia, hai novit???',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Non ancora',
                                status: 'received'
                                },
                                {
                                date: '10/01/2020 15:51:00',
                                message: 'Nessuna nuova, buona nuova',
                                status: 'sent'
                                }
                            ],
                        },
                        {
                            name: 'Federico',
                            avatar: '_7',
                            visible: true,
                            messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Davide',
                            avatar: '_8',
                            visible: true,
                            messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                status: 'received'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:51:00',
                                message: 'OK!!',
                                status: 'received'
                                }
                            ],
                        }
                    ],

                    selectedContact: 0, // variabile per tenere traccia del profilo cliccato

                    newMessage: 'Scrivi un messaggio.', // variabile che cattura l'input del nuovo messaggio

                    search: 'Cerca', // variabile che cattura la ricerca

                    // dinamicizzo nome e avatar dell'utente
                    user: {
                        name: 'Anna',
                        avatar: '_io'
                    },

        },

        methods: {

                // funzione per eguagliare l'indice del ciclo dei contatti con la variabile del profilo cliccato
                getSelectedContact(indexP) {
                        this.selectedContact = indexP;
                        return this.selectedContact;
                },

                // al click sull'input mi svuota il campo input
                deletePlaceholderNm() {
                        this.newMessage = '';
                },

                // Milestone_3.1: creo un nuovo messaggio da inserire in chat (lo aggiungo in coda agli altri nell'array)
                sendNewMessage() {
                        this.newMessage.trim();
                        this.contacts[this.selectedContact].messages.push({
                                date: this.getDate(), // Bonus: data e ora del messaggio sono reali
                                message: this.newMessage,
                                status: 'sent'
                        });
                        this.newMessage = '';

                        // Milestone_3.2: ricevo in automatico un messaggio, richiamandone la funzione apposita
                        setTimeout(this.receiveNewMessage,1000);
                },

                // Milestone_3.2: funzione per ricevere il messaggio
                receiveNewMessage() {
                        this.contacts[this.selectedContact].messages.push({
                                date: this.getDate(), // Bonus: vedi sopra
                                message: 'Ok',
                                status: 'received'
                        });
                },

                // al click sull'input 'cerca', scompare la scritta
                deletePlaceholderSearch() {
                        this.search = '';
                },

                // Milestone_4: funzione per filtrare i risultati
                filterContacts() {
                    const lettersSearched = this.search.toLowerCase();
                    this.contacts.forEach(contact => {
                        if (contact.name.toLowerCase().includes(lettersSearched)) {
                            contact.visible = true;
                        } else {
                            contact.visible = false;
                        }
                    });
                },

                // Bonus: aggiunta funzione che ritorna l'ora corrente usando la libreria Luxon
                getDate() {
                    const DateTime = luxon.DateTime; // richiamo Luxon
                    const currentTime = DateTime.now().toFormat('dd/MM/yyyy hh:mm:ss'); // richiamo data, ora correnti e le formatto
                    return currentTime;
                },

                // Bonus: aggiunta funzione che cambia formato delle date riportate in 'date'..
                // ..accettando come parametro le date ciclate da Vue nell'html
                getNewFormattedDates(parameter) {
                    const DateTime = luxon.DateTime; // richiamo Luxon
                    let newDateFormat = DateTime.fromFormat(parameter, "dd/MM/yyyy hh:mm:ss").toFormat('hh:mm - dd/LL');
                    parameter = newDateFormat;
                    return parameter;
                },

                // Milestone_5.1
                showMsgMenu(indexP) {
                    console.log(indexP);
                    let allMessagesInChat = document.getElementsByClassName('msg_deleteMenu');
                    console.log(allMessagesInChat);
                    allMessagesInChat[indexP].classList.toggle('is_hidden');
                },

                // Milestone_5.1
                deleteMsg(indexP) {
                    console.log(indexP)
                    console.log(this.contacts[this.selectedContact].messages[indexP])
                    this.contacts[this.selectedContact].messages.splice(indexP, 1);
                }

        },

})