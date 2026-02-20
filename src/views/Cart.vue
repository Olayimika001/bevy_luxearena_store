<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-4xl mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold text-gray-900">Your Cart</h1>
      <div v-if="cart.length === 0" class="mt-8 text-center py-12">
        <p class="text-gray-600">Your cart is empty.</p>
        <router-link
          to="/"
          class="mt-4 inline-block bg-brandGreen text-white text-sm font-medium py-3 px-6 rounded-md hover:opacity-90 transition"
        >
          Continue shopping
        </router-link>
      </div>
      <template v-else>
        <ul class="mt-6 divide-y divide-gray-200">
          <li
            v-for="item in cart"
            :key="item.id"
            class="py-4 flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <img
              :src="cartItemImage(item)"
              :alt="item.name"
              class="w-24 h-24 object-cover rounded-lg flex-shrink-0 bg-gray-100"
              @error="($event.target).src = '/leather handbag.jpeg'"
            />
            <div class="flex-grow min-w-0">
              <h2 class="font-medium text-gray-900 truncate">{{ item.name }}</h2>
              <p class="text-sm text-gray-600 mt-0.5">
                ₦{{ (item.price || 0).toLocaleString() }} × {{ item.quantity || 1 }}
              </p>
            </div>
            <div class="flex items-center gap-4 flex-shrink-0">
              <p class="font-semibold text-gray-900">
                ₦{{ ((item.price || 0) * (item.quantity || 1)).toLocaleString() }}
              </p>
              <button
                type="button"
                class="text-sm text-red-600 hover:text-red-700 font-medium"
                aria-label="Remove from cart"
                @click="removeFromCart(item.id)"
              >
                Remove
              </button>
            </div>
          </li>
        </ul>
        <div class="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p class="text-lg font-semibold text-gray-900">
            Subtotal: ₦{{ subtotal.toLocaleString() }}
          </p>
          <router-link
            to="/checkout"
            class="inline-block bg-brandGreen text-white text-sm font-medium py-3 px-6 rounded-md hover:opacity-90 transition text-center"
          >
            Proceed to Checkout
          </router-link>
        </div>
        <router-link
          to="/"
          class="mt-4 inline-block text-gray-600 hover:text-brandGreen text-sm font-medium transition"
        >
          ← Continue shopping
        </router-link>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '../composables/useStore'

const { cart, removeFromCart, getProductById } = useStore()

const subtotal = computed(() =>
  cart.value.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  )
)

function cartItemImage(item) {
  const product = getProductById(item.id)
  const src = (product && product.image) || item.image
  return typeof src === 'string' && src ? src : '/leather handbag.jpeg'
}
</script>
