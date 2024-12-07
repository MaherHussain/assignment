<template>
  <div class="">
    <home-image-carousel />
    <div v-if="!!products"  class="home-products flex flex-row flex-wrap my-10 gap-5 justify-center">
      <div v-for="product in products" :key="product.id" class="self-center">
        <product-card v-if="!!product" :product="product"/> 
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
import { HomeImageCarousel, ProductCard } from "../components/";
import { getHomeProducts } from '../services/product-service'
import { LoadingIcon } from '../assets/icons/'
import { Product } from '../assets/types'

const isLoading = ref(false)
const isError = ref(false)
const products = ref<Product[]>([])

async function loadHomeProducts () { 
  isLoading.value = true
  try {
      products.value  = await getHomeProducts()
      
     } catch (error) {
      console.error('Error fetching home products:', error);
       isError.value = true
    } finally {
      isLoading.value = false
    }
} 

onMounted (() => loadHomeProducts())
</script>
