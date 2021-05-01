let user = {
  firstName: "Jeff",
  lastName: "Bezos",
  blogs: [
    { title: "Moving to Microservices", likes: 1600 },
    { title: "Frontend dev", likes: 1700 },
  ],
  age: 50,
  logBlogs() {
    console.log("Logging blogs");
    this.blogs.forEach(blog => {
        console.log(blog.title, blog.likes);
    });
  },
};

console.log(user);
//console.log(user.firstName);
//user.logBlogs();
