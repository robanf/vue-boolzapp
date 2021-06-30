const app= new Vue(
    {
        el:"#app",
        data:{
            count:0,
            newmess:"",
            newfind:"",
            contacts: [
                    {
                        name: 'Michele',
                        avatar: '_2',
                        visible: true,
                        messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            open:false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            open:false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            open:false,
                        }
                        ],
                    },

                    {
                        name: 'Fabio',
                        avatar: '_3',
                        visible: true,
                        messages: [
                            {
                                date: '20/03/2020 16:30:00',
                                text: 'Ciao come stai?',
                                status: 'sent',
                                open:false,
                            },
                            {
                                date: '20/03/2020 16:30:55',
                                text: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received',
                                open:false,
                            },
                            {
                                date: '20/03/2020 16:35:00',
                                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent',
                                open:false,
                            }
                        ],
                    },

                    {
                        name: 'Samuele',
                        avatar: '_4',
                        visible: true,
                        messages: [
                            {
                                date: '28/03/2020 10:10:40',
                                text: 'La Marianna va in campagna',
                                status: 'received',
                                open:false,
                            },
                            {
                                date: '28/03/2020 10:20:10',
                                text: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent',
                                open:false,
                            },
                            {
                                date: '28/03/2020 16:15:22',
                                text: 'Ah scusa!',
                                status: 'received',
                                open:false,
                            }
                        ],
                    },
                    
                    {
                        name: 'Luisa',
                        avatar: '_5',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                text: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent',
                                open:false,
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                text: 'Si, ma preferirei andare al cinema',
                                status: 'received',
                                open:false,
                            }
                        ],
                    },
                        
                ],
        },
        methods:{
            cambioutente(item,index){
                this.count=index;
            },
            addmess(){
                let date=new Date();
                this.contacts[this.count].messages.push({
                        date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+"  "+ date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
                        text: this.newmess,
                        status: 'sent'
                    
                });

                setTimeout(function(){  
                    app.contacts[app.count].messages.push({
                    date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+"  "+ date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
                    text: "ciao mi piace il miele",
                    status: 'received'
                
            }) }, 1000);

                this.newmess="";
            },
            openmenu(item,index){
                if(this.contacts[this.count].messages[index].open==false){
                    this.contacts[this.count].messages[index].open=true;
                }
                else{
                    this.contacts[this.count].messages[index].open=false;
                }
               
            },
            deletemess(item,index){
                this.contacts[this.count].messages.splice(index,1);
            },
            findutente(){
                if(this.newfind==""){
                    for(let i=0;i<this.contacts.length;i++){
                        this.contacts[i].visible=true;
                    }
                }
                else{
                        for(let i=0;i<this.contacts.length;i++){
                            if(this.contacts[i].name.includes(this.newfind)){
                                this.contacts[i].visible=true;
                            }
                            else{
                                this.contacts[i].visible=false;
                            }
                        }
                    };
                
                
            }
        }
    }
);  