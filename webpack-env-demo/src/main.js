
import "./assets/css/index.scss";
import "./js/index";
import Vue from "vue";
import app1 from './components/app1/app1';
import app2 from './components/app2/app2';
new Vue({
    el: "#app",
    data: {

    },
    components: {
        myApp1: app1,
        myApp2: app2
    }
})
