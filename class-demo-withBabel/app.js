class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`the user: ${this.username} has logged in`);
    return this;
  }
  logout() {
    console.log(`the user: ${this.username} has logged out`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, adminLevel) {
    super(username, email);
    this.adminLevel = adminLevel;
  }

  deleteUser() {
    console.log(
      `Delete operation performed by user: ${this.username} having admin level of: ${this.adminLevel}`
    );
    return this;
  }
}

const userOne = new User("Ramu", "ramu.mani@test.com");
const adminOne = new Admin("Noel", "noel.thomas@test.com", "super user");

userOne.login().logout();
adminOne.login().deleteUser().logout();
