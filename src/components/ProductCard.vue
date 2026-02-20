<template>
  <article class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
    <router-link :to="productLink" class="block flex-shrink-0">
      <div class="relative aspect-square rounded-t-lg overflow-hidden bg-gray-100">
        <template v-if="product.video">
          <video
            :src="product.video"
            :poster="product.image"
            autoplay
            muted
            playsinline
            loop
            class="w-full h-full object-cover"
          />
        </template>
        <img
          v-else
          :src="product.image"
          :alt="product.name"
          class="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <span
          v-if="product.sizes"
          class="absolute top-2 right-2 bg-gray-700 text-white text-xs px-2 py-1 rounded-full"
        >
          {{ product.sizes }}
        </span>
      </div>
    </router-link>
    <div class="p-3 flex flex-col flex-grow">
      <router-link :to="productLink" class="group block">
        <h3 class="text-base font-medium text-gray-900 group-hover:underline">
          {{ product.name }}
        </h3>
      </router-link>
      <p class="text-base font-semibold text-gray-900 mt-1">
        ₦{{ formattedPrice }}
      </p>
      <div class="grid grid-cols-2 gap-2 mt-3 mt-auto pt-2">
        <button
          type="button"
          class="bg-brandGreen text-white text-xs sm:text-sm font-medium py-2 sm:py-2.5 px-2 sm:px-3 rounded-md hover:opacity-90 transition w-full"
          :aria-label="`Add ${product.name} to cart`"
          @click="addToCart(product)"
        >
          Add to Cart
        </button>
        <router-link
          :to="productLink"
          class="bg-brandGreen text-white text-xs sm:text-sm font-medium py-2 sm:py-2.5 px-2 sm:px-3 rounded-md hover:opacity-90 transition w-full text-center flex items-center justify-center"
        >
          Select options
        </router-link>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '../composables/useStore'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { addToCart } = useStore()

const productLink = computed(() => `/product/${props.product.id}`)

const formattedPrice = computed(() => {
  const p = Number(props.product.price)
  return Number.isFinite(p) ? p.toLocaleString() : '0'
})
</script>
