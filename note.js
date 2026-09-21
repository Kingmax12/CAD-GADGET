// Product Database
const products = [
  // iPhones
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "apple",
    category: "phones",
    series: "iPhone 15",
    price: 1500000,
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
    specs: { screen: '6.7"', chip: "A17 Pro", storage: "256GB" },
    badge: "New",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    brand: "apple",
    category: "phones",
    series: "iPhone 15",
    price: 1300000,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.nYZ6EWZbs-M2YtLcaH_SYwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    specs: { screen: '6.1"', chip: "A17 Pro", storage: "128GB" },
    badge: "New",
  },
  {
    id: 3,
    name: "iPhone 15 Plus",
    brand: "apple",
    category: "phones",
    series: "iPhone 15",
    price: 1150000,
    image:
      "https://i5.walmartimages.com/seo/AT-T-Apple-iPhone-15-Plus-128GB-Black_2d591898-6da4-46a2-b86a-cb37bc8fbf3a.02fe2fb482fed9c8e0637d5930fd66bd.jpeg",
    specs: { screen: '6.7"', chip: "A16", storage: "128GB" },
  },
  {
    id: 4,
    name: "iPhone 15",
    brand: "apple",
    category: "phones",
    series: "iPhone 15",
    price: 1050000,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
    specs: { screen: '6.1"', chip: "A16", storage: "128GB" },
  },
  {
    id: 5,
    name: "iPhone 14 Pro Max",
    brand: "apple",
    category: "phones",
    series: "iPhone 14",
    price: 1250000,
    image:
      "https://i5.walmartimages.com/asr/cb8f75e5-1b8e-4c06-9776-0d995a314ada.88ab53492f6fe7e653033585616419b1.jpeg",
    specs: { screen: '6.7"', chip: "A16", storage: "256GB" },
    badge: "Sale",
  },

  // Samsung
  {
    id: 6,
    name: "Galaxy S24 Ultra",
    brand: "samsung",
    category: "phones",
    series: "Galaxy S",
    price: 1500000,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570396_sd.jpg",
    specs: { screen: '6.8"', chip: "Snapdragon 8 Gen 3", storage: "512GB" },
    badge: "New",
  },
  {
    id: 7,
    name: "Galaxy S24+",
    brand: "samsung",
    category: "phones",
    series: "Galaxy S",
    price: 1250000,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.wjo7M1VycycyYGRYqTr-3gHaJE?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    specs: { screen: '6.7"', chip: "Snapdragon 8 Gen 3", storage: "256GB" },
    badge: "New",
  },
  {
    id: 8,
    name: "Galaxy S24",
    brand: "samsung",
    category: "phones",
    series: "Galaxy S",
    price: 1050000,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570268_sd.jpg",
    specs: { screen: '6.2"', chip: "Snapdragon 8 Gen 3", storage: "128GB" },
    badge: "New",
  },
  {
    id: 9,
    name: "Galaxy Z Fold 5",
    brand: "samsung",
    category: "phones",
    series: "Galaxy Z",
    price: 2050000,
    image:
      "https://qatarmobile.qa/media/catalog/product/cache/c1d0a1103f39b2e8cbde60f9f2a04464/s/a/samsung_-_galaxy_z_fold5_-_icy_blue_1.jpg",
    specs: { screen: '7.6"', chip: "Snapdragon 8 Gen 2", storage: "512GB" },
  },

  // MacBooks
  {
    id: 10,
    name: "MacBook Pro 16 M3",
    brand: "apple",
    category: "laptops",
    series: "MacBook Pro",
    price: 3250000,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.6qJunOKlSnp6NSsiiBBI9QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    specs: { screen: '16"', chip: "M3 Max", ram: "36GB" },
    badge: "New",
  },
  {
    id: 11,
    name: "MacBook Pro 14 M3",
    brand: "apple",
    category: "laptops",
    series: "MacBook Pro",
    price: 2600000,
    image:
      "https://sm.pcmag.com/t/pcmag_uk/review/a/apple-macb/apple-macbook-pro-14-inch-2023-m3-pro_5t1m.3840.jpg",
    specs: { screen: '14"', chip: "M3 Pro", ram: "18GB" },
    badge: "New",
  },
  {
    id: 12,
    name: "MacBook Air 15 M2",
    brand: "apple",
    category: "laptops",
    series: "MacBook Air",
    price: 1650000,
    image:
      "https://macfinder.co.uk/wp-content/uploads/2023/08/img-MacBook-Air-13-Inch-46395.jpg",
    specs: { screen: '15"', chip: "M2", ram: "16GB" },
  },
  {
    id: 13,
    name: "MacBook Air 13 M2",
    brand: "apple",
    category: "laptops",
    series: "MacBook Air",
    price: 1400000,
    image:
      "https://th.bing.com/th/id/R.c6927b6d8553d12f9ee6f0ca5d6c5b44?rik=3eCZzleblueuPg&riu=http%3a%2f%2fwww.hoxtonmacs.co.uk%2fcdn%2fshop%2ffiles%2fapple-macbook-air-13-inch-macbook-air-13-inch-m2-midnight-2022-fair-41944397218108.jpg%3fv%3d1688460815&ehk=laOZSK0IHaeZ%2fG2WWXTG2BQGnePOIOosXMlcpkUwItQ%3d&risl=&pid=ImgRaw&r=0",
    specs: { screen: '13"', chip: "M2", ram: "8GB" },
  },

  // Dell
  {
    id: 14,
    name: "Dell XPS 15",
    brand: "dell",
    category: "laptops",
    series: "XPS",
    price: 1900000,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.W8UMLRZmJh5-qd9Y5OyM9QAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    specs: { screen: '15.6"', chip: "i9-13900H", ram: "32GB" },
  },
  {
    id: 15,
    name: "Dell XPS 13",
    brand: "dell",
    category: "laptops",
    series: "XPS",
    price: 1500000,
    image:
      "https://th.bing.com/th/id/R.d2384bda8fccd883f9f8cf43a30413e7?rik=K9kvE0qdfX%2bq3Q&pid=ImgRaw&r=0",
    specs: { screen: '13.4"', chip: "i7-1360P", ram: "16GB" },
  },
  {
    id: 16,
    name: "Dell XPS 17",
    brand: "dell",
    category: "laptops",
    series: "XPS",
    price: 2300000,
    image:
      "https://www.techspot.com/images/products/2023/laptops/org/2023-06-06-product-3.jpg",
    specs: { screen: '17"', chip: "i9-13900H", ram: "64GB" },
  },

  // HP
  {
    id: 17,
    name: "HP Pavilion 15",
    brand: "hp",
    category: "laptops",
    series: "Pavilion",
    price: 900000,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.aVkcnpeN75mc-W032yFKUwHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    specs: { screen: '15.6"', chip: "i7-1355U", ram: "16GB" },
    badge: "Popular",
  },
  {
    id: 18,
    name: "HP Pavilion x360",
    brand: "hp",
    category: "laptops",
    series: "Pavilion",
    price: 1050000,
    image:
      "https://www.pcworld.com/wp-content/uploads/2023/04/hp_pavilion_x360_14m-dh0003dx_main-100821054-orig.jpeg?quality=50&strip=all",
    specs: { screen: '14"', chip: "i5-1335U", ram: "8GB" },
  },
  {
    id: 19,
    name: "HP Spectre x360",
    brand: "hp",
    category: "laptops",
    series: "Spectre",
    price: 1750000,
    image:
      "https://jp.ext.hp.com/content/dam/jp-ext-hp-com/jp/ja/ec/notebooks/personal/spectre_x360_14_ea0000/images/move3_full.jpg",
    specs: { screen: '16"', chip: "i7-13700H", ram: "32GB" },
  },
  {
    id: 20,
    name: "HP Envy 16",
    brand: "hp",
    category: "laptops",
    series: "Envy",
    price: 1500000,
    image:
      "https://microless.com/cdn/products/8524f60a5bc3cf02e99f8fd03ee12bf0-hi.jpg",
    specs: { screen: '16"', chip: "i9-13900H", ram: "32GB" },
  },

  // Lenovo
  {
    id: 21,
    name: "ThinkPad X1 Carbon",
    brand: "lenovo",
    category: "laptops",
    series: "ThinkPad",
    price: 2200000,
    image:
      "https://microless.com/cdn/products/c5ba197d5121da71a5e3f1b8e1652fce-hi.jpg",
    specs: { screen: '14"', chip: "i7-1365U", ram: "32GB" },
  },
  {
    id: 22,
    name: "ThinkPad T14s",
    brand: "lenovo",
    category: "laptops",
    series: "ThinkPad",
    price: 1800000,
    image: "https://m.media-amazon.com/images/I/61+hjyfiAvL._AC_.jpg",
    specs: { screen: '14"', chip: "i5-1335U", ram: "16GB" },
  },
  {
    id: 23,
    name: "Legion Pro 7",
    brand: "lenovo",
    category: "laptops",
    series: "Legion",
    price: 2600000,
    image:
      "https://www.notebookcheck.net/uploads/tx_nbc2/Lenovo_Legion_Pro_7_16IRX8H__1__03.JPG",
    specs: { screen: '16"', chip: "i9-13900HX", ram: "32GB" },
    badge: "Gaming",
  },

  // ASUS
  {
    id: 24,
    name: "ROG Zephyrus G14",
    brand: "asus",
    category: "laptops",
    series: "ROG",
    price: 2050000,
    image: "https://m.media-amazon.com/images/I/615HiNapzWL._AC_SL1500_.jpg",
    specs: { screen: '14"', chip: "Ryzen 9", ram: "32GB" },
    badge: "Gaming",
  },
  {
    id: 25,
    name: "ZenBook Pro 14",
    brand: "asus",
    category: "laptops",
    series: "ZenBook",
    price: 1900000,
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/Asus/ZenBook_Pro_14_Duo_90NB1172-M000Y0/Asus_Zenbook_Pro_14_Duo_Teaser.jpg",
    specs: { screen: '14.5"', chip: "i9-13900H", ram: "32GB" },
  },
];

