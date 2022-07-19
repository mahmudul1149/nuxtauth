<template>
  <div class="signup">
    <div class="signup-form">
      <form>
        <div class="container">
          <h1 class="heading">Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <p class="error">{{ errormessage }}</p>
          <label for="#"><b>Name</b></label>
          <input
            type="text"
            class="input"
            placeholder="Enter Name"
            name="email"
            v-model="name"
          />
          <label for="#"><b>Email</b></label>
          <input
            type="text"
            class="input"
            placeholder="Enter Email"
            name="email"
            v-model="email"
          />

          <label for="#"><b>Password</b></label>
          <input
            type="password"
            class="input"
            placeholder="Enter Password"
            name="psw"
            v-model="password"
          />

          <label for="#"><b>Repeat Password</b></label>
          <input
            type="password"
            class="input"
            placeholder="Repeat Password"
            name="psw-repeat"
            v-model="confirmPassword"
          />

          <div class="check-box">
            <input type="checkbox" checked="checked" name="remember" />
            <p>I read and agree to <a href="#">Terms & conditions</a></p>
          </div>

          <div class="button">
            <button class="btn-primary" type="submit" @click.prevent="signUp">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errormessage: null,
    };
  },
  mounted() {
    const loaded = JSON.parse(localStorage.getItem("data"));
    if (loaded) {
      this.email = loaded.email;
      this.password = loaded.password;
    } else {
      console.log("ddd");
    }
  },
  methods: {
    signUp() {
      const order = {
        email: this.email,
        password: this.password,
      };
      localStorage.setItem("data", JSON.stringify(order));

      this.$store.dispatch("signUpForm", {
        email: order.email,
        password: order.password,
      });
    },
  },
};
</script>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
* {
  box-sizing: border-box;
}
.signup {
  background: #ccc;
  display: flex;
  align-items: center;
  height: 92vh;
}
.signup-form {
  padding: 2rem 1.5rem;
  width: 500px;
  height: 600px;
  margin: 30px auto;
  background-color: #fff;
  border-radius: 10px;
}
.signup-form label {
  display: block;
}
.signup-form .input {
  font: inherit;
  width: 100%;
  padding: 12px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin: 5px auto;
  box-shadow: #ccc 0 0 10px inset;
  outline: none;
  border-radius: 5px;
}
.button {
  margin-top: 1rem;
}
.btn-primary {
  background: green;
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  padding: 0.7rem 0;
  color: white;
  border-radius: 10px;
}
.check-box {
  display: flex;
  align-items: center;
}
.heading {
  color: green;
}
.error {
  color: red;
}
</style>
