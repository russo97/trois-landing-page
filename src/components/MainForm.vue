<template>
  <section class="mainform">
    <div class="mainform__wrapper">

      <div class="mainform__form w-100 mx-auto">
        <form @submit.prevent="submitForm" id="formLeadGenerator" ref="form">
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
            <input type="tel" inputmode="numeric" class="form-control" id="phone" placeholder="00 0000 0000" v-mask="'(##) ##### ####'" v-model="user.phone" required />

            <label for="phone">
              Celular
            </label>
          </div>

          <div class="d-flex justify-content-center">
            <button type="submit" id="queroMinhaVaga" class="d-flex align-items-center justify-content-center">
              {{ buttonText }}
            </button>
          </div>
        </form>
      </div>

    </div>
  </section>
</template>

<script>
  import Vue from 'vue';
  import VueMask from 'v-mask';

  Vue.use(VueMask);

  export default {
    name: "MainForm",

    data () {
      return {
        success: false,
        isLoading: false,

        user: {
          name: '',
          email: '',
          phone: ''
        }
      }
    },

    computed: {
      buttonText () {
        return this.success ? "ENVIADO" : "Quero garantir a minha vaga";
      }
    },

    methods: {
      submitForm () {
        this.isLoading = true;

        const { nome, email, phone } = this.user;

        const formData = {
          nome,
          email,
          telefone: phone,
          page_url: location.href,
          token_rdstation: 'a64adbfcc800c08ac5a649ece7d19fbe',
          identificador: 'ZONA_NORTE_INAUGURACAO',
          traffic_source: this.lerCookie('__trf.src')
        };

        this.sendData(formData);
      },

      sendData (data) {
        fetch('https://www.rdstation.com.br/api/1.3/conversions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(() => {
          this.success = true;
        })
        .finally(() => {
          this.isLoading = false;

          this.clearInputs();
        }).catch((e) => {
          console.error('we got an error:', e.message)
        });
      },

      lerCookie (name) {
        const value = '; ' + document.cookie;
        const parts = value.split('; ' + name + '=');

        if (parts.length === 2) {
          return parts.pop().split(';').shift();
        }
      },

      clearInputs () {
        this.$refs.form.reset();
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