const productColorMap = {
  // iPhone 15 Pro / Pro Max: real Apple lineup is these 4 Titanium finishes
  "iPhone 15 Pro Max": [
    { name: "Black Titanium", hex: "#111827" },
    { name: "Blue Titanium", hex: "#4f7df3" },
    { name: "Natural Titanium", hex: "#d4c7b0" },
    { name: "White Titanium", hex: "#f3f4f6" },
  ],
  "iPhone 15 Pro": [
    { name: "Black Titanium", hex: "#111827" },
    { name: "Blue Titanium", hex: "#4f7df3" },
    { name: "Natural Titanium", hex: "#d4c7b0" },
    { name: "White Titanium", hex: "#f3f4f6" },
  ],
  // iPhone 15 / 15 Plus: Apple actually ships 5 colors here — added the missing Pink
  "iPhone 15 Plus": [
    { name: "Black", hex: "#111827" },
    { name: "Blue", hex: "#4f7df3" },
    { name: "Green", hex: "#4ade80" },
    { name: "Yellow", hex: "#fde047" },
    { name: "Pink", hex: "#f9c8d4" },
  ],
  "iPhone 15": [
    { name: "Black", hex: "#111827" },
    { name: "Blue", hex: "#4f7df3" },
    { name: "Green", hex: "#4ade80" },
    { name: "Yellow", hex: "#fde047" },
    { name: "Pink", hex: "#f9c8d4" },
  ],
  "iPhone 14 Pro Max": [
    { name: "Deep Purple", hex: "#6d28d9" },
    { name: "Gold", hex: "#d4af37" },
    { name: "Silver", hex: "#e5e7eb" },
    { name: "Space Black", hex: "#111827" },
  ],
  "Galaxy S24 Ultra": [
    { name: "Titanium Black", hex: "#111827" },
    { name: "Titanium Gray", hex: "#9ca3af" },
    { name: "Titanium Violet", hex: "#8b5cf6" },
    { name: "Titanium Yellow", hex: "#f59e0b" },
  ],
  "Galaxy S24+": [
    { name: "Onyx Black", hex: "#111827" },
    { name: "Marble Gray", hex: "#d1d5db" },
    { name: "Cobalt Violet", hex: "#7c3aed" },
    { name: "Amber Yellow", hex: "#f59e0b" },
  ],
  "Galaxy S24": [
    { name: "Onyx Black", hex: "#111827" },
    { name: "Marble Gray", hex: "#d1d5db" },
    { name: "Cobalt Violet", hex: "#7c3aed" },
    { name: "Amber Yellow", hex: "#f59e0b" },
  ],
  "Galaxy Z Fold 5": [
    { name: "Icy Blue", hex: "#60a5fa" },
    { name: "Phantom Black", hex: "#111827" },
    { name: "Cream", hex: "#f5e7c8" },
  ],
  "MacBook Pro 16 M3": [
    { name: "Space Black", hex: "#111827" },
    { name: "Silver", hex: "#e5e7eb" },
  ],
  "MacBook Pro 14 M3": [
    { name: "Space Black", hex: "#111827" },
    { name: "Silver", hex: "#e5e7eb" },
  ],
  // MacBook Air M2: Apple actually ships 4 colors — added the missing Space Gray
  "MacBook Air 15 M2": [
    { name: "Midnight", hex: "#111827" },
    { name: "Starlight", hex: "#fef3c7" },
    { name: "Space Gray", hex: "#64748b" },
    { name: "Silver", hex: "#e5e7eb" },
  ],
  "MacBook Air 13 M2": [
    { name: "Midnight", hex: "#111827" },
    { name: "Starlight", hex: "#fef3c7" },
    { name: "Space Gray", hex: "#64748b" },
    { name: "Silver", hex: "#e5e7eb" },
  ],
  // Dell XPS 15/17 (2023 gen): only 2 real finishes — Platinum Silver and Frost, no separate "Black"
  "Dell XPS 15": [
    { name: "Platinum Silver", hex: "#e5e7eb" },
    { name: "Frost", hex: "#f3f4f6" },
  ],
  // Dell XPS 13 (2023 Plus design): Platinum and Graphite, not Frost/Black
  "Dell XPS 13": [
    { name: "Platinum", hex: "#e5e7eb" },
    { name: "Graphite", hex: "#374151" },
  ],
  "Dell XPS 17": [
    { name: "Platinum Silver", hex: "#e5e7eb" },
    { name: "Frost", hex: "#f3f4f6" },
  ],
  // HP Pavilion 15: real colors are Natural Silver / Warm Gold, not "Atmospheric Blue"
  "HP Pavilion 15": [
    { name: "Natural Silver", hex: "#e5e7eb" },
    { name: "Warm Gold", hex: "#d4af8c" },
  ],
  "HP Pavilion x360": [
    { name: "Natural Silver", hex: "#e5e7eb" },
    { name: "Space Blue", hex: "#3b6ea5" },
    { name: "Pale Rose Gold", hex: "#e8c2c2" },
  ],
  // HP Spectre x360 16": real colors are Nightfall Black / Nocturne Blue (no silver on the 16" size)
  "HP Spectre x360": [
    { name: "Nightfall Black", hex: "#111827" },
    { name: "Nocturne Blue", hex: "#1d4ed8" },
  ],
  "HP Envy 16": [
    { name: "Nightfall Black", hex: "#111827" },
    { name: "Natural Silver", hex: "#e5e7eb" },
  ],
  // ThinkPad X1 Carbon / T14s: Lenovo ships this generation in Black only
  "ThinkPad X1 Carbon": [{ name: "Black", hex: "#111827" }],
  "ThinkPad T14s": [{ name: "Black", hex: "#111827" }],
  // Legion Pro 7: single real finish, Onyx Grey
  "Legion Pro 7": [{ name: "Onyx Grey", hex: "#3f3f46" }],
  "ROG Zephyrus G14": [
    { name: "Moonlight White", hex: "#f8fafc" },
    { name: "Eclipse Gray", hex: "#374151" },
  ],
  // ZenBook Pro 14 Duo OLED: ships in one finish, Tech Black
  "ZenBook Pro 14": [{ name: "Tech Black", hex: "#111827" }],
};

