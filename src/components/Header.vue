<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-6">
        <router-link to="/" class="flex items-center flex-shrink-0">
          <img :src="logoUrl" alt="bevy_luxearena" class="h-16 sm:h-20 w-auto" />
        </router-link>

        <div class="hidden md:flex flex-grow max-w-md">
          <div class="relative w-full flex items-center">
            <input
              v-model="searchInput"
              type="text"
              placeholder="Search for bags..."
              class="flex-grow border border-gray-200 rounded-l px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandGreen"
              @keyup.enter="performSearch"
              @input="showSuggestions = true"
            />
            <div
              v-if="showSuggestions && searchInput && filteredSuggestions.length > 0"
              class="absolute top-full left-0 right-0 bg-white border border-t-0 border-gray-200 rounded-b shadow-lg max-h-64 overflow-y-auto z-50"
            >
              <button
                v-for="product in filteredSuggestions"
                :key="product.id"
                type="button"
                class="w-full text-left px-4 py-2 hover:bg-gray-100 transition flex items-center gap-3"
                @click="selectProduct(product)"
              >
                <img :src="product.image" :alt="product.name" class="w-8 h-8 object-cover rounded flex-shrink-0" />
                <div class="flex-grow text-sm min-w-0">
                  <p class="font-semibold truncate">{{ product.name }}</p>
                  <p class="text-xs text-gray-600">₦{{ product.price.toLocaleString() }}</p>
                </div>
              </button>
            </div>
            <button
              type="button"
              class="flex-shrink-0 bg-brandGreen text-white px-3 sm:px-4 py-2 rounded-r hover:opacity-90 transition"
              aria-label="Search"
              @click="performSearch"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <nav class="hidden lg:flex items-center gap-6 lg:gap-8">
          <router-link to="/" class="text-sm uppercase tracking-wide text-gray-700 hover:text-brandGreen transition">
            Shop
          </router-link>
          <a href="#about" class="text-sm uppercase tracking-wide text-gray-700 hover:text-brandGreen transition">About</a>
          <a href="#contact" class="text-sm uppercase tracking-wide text-gray-700 hover:text-brandGreen transition">Contact</a>
        </nav>

        <div class="flex items-center gap-3 sm:gap-6">
          <button
            type="button"
            class="lg:hidden p-1 text-gray-700"
            aria-label="Search"
            @click="mobileSearchOpen = !mobileSearchOpen"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <router-link
            to="/cart"
            class="relative p-1 text-gray-700 hover:text-brandGreen transition"
            :aria-label="cartCount > 0 ? `Cart, ${cartCount} items` : 'Cart'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10 0h1m-1 0a1 1 0 100 2 1 1 0 000-2m0 0a1 1 0 100 2 1 1 0 000-2m6-9a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
            <span
              v-if="cartCount > 0"
              class="absolute -top-2 -right-2 bg-brandGreen text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
            >
              {{ cartCount }}
            </span>
          </router-link>
          <button
            type="button"
            class="lg:hidden p-1 text-gray-700"
            aria-label="Menu"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="mobileSearchOpen" class="pb-4 lg:hidden border-t border-gray-200">
        <input
          v-model="searchInput"
          type="text"
          placeholder="Search for bags..."
          class="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brandGreen"
          @keyup.enter="performSearch"
        />
      </div>

      <nav v-if="mobileMenuOpen" class="pb-4 lg:hidden border-t border-gray-200 space-y-2">
        <router-link to="/" class="block text-sm uppercase tracking-wide text-gray-700 hover:text-brandGreen transition py-2">Shop</router-link>
        <a href="#about" class="block text-sm uppercase tracking-wide text-gray-700 hover:text-brandGreen transition py-2">About</a>
        <a href="#contact" class="block text-sm uppercase tracking-wide text-gray-700 hover:text-brandGreen transition py-2">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../composables/useStore'
import logoUrl from '../assets/Logo.png'

const router = useRouter()
const mobileMenuOpen = ref(false)
const mobileSearchOpen = ref(false)
const searchInput = ref('')
const showSuggestions = ref(false)

const { cartCount, products, setSearchQuery } = useStore()

const filteredSuggestions = computed(() => {
  if (!searchInput.value.trim()) return []
  const q = searchInput.value.toLowerCase().trim()
  return products.value
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q))
    )
    .slice(0, 5)
})

function performSearch() {
  if (searchInput.value.trim()) {
    setSearchQuery(searchInput.value.trim())
    router.push('/')
  }
  searchInput.value = ''
  showSuggestions.value = false
  mobileSearchOpen.value = false
}

function selectProduct(product) {
  router.push(`/product/${product.id}`)
  searchInput.value = ''
  showSuggestions.value = false
  mobileSearchOpen.value = false
}
</script>
