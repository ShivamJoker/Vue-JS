new Vue({
    el: '#app',
    data: {
        name: '',
        age: '',
        event: 'Keyboard Events'
    },
    methods: {
        logName: function(){
            console.log(`Your name is `);
        },
        logAge: function(){
            console.log(`Your age is`);
            
        }
    }
});