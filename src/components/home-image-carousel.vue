<template>
  <div class="mx-5">
    <Carousel :value="carouselImages" :numVisible="1" :numScroll="1" circular :autoplayInterval="3000">
      <template #item="slotProps">
        <div class="border h-96  border-surface-200 dark:border-surface-700 rounded m-2 p-4">
          <div class="mb-4">
            <div class="relative mx-auto">
              <img class="carousel-image" :src="slotProps.data.image" :alt="slotProps.data.name" />
            </div>
          </div>
          <div class="mb-4 text-center font-medium">{{ slotProps.data.title }}</div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Carousel from 'primevue/carousel'

const carouselImages = computed(() => [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    id: 5,
    title: "Solid Gold Petite Micropave ",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",

  },
  {
    id: 6,
    title: "White Gold Plated Princess",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",

  },
  {
    id: 7,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",

  },
]);

</script>

<style scoped>
.carousel-image {
  width: 100%;
  object-fit: contain;
  height: 300px;
}
</style>