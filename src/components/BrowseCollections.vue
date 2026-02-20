<template>
  <div class="px-4 py-4 bg-white">
    <div class="relative w-full max-w-md mx-auto">
      <label
        for="browse-collections"
        class="block text-sm font-medium text-gray-700 mb-2 text-center md:text-left"
      >
        Browse Collections
      </label>
      <div class="relative">
        <select
          id="browse-collections"
          v-model="selected"
          class="w-full bg-gray-100 rounded-lg px-4 py-3 pr-10 border-0 text-gray-900 focus:ring-2 focus:ring-brandGreen focus:ring-offset-0 focus:outline-none appearance-none cursor-pointer transition-shadow"
          aria-label="Browse Collections"
        >
          <option value="All">All</option>
          <option
            v-for="c in categoryOptions"
            :key="c"
            :value="c"
          >
            {{ c }}
          </option>
        </select>
        <span
          class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500"
          aria-hidden="true"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '../composables/useStore'

const { collections: collectionsList, selectedCategory, setSelectedCategory } = useStore()

const collections = computed(() => collectionsList.value)

const categoryOptions = computed(() =>
  collections.value.filter((c) => c !== 'All')
)

const selected = computed({
  get: () => selectedCategory.value,
  set: (v) => setSelectedCategory(v),
})
</script>
