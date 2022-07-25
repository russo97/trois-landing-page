<template>
  <div id="app">
    <div
      :class="dynamicClass"
      @click="setSelectedService(null)"
      id="overlay"
      class="position-fixed top-0 start-0 overflow-hidden" />

    <Header />

    <MainForm />

    <OurServices />

    <AddressList />

    <ServiceModal />

    <Footer />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  import Header from "./components/Header";
  import MainForm from "./components/MainForm";
  import OurServices from './components/OurServices';
  import AddressList from "./components/AddressList";
  import ServiceModal from "./components/ServiceModal";
  import Footer from "./components/Footer";

  export default {
    name: 'App',

    components: {
      Footer,
      Header,
      MainForm,
      OurServices,
      AddressList,
      ServiceModal
    },

    computed: {
      ...mapState([
        'selectedService'
      ]),

      dynamicClass () {
        return {
          'visible': typeof this.selectedService === 'number'
        }
      }
    },

    methods: {
      ...mapActions([
        'setSelectedService'
      ])
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    border: 0 none;
    outline: 0 none;
    text-decoration: none;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    position: relative;
  }

  #overlay {
    z-index: 5;
    position: fixed;
    @include sizedBox(100vw, 100vh);
    background-color: rgba(0, 0, 0, .4);
    transition: opacity .4s ease-in-out, visibility 0s .4s;

    opacity: 0;
    visibility: hidden;

    &.visible {
      opacity: 1;
      visibility: visible;
      transition: opacity .4s ease-in-out, visibility 0s;
    }
  }

  .wrapper {
    @include contentLimit();
  }
</style>
