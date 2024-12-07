<template>
  <div v-if="!!selectedProduct" class="flex flex-row flex-wrap justify-center">
    <div class="product-details-image">
      <img
        :src="selectedProduct?.image"
        :alt="selectedProduct?.title"
      />
    </div>
    <div class="px-3 w-96 py-3 flex-1 sm:py-3 my-20">
      <h1 class="font-bold lg:text-3xl md:text-2xl sm:text-xl">{{ selectedProduct?.title }}</h1>
      <p class=" my-5 text-sm text-gray-700">{{ selectedProduct?.description }}</p>
      <div class="flex flex-row flex-wrap items-center justify-between">
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
          {{ selectedProduct?.category }}
        </span>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
          DKK {{ selectedProduct?.price }} 
        </span>
      </div>
      <div class="my-7">
        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add to cart
        </a>
      </div>
    </div>
  </div>
  <div class="text-center" v-if="isLoading">
    <loading-icon />
  </div>
  <div class="text-center" v-if="isError">
    <p class="text-red-500">Failed to load product details</p>
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { getProductById } from "../services/product-service";
import { onMounted, ref } from "vue";
import { LoadingIcon } from '../assets/icons'
import { Product } from '../assets/types'

const { productId } = useRoute().params;

const selectedProduct = ref<Product>();

const isLoading = ref(false)
const isError = ref(false)

async function loadProductDetails() {
   isLoading.value = true;
  try {
   selectedProduct.value = await getProductById(productId as string)
  } catch (error) {
    console.error("Error fetching product details:", error);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
}

onMounted(async () => await loadProductDetails());
</script>

<style scoped>
.product-details-image{
  width: 300px;
  height: auto;
  overflow: hidden;
}
.product-details-image img {
  width: 100%;
  object-fit: cover;
}
</style>
