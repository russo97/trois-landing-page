<template>
  <section class="ourservices" id="slider-container">
    <div class="ourservices__wrapper">
      <div class="ourservices__wave position-absolute top-0 start-50">
        <figure class="m-0 h-100 d-flex align-items-end justify-content-center">
          <img src="../assets/images/wave.svg" alt="wave" />
        </figure>
      </div>

      <a @click.prevent="sliderFocus" href="javascript:void(0);" role="button" class="ourservices__arrow d-block position-absolute">
        <figure class="m-0">
          <img src="../assets/images/arrow-colored.svg" alt="arrow down" />
        </figure>
      </a>

      <h2 class="ourservices__title text-center">
        Nossos Serviços
      </h2>

      <div class="ourservices__slidelist">
        <VueSlickCarousel v-bind="settings">
          <SingleService
            :index="index"
            :service="service"
            :key="service.serviceName"
            v-for="(service, index) in ourServices" />
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

  import $ from "jquery";

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
          slidesToScroll: 1,
          swipeToSlide: true,
          variableWidth: true
        }
      }
    },

    computed: {
      ...mapState([
        'ourServices'
      ])
    },

    methods: {
      sliderFocus () {
        const sliderElement = $('#slider-container');

        if (!sliderElement.length) return;

        $('html, body').animate({
          scrollTop: sliderElement.offset().top - 20
        }, 1200, 'swing');
      }
    }
  }
</script>

<style lang="scss">
  .ourservices {
    overflow: hidden;

    .slick-slide {
      width: 214px;
      padding: 0 7px;
    }

    &__wrapper {
      margin: 0 auto;
      max-width: 1180px;
      position: relative;
    }

    &__arrow {
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
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
      --fs: 2.1875rem;

      margin: 0 auto;
      padding: 93px 0 0;
      max-width: min(75%, 474px);

      color: var(--black);
      text-transform: uppercase;
      font: 300 var(--fs) / 2.6875rem "Montserrat", sans-serif;
    }

    &__slidelist {
      margin: 48px 0 0;
    }

    @media (min-width: 768px) {
      &__title {
        --fs: 3.0625rem;
      }
    }
  }
</style>
