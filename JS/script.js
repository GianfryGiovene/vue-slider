const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

// console.log(slides);

/*
Descrizione:
Partendo dal template fornito renderizzare lo slider con Vue
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente

2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente

3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere 
quando esce
*/

const app = new Vue({
    el: '#app',


    data:{
        slides,
        imgPointer: 0,
        timerCleaner: undefined
  
    },
    methods:{

        decrease(){
            if(this.imgPointer === 0){

                this.imgPointer = this.slides.length -1;

            }else{

                this.imgPointer--;

            }
        },

        increase(){
            if(this.imgPointer ===this.slides.length-1){

                this.imgPointer = 0;

            }else{

                this.imgPointer++;

            }
        },

        startTimer(){
            this.timerCleaner = setInterval(this.increase, 3000);
        },

        stopTimer(){
            clearInterval(this.timerCleaner);
        },

        addActiveClass(item){

            const index = this.slides.findIndex(
                (slide)=> slide.title === item.title
            )     
            
            if(index===this.imgPointer){

                return 'thumb active';

            }else{

                return 'thumb';
            }
        },

        imageUp(){
            
            if(this.imgPointer===0){
                this.imgPointer = this.slides.length;
            }
            this.imgPointer--;
        },

        imageDown(){
            this.imgPointer++;
            if(this.imgPointer===this.slides.length){
                this.imgPointer = 0;
            }
        },
        selectSlide(item){
            this.imgPointer = item;
        }
        
    }       
})
