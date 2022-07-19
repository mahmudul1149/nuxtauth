import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export const state = () => ({
  state: {
    user: null,
  },
});
export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};
export const actions = {
  signUpForm({ commit }, authData) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((user) => {
        console.log(user);
        this.$router.push("/");
        alert("succes");
        commit("SET_USER", user.data);
      })
      .catch(() => {
        alert("error");
      });
  },
  login({ commit }, authData) {
    firebase
      .auth()
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((user) => {
        console.log(user);
        this.$router.push("/dashboard");
        alert("succesed");
        commit("SET_USER", user.data);
      })
      .catch(() => {
        alert("error");
      });
  },
  signOutAction({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("Log out");
        this.$router.push("/signin");
        commit("setUser", null);
      })
      .catch((error) => {
        commit("setError", error.message);
      });
  },
};
