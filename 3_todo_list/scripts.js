const todos = [
    {
        text: 'Learn HTML, CSS and Javascript',
        done: true
    },
    {
        text: 'Learn the basics of Vue JS',
        done: false
    }
]

const todosApp = {
    data() {
        return {
            todos
        }
    }
};

Vue.createApp(todosApp).mount("#app")