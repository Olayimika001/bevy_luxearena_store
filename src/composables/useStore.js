import { ref, computed, watch } from 'vue'

const CART_STORAGE_KEY = 'bagsio-cart'

function loadCartFromStorage() {
  if (typeof window === 'undefined') return []
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function saveCartToStorage(items) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch (_) {}
}

const vid1 = '/videos/WhatsApp Video 2026-02-01 at 11.28.40 AM.mp4'
const vid2 = '/videos/WhatsApp Video 2026-02-01 at 11.28.41 AM.mp4'
const vid3 = '/videos/WhatsApp Video 2026-02-01 at 11.28.42 AM.mp4'
const vid4 = '/videos/WhatsApp Video 2026-02-01 at 11.28.43 AM.mp4'
const vid5 = '/videos/WhatsApp Video 2026-02-01 at 11.28.44 AM.mp4'
const vid6 = '/videos/WhatsApp Video 2026-02-01 at 11.28.45 AM.mp4'
const vid7 = '/videos/WhatsApp Video 2026-02-01 at 11.28.46 AM.mp4'
const vid8 = '/videos/WhatsApp Video 2026-02-01 at 11.28.47 AM.mp4'
const vid9 = '/videos/WhatsApp Video 2026-02-01 at 11.28.48 AM.mp4'
const vid10 = '/videos/WhatsApp Video 2026-02-01 at 11.28.49 AM.mp4'

const cart = ref(loadCartFromStorage())
const searchQuery = ref('')
const selectedCategory = ref('All')

const products = ref([
  { id: 1, name: 'Leather Handbag', price: 15000, image: '/leather handbag.jpeg', category: 'Handbags', description: 'A timeless leather tote perfect for everyday use. Crafted with premium Italian leather.', color: 'Cognac Brown', material: 'Full-grain leather', dimensions: '14 x 10 x 5 inches', hasVariants: false },
  { id: 2, name: 'Crossbody Handbag', price: 8000, image: '/crossbody handbag.jpeg', category: 'Handbags', description: 'Sleek and functional crossbody bag for the modern lifestyle.', color: 'Black', material: 'Vegan leather', dimensions: '10 x 8 x 3 inches', hasVariants: false },
  { id: 3, name: 'Quality fashion handbag', price: 10000, image: '/quality fashion handbag.jpeg', category: 'Handbags', description: 'Spacious duffle bag ideal for travel and weekend getaways.', color: 'Olive', material: 'Canvas blend', dimensions: '18 x 10 x 10 inches', hasVariants: false },
  { id: 4, name: 'Retro handbag', price: 10000, image: '/Retro handbag.jpeg', category: 'Handbags', description: 'Elegant structured bag with a refined silhouette.', color: 'Cream', material: 'Leather', dimensions: '12 x 9 x 4 inches', hasVariants: false },
  { id: 5, name: 'FNDEI handbag', price: 10000, image: '/FNDEI handbag.jpeg', category: 'Handbags', description: 'Perfect for evening outings and special occasions.', color: 'Gold', material: 'Metallic leather', dimensions: '8 x 5 x 2 inches', hasVariants: false },
  { id: 6, name: 'Glossy handbag', price: 10000, image: '/Glossy handbag.jpeg', category: 'Handbags', description: 'Versatile backpack combining style and functionality.', color: 'Tan', material: 'Leather', dimensions: '15 x 12 x 6 inches', hasVariants: false },
  { id: 7, name: 'Garavani Vlogo signature clutch bag', price: 10000, image: '/Garavani Vlogo signature clutch bag.jpeg', category: 'Handbags', description: 'Premium handcrafted satchel with Italian leather.', color: 'Burgundy', material: 'Full-grain leather', dimensions: '16 x 11 x 6 inches', hasVariants: false },
  { id: 8, name: 'Spacious leather bag', price: 13000, image: '/spacious leather bag.jpeg', category: 'Handbags', description: 'Modern crossbody perfect for urban adventures.', color: 'Navy Blue', material: 'Vegan leather', dimensions: '9 x 7 x 3 inches', hasVariants: false },
  { id: 9, name: 'Beige and tan handbag', price: 10000, image: '/Beige and tan handbag.jpeg', category: 'Handbags', description: 'Sophisticated clutch for special evenings.', color: 'Silver', material: 'Metallic leather', dimensions: '8 x 6 x 2 inches', hasVariants: false },
  { id: 10, name: 'Blue leather bag', price: 16500, image: '/blue.jpeg', category: 'Handbags', description: 'A stunning blue handbag with premium quality craftsmanship.', color: 'Blue', material: 'Leather', dimensions: '14 x 10 x 5 inches', hasVariants: false },
  { id: 11, name: 'Brown bag', price: 16000, image: '/brown.jpeg', category: 'Handbags', description: 'Perfect for group outings and travel purposes.', color: 'Black', material: 'Vegan leather', dimensions: '12 x 9 x 4 inches', hasVariants: false },
  { id: 12, name: 'Handbags', price: 18000, image: '/group.jpeg', category: 'Handbags', description: 'Classic brown handbag with elegant design and durability.', color: 'Brown', material: 'Full-grain leather', dimensions: '15 x 11 x 6 inches', hasVariants: false },
  { id: 13, name: 'Bag with straps', price: 23500, image: '/bag with straps.jpeg', category: 'Handbags', description: 'Sophisticated evening bag perfect for formal occasions and special events.', color: 'Black', material: 'Satin with leather trim', dimensions: '10 x 8 x 4 inches', hasVariants: false },
  { id: 14, name: 'Brown bag', price: 18500, image: '/brown bag.jpeg', category: 'Handbags', description: 'Retro-inspired shoulder bag with modern functionality and timeless appeal.', color: 'Rust', material: 'Vintage leather', dimensions: '11 x 9 x 5 inches', hasVariants: false },
  { id: 15, name: 'Wine leather bag', price: 18000, image: '/wine leather bag.jpeg', category: 'Handbags', description: 'Premium briefcase designed for professionals with multiple compartments.', color: 'Deep Brown', material: 'Premium leather', dimensions: '16 x 12 x 4 inches', hasVariants: false },
  { id: 16, name: 'Black bag', price: 20500, image: '/black bag.jpeg', category: 'Handbags', description: 'Premium briefcase designed for professionals with multiple compartments.', color: 'Deep Brown', material: 'Premium leather', dimensions: '16 x 12 x 4 inches', hasVariants: false },
  { id: 17, name: 'Black handbag', price: 12000, image: '/black handbag.jpeg', category: 'Handbags', description: 'Premium briefcase designed for professionals with multiple compartments.', color: 'Deep Brown', material: 'Premium leather', dimensions: '16 x 12 x 4 inches', hasVariants: false },
  { id: 18, name: 'Black purse', price: 14000, image: '/black purse.jpeg', category: 'Handbags', description: 'Premium briefcase designed for professionals with multiple compartments.', color: 'Deep Brown', material: 'Premium leather', dimensions: '16 x 12 x 4 inches', hasVariants: false },
  { id: 19, name: 'Handbag', price: 15500, image: '/custom handbag.jpeg', category: 'Handbags', description: 'Premium briefcase designed for professionals with multiple compartments.', color: 'Deep Brown', material: 'Premium leather', dimensions: '16 x 12 x 4 inches', hasVariants: false },
  { id: 20, name: 'Quality Bags', price: 15000, image: '/leather handbag.jpeg', video: vid1, category: 'Videos', description: 'Short video clip — downloadable media for your collection.', hasVariants: false },
  { id: 21, name: 'Luxury Bags', price: 17000, image: '/crossbody handbag.jpeg', video: vid2, category: 'Videos', description: 'Short video clip — downloadable media for your collection.', hasVariants: false },
  { id: 22, name: 'Box quality bags', price: 15000, image: '/quality fashion handbag.jpeg', video: vid3, category: 'Videos', description: 'Short video clip — downloadable media for your collection.', hasVariants: false },
  { id: 23, name: 'Quality Bags Video', price: 15000, image: '/Retro handbag.jpeg', video: vid4, category: 'Videos', description: 'Short video clip — downloadable media for your collection.', hasVariants: false },
  { id: 24, name: 'Quality Leather Bag', price: 14000, image: '/spacious leather bag.jpeg', video: vid5, category: 'Videos', description: 'Short video clip — extra footage.', hasVariants: false },
  { id: 25, name: 'Quality Bag', price: 15000, image: '/Glossy handbag.jpeg', video: vid6, category: 'Videos', description: 'Short video clip — extra footage.', hasVariants: false },
  { id: 26, name: 'Quality Leather Bag', price: 22000, image: '/FNDEI handbag.jpeg', video: vid7, category: 'Videos', description: 'Short video clip — extra footage.', hasVariants: false },
  { id: 27, name: 'Leather Hand Bag', price: 7000, image: '/Garavani Vlogo signature clutch bag.jpeg', video: vid8, category: 'Videos', description: 'Short video clip — extra footage.', hasVariants: false },
  { id: 28, name: 'Quality Handbag', price: 11000, image: '/Beige and tan handbag.jpeg', video: vid9, category: 'Videos', description: 'Short video clip — extra footage.', hasVariants: false },
  { id: 29, name: 'Spacious Handbag', price: 20000, image: '/leather handbag.jpeg', video: vid10, category: 'Videos', description: 'Short video clip — extra footage.', hasVariants: false },
])

