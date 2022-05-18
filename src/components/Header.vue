<template>
  <header class="header">
    <div class="header__wrapper d-flex flex-column position-relative">
      <a href="#" class="header__logo d-block">
        <figure class="m-0">
          <img src="../assets/images/logo.svg" alt="Trois Beauté" />
        </figure>
      </a>

      <h1 class="header__herotext text-center">
        Cadastre-se e <br class="d-md-none">entre para nossa <strong>Lista VIP</strong>
      </h1>

      <div class="header__models d-flex align-items-end justify-content-center">
        <picture class="m-0">
          <source srcset="../assets/images/modelos-desktop.jpg" media="(min-width: 540px)">
          <img src="../assets/images/modelos-mobile.jpg" alt="" />
        </picture>
      </div>

      <a href="#" role="button" class="d-none">
        <figure>
          <img src="../assets/images/arrow-down.svg" alt="">
        </figure>
      </a>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss">
  .header {
    background-color: var(--gray1);

    &__wrapper {
      overflow: hidden;
      height: var(--header-height);
      //background: transparent url('../assets/images/Untitled-1.jpg') center bottom / cover no-repeat;

      &:after,
      &:before {
        z-index: 0;
        content: '';

        top: -20px;
        position: absolute;
        @include sizedBox(177px, 112px);
        background: transparent url("../assets/images/item.svg") center / 100%  no-repeat;
      }

      &:after {
        right: 0;
        transform: translate(99px, 0) rotateX(180deg);
      }

      &:before {
        left: 0;
        transform: translate(-99px, 0);
        background: transparent url("../assets/images/item.svg") center / 100%  no-repeat;
      }
    }

    &__logo {
      margin: 28px auto 0;
      @include sizedBox(207px, auto);
    }

    &__models {
      flex-grow: 1;

      picture {
        height: 100%;

        img {
          height: 100%;
          object-fit: cover;
        }
      }
    }

    &__herotext {
      margin: 1.5rem auto 0;

      color: var(--black);
      font: 300 1.5rem / 1.8125rem "Montserrat", sans-serif;

      strong {
        font-weight: 600;
      }
    }

    @media (min-width: 540px) {
      &__herotext {
        font: 300 2.4375rem / 3rem "Montserrat", sans-serif;
      }
    }
  }
</style>
