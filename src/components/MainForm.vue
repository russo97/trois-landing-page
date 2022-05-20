<template>
  <section class="mainform">
    <div class="mainform__wrapper">

      <div class="mainform__form w-100 mx-auto">
        <form id="formLeadGenerator">
          <h3 class="mainform__title text-center">
            Faça seu cadastro gratuito
          </h3>

          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="nome" placeholder="Insira seu nome" v-model="user.name" required />

            <label for="nome">
              Nome
            </label>
          </div>

          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="user.email" required />

            <label for="email">
              E-mail
            </label>
          </div>

          <div class="form-floating mb-3">
            <input type="tel" inputmode="numeric" class="form-control" id="phone" placeholder="00 0000 0000" v-model="user.phone" required />

            <label for="phone">
              Celular
            </label>
          </div>

          <div class="d-flex justify-content-center">
            <button type="submit" id="queroMinhaVaga" class="d-flex align-items-center justify-content-center">
              Quero garantir a minha vaga
            </button>
          </div>
        </form>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: "MainForm",

    data () {
      return {
        user: {
          name: '',
          email: '',
          phone: ''
        }
      }
    }
  }
</script>

<style lang="scss">
  .mainform {
    background-color: var(--gray2);

    &__wrapper {
      @include contentLimit(1094px);

      --yPadding: 31px;
      padding-bottom: 61px;
    }

    &__form {
      border-radius: 7px;

      max-width: max(50%, 303px);
      background-color: var(--gray3);

      form {
        padding: 21px;
      }
    }

    &__title {
      margin: 0 0 1rem;
      color: var(--black);
      font: 400 .75rem / 1rem "Montserrat", sans-serif;
    }

    .form-floating {
      input,
      label {
        font-family: "Montserrat";
      }
    }

    button[type="submit"] {
      height: 45px;
      padding: 7px 10px;
      border-radius: 3px;
      border: solid 2px var(--brown1);

      color: var(--brown1);
      font: 500 .9375rem 'Montserrat', sans-serif;
      background-color: transparent;
    }

    @media (min-width: 640px) {
      &__title {
        font: 300 1.5rem / 2rem 'Montserrat', sans-serif;
      }
    }
  }
</style>
