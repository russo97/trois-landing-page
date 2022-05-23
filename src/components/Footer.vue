<template>
  <footer class="footer">
    <div class="footer__wrapper d-flex align-items-center flex-column flex-md-row justify-content-md-between mx-auto">
      <strong class="company-rights text-center">
        Trois Beauté &copy; {{ currentYear }} - Todos os direitos reservados
      </strong>

      <div class="developer">
        <a href="https://www.boldcomunicacao.com.br/" title="Bold Comunicação" target="_blank">
          <figure class="m-0 mt-3 mt-md-0 w-100">
            <img src="../assets/images/bold__logo.png" alt="Bold Comunicação" class="w-100" />
          </figure>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",

    computed: {
      currentYear () {
        return (new Date()).getFullYear();
      }
    }
  }
</script>

<style lang="scss">
  .footer {
    background-color: var(--black);

    &__wrapper {
      color: var(--white);

      @include contentLimit(1180px) {
        --yPadding: 24px;
      };

      .company-rights {
        font: 700 .875rem "Montserrat", sans-serif;
      }

      .developer {
        width: 60px;
      }
    }
  }
</style>