const collections = computed(() => {
  const cats = new Set(products.value.map((p) => p.category))
  return ['All', ...Array.from(cats).sort()]
})

const filteredProducts = computed(() => {
  let list = products.value
  if (selectedCategory.value !== 'All') {
    list = list.filter((p) => p.category === selectedCategory.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q))
    )
  }
  return list
})

const cartCount = computed(() => {
  return cart.value.reduce((sum, item) => sum + (item.quantity || 1), 0)
})

const cartTotal = computed(() => {
  return cart.value.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0)
})

watch(
  cart,
  (newCart) => {
    saveCartToStorage(newCart)
  },
  { deep: true }
)

function setSearchQuery(value) {
  searchQuery.value = value
}

function setSelectedCategory(value) {
  selectedCategory.value = value
}

function addToCart(product, quantity = 1) {
  const existing = cart.value.find((item) => item.id === product.id)
  // Always store the product's actual image (poster for video products) so cart shows correct thumbnail
  const image =
    product && typeof product.image === 'string' && product.image
      ? product.image
      : '/leather handbag.jpeg'
  if (existing) {
    existing.quantity = (existing.quantity || 1) + quantity
    if (image) existing.image = image
  } else {
    cart.value.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image,
      quantity,
    })
  }
}

function removeFromCart(id) {
  cart.value = cart.value.filter((item) => item.id !== id)
}

function clearCart() {
  cart.value = []
}

function getProductById(id) {
  const numId = Number(id)
  return products.value.find((p) => p.id === numId) ?? null
}

export function useStore() {
  return {
    products,
    cart,
    searchQuery,
    selectedCategory,
    collections,
    filteredProducts,
    cartCount,
    cartTotal,
    setSearchQuery,
    setSelectedCategory,
    addToCart,
    removeFromCart,
    clearCart,
    getProductById,
  }
}
