<template>
  <div class="servicemodal position-fixed top-50 start-50" :class="modalClass">
    <div v-if="typeof selectedService === 'number'" class="servicemodal__wrapper row g-0">
      <figure class="servicemodal__image col-5 m-0 d-flex align-items-center">
        <img :src="filePath" :alt="currentService.serviceName" class="w-100" />
      </figure>

      <div class="servicemodal__description col-7 ps-3 d-md-flex flex-md-column">
        <strong class="servicemodal__name d-block">
          {{ currentService.serviceName }}
        </strong>

        <p class="servicemodal__description d-block m-0">
          {{ currentService.serviceDescription }}
        </p>

        <a :href="getMoreInformation" class="servicemodal__getinfo text-decoration-none d-inline-block text-md-center mt-3 mt-md-auto mx-md-auto mb-md-4" role="button" target="_blank">
          MAIS INFORMAÇÕES
        </a>
      </div>

      <div class="col-12">
        <div class="row g-0">
          <div class="col-7">
            <span class="d-block label-contato">
              Entre em contato
            </span>

            <span class="d-block phone-number">
              81 3019-3040
            </span>

            <span class="d-block phone-number">
              81 99431-0804
            </span>
          </div>

          <div v-if="hasShareAPI" class="col-5 share d-flex justify-content-end">
            <figure @click="sharePage" class="m-0 d-flex align-items-center flex-column">
              <img src="../assets/images/compartilhe.svg" alt="Compartilhe" />

              <figcaption>
                Compartilhe
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import $ from "jquery";

  function normalizeText (text) {
    if (!text) return;

    return text?.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  export default {
    name: "ServiceModal",

    methods: {
      ...mapActions([
        'setSelectedService'
      ]),

      async sharePage () {
        if (!this.hasShareAPI) return;

        const {
          serviceName, serviceDescription
        } = this.currentService;

        await navigator.share({
          text: serviceDescription,
          title: `${serviceName} na Trois Beauté`,
          url: `${location.origin}${location.pathname}?sI=${this.selectedService}`,
        });
      },

      sliderFocus (callback) {
        const sliderElement = $('#slider-container');

        if (!sliderElement.length) return;

        $('html, body').animate({
          scrollTop: sliderElement.offset().top - 20
        }, 800, 'swing', () => callback());
      }
    },

    computed: {
      ...mapState([
        'ourServices',
        'selectedService'
      ]),

      hasShareAPI () {
        return window.navigator.share;
      },

      modalClass () {
        return {
          'showing': typeof this.selectedService === 'number'
        }
      },

      currentService () {
        return this.ourServices[this.selectedService];
      },

      filePath () {
        if (typeof this.selectedService !== 'number') return;

        const service = normalizeText(this.currentService.serviceName.toLowerCase()).replace(/\s+/g, "-");

        return require(`../assets/images/service-${service}.jpg`);
      },

      getMoreInformation () {
        return `https://api.whatsapp.com/send?phone=5581994310804&text=Ol%C3%A1%2C%20desejo%20informa%C3%A7%C3%B5es%20sobre%20${encodeURI(this.currentService.serviceName)}`;
      }
    },

    mounted () {
      const selectedService = (new URLSearchParams(location.search)).get('sI');

      if (!selectedService || +selectedService < 0 || +selectedService > this.ourServices.length - 1) return;

      this.sliderFocus(() => this.setSelectedService(+selectedService));
    }
  }
</script>

<style lang="scss">
  .servicemodal {
    z-index: 50;
    max-width: 600px;
    border-radius: 19px;
    background-color: var(--gray4);
    transform: translate(-50%, -50%);
    @include sizedBox(calc(100vw - 24px), auto);

    opacity: 0;
    visibility: hidden;
    transition: visibility 0s .4s, opacity .4s ease-in-out;

    &.showing {
      opacity: 1;
      visibility: visible;
      transition: visibility 0s, opacity .4s ease-in-out;
    }

    &__wrapper {
      padding: 14px 21px;
    }

    &__name {
      --fs: 1rem;
      --lh: .875rem;

      margin: 12px 0;
      color: var(--black);
      font: 700 var(--fs) / var(--lh) "Montserrat", sans-serif;
    }

    &__description {
      --fs: .75rem;
      --lh: .875rem;

      color: var(--black);
      font: 400 var(--fs) / var(--lh) "Montserrat", sans-serif;
    }

    &__getinfo {
      --fs: .75rem;
      --lh: .875rem;

      padding: 7px 10px;
      color: var(--black);
      font: 500 var(--fs) / var(--lh) "Montserrat", sans-serif;

      border-radius: 3px;
      border: solid 2px var(--brown1);

      &:hover,
      &:active {
        color: var(--black);
      }
    }

    .col-12 {
      padding: 12px 0;
      color: var(--black);

      .label-contato {
        --fs: .9375rem;
        --lh: .75rem;

        margin: 0 0 8px;
        font: 500 var(--fs) / var(--lh) "Montserrat", sans-serif;
      }

      .phone-number {
        --fs: 1rem;
        --lh: 1.2rem;

        font: 400 var(--fs) / var(--lh) "Montserrat", sans-serif;

        &:first-of-type {
          margin: 12px 0 0;
        }
      }

      .share {
        figure {
          cursor: pointer;

          img {
            max-width: 35px;
          }

          figcaption {
            padding: 4px 0;
            font: 400 .875rem / 1rem "Montserrat", sans-serif;
          }
        }
      }
    }

    @media (min-width: 768px) {
      &__name {
        --fs: 2.4375rem;
        --lh: 1;
      }

      &__description {
        --fs: 1rem;
        --lh: 1.3;
      }

      &__getinfo {
        --fs: 1rem;
        --lh: 1.2;

        padding: 12px 7px;
        width: 100%;
        max-width: 260px;
      }
    }
  }
</style>
