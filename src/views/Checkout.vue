<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div v-if="cart.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <form @submit.prevent="handleSubmit" class="lg:col-span-2 space-y-6 sm:space-y-8">
          <section class="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
            <h2 class="font-bold text-lg sm:text-xl text-gray-900 mb-6">Shipping Information</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                <input
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-brandGreen"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                <input
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-brandGreen"
                />
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-brandGreen"
              />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
              <input
                v-model="form.phone"
                type="tel"
                required
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-brandGreen"
              />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Street Address *</label>
              <input
                v-model="form.address"
                type="text"
                required
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-brandGreen"
              />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                <input
                  v-model="form.city"
                  type="text"
                  required
                  class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-brandGreen"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">State/Province *</label>
                <input
                  v-model="form.state"
                  type="text"
                  required
                  class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-brandGreen"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">ZIP/Postal Code *</label>
                <input
                  v-model="form.zip"
                  type="text"
                  required
                  class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-brandGreen"
                />
              </div>
            </div>
          </section>

          <section class="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
            <h2 class="font-bold text-lg sm:text-xl text-gray-900 mb-6">Shipping Method</h2>
            <div class="space-y-3">
              <label
                class="flex items-center p-4 border rounded-lg cursor-pointer transition"
                :class="form.shipping === 'standard' ? 'border-brandGreen bg-green-50/50' : 'border-gray-200 hover:bg-gray-50'"
              >
                <input v-model="form.shipping" type="radio" value="standard" class="mr-3 text-brandGreen focus:ring-brandGreen" />
                <div class="flex-grow">
                  <p class="font-semibold text-gray-900">Standard Shipping (5-7 business days)</p>
                  <p class="text-sm text-gray-600">₦2,500</p>
                </div>
              </label>
              <label
                class="flex items-center p-4 border rounded-lg cursor-pointer transition"
                :class="form.shipping === 'express' ? 'border-brandGreen bg-green-50/50' : 'border-gray-200 hover:bg-gray-50'"
              >
                <input v-model="form.shipping" type="radio" value="express" class="mr-3 text-brandGreen focus:ring-brandGreen" />
                <div class="flex-grow">
                  <p class="font-semibold text-gray-900">Express Shipping (2-3 business days)</p>
                  <p class="text-sm text-gray-600">₦5,000</p>
                </div>
              </label>
              <label
                class="flex items-center p-4 border rounded-lg cursor-pointer transition"
                :class="form.shipping === 'overnight' ? 'border-brandGreen bg-green-50/50' : 'border-gray-200 hover:bg-gray-50'"
              >
                <input v-model="form.shipping" type="radio" value="overnight" class="mr-3 text-brandGreen focus:ring-brandGreen" />
                <div class="flex-grow">
                  <p class="font-semibold text-gray-900">Overnight Shipping</p>
                  <p class="text-sm text-gray-600">₦10,000</p>
                </div>
              </label>
            </div>
          </section>

          <section class="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
            <h2 class="font-bold text-lg sm:text-xl text-gray-900 mb-6">Payment Method</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <label
                class="flex items-center p-4 border rounded-lg cursor-pointer transition"
                :class="form.paymentMethod === 'card' ? 'border-brandGreen bg-green-50/50' : 'border-gray-200 hover:bg-gray-50'"
              >
                <input v-model="form.paymentMethod" type="radio" value="card" class="mr-3 text-brandGreen focus:ring-brandGreen" />
                <span class="font-semibold text-sm text-gray-900">Credit/Debit Card</span>
              </label>
              <label
                class="flex items-center p-4 border rounded-lg cursor-pointer transition"
                :class="form.paymentMethod === 'paypal' ? 'border-brandGreen bg-green-50/50' : 'border-gray-200 hover:bg-gray-50'"
              >
                <input v-model="form.paymentMethod" type="radio" value="paypal" class="mr-3 text-brandGreen focus:ring-brandGreen" />
                <span class="font-semibold text-sm text-gray-900">PayPal</span>
              </label>
            </div>

            <div v-if="form.paymentMethod === 'card'" class="space-y-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Cardholder Name *</label>
                <input
                  v-model="form.cardName"
                  type="text"
                  required
                  class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-brandGreen"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Card Number *</label>
                <input
                  v-model="form.cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  required
                  maxlength="19"
                  class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-brandGreen"
                  @input="formatCardNumber"
                />
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Expiry (MM/YY) *</label>
                  <input
                    v-model="form.expiry"
                    type="text"
                    placeholder="12/25"
                    required
                    maxlength="5"
                    class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-brandGreen"
                    @input="formatExpiry"
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">CVV *</label>
                  <input
                    v-model="form.cvv"
                    type="text"
                    placeholder="123"
                    required
                    maxlength="4"
                    class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-brandGreen"
                  />
                </div>
              </div>
              <label class="flex items-center">
                <input v-model="form.sameAsShipping" type="checkbox" class="mr-3 rounded text-brandGreen focus:ring-brandGreen" />
                <span class="text-sm text-gray-600">Billing address same as shipping</span>
              </label>
            </div>
            <div v-else class="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p class="text-sm text-gray-700">You will be redirected to PayPal to complete your payment securely.</p>
            </div>
          </section>

          <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <label class="flex items-start cursor-pointer">
              <input v-model="form.termsAccepted" type="checkbox" class="mr-3 mt-1 rounded text-brandGreen focus:ring-brandGreen" required />
              <span class="text-sm text-gray-600">
                I agree to the <a href="#" class="text-brandGreen hover:underline">Terms and Conditions</a> and
                <a href="#" class="text-brandGreen hover:underline">Privacy Policy</a>
              </span>
            </label>
          </div>

          <button
            type="submit"
            :disabled="!form.termsAccepted"
            class="w-full bg-brandGreen text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            Complete Purchase — ₦{{ finalTotal.toLocaleString('en-NG', { minimumFractionDigits: 2 }) }}
          </button>
          <p class="text-xs text-center text-gray-500">Your payment is secure and encrypted. We never store your full card details.</p>
        </form>

        <div class="lg:col-span-1">
          <div class="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 sticky top-24">
            <h3 class="font-bold text-lg text-gray-900 mb-6">Order Summary</h3>
            <div class="space-y-3 mb-6 pb-6 border-b border-gray-300 max-h-48 sm:max-h-64 overflow-y-auto">
              <div v-for="item in cart" :key="item.id" class="flex justify-between text-sm">
                <div>
                  <p class="font-semibold text-gray-900">{{ item.name }}</p>
                  <p class="text-xs text-gray-600">Qty: {{ item.quantity || 1 }}</p>
                </div>
                <div class="text-right">
                  <p class="font-semibold text-gray-900">₦{{ ((item.price || 0) * (item.quantity || 1)).toLocaleString() }}</p>
                </div>
              </div>
            </div>
            <div class="space-y-4 mb-6 pb-6 border-b border-gray-300">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-semibold">₦{{ cartTotal.toLocaleString('en-NG', { minimumFractionDigits: 2 }) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Shipping</span>
                <span class="font-semibold">{{ shippingCost > 0 ? '₦' + shippingCost.toLocaleString() : 'FREE' }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Tax (7.5%)</span>
                <span class="font-semibold">₦{{ tax.toLocaleString('en-NG', { minimumFractionDigits: 2 }) }}</span>
              </div>
            </div>
            <div class="flex justify-between mb-6">
              <span class="font-bold text-lg text-gray-900">Total</span>
              <span class="font-bold text-xl text-gray-900">₦{{ finalTotal.toLocaleString('en-NG', { minimumFractionDigits: 2 }) }}</span>
            </div>
            <div class="space-y-2 text-xs text-gray-600 pt-4 border-t border-gray-300">
              <p class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                SSL Secured
              </p>
              <p class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                30-day Returns
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <p class="text-gray-600 mb-6">Your cart is empty. Add items before checkout.</p>
        <router-link to="/" class="inline-block bg-brandGreen text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition">
          Continue Shopping
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../composables/useStore'

const router = useRouter()
const { cart, cartTotal, clearCart } = useStore()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  shipping: 'standard',
  paymentMethod: 'card',
  cardName: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
  sameAsShipping: true,
  termsAccepted: false,
})

const shippingCosts = { standard: 2500, express: 5000, overnight: 10000 }
const shippingCost = computed(() => shippingCosts[form.value.shipping] ?? 2500)
const tax = computed(() => Math.round((cartTotal.value + shippingCost.value) * 0.075 * 100) / 100)
const finalTotal = computed(() => cartTotal.value + shippingCost.value + tax.value)

function formatCardNumber() {
  form.value.cardNumber = form.value.cardNumber
    .replace(/\s/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim()
    .slice(0, 19)
}

function formatExpiry() {
  const value = form.value.expiry.replace(/\D/g, '')
  if (value.length >= 2) form.value.expiry = value.slice(0, 2) + '/' + value.slice(2, 4)
  else form.value.expiry = value
}

function handleSubmit() {
  if (!form.value.termsAccepted) return
  const orderNumber = 'ORD-' + Math.random().toString(36).slice(2, 9).toUpperCase()
  alert(
    `Order placed successfully!\n\nOrder Number: ${orderNumber}\nOrder Total: ₦${finalTotal.value.toLocaleString('en-NG', { minimumFractionDigits: 2 })}\n\nThank you for your purchase!\n\nA confirmation email will be sent to ${form.value.email}`
  )
  clearCart()
  router.push('/')
}
</script>