products.forEach((product) => {
  product.colors = productColorMap[product.name] || [
    { name: "Standard", hex: "#6b7280" },
  ];
});

// State
let currentCategory = "all";
let selectedBrands = [];
let searchQuery = "";
let cart = [];
let selectedColors = {};

// Initialize Lucide icons
lucide.createIcons();

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  renderDeals();
});

// Category Selection
function setCategory(category) {
  currentCategory = category;

  // Update tabs
  document.querySelectorAll('[id^="tab-"]').forEach((tab) => {
    tab.classList.remove("bg-dark-700", "text-white", "shadow-lg");
    tab.classList.add("text-gray-400");
  });

  const activeTab = document.getElementById(`tab-${category}`);
  activeTab.classList.remove("text-gray-400");
  activeTab.classList.add("bg-dark-700", "text-white", "shadow-lg");

  filterAndRender();
}

// Brand Toggle
function toggleBrand(brand) {
  const index = selectedBrands.indexOf(brand);
  if (index > -1) {
    selectedBrands.splice(index, 1);
  } else {
    selectedBrands.push(brand);
  }

  // Update UI
  document.querySelectorAll(".brand-btn").forEach((btn) => {
    if (selectedBrands.includes(btn.dataset.brand)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  filterAndRender();
}

// Search Handler
function handleSearch(query) {
  searchQuery = query.toLowerCase();
  filterAndRender();
}

// Quick Search
function quickSearch(term) {
  document.getElementById("search-input").value = term;
  handleSearch(term);
  scrollToSection("results-section");
}

// Filter Logic
function filterAndRender() {
  let filtered = products;

  // Category filter
  if (currentCategory !== "all") {
    filtered = filtered.filter((p) => p.category === currentCategory);
  }

  // Brand filter
  if (selectedBrands.length > 0) {
    filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
  }

  // Search filter
  if (searchQuery) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.brand.toLowerCase().includes(searchQuery) ||
        p.series.toLowerCase().includes(searchQuery),
    );
  }

  renderProducts(filtered);
}

function getSelectedColor(productId) {
  const product = products.find((p) => p.id === productId);
  const selected = selectedColors[productId];
  if (!product) return "Standard";
  return selected && product.colors.some((color) => color.name === selected)
    ? selected
    : product.colors[0].name;
}

function selectProductColor(productId, colorName) {
  selectedColors[productId] = colorName;
  if (document.getElementById("deals-grid")) {
    renderDeals();
  }
  if (document.getElementById("products-grid")) {
    filterAndRender();
  }
}

// Builds a CSS overlay that tints a product photo toward the selected color.
// We don't have a separate real photo per color variant, so instead of showing
// the wrong picture (or the same picture for every color), we blend the true
// swatch hex over the real product photo — the image visibly changes when a
// color is picked, and it's always using the product's actual documented color.
function colorOverlayStyle(hex) {
  return `background:${hex}; mix-blend-mode: color; opacity: 0.55;`;
}

// Render Products
function renderProducts(items) {
  const grid = document.getElementById("products-grid");
  const noResults = document.getElementById("no-results");
  const countEl = document.getElementById("results-count");

  countEl.textContent = `(${items.length})`;

  if (items.length === 0) {
    grid.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  grid.innerHTML = items
    .map((product) => {
      const selectedColor = getSelectedColor(product.id);
      const colorButtons = product.colors
        .map((color) => {
          const safeName = color.name.replace(/'/g, "\\'");
          const active = selectedColor === color.name;
          return `
                <button type="button" onclick="event.stopPropagation(); selectProductColor(${product.id}, '${safeName}')" class="flex items-center gap-1 rounded-full border px-2 py-1 text-[10px] ${active ? "border-neon-blue bg-neon-blue/10 text-neon-blue" : "border-white/10 bg-dark-800 text-gray-300"}">
                    <span class="h-2.5 w-2.5 rounded-full border border-white/20" style="background:${color.hex}"></span>
                    <span>${color.name}</span>
                </button>
            `;
        })
        .join("");

      const selectedColorObj =
        product.colors.find((c) => c.name === selectedColor) ||
        product.colors[0];

      return `
            <div class="product-card glass-panel rounded-2xl overflow-hidden group">
                <div class="relative aspect-square bg-dark-800">
                    <img src="${product.image}" alt="${product.name} in ${selectedColor}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 pointer-events-none transition-all duration-300" style="${colorOverlayStyle(selectedColorObj.hex)}"></div>
                    ${product.badge ? `<span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${product.badge === "Sale" ? "bg-red-500" : "bg-neon-blue text-dark-900"}">${product.badge}</span>` : ""}
                    <button onclick="event.stopPropagation(); addToCart(${product.id}, '${selectedColor.replace(/'/g, "\\'")}')" class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white text-dark-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all hover:bg-neon-blue">
                        <i data-lucide="plus" class="h-5 w-5"></i>
                    </button>
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">${product.brand}</p>
                            <h3 class="font-display font-bold text-white text-lg leading-tight">${product.name}</h3>
                        </div>
                    </div>
                    <div class="flex gap-2 mb-3 text-xs text-gray-400">
                        <span class="px-2 py-1 rounded bg-dark-800">${product.specs.screen}</span>
                        <span class="px-2 py-1 rounded bg-dark-800">${product.specs.chip || product.specs.ram}</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-3">${colorButtons}</div>
                    <div class="flex justify-between items-center">
                        <span class="font-display text-xl font-bold text-neon-blue">#${product.price}</span>
                        <button onclick="event.stopPropagation(); addToCart(${product.id}, '${selectedColor.replace(/'/g, "\\'")}')" class="text-sm text-gray-400 hover:text-white transition-colors">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");

  lucide.createIcons();
}

// Render Deals
function renderDeals() {
  const deals = products
    .filter((p) => p.badge === "Sale" || p.badge === "New")
    .slice(0, 3);
  const grid = document.getElementById("deals-grid");

  grid.innerHTML = deals
    .map((product) => {
      const selectedColor = getSelectedColor(product.id);
      const colorButtons = product.colors
        .map((color) => {
          const safeName = color.name.replace(/'/g, "\\'");
          const active = selectedColor === color.name;
          return `
                <button type="button" onclick="event.stopPropagation(); selectProductColor(${product.id}, '${safeName}')" class="rounded-full border p-1 ${active ? "border-neon-blue" : "border-white/10"}">
                    <span class="block h-4 w-4 rounded-full border border-white/20" style="background:${color.hex}"></span>
                </button>
            `;
        })
        .join("");

      const selectedColorObj =
        product.colors.find((c) => c.name === selectedColor) ||
        product.colors[0];

      return `
            <div class="glass-panel rounded-2xl p-6 relative overflow-hidden group">
                <div class="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-full filter blur-3xl group-hover:bg-neon-blue/20 transition-all"></div>
                <div class="relative z-10 flex gap-4">
                    <div class="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="${product.image}" alt="${product.name} in ${selectedColor}" class="w-full h-full object-cover">
                        <div class="absolute inset-0 pointer-events-none transition-all duration-300" style="${colorOverlayStyle(selectedColorObj.hex)}"></div>
                    </div>
                    <div class="flex-1">
                        <span class="text-xs text-neon-blue font-semibold uppercase tracking-wider">${product.badge}</span>
                        <h3 class="font-display font-bold text-white mt-1 mb-1">${product.name}</h3>
                        <p class="text-gray-400 text-sm mb-2">${product.specs.screen} • ${product.specs.chip || product.specs.ram}</p>
                        <div class="flex items-center gap-2 mb-3">
                            <span class="font-display text-xl font-bold text-white">#${product.price}</span>
                            ${product.badge === "Sale" ? '<span class="text-sm text-gray-500 line-through">#' + (product.price * 1.2).toFixed(0) + "</span>" : ""}
                        </div>
                        <div class="flex flex-wrap gap-2 mb-3">${colorButtons}</div>
                        <div class="flex items-center justify-between">
                            <p class="text-xs text-gray-400">Selected: <span class="text-neon-blue">${selectedColor}</span></p>
                            <button onclick="event.stopPropagation(); addToCart(${product.id}, '${selectedColor.replace(/'/g, "\\'")}')" class="text-sm text-gray-400 hover:text-white transition-colors">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");

  lucide.createIcons();
}

// Sort Products
function sortProducts() {
  const sortValue = document.getElementById("sort-select").value;
  let sorted = [...products];

  switch (sortValue) {
    case "price-low":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      sorted.sort((a, b) => b.id - a.id);
      break;
  }

  renderProducts(sorted);
}

// Clear Filters
function clearFilters() {
  currentCategory = "all";
  selectedBrands = [];
  searchQuery = "";
  document.getElementById("search-input").value = "";
  document
    .querySelectorAll(".brand-btn")
    .forEach((btn) => btn.classList.remove("active"));
  setCategory("all");
}

// Cart Functions
function addToCart(productId, colorName = null) {
  const product = products.find((p) => p.id === productId);
  const chosenColor = colorName || getSelectedColor(productId);
  const existing = cart.find(
    (item) => item.id === productId && item.selectedColor === chosenColor,
  );

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1, selectedColor: chosenColor });
  }

  updateCart();
  showToast(`${product.name} (${chosenColor}) added to cart`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const container = document.getElementById("cart-items");
  const badge = document.getElementById("cart-count");
  const totalEl = document.getElementById("cart-total");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (totalItems > 0) {
    badge.textContent = totalItems;
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }

  totalEl.textContent = `#${totalPrice.toLocaleString()}`;

  if (cart.length === 0) {
    container.innerHTML = `
            <div class="text-center text-gray-500 mt-12">
                <i data-lucide="shopping-cart" class="h-16 w-16 mx-auto mb-4 text-gray-700"></i>
                <p>Your cart is empty</p>
            </div>
        `;
  } else {
    container.innerHTML = cart
      .map((item, index) => {
        const itemColorObj = (item.colors || []).find(
          (c) => c.name === item.selectedColor,
        );
        const tintStyle = itemColorObj
          ? colorOverlayStyle(itemColorObj.hex)
          : "";
        return `
            <div class="flex gap-4 bg-dark-700 p-4 rounded-xl">
                <div class="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img src="${item.image}" class="w-full h-full object-cover">
                    ${tintStyle ? `<div class="absolute inset-0 pointer-events-none" style="${tintStyle}"></div>` : ""}
                </div>
                <div class="flex-1">
                    <h4 class="text-white font-semibold text-sm">${item.name}</h4>
                    <p class="text-gray-400 text-xs">Color: ${item.selectedColor || "Standard"}</p>
                    <p class="text-gray-400 text-xs">#${item.price} x ${item.quantity}</p>
                    <p class="text-neon-blue font-bold mt-1">#${(item.price * item.quantity).toLocaleString()}</p>
                </div>
                <button onclick="removeFromCart(${index})" class="text-gray-500 hover:text-red-400 transition-colors">
                    <i data-lucide="trash-2" class="h-4 w-4"></i>
                </button>
            </div>
        `;
      })
      .join("");
  }

  lucide.createIcons();
}

function toggleCart() {
  const sidebar = document.getElementById("cart-sidebar");
  const panel = document.getElementById("cart-panel");

  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
    setTimeout(() => panel.classList.remove("translate-x-full"), 10);
  } else {
    panel.classList.add("translate-x-full");
    setTimeout(() => sidebar.classList.add("hidden"), 300);
  }
}

// Utility Functions
function showToast(message) {
  const toast = document.getElementById("toast");
  document.getElementById("toast-message").textContent = message;
  toast.classList.remove("opacity-0", "translate-y-8");
  setTimeout(() => toast.classList.add("opacity-0", "translate-y-8"), 3000);
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const button = document.querySelector('[onclick="toggleMobileMenu()"]');

  if (!menu) return;

  const isHidden = menu.classList.contains("hidden");
  menu.classList.toggle("hidden", !isHidden);
  menu.classList.toggle("block", isHidden);

  if (button) {
    button.setAttribute("aria-expanded", String(isHidden));
  }
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});
