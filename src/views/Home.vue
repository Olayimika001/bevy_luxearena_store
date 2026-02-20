<template>
  <div class="min-h-screen bg-background">
    <Banner />
    <BrowseCollections />
    <section
      class="px-4 py-6"
      aria-label="Product listing"
    >
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6"
      >
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
      <p
        v-if="filteredProducts.length === 0"
        class="text-center text-gray-500 py-12"
      >
        No products in this collection.
      </p>
    </section>
  </div>
</template>

<script setup>
import { useStore } from '../composables/useStore'
import Banner from '../components/Banner.vue'
import BrowseCollections from '../components/BrowseCollections.vue'
import ProductCard from '../components/ProductCard.vue'

const { filteredProducts } = useStore()
</script>
