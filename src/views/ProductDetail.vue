<template>
  <div class="min-h-screen bg-background">
    <div v-if="product" class="max-w-4xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
          <template v-if="product.video">
            <video
              :src="product.video"
              :poster="product.image"
              controls
              class="w-full h-full object-cover"
            />
          </template>
          <img
            v-else
            :src="product.image"
            :alt="product.name"
            class="w-full h-full object-cover"
          />
          <span
            v-if="product.sizes"
            class="absolute top-3 right-3 bg-gray-700 text-white text-sm px-3 py-1.5 rounded-full"
          >
            Sizes: {{ product.sizes }}
          </span>
        </div>
        <div class="flex flex-col">
          <h1 class="text-2xl md:text-3xl font-bold text-gray-900">
            {{ product.name }}
          </h1>
          <p class="mt-2 text-xl font-semibold text-gray-900">
            ₦{{ formattedPrice }}
          </p>
          <p v-if="product.category" class="mt-2 text-sm text-gray-500">
            {{ product.category }}
          </p>
          <p class="mt-4 text-gray-600 leading-relaxed">
            {{ product.description }}
          </p>
          <div v-if="product.hasVariants && product.sizes" class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Size
            </label>
            <select
              v-model="selectedSize"
              class="w-full max-w-xs border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-brandGreen focus:border-brandGreen focus:outline-none"
            >
              <option value="">Select size</option>
              <option
                v-for="s in sizeOptions"
                :key="s"
                :value="s"
              >
                {{ s }}
              </option>
            </select>
          </div>
          <div class="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              class="bg-brandGreen text-white text-sm font-medium py-3 px-6 rounded-md hover:opacity-90 transition"
              @click="addToCart(product)"
            >
              Add to Cart
            </button>
            <router-link
              to="/"
              class="inline-flex items-center text-gray-600 hover:text-brandGreen transition text-sm font-medium"
            >
              ← Continue shopping
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="max-w-4xl mx-auto px-4 py-16 text-center">
      <p class="text-gray-600">Product not found.</p>
      <router-link
        to="/"
        class="mt-4 inline-block text-brandGreen font-medium hover:opacity-90"
      >
        Back to shop
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '../composables/useStore'

const route = useRoute()
const { getProductById, addToCart } = useStore()

const product = computed(() => getProductById(route.params.id))

const formattedPrice = computed(() => {
  if (!product.value) return '0'
  const p = Number(product.value.price)
  return Number.isFinite(p) ? p.toLocaleString() : '0'
})

const selectedSize = ref('')
const sizeOptions = computed(() => {
  const s = product.value?.sizes
  if (!s || typeof s !== 'string') return []
  return s.split(',').map((x) => x.trim()).filter(Boolean)
})
</script>
