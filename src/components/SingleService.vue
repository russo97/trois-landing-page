<template>
  <div class="service">
    <div class="service__wrapper position-relative">
      <figure class="m-0 w-100">
        <img :src="filePath" :alt="service.serviceName" />
      </figure>

      <div class="service__cover position-absolute start-0 top-0">
        <h4 class="service__name">
          {{ service.serviceName }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
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
    background: red;

    &__wrapper figure img {
        width: 100%;
        object-fit: cover;
      }

    &__cover {
      z-index: 3;
      width: 100%;
      height: 100%;
    }

    &__name {
      color: var(--white);
    }
  }
</style>