<template>
  <footer class="bg-gray-900 text-white mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
        <div>
          <img src="/Logo.png" alt="bevy_luxearena" class="h-16 sm:h-20 w-auto mb-2 sm:mb-4" />
          <p class="text-xs sm:text-sm text-gray-300">Crafted with care, designed for elegance.</p>
        </div>
        <div>
          <h4 class="font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase">Shop</h4>
          <ul class="space-y-2 text-xs sm:text-sm text-gray-300">
            <li><router-link to="/" class="hover:text-brandGreen transition">New Arrivals</router-link></li>
            <li><router-link to="/" class="hover:text-brandGreen transition">Best Sellers</router-link></li>
            <li><router-link to="/" class="hover:text-brandGreen transition">Sale</router-link></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase">Support</h4>
          <ul class="space-y-2 text-xs sm:text-sm text-gray-300">
            <li><a href="#contact" class="hover:text-brandGreen transition">Contact Us</a></li>
            <li><a href="#" class="hover:text-brandGreen transition">Shipping</a></li>
            <li><a href="#" class="hover:text-brandGreen transition">Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase">Company</h4>
          <ul class="space-y-2 text-xs sm:text-sm text-gray-300">
            <li><a href="#about" class="hover:text-brandGreen transition">About</a></li>
            <li><a href="#" class="hover:text-brandGreen transition">Privacy</a></li>
            <li><a href="#" class="hover:text-brandGreen transition">Terms</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2 text-xs sm:text-sm text-gray-400">
        <div class="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1">
          <p class="m-0">© {{ currentYear }} bevy_luxearena. All rights reserved.</p>
          <a href="mailto:Mobolaji.familoyo@gmail.com" class="hover:text-brandGreen transition">Mobolaji.familoyo@gmail.com</a>
        </div>
        <div class="flex gap-4">
          <a href="https://instagram.com/Luxe_accessories1" target="_blank" rel="noopener noreferrer" class="hover:text-brandGreen transition">Instagram</a>
          <a href="https://www.tiktok.com/@Luxe_accessories5" target="_blank" rel="noopener noreferrer" class="hover:text-brandGreen transition">Tiktok</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
