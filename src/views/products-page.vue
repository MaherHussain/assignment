<template>
  <div class="">
    <h1 class="lg:text-3xl md:text-2xl sm:text-xl pl-8">PRODUCTS</h1>
    <div v-if="!!products" class="flex flex-row my-10 gap-5 justify-center flex-wrap">
      <div v-for="product in products" :key="product.id">
        <product-card :product="product" />
      </div>
    </div>
    <div class="text-center" v-if="isLoading">
     <loading-icon />
    </div>
   <div class="text-center" v-if="isError">
      <p class="text-red-500">Failed to load products. Please try again later.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getAllProducts } from "../services/product-service";
import { Product } from "../assets/types";
import { ProductCard } from "../components";
import { LoadingIcon } from '../assets/icons/'


const products = ref<Product[]>([]);

const isLoading = ref(false)
const isError = ref(false)

async function loadProducts() {
  isLoading.value = true;
  try {
    products.value = await getAllProducts()
  } catch (error) {
    console.error("Error fetching home products:", error);
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
}
onMounted(() => loadProducts());
</script>
