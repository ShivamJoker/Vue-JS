new Vue({
    el: '#app',
    data: {
        name: 'Shivam',
        mind: 'Creative',
        website: 'http://creativeshi.com',
        webTag: '<a href="http://creativeshi.com">WEB</a>'
    },
    methods: {
        greet: function (time) {
            return `Good ${time}, ${this.name}`
        }
    }
});