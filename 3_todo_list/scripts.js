const todos = [
//   {
//     text: "Learn HTML, CSS and Javascript",
//     done: true,
//   },
//   {
//     text: "Learn the basics of Vue JS",
//     done: false,
//   },
];

const todosApp = {
  data() {
    return {
      todos,
      newTodo: {
        done: false,
      },
    };
  },

  methods: {
    addTodo: function () {
      if (this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = { done: false };

        localStorage.setItem("vue_todos", JSON.stringify(this.todos))

      } else {
        alert("To-do test is required")
      }
    },
  },
};

Vue.createApp(todosApp).mount("#app");
