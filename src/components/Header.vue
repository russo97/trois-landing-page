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

      <div class="header__models d-flex justify-content-center">
        <picture class="d-flex align-items-end justify-content-center m-0">
          <source srcset="../assets/images/modelos-desktop.jpg" media="(min-width: 540px)">
          <img src="../assets/images/modelos-mobile.jpg" alt="Modelos" />
        </picture>
      </div>

      <a href="#" role="button" class="header__arrow d-block position-absolute">
        <figure>
          <img src="../assets/images/arrow-down.svg" alt="">
        </figure>
      </a>

      <div class="header__wave position-absolute bottom-0 start-50 justify-content-center">
        <figure class="m-0 h-100 d-flex align-items-end justify-content-center">
          <img src="../assets/images/header-wave-mobile.svg" alt="wave" class="h-100" />
        </figure>
      </div>
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
    position: relative;
    background-color: var(--gray1);

    &__wrapper {
      overflow: hidden;
      height: var(--header-height);

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
        transform: translate(99px, 0) rotateY(180deg);
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
      width: 100%;
      flex-grow: 1;

      picture {
        height: 100%;

        img {
          width: 100%;
          max-width: 1094px;
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

    &__arrow {
      --size: 30px;

      z-index: 2;
      bottom: 21px;
      left: calc(50% - (var(--size) / 2));

      @include sizedBox(var(--size));
      filter: drop-shadow(2px 2px 4px #000);
    }

    @media (min-width: 640px) {
      &__herotext {
        font: 300 2.4375rem / 3rem "Montserrat", sans-serif;
      }
    }

    @media (min-width: 1024px) {
      &__wrapper {
        overflow: hidden;
        position: relative;
        height: var(--header-height);

        &:after,
        &:before {
          top: 50%;
          @include sizedBox(1000px, 636px);
          background: transparent url("../assets/images/item.svg") center / 100%  no-repeat;
        }

        &:after {
          right: unset;
          left: 100%;
          transform: translate(-25vw, -50%) rotateY(180deg);
        }

        &:before {
          left: unset;
          right: 100%;
          transform: translate(25vw, -50%);
          background: transparent url("../assets/images/item.svg") center / 100%  no-repeat;
        }
      }
    }
  }
</style>
