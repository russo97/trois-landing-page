<template>
  <div @click="handleSelectService" class="service">
    <div class="service__wrapper position-relative">
      <figure class="m-0 w-100">
        <img :src="filePath" :alt="service.serviceName" />
      </figure>

      <div class="service__cover d-flex align-items-center justify-content-center position-absolute start-0 top-0">
        <h4 class="service__name px-2 text-center">
          {{ service.serviceName }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  function normalizeText (text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  export default {
    name: "SingleService",

    props: {
      service: {
        type: Object,
        required: true,
        validator (data) {
          return data.serviceName;
        }
      },

      index: {
        type: Number,
        required: true
      }
    },

    methods: {
      ...mapActions([
        'setSelectedService'
      ]),

      handleSelectService () {
        this.setSelectedService(this.index);
      }
    },

    computed: {
      filePath () {
        const service = normalizeText(this.service.serviceName.toLowerCase()).replace(/\s+/g, "-");

        return require(`../assets/images/service-${service}.jpg`);
      }
    }
  }
</script>

<style lang="scss">
  .service {
    &__wrapper figure img {
      width: 100%;
      object-fit: cover;
    }

    &__cover {
      z-index: 3;
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: .4s ease-in-out;
      background-color: rgba(0, 0, 0, .4);

      &:hover {
        background-color: transparent;
      }
    }

    &__name {
      color: var(--white);
      text-transform: uppercase;
      font: 300 1rem "Montserrat", sans-serif;
    }
  }
</style>
