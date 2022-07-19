<template>
  <div>
    <header id="header">
      <div class="logo">
        <img src="../../assets/auth.png" alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/signup" v-if="!user">Signup</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/signin" v-if="!user">Signin</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/dashboard" v-if="user">Dashboard</nuxt-link>
          </li>

          <li>
            <a class="out-btn" v-if="user" @click.prevent="signOut">
              Sign out
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      user: "",
    };
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },

  methods: {
    signOut() {
      this.$store.dispatch("signOutAction");
      //   firebase
      //     .auth()
      //     .signOut()
      //     .then((result) => {
      //       this.loggedIn = "";
      //       this.$router.push("/");
      //     });
    },
  },
};
</script>

<style>
body {
  box-sizing: border-box;
}
#header {
  display: flex;
  background: white;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 2rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
}
.logo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-sizing: border-box;
  outline: none;
}
ul {
  display: flex;
}
ul li {
  list-style: none;
}

ul li a {
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  outline: none;
}
.logo h1 {
  color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}

.out-btn {
  outline: none;
}
</style>