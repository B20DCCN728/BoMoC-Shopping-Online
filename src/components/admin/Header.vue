<template>
    <a-layout-header 
      class="header" 
      :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
      theme="light"
    >
        <!-- <div class="logo">
        </div> -->
      <a-menu
        theme="dark"
        :style="{ lineHeight: '48px' }"
      >
        <div class="header__nav-menu">
            <a class="header__nav-menu__logo" href="/">
                <img src="../../assets/logo/logo.png" 
                style="width: 2rem; 
                margin: 0 12px 4px 12px;" 
                alt="logo" 
                />
            </a>
            <span class="header__nav-menu__name">BoMoC - Shopping Online</span>
        </div>
      </a-menu>
    </a-layout-header>
</template>

<style scoped>
.header__nav-menu__name {
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
}
</style>