// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import "@/assets/css/styles.css";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyC4Cp06FkmCF8zv3CkJSfj_x3i9iKL_3GI",
  authDomain: "vueschool-project-cccde.firebaseapp.com",
  databaseURL: "https://vueschool-project-cccde-default-rtdb.firebaseio.com",
  projectId: "vueschool-project-cccde",
  storageBucket: "vueschool-project-cccde.appspot.com",
  messagingSenderId: "626144465035",
  appId: "1:626144465035:web:33620cb74fbd852c54848e",
  measurementId: "G-Y7FQ6TE5QC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
