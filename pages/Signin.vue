<template>
  <div class="signin">
    <div class="signin-form">
      <form>
        <div class="container">
          <h1 class="title">Sign In</h1>
          <p>Please fill in this form to create an account.</p>

          <div class="input-group">
            <label for="#"><b>Email</b></label>
            <input
              type="text"
              class="input"
              placeholder="Enter Email"
              name="email"
              v-model="email"
            />
          </div>

          <div class="input-grop">
            <label for="#"><b>Password</b></label>
            <input
              type="password"
              class="input"
              placeholder="Enter Password"
              name="psw"
              v-model="password"
            />
          </div>

          <div class="input-group">
            <label for="#"><b>Repeat Password</b></label>
            <input
              type="password"
              class="input"
              placeholder="Repeat Password"
              name="psw-repeat"
              v-model="confirmPassword"
            />
          </div>

          <div class="input-check">
            <input class="checked" type="checkbox" name="" id="" />
            <p>Remember me</p>
          </div>
          <div class="button-signin">
            <button type="submit" class="btn-secondery" @click.prevent="signIn">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    signIn() {
      const order = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", {
        email: order.email,
        password: order.password,
      });
    },
    signOutAction({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Log out");
          commit("setUser", null);
        })
        .catch((error) => {
          commit("setError", error.message);
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
.signin {
  background-image: linear-gradient(180deg, orange, red);
  display: flex;
  align-items: center;
  height: 92vh;
}
.signin-form {
  padding: 2rem;
  width: 600px;
  height: 600px;
  background: #333;
  margin: 30px auto;
  border-radius: 10px;
}
.signin-form .input {
  width: 100%;
  border: none;
  outline: none;
  color: white;
  padding: 12px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #fff;
  background: #444;
  margin: 5px auto;
}
.signin-form .input:hover {
  box-shadow: white 0 0 10px;
}
.signin-form label {
  display: block;
  color: white;
}
.signin-form .title {
  color: red;
}
.signin-form p {
  color: white;
}
.signin-form .check {
  display: flex;
  gap: 1rem;
}

.button-signin {
  text-align: center;
}
.btn-secondery {
  text-align: center;
  width: 100%;
  outline: none;
  cursor: pointer;
  background: rgb(6, 255, 180);
  color: #333;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  border-radius: 5px;
}
.signin-form .input-check {
  display: flex;
  align-items: center;
}
.signin-form .input-check .checked {
  margin-right: 0.4rem;
}
</style>
