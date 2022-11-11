const todoList ={
    // mounted() { 
    //   let resultat = JSON.parse(localStorage.getItem('todo'))
    //   console.log(resultat); 
    //    },

    data(){
        return{
            resultat :JSON.parse(localStorage.getItem('todo')),
            things:[],
             thing: {
                content : null,
                done: false
            },
            optionJ:[
                {
                    value:"matin",
                },
                {
                    value:"aprem",
                }
            ],

            userOption: false
           
        }
    },
    methods: {
        addThing: function(){
            if(this.thing.content){
               this.resultat.push(this.thing);
               this.thing = {};
               console.log(this.resultat.content);
               localStorage.setItem('todo', JSON.stringify(this.resultat));
            }
            else{
                alert('nothing to do');
            }
        
        },

        save: function(request){
           request = this.resultat;
           localStorage.setItem('todo', JSON.stringify(request));
        }
    },

} 

Vue.createApp(todoList).mount('#app');