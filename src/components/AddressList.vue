<template>
  <section class="addresslist">
    <div class="addresslist__wrapper row g-0 mx-auto">
      <div v-for="address in addressList" :key="address.cep" class="col-12 col-md-5 px-5 addresslist__singleaddress">
        <h4 class="localidade text-center">
          {{ address.localidade }}
        </h4>

        <p class="m-0 full-address text-center">
          {{ address | formatAddress }} <strong v-if="!address.inaugurada"> - Em breve</strong>
        </p>
      </div>

      <div class="col-12 col-md-2 d-flex justify-content-center align-items-center">
        <div v-for="social in socialnetwork" :key="social.type" class="social mx-2">
          <a :href="social.url" :target="social.target" :title="`Acompanhe-nos no ${social.type}`">
            <figure class="m-0">
              <img :src="socialNetworkMedia(social.type)" :alt="`Acompanhe-nos no ${social.type}`" />
            </figure>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "AddressList",

    computed: {
      ...mapState([
        'addressList',
        'socialnetwork'
      ])
    },

    methods: {
      socialNetworkMedia (networkType) {
        return require(`../assets/images/${networkType.toLowerCase()}-media-icon.svg`);
      }
    },

    filters: {
      formatAddress (address) {
        const { logradouro, numero, bairro, cidade, estado, cep } = address;

        return `${logradouro}, ${numero} - ${bairro}, ${cidade} - ${estado}, ${cep}`;
      }
    }
  }
</script>

<style lang="scss">
  .addresslist {
    &__wrapper {
      @include contentLimit(1180px) {
        --yPadding: 36px;
      };
    }

    &__singleaddress {
      color: var(--gray5);

      .localidade {
        font: 700 1.125rem / 1.375rem "Montserrat", sans-serif;
      }

      .full-address {
        font: 500 .9375rem / 1.2 "Montserrat", sans-serif;
      }
    }

    @media (max-width: 767px) {
      &__singleaddress + .col-12 {
        margin: 20px 0 0;
      }
    }

    @media (min-width: 768px) {
      &__wrapper {
        --yPadding: 36px;
      }
    }
  }
</style>
