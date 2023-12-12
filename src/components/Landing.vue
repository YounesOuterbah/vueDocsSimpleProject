<template>
  <div class="landing h-screen">
    <div class="container font-[700] flex h-full items-center">
      <div class="text-white flex-1">
        <h1 class="text-4xl uppercase">
          <span class="text-[#3DD68C] text-6xl">Learn Vue</span><br />
          The official Learn for Vue.js
        </h1>
        <p class="text-gray-500 text-2xl my-2">
          Expressive, configurable and convenient routing for Vue.js
        </p>
        <button class="p-2 mt-6 rounded bg-[#41B883]">Get Started</button>
      </div>
      <div class="flex-1 relative">
        <div
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#1A352F] hover:bg-[#3a8877] duration-300 w-44 h-32 blur-3xl"
        ></div>
        <img class="m-auto w-64" src="../assets/img/Vue.png" alt="" />
      </div>
    </div>
  </div>
</template>
