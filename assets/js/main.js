//Rifare l'esercizio dello slider come fatto assieme in classe.

//BONUS
//Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.



const app = new Vue ({
    el: '#app',
    data: {
        corrente: 0,
        slides: [
            {
                items: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                items: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                items: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                items: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                items: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            
        ]
    },
    
    methods: {
        arrowDown () {
            
            console.log('scorri in basso');
            this.corrente++;
            if(this.corrente > this.slides.length - 1){
                this.corrente = 0;
            }
        },  
        arrowTop () {
            
            console.log('scorri in alto');
            this.corrente--;
            if(this.corrente < 0){
                this.corrente = this.slides.length - 1;
            }
        },
    }
})


/*setInterval (arrowDown, 1000)*/
