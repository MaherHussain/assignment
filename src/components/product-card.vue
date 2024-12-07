<template>
  <div class="card w-full max-w-sm rounded-lg border border-gray-500">
    <div class="image-container">
      <img
        class="p-8 rounded-t-lg"
        :src="product.image"
        alt="product image"
      />
    </div>
    <div class="px-5 pb-5">
      <h5  class="text-l font-semibold tracking-tight text-gray-900 dark:text-white truncate"
      @click="pushRouter({name: 'product-details', params:{productId:product.id}})">
        <a href="#">
          {{product.title}}
        </a>
      </h5>
      <div class="flex items-center mt-2.5 mb-5">
       
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
        {{ product.category }}
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm font-bold text-gray-900 dark:text-white">
          DKK {{product.price}}
        </span>
        <a
          href="#"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <cart-icon />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import {CartIcon} from '../assets/icons/'
const {push: pushRouter} =useRouter()

interface Product {
    id: number;
    title: string;
    image: string;
    description: string;
    category: string;
    price: number;
    rating: {
        rate:number,
        count: number;
    };
}

interface Props {
    product: Product;
}

defineProps<Props>();
</script>

<style scoped>
.card{
  width: 300px;
}
.image-container{
  width: 100%;
  overflow: hidden;
  height: 300px;
}
.image-container img{
  width: 100%;
  object-fit: contain;
  height: 100%;
}
</style>