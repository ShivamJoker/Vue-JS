new Vue({
    el: '#app',
    data: {
        name: 'Shivam',
        age: 16,
        event: 'DOM Events',
        x: 0,
        y: 0
    },
    methods: {
        add: function (num) {
            this.age += num;
        },
        subtract: function (num) {
            this.age -= num;
        },
        move: function (e) {
            this.x = e.offsetX
            this.y = e.offsetY
            
        }
    }
});