<template>
  <section class="ourservices">
    <div class="ourservices__wrapper">
      <div class="ourservices__wave position-absolute top-0 start-50">
        <figure class="m-0 h-100 d-flex align-items-end justify-content-center">
          <img src="../assets/images/wave.svg" alt="wave" />
        </figure>
      </div>

      <h2 class="ourservices__title text-center">
        Nossos Serviços
      </h2>

      <div class="ourservices__slidelist">
        <VueSlickCarousel v-bind="settings">
          <SingleService
            :service="service"
            :key="service.serviceName"
            v-for="service in ourServices" />
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex';
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';

  import SingleService from './SingleService';

  export default {
    name: "OurServices",

    components: {
      SingleService,
      VueSlickCarousel
    },

    data () {
      return {
        settings: {
          dots: false,
          arrows: false,
          draggable: true,
          infinite: false,
          centerMode: true,
          slidesToScroll: 1,
          mobileFirst: false,
          centerPadding: '0',
          swipeToSlide: true,
          focusOnSelect: true,
          variableWidth: true,

          responsive: [{
            breakpoint: 768,
            settings: 'unslick'
          }]
        }
      }
    },

    computed: {
      ...mapState([
        'ourServices'
      ])
    }
  }
</script>

<style lang="scss">
  .ourservices {
    .slick-slide {
      width: 214px;
      padding: 0 7px;
    }

    &__wrapper {
      margin: 0 auto;
      max-width: 1180px;
      position: relative;
    }

    &__wave {
      transform: translateX(-50%);
      @include sizedBox(375px, 64px);

      figure {
        &:after,
        &:before {
          --width: calc((100vw - 375px) / 2 + 2px);

          content: '';
          flex: 0 0 var(--width);

          background: #f7f6fb;
          transform: translate(var(--translateX, -10px));
          @include sizedBox(var(--width), 100%);
        }

        &:before {
          --translateX: 2px;
        }

        &:after {
          --translateX: -2px;
        }
      }
    }

    &__title {
      padding: 72px 0 0;
      margin-inline: auto;
      max-width: min(75%, 474px);

      color: var(--black);
      font: 300 2.1875rem / 2.6875rem "Montserrat", sans-serif;
    }
  }
</style>