<template>
  <div id="app">
    <Header />

    <MainForm />
  </div>
</template>

<script>
  import Header from "./components/Header";
  import MainForm from "./components/MainForm";

  export default {
    name: 'App',

    components: {
      Header,
      MainForm
    }
  }
</script>

<style lang="scss">
  @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

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

  body {
    height: 5000px;
  }

  .wrapper {
    @include contentLimit();
  }
</style>
