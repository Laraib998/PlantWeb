/* ============================================================
   VERDANT — PREMIUM PLANT NURSERY | MASTER SCRIPT
   ============================================================ */
'use strict';

/* ============================================================
   SVG ICON LIBRARY — Professional, no emojis
   ============================================================ */
const Icons = {
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C12 2 4 7 4 14C4 18.418 7.582 22 12 22C16.418 22 20 18.418 20 14C20 7 12 2 12 2Z"/><line x1="12" y1="22" x2="12" y2="10"/><path d="M12 17C12 17 8 14 6 11"/><path d="M12 14C12 14 15 11.5 17.5 9"/></svg>`,
  seed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><ellipse cx="12" cy="13" rx="6" ry="8"/><path d="M12 5V2"/><path d="M10 4C10 4 7 2 5 4"/><path d="M14 4C14 4 17 2 19 4"/><path d="M9 10C9 10 10 12 12 13"/></svg>`,
  plant: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M12 16C12 16 8 14 6 10C8 8 12 9 12 12"/><path d="M12 13C12 13 15 11 18 8C16 6 12 7 12 10"/><path d="M9 22H15"/></svg>`,
  planter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8H18L16 20H8L6 8Z"/><path d="M4 8H20"/><path d="M9 8V6C9 4.895 10.343 4 12 4C13.657 4 15 4.895 15 6V8"/><line x1="12" y1="12" x2="12" y2="17"/></svg>`,
  hanger: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3C12 3 14 3 14 5C14 7 12 7 12 7"/><path d="M12 7L4 18H20L12 7Z"/><circle cx="12" cy="3" r="1"/></svg>`,
  accessory: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2V5M12 19V22M2 12H5M19 12H22M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M4.93 19.07L7.05 16.95M16.95 7.05L19.07 4.93"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8H20L23 11V16H16V8Z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C12 22 4 18 4 10V4L12 2L20 4V10C20 18 12 22 12 22Z"/><path d="M9 12L11 14L15 10"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>`,
  support: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M1 12S5 5 12 5S23 12 23 12S19 19 12 19S1 12 1 12Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1H5L6.68 14H19L21 7H4"/><circle cx="9" cy="21" r="1.5" fill="currentColor"/><circle cx="18" cy="21" r="1.5" fill="currentColor"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6L18 20H6L5 6"/><path d="M10 11V17"/><path d="M14 11V17"/><path d="M9 6V4H15V6"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 18L9 12L15 6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18L15 12L9 6"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M5 12H19"/><path d="M12 5L19 12L12 19"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 6L9 17L4 12"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20C4 17.239 7.582 15 12 15C16.418 15 20 17.239 20 20"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7L12 13L22 7"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92V20A2 2 0 0120.07 21.96C10.17 21.23 2.77 13.83 2.04 3.93A2 2 0 014 2H7.09A2 2 0 019 3.72L9.85 8.59A2 2 0 018.76 10.34L7 12.1C8.35 14.83 9.17 16 12 18L13.66 16.24A2 2 0 0115.41 15.15L20.28 16A2 2 0 0122 17.91V16.92Z"/></svg>`,
  map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.582 7.029 2 12 2C16.971 2 21 5.582 21 10Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6V12L16 14"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7C7 4.239 9.239 2 12 2C14.761 2 17 4.239 17 7V11"/></svg>`,
  tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41L13.42 20.58A2 2 0 0111 20.58L3 12.59V3H12.59L20.59 11A2 2 0 0120.59 13.41Z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  undo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M3 7H15C18.314 7 21 9.686 21 13C21 16.314 18.314 19 15 19H10"/><polyline points="7 3 3 7 7 11"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4C2.895 4 2 4.895 2 6V20C2 21.105 2.895 22 4 22H18C19.105 22 20 21.105 20 20V13"/><path d="M18.5 2.5L21.5 5.5L12 15H9V12L18.5 2.5Z"/></svg>`,
  box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8L12 3L3 8V16L12 21L21 16Z"/><path d="M3.27 6.96L12 12.01L20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M23 3C22 4 20.6 4.7 19 5C17.4 3.3 15 3 12.7 4C10.3 5 9 7.3 9 10V11C5.4 11.1 2.2 9.5 1 7C1 7 -2 16 7 20C5 21.3 3 22 1 22C9 26 19 22 19 11C19 10.4 18.9 9.8 18.8 9.2C20 8 21.5 6.2 23 3Z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42C22.27 5.42 21.47 4.65 20.44 4.38C18.6 4 12 4 12 4S5.4 4 3.56 4.38C2.53 4.65 1.73 5.42 1.46 6.42C1.12 8.26 1 10.13 1 12C1 13.87 1.12 15.74 1.46 17.58C1.73 18.58 2.53 19.35 3.56 19.62C5.4 20 12 20 12 20S18.6 20 20.44 19.62C21.47 19.35 22.27 18.58 22.54 17.58C22.88 15.74 23 13.87 23 12C23 10.13 22.88 8.26 22.54 6.42Z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8C18.761 8 21 10.239 21 13V21H17V13C17 12.448 16.552 12 16 12C15.448 12 15 12.448 15 13V21H11V9H15V11C15.928 9.78 17.369 9 19 9"/><rect x="3" y="9" width="4" height="12"/><circle cx="5" cy="5" r="2"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  watering: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12H8L10 7H14L16 12H22"/><path d="M6 12C6 16.418 8.686 20 12 20C15.314 20 18 16.418 18 12"/><path d="M12 4V7"/></svg>`,
};

/* ============================================================
   PRODUCT DATA
   ============================================================ */
const DEFAULT_PRODUCTS = [
  { id: 1, name: 'Heirloom Tomato Seeds', category: 'Seeds', price: 149, oldPrice: 199, rating: 4.8, reviews: 124, badge: 'Bestseller', colors: ['#e04e2f','#c1392b','#e8a07a'], variants: ['5g Pack','10g Pack','25g Pack'], description: 'Premium non-GMO heirloom tomato seeds. Grown for rich flavour and high yield. Suitable for pots, raised beds, and gardens.', care: 'Sow 6mm deep. Keep soil moist. Germination in 7–14 days at 21–27°C. Thin seedlings to 45cm apart.', images: ['https://images.unsplash.com/photo-1592921870789-04563d55041c?w=700','https://images.unsplash.com/photo-1601329090892-2a9fea04a39d?w=700','https://images.unsplash.com/photo-1559181567-c3190e89a66d?w=700'] },
  { id: 2, name: 'Wildflower Meadow Mix', category: 'Seeds', price: 199, oldPrice: 249, rating: 4.6, reviews: 89, badge: 'New', colors: ['#f9c74f','#90be6d','#f3722c'], variants: ['50g','100g','250g'], description: 'A gorgeous blend of 20+ native wildflowers that attract pollinators and create stunning meadow displays all season long.', care: 'Scatter on bare soil in spring or autumn. Minimal watering required once established.', images: ['https://images.unsplash.com/photo-1490750967868-88df5691a559?w=700','https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=700','https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=700'] },
  { id: 3, name: 'Herb Garden Collection', category: 'Seeds', price: 349, oldPrice: null, rating: 4.9, reviews: 210, badge: 'Top Rated', colors: ['#52b788','#2d6a4f','#40916c'], variants: ['Starter Kit','Full Collection'], description: 'Everything you need to grow a lush indoor herb garden. Includes basil, mint, cilantro, and parsley seeds with planting guide.', care: 'Plant in well-draining soil. Water every 2–3 days. Full sun preferred.', images: ['https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700','https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=700','https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=700'] },
  { id: 4, name: 'Lavender Seeds Bundle', category: 'Seeds', price: 179, oldPrice: 219, rating: 4.7, reviews: 67, badge: null, colors: ['#7b2d8b','#c77dff','#e0aaff'], variants: ['20 Seeds','50 Seeds'], description: 'Aromatic French lavender seeds. Perfect for borders, pots, and aromatherapy gardens. Drought-tolerant once established.', care: 'Sow thinly. Cover lightly. Keep at 18°C. Germination 14–21 days.', images: ['https://images.unsplash.com/photo-1500531359996-50e5c7ab5764?w=700','https://images.unsplash.com/photo-1471696035578-3d8c78d99684?w=700','https://images.unsplash.com/photo-1560717845-968823efbee1?w=700'] },
  { id: 5, name: 'Monstera Deliciosa', category: 'Plants', price: 799, oldPrice: 999, rating: 4.9, reviews: 342, badge: 'Bestseller', colors: ['#2d6a4f','#40916c','#52b788'], variants: ['Small (20cm)','Medium (40cm)','Large (70cm)'], description: 'The iconic Swiss Cheese Plant. Dramatic split leaves bring tropical vibes to any space. Extremely easy to care for.', care: 'Bright indirect light. Water weekly. Wipe leaves monthly. Feed in spring and summer.', images: ['https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=700','https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?w=700','https://images.unsplash.com/photo-1545165375-8a7b5c47f25e?w=700'] },
  { id: 6, name: 'Fiddle Leaf Fig', category: 'Plants', price: 1299, oldPrice: 1599, rating: 4.6, reviews: 189, badge: 'Premium', colors: ['#1b4332','#2d6a4f','#40916c'], variants: ['1ft','2ft','3ft'], description: 'The statement plant of modern interiors. Large, violin-shaped leaves create an architectural focal point in any room.', care: 'Bright indirect light. Water when top inch is dry. Avoid cold drafts.', images: ['https://images.unsplash.com/photo-1599598425947-5202edd56fdf?w=700','https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700','https://images.unsplash.com/photo-1466694651834-30e71f258fdb?w=700'] },
  { id: 7, name: 'Peace Lily', category: 'Plants', price: 449, oldPrice: 549, rating: 4.8, reviews: 276, badge: 'Easy Care', colors: ['#fff','#f1f0ea','#e8e8e8'], variants: ['Small','Medium'], description: 'Elegant white blooms and glossy leaves. One of the best air-purifying plants. Thrives in low light.', care: 'Low to medium light. Water when leaves slightly droop. Keep away from pets.', images: ['https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=700','https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=700','https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700'] },
  { id: 8, name: 'ZZ Plant', category: 'Plants', price: 549, oldPrice: null, rating: 4.7, reviews: 143, badge: null, colors: ['#1b4332','#2d6a4f','#95d5b2'], variants: ['Small','Medium','Large'], description: 'Nearly indestructible and strikingly beautiful. Glossy, waxy leaves that thrive on neglect. Perfect for beginners.', care: 'Any light. Water every 2–3 weeks. Drought tolerant. Perfect for busy people.', images: ['https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?w=700','https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=700','https://images.unsplash.com/photo-1561482769-eff73c4f2e6c?w=700'] },
  { id: 9, name: 'Terracotta Artisan Pot', category: 'Planters', price: 599, oldPrice: 749, rating: 4.8, reviews: 98, badge: 'Handmade', colors: ['#c17f52','#a0522d','#e8a87a'], variants: ['4 inch','6 inch','8 inch','10 inch'], description: 'Handcrafted terracotta pots with subtle texture. Breathable clay walls promote healthy root development.', care: 'Soak before first use. Ideal for succulents, cacti, herbs, and tropical plants.', images: ['https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=700','https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=700','https://images.unsplash.com/photo-1503785640985-f62e3aeee448?w=700'] },
  { id: 10, name: 'Minimalist Ceramic Bowl', category: 'Planters', price: 849, oldPrice: null, rating: 4.9, reviews: 72, badge: 'Designer', colors: ['#fff','#e8e8e8','#2d2d2d','#4a9d8f'], variants: ['6 inch','8 inch'], description: 'Clean matte ceramic with drainage hole and bamboo saucer. Elevates any succulent or cactus arrangement.', care: 'Ensure drainage hole is used. Place on the included bamboo tray.', images: ['https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=700','https://images.unsplash.com/photo-1490750967868-88df5691a559?w=700','https://images.unsplash.com/photo-1440714493219-1b8a37500ded?w=700'] },
  { id: 11, name: 'Woven Seagrass Basket', category: 'Planters', price: 699, oldPrice: 849, rating: 4.7, reviews: 115, badge: 'Eco', colors: ['#c8a97e','#8b6914','#d4b896'], variants: ['Medium','Large','XL'], description: 'Hand-woven seagrass plant basket. Natural, sustainable, and beautifully textured. Use as a pot cover.', care: 'Not waterproof — use with plastic liner or nursery pot inside.', images: ['https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?w=700','https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=700','https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=700'] },
  { id: 12, name: 'Copper Watering Can', category: 'Accessories', price: 1199, oldPrice: 1499, rating: 4.9, reviews: 56, badge: 'Premium', colors: ['#b87333','#cd7f32','#da8a67'], variants: ['0.5L','1L','2L'], description: 'Elegant copper-finish watering can with long spout. Perfect for indoor plants. Naturally develops a beautiful patina.', care: 'Rinse after use. Dry before storing to prevent mineral build-up.', images: ['https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700','https://images.unsplash.com/photo-1563299796-17596ed6b017?w=700','https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=700'] },
  { id: 13, name: 'Glass Plant Mister', category: 'Accessories', price: 299, oldPrice: 399, rating: 4.6, reviews: 203, badge: null, colors: ['#4a9d8f','#2d6a4f','#f0ead6'], variants: ['500ml','1L'], description: 'Fine mist sprayer in amber glass with adjustable nozzle. Ergonomic grip and beautiful minimal design.', care: 'Use filtered water for best results. Clean nozzle weekly.', images: ['https://images.unsplash.com/photo-1563299796-17596ed6b017?w=700','https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700','https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=700'] },
  { id: 14, name: 'Bamboo Stakes Set', category: 'Accessories', price: 199, oldPrice: null, rating: 4.5, reviews: 89, badge: 'Eco', colors: ['#c8a97e','#8b6914','#2d2d2d'], variants: ['30cm × 10','50cm × 10','80cm × 5'], description: 'Natural bamboo stakes for climbing plants, monstera, tomatoes, and beans. Chemical-free and biodegradable.', care: 'Push gently into moist soil. Replace annually for best support.', images: ['https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=700','https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700','https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=700'] },
  { id: 15, name: 'Macramé Plant Hanger', category: 'Hangers', price: 499, oldPrice: 649, rating: 4.9, reviews: 187, badge: 'Bestseller', colors: ['#f0ead6','#c8a97e','#2d2d2d'], variants: ['Small (4–6")','Medium (6–8")','Large (8–10")'], description: 'Handcrafted bohemian macramé hanger made from 100% natural cotton cord. Perfect for trailing plants.', care: 'Keep away from direct moisture. Max weight 5kg. Wipe with dry cloth.', images: ['https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=700','https://images.unsplash.com/photo-1545165375-8a7b5c47f25e?w=700','https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=700'] },
  { id: 16, name: 'Brass Ring Planter Hanger', category: 'Hangers', price: 799, oldPrice: 999, rating: 4.7, reviews: 94, badge: 'Trending', colors: ['#b49a6a','#8b7355','#2d2d2d'], variants: ['Single Ring','Double Ring'], description: 'Modern geometric solid brass ring hanger for a luxe interior look. Holds pots up to 15cm diameter with ceiling hook included.', care: 'Wipe with dry cloth. Max weight 3kg. Hang from ceiling hook (included).', images: ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700','https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=700','https://images.unsplash.com/photo-1545165375-8a7b5c47f25e?w=700'] },
];

/* ============================================================
   STATE
   ============================================================ */
let state = {
  currentPage: 'home',
  cart: [],
  products: [],
  filterCategory: 'All',
  filterMaxPrice: 2000,
  sortBy: 'default',
  shopPage: 1,
  perPage: 8,
  searchQuery: '',
  selectedProduct: null,
  selectedQty: 1,
  selectedColor: 0,
  selectedVariant: 0,
  adminEditId: null,
};

/* ============================================================
   STORAGE
   ============================================================ */
function saveCart() { localStorage.setItem('verdant_cart', JSON.stringify(state.cart)); }
function loadCart() { const s = localStorage.getItem('verdant_cart'); state.cart = s ? JSON.parse(s) : []; }
function saveProducts() { localStorage.setItem('verdant_products', JSON.stringify(state.products)); }
function loadProducts() {
  const s = localStorage.getItem('verdant_products');
  state.products = s ? JSON.parse(s) : JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  if (!s) saveProducts();
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  loadProducts();
  updateCartBadge();

  setTimeout(() => document.getElementById('page-loader').classList.add('hidden'), 1800);

  document.getElementById('hamburgerBtn').addEventListener('click', openDrawer);
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
  });
  document.getElementById('navSearch').addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    if (state.searchQuery.length > 1) navigate('shop');
  });

  navigate('home');
});

/* ============================================================
   NAVIGATION
   ============================================================ */
function navigate(page, productId) {
  state.currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const app = document.getElementById('app');
  app.style.opacity = '0';
  app.style.transform = 'translateY(12px)';

  if (page === 'home') renderHome();
  else if (page === 'shop') renderShop();
  else if (page === 'product') renderProductDetail(productId);
  else if (page === 'cart') renderCart();
  else if (page === 'admin') renderAdmin();

  requestAnimationFrame(() => {
    app.style.transition = 'opacity .35s ease, transform .35s ease';
    app.style.opacity = '1';
    app.style.transform = 'translateY(0)';
  });
}

function scrollToSection(id) {
  if (state.currentPage !== 'home') {
    navigate('home');
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 450);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ============================================================
   DRAWER
   ============================================================ */
function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawerOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ============================================================
   HELPERS
   ============================================================ */
function starsHTML(rating) {
  let html = '<span class="stars">';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) html += '★';
    else if (i - rating < 1) html += '½';
    else html += '☆';
  }
  return html + '</span>';
}
function formatPrice(p) { return '₹' + p.toLocaleString('en-IN'); }

function updateCartBadge() {
  const total = state.cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total;
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 400);
}

function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `show ${type}`;
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => { t.className = ''; }, 3200);
}

function addToCart(productId, qty = 1) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;
  const ex = state.cart.find(i => i.id === productId);
  if (ex) ex.qty += qty;
  else state.cart.push({ ...product, qty });
  saveCart();
  updateCartBadge();
  showToast(`"${product.name}" added to cart`);
}
function removeFromCart(id) {
  const p = state.cart.find(i => i.id === id);
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart(); updateCartBadge(); renderCart();
  showToast(`"${p?.name}" removed`, 'error');
}
function updateCartQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(); updateCartBadge(); renderCart();
}

/* Category icon helper */
function getCategoryIcon(cat) {
  const map = { 'Seeds': Icons.seed, 'Plants': Icons.plant, 'Planters': Icons.planter, 'Hangers': Icons.hanger, 'Accessories': Icons.accessory };
  return map[cat] || Icons.leaf;
}

/* ============================================================
   PRODUCT CARD — Premium, SVG icons
   ============================================================ */
function buildProductCard(product) {
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  return `
    <div class="product-card" onclick="navigate('product',${product.id})">
      <div class="product-card-img">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div style="display:none;width:100%;height:100%;align-items:center;justify-content:center;color:var(--mist)">${getCategoryIcon(product.category)}</div>
        ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
        ${discount ? `<span class="product-card-badge sale" style="top:${product.badge ? '2.8rem' : '.85rem'}">−${discount}%</span>` : ''}
        <div class="product-card-actions">
          <button class="product-card-action-btn" onclick="event.stopPropagation();addToCart(${product.id})" title="Add to cart">${Icons.cart}</button>
          <button class="product-card-action-btn" onclick="event.stopPropagation();navigate('product',${product.id})" title="View details">${Icons.eye}</button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-card-cat">${product.category}</div>
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-rating">
          ${starsHTML(product.rating)}
          <span>${product.rating} (${product.reviews})</span>
        </div>
        <div class="product-card-footer">
          <div>
            <span class="product-price">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>` : ''}
          </div>
          <button class="add-cart-btn" onclick="event.stopPropagation();addToCart(${product.id})">${Icons.plus}</button>
        </div>
      </div>
    </div>`;
}

/* ============================================================
   HOME PAGE
   ============================================================ */
function renderHome() {
  const app = document.getElementById('app');
  const featured = state.products.slice(0, 8);
  const trending = state.products.filter(p => p.badge).slice(0, 5);
  const categoryData = [
    { name: 'Seeds', count: state.products.filter(p => p.category === 'Seeds').length },
    { name: 'Plants', count: state.products.filter(p => p.category === 'Plants').length },
    { name: 'Planters', count: state.products.filter(p => p.category === 'Planters').length },
    { name: 'Accessories', count: state.products.filter(p => p.category === 'Accessories').length },
    { name: 'Hangers', count: state.products.filter(p => p.category === 'Hangers').length },
  ];

  app.innerHTML = `
    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="hero-grid"></div>
      <div class="hero-decor">
        <img class="hero-decor-img" src="https://images.unsplash.com/photo-1545165375-8a7b5c47f25e?w=900" alt="" aria-hidden="true"
          onerror="this.style.display='none'"/>
      </div>
      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-eyebrow">Premium Plant Nursery — Est. 2020</div>
          <h1 class="hero-title">
            Bring <em>Nature</em><br/>
            <strong>Into Your World</strong>
          </h1>
          <p class="hero-desc">Discover curated plants, seeds, and planters that transform your space into a living, breathing sanctuary.</p>
          <div class="hero-cta">
            <button class="btn btn-dark" onclick="navigate('shop')">
              Shop Collection ${Icons.arrowRight}
            </button>
            <button class="btn btn-outline" onclick="scrollToSection('categories')">
              Explore Categories
            </button>
          </div>
          <div class="hero-stats">
            <div>
              <div class="hero-stat-val">2,400+</div>
              <div class="hero-stat-label">Happy Customers</div>
            </div>
            <div>
              <div class="hero-stat-val">150+</div>
              <div class="hero-stat-label">Plant Varieties</div>
            </div>
            <div>
              <div class="hero-stat-val">4.9</div>
              <div class="hero-stat-label">Avg. Rating</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-img-wrap">
            <img class="hero-main-img" src="https://images.unsplash.com/photo-1545165375-8a7b5c47f25e?w=700" alt="Verdant plant collection"
              onerror="this.src='https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=700'"/>
            <div class="hero-card">
              <div class="hero-card-inner">
                <div class="hero-card-icon">${Icons.truck}</div>
                <div>
                  <div class="hero-card-title">Free Delivery</div>
                  <div class="hero-card-sub">Orders above ₹999</div>
                </div>
              </div>
            </div>
            <div class="hero-card">
              <div class="hero-card-inner">
                <div class="hero-card-icon">${Icons.leaf}</div>
                <div>
                  <div class="hero-card-title">100% Organic</div>
                  <div class="hero-card-sub">Naturally grown</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== MARQUEE ===== -->
    <div class="marquee-band" aria-hidden="true">
      <div class="marquee-track" id="marqueeTrack">
        ${['Free Delivery on orders above ₹999','Premium Organic Seeds','Expert Plant Care Support','2400+ Happy Plant Parents','Handcrafted Planters & Accessories','Sustainable & Eco-Friendly',
           'Free Delivery on orders above ₹999','Premium Organic Seeds','Expert Plant Care Support','2400+ Happy Plant Parents','Handcrafted Planters & Accessories','Sustainable & Eco-Friendly']
          .map(t => `<span>${t}</span>`).join('')}
      </div>
    </div>

    <!-- ===== CATEGORIES ===== -->
    <section class="categories-section" id="categories">
      <div class="section-inner">
        <div class="label-chip">Browse by Type</div>
        <h2 class="section-heading">Shop by Category</h2>
        <p class="section-sub">From rare seeds to artisan planters — find exactly what your green space needs.</p>
        <div class="categories-grid">
          ${categoryData.map(cat => `
            <div class="category-card" onclick="filterByCategory('${cat.name}')">
              <div class="cat-icon-wrap">${getCategoryIcon(cat.name)}</div>
              <div class="category-name">${cat.name}</div>
              <div class="category-count">${cat.count} products</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ===== FEATURED ===== -->
    <section class="featured-section" id="featured">
      <div class="section-inner">
        <div class="label-chip">Handpicked For You</div>
        <h2 class="section-heading">Featured Products</h2>
        <p class="section-sub">Our team's favourite picks — popular, premium, and perfectly curated.</p>
        <div class="products-grid">
          ${featured.map(buildProductCard).join('')}
        </div>
        <div class="text-center mt-2">
          <button class="btn btn-outline" onclick="navigate('shop')">
            View All Products ${Icons.arrowRight}
          </button>
        </div>
      </div>
    </section>

    <!-- ===== TRENDING ===== -->
    <section class="trending-section">
      <div class="section-inner">
        <div class="label-chip">Right Now</div>
        <h2 class="section-heading">Trending & Best Sellers</h2>
        <p class="section-sub">What plant lovers are collecting this season.</p>
        <div class="trending-grid">
          <div class="trending-hero-card" onclick="navigate('product',${trending[0]?.id})">
            <img src="${trending[0]?.images[0]}" alt="${trending[0]?.name}"
              onerror="this.style.display='none'"/>
            <div class="trending-overlay">
              <span class="trending-chip">Best Seller</span>
              <h3>${trending[0]?.name}</h3>
              <p>${trending[0]?.description?.slice(0, 90)}…</p>
              <button class="btn btn-dark btn-sm" onclick="event.stopPropagation();navigate('product',${trending[0]?.id})">
                Shop Now ${Icons.arrowRight}
              </button>
            </div>
          </div>
          ${trending.slice(1, 5).map(p => buildProductCard(p)).join('')}
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    <section class="testimonials-section">
      <div class="section-inner">
        <div class="label-chip">Testimonials</div>
        <h2 class="section-heading">What Our Plant Parents Say</h2>
        <p class="section-sub">Real stories from real plant lovers across India.</p>
        <div class="testimonials-grid">
          ${[
            { name:'Priya Sharma', role:'Home Gardener, Mumbai', text:'The Monstera I ordered arrived beautifully packed and so healthy! Three months on and it\'s absolutely thriving. Verdant is my go-to for all things green.', rating:5 },
            { name:'Aryan Mehta', role:'Plant Enthusiast, Delhi', text:'Ordered the wildflower seed mix and my balcony looks like a meadow now. The quality is unmatched and delivery was super fast. Highly recommend!', rating:5 },
            { name:'Sanya Kapoor', role:'Interior Stylist, Bangalore', text:'The macramé hangers are absolutely gorgeous. I recommend Verdant to all my clients now. Premium quality at very fair prices.', rating:5 },
            { name:'Rohit Verma', role:'Weekend Farmer, Pune', text:'Heirloom tomato seeds gave me the most incredible harvest. Germination rate was nearly 100%. Will definitely be ordering again this season!', rating:4 },
            { name:'Meera Nair', role:'Apartment Dweller, Chennai', text:'The herb garden kit transformed my kitchen windowsill. Fresh basil every day! Customer support was excellent when I had questions.', rating:5 },
            { name:'Vikram Singh', role:'Landscape Designer, Hyderabad', text:'Professional grade quality at consumer prices. I now use Verdant exclusively for my projects. The artisan terracotta pots are exceptional.', rating:5 },
          ].map(t => `
            <div class="testimonial-card">
              <div class="testimonial-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
              <p class="testimonial-text">"${t.text}"</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar">${Icons.user}</div>
                <div>
                  <div class="testimonial-name">${t.name}</div>
                  <div class="testimonial-role">${t.role}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ===== WHY US ===== -->
    <section class="whyus-section">
      <div class="section-inner">
        <div class="label-chip">Our Promise</div>
        <h2 class="section-heading">Why Choose Verdant?</h2>
        <p class="section-sub">We're not just a plant store. We're a movement to bring green into every home.</p>
        <div class="whyus-grid">
          ${[
            { icon: Icons.leaf, title:'100% Organic', text:'Every seed and plant is grown without harmful pesticides or synthetic chemicals.' },
            { icon: Icons.truck, title:'Fast & Safe Delivery', text:'Expert packaging ensures your plants arrive alive, healthy, and happy.' },
            { icon: Icons.shield, title:'Plant Guarantee', text:'7-day arrival guarantee. Not happy? We\'ll replace or refund — no questions asked.' },
            { icon: Icons.support, title:'Expert Support', text:'Our plant care team is available 7 days a week to help your plants thrive.' },
          ].map(w => `
            <div class="whyus-card">
              <div class="whyus-icon">${w.icon}</div>
              <h4>${w.title}</h4>
              <p>${w.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ===== NEWSLETTER ===== -->
    <section class="newsletter-section">
      <div class="newsletter-inner">
        <div class="label-chip">Stay Connected</div>
        <h2 class="section-heading">Join the Community</h2>
        <p>Get seasonal planting tips, new arrivals, and exclusive discounts — straight to your inbox.</p>
        <div class="newsletter-form">
          <input type="email" id="newsletterEmail" placeholder="your@email.com"/>
          <button class="btn btn-dark" onclick="subscribeNewsletter()">Subscribe ${Icons.arrowRight}</button>
        </div>
      </div>
    </section>

    <!-- ===== ABOUT ===== -->
    <section id="about">
      <div class="about-inner">
        <div class="about-img-wrap">
          <div class="about-img">
            <img src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800" alt="About Verdant"
              onerror="this.src='https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700'"/>
          </div>
          <div class="about-img-accent"></div>
        </div>
        <div class="about-text">
          <div class="label-chip">Our Story</div>
          <h2 class="section-heading">Growing With You Since 2020</h2>
          <p>Verdant started as a small passion project in a Bangalore apartment — a few terracotta pots, some heirloom seeds, and a dream to make plant parenthood accessible for everyone.</p>
          <p>Today, we serve over 2,400 plant lovers across India, curating the finest organic seeds, healthy plants, and beautiful accessories that make your green journey joyful.</p>
          <p>Every product is hand-selected, sustainably sourced, and packed with care. Because we believe every home deserves a little wild in it.</p>
          <button class="btn btn-dark" onclick="navigate('shop')" style="margin-top:1rem">
            Explore the Collection ${Icons.arrowRight}
          </button>
        </div>
      </div>
    </section>

    <!-- ===== CONTACT ===== -->
    <section id="contact">
      <div class="contact-inner">
        <div class="contact-info">
          <div class="label-chip">Get In Touch</div>
          <h3>We'd Love To Hear From You</h3>
          <p>Have questions about a plant? Need care advice? Or just want to talk about your garden? We're here.</p>
          <div class="contact-detail"><div class="contact-detail-icon">${Icons.map}</div>42 Green Lane, Indiranagar, Bangalore 560038</div>
          <div class="contact-detail"><div class="contact-detail-icon">${Icons.phone}</div>+91 98765 43210</div>
          <div class="contact-detail"><div class="contact-detail-icon">${Icons.mail}</div>hello@verdantnursery.in</div>
          <div class="contact-detail"><div class="contact-detail-icon">${Icons.clock}</div>Mon–Sat: 9am – 7pm</div>
        </div>
        <div class="contact-form-wrap">
          <div class="form-title">Send Us a Message</div>
          <div class="form-row">
            <div class="form-group"><label>First Name</label><input type="text" placeholder="Priya"/></div>
            <div class="form-group"><label>Last Name</label><input type="text" placeholder="Sharma"/></div>
          </div>
          <div class="form-group"><label>Email</label><input type="email" placeholder="priya@email.com"/></div>
          <div class="form-group"><label>Subject</label><input type="text" placeholder="Plant care question…"/></div>
          <div class="form-group"><label>Message</label><textarea rows="4" placeholder="Tell us about your plant journey…"></textarea></div>
          <button class="btn btn-dark w-full" onclick="showToast('Message sent! We\'ll reply within 24 hours.')" style="margin-top:.5rem;justify-content:center">
            Send Message ${Icons.arrowRight}
          </button>
        </div>
      </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer>
      <div class="footer-inner">
        <div class="footer-brand">
          <a href="#" class="logo" onclick="navigate('home')">
            <svg class="logo-mark" width="20" height="24" viewBox="0 0 20 24" fill="none">
              <path d="M10 2C10 2 1 8.5 1 16C1 20.97 5.03 25 10 25C14.97 25 19 20.97 19 16C19 8.5 10 2 10 2Z" fill="currentColor" opacity="0.12"/>
              <path d="M10 2C10 2 1 8.5 1 16C1 20.97 5.03 25 10 25C14.97 25 19 20.97 19 16C19 8.5 10 2 10 2Z" stroke="currentColor" stroke-width="1.3"/>
              <line x1="10" y1="25" x2="10" y2="12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
            <span class="logo-text">VERDANT</span>
          </a>
          <p>Premium organic plants, seeds, and accessories. Bringing nature closer to you, one plant at a time.</p>
          <div class="footer-social">
            <a href="#" class="social-btn" title="Instagram">${Icons.instagram}</a>
            <a href="#" class="social-btn" title="Twitter">${Icons.twitter}</a>
            <a href="#" class="social-btn" title="YouTube">${Icons.youtube}</a>
            <a href="#" class="social-btn" title="LinkedIn">${Icons.linkedin}</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Shop</h5>
          ${['Seeds','Plants','Planters','Accessories','Hangers','New Arrivals'].map(l => `<a href="#" onclick="filterByCategory('${l}');return false">${l}</a>`).join('')}
        </div>
        <div class="footer-col">
          <h5>Help</h5>
          ${['FAQs','Shipping & Returns','Plant Care Guide','Track Order','Contact Us'].map(l => `<a href="#" onclick="showToast('Coming soon!')">${l}</a>`).join('')}
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          ${['About Us','Blog','Sustainability','Wholesale','Careers'].map(l => `<a href="#" onclick="showToast('Coming soon!')">${l}</a>`).join('')}
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2024 Verdant Plant Nursery. All rights reserved.</p>
        <p>Privacy Policy · Terms of Service</p>
      </div>
    </footer>
  `;
}

function filterByCategory(cat) {
  state.filterCategory = cat;
  state.shopPage = 1;
  navigate('shop');
}
function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail')?.value;
  if (!email || !email.includes('@')) { showToast('Please enter a valid email.', 'error'); return; }
  showToast('Welcome to the Verdant community!');
}

/* ============================================================
   SHOP PAGE
   ============================================================ */
function renderShop() {
  document.getElementById('app').innerHTML = `
    <div class="shop-page">
      <div class="shop-inner">
        <div class="shop-header">
          <div>
            <div class="label-chip">Our Collection</div>
            <h1 class="shop-title">All Products</h1>
          </div>
          <div class="shop-sort">
            <label>Sort by</label>
            <select id="sortSelect" onchange="handleSort(this.value)">
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>
        <div class="shop-layout">
          <aside class="shop-sidebar">
            <div class="filter-section">
              <div class="filter-title">Categories</div>
              ${['All','Seeds','Plants','Planters','Accessories','Hangers'].map(cat => `
                <div class="filter-option">
                  <input type="checkbox" id="cat_${cat}" ${state.filterCategory === cat ? 'checked' : ''} onchange="handleCategoryFilter('${cat}')">
                  <label for="cat_${cat}">${cat} (${cat === 'All' ? state.products.length : state.products.filter(p => p.category === cat).length})</label>
                </div>
              `).join('')}
            </div>
            <div class="filter-section">
              <div class="filter-title">Price Range</div>
              <div class="price-range">
                <input type="range" min="0" max="2000" value="${state.filterMaxPrice}" step="50" id="priceRange" oninput="handlePriceFilter(this.value)">
                <div class="price-display"><span>₹0</span><span id="priceLabel">Up to ${formatPrice(state.filterMaxPrice)}</span></div>
              </div>
            </div>
            <div class="filter-section">
              <div class="filter-title">Rating</div>
              ${[5,4,3].map(r => `
                <div class="filter-option">
                  <input type="checkbox" id="rating_${r}">
                  <label for="rating_${r}">${'★'.repeat(r)} & above</label>
                </div>
              `).join('')}
            </div>
            <button class="btn btn-outline w-full btn-sm" style="margin-top:1rem;justify-content:center" onclick="resetFilters()">
              Clear Filters
            </button>
          </aside>
          <div>
            <div class="shop-results" id="shopResults"></div>
            <div class="products-grid" id="shopGrid"></div>
            <div class="pagination" id="shopPagination"></div>
          </div>
        </div>
      </div>
    </div>`;

  if (document.getElementById('sortSelect')) document.getElementById('sortSelect').value = state.sortBy;
  renderShopProducts();
}

function getFilteredProducts() {
  let products = [...state.products];
  if (state.searchQuery) products = products.filter(p => p.name.toLowerCase().includes(state.searchQuery) || p.category.toLowerCase().includes(state.searchQuery) || p.description.toLowerCase().includes(state.searchQuery));
  if (state.filterCategory !== 'All') products = products.filter(p => p.category === state.filterCategory);
  products = products.filter(p => p.price <= state.filterMaxPrice);
  if (state.sortBy === 'price-asc') products.sort((a,b) => a.price - b.price);
  else if (state.sortBy === 'price-desc') products.sort((a,b) => b.price - a.price);
  else if (state.sortBy === 'rating') products.sort((a,b) => b.rating - a.rating);
  else if (state.sortBy === 'name') products.sort((a,b) => a.name.localeCompare(b.name));
  return products;
}

function renderShopProducts() {
  const grid = document.getElementById('shopGrid');
  const resultsEl = document.getElementById('shopResults');
  const paginationEl = document.getElementById('shopPagination');
  if (!grid) return;
  const filtered = getFilteredProducts();
  const total = filtered.length;
  const totalPages = Math.ceil(total / state.perPage);
  const start = (state.shopPage - 1) * state.perPage;
  const paginated = filtered.slice(start, start + state.perPage);

  resultsEl.innerHTML = `Showing <strong>${Math.min(start+1,total)}–${Math.min(start+state.perPage,total)}</strong> of <strong>${total}</strong> products${state.filterCategory !== 'All' ? ` in <strong>${state.filterCategory}</strong>` : ''}`;

  if (paginated.length === 0) {
    grid.innerHTML = `<div class="no-products"><span>${Icons.leaf}</span>No products found. Try adjusting your filters.</div>`;
    paginationEl.innerHTML = '';
    return;
  }
  grid.innerHTML = paginated.map(buildProductCard).join('');

  if (totalPages > 1) {
    let html = '';
    if (state.shopPage > 1) html += `<button class="page-btn prev" onclick="goToPage(${state.shopPage-1})">${Icons.chevronLeft} Prev</button>`;
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - state.shopPage) <= 1) html += `<button class="page-btn ${i===state.shopPage?'active':''}" onclick="goToPage(${i})">${i}</button>`;
      else if (Math.abs(i - state.shopPage) === 2) html += `<span style="padding:0 .2rem;color:var(--text-ghost);font-size:.8rem">…</span>`;
    }
    if (state.shopPage < totalPages) html += `<button class="page-btn next" onclick="goToPage(${state.shopPage+1})">Next ${Icons.chevronRight}</button>`;
    paginationEl.innerHTML = html;
  } else { paginationEl.innerHTML = ''; }
}

function goToPage(page) { state.shopPage = page; renderShopProducts(); document.querySelector('.shop-inner')?.scrollIntoView({behavior:'smooth'}); }
function handleCategoryFilter(cat) {
  state.filterCategory = cat; state.shopPage = 1;
  ['All','Seeds','Plants','Planters','Accessories','Hangers'].forEach(c => { const el = document.getElementById(`cat_${c}`); if(el) el.checked = (c===cat); });
  renderShopProducts();
}
function handlePriceFilter(val) { state.filterMaxPrice = parseInt(val); const l = document.getElementById('priceLabel'); if(l) l.textContent = `Up to ${formatPrice(state.filterMaxPrice)}`; state.shopPage=1; renderShopProducts(); }
function handleSort(val) { state.sortBy = val; state.shopPage = 1; renderShopProducts(); }
function resetFilters() { state.filterCategory='All'; state.filterMaxPrice=2000; state.sortBy='default'; state.shopPage=1; state.searchQuery=''; document.getElementById('navSearch').value=''; renderShop(); }

/* ============================================================
   PRODUCT DETAIL PAGE
   ============================================================ */
function renderProductDetail(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) { navigate('shop'); return; }
  state.selectedProduct = product; state.selectedQty = 1; state.selectedColor = 0; state.selectedVariant = 0;
  const related = state.products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  document.getElementById('app').innerHTML = `
    <div class="product-detail-page">
      <div class="detail-inner">
        <div class="detail-breadcrumb">
          <a href="#" onclick="navigate('home')">Home</a>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18L15 12L9 6"/></svg>
          <a href="#" onclick="navigate('shop')">Shop</a>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18L15 12L9 6"/></svg>
          <a href="#" onclick="filterByCategory('${product.category}')">${product.category}</a>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18L15 12L9 6"/></svg>
          <span>${product.name}</span>
        </div>
        <div class="detail-grid">
          <div class="detail-gallery">
            <div class="gallery-main">
              <img id="mainGalleryImg" src="${product.images[0]}" alt="${product.name}" onerror="this.style.display='none'"/>
            </div>
            <div class="gallery-thumbs">
              ${product.images.map((img,i) => `
                <div class="gallery-thumb ${i===0?'active':''}" onclick="switchGallery(${i},'${img}')">
                  <img src="${img}" alt="" onerror="this.style.display='none'"/>
                </div>`).join('')}
            </div>
          </div>
          <div class="detail-info">
            <div class="detail-cat">${getCategoryIcon(product.category)} ${product.category}</div>
            <h1 class="detail-title">${product.name}</h1>
            <div class="detail-rating">
              ${starsHTML(product.rating)}
              <strong>${product.rating}</strong>
              <span class="detail-reviews">(${product.reviews} reviews)</span>
            </div>
            <div class="detail-price-row">
              <span class="detail-price">${formatPrice(product.price)}</span>
              ${product.oldPrice ? `<span class="detail-price-old">${formatPrice(product.oldPrice)}</span>` : ''}
              ${discount ? `<span class="detail-discount">−${discount}%</span>` : ''}
            </div>
            <div class="detail-option-label">Colour</div>
            <div class="color-options">
              ${product.colors.map((c,i) => `<div class="color-swatch ${i===0?'active':''}" style="background:${c}" onclick="selectColor(${i},this)"></div>`).join('')}
            </div>
            <div class="detail-option-label">Size / Variant</div>
            <div class="variant-options">
              ${product.variants.map((v,i) => `<button class="variant-btn ${i===0?'active':''}" onclick="selectVariant(${i},this)">${v}</button>`).join('')}
            </div>
            <div class="detail-option-label">Quantity</div>
            <div class="qty-selector">
              <button class="qty-btn" onclick="changeQty(-1)">${Icons.minus}</button>
              <div class="qty-display" id="qtyDisplay">1</div>
              <button class="qty-btn" onclick="changeQty(1)">${Icons.plus}</button>
            </div>
            <div class="detail-actions">
              <button class="btn btn-dark" onclick="addToCart(${product.id},state.selectedQty)">${Icons.cart} Add to Cart</button>
              <button class="btn btn-terra" onclick="buyNow(${product.id})">${Icons.bolt} Buy Now</button>
            </div>
            <div class="detail-features">
              <div class="detail-feature">${Icons.truck} Free delivery on orders above ₹999</div>
              <div class="detail-feature">${Icons.shield} 7-day arrival guarantee</div>
              <div class="detail-feature">${Icons.leaf} 100% organic & sustainably sourced</div>
              <div class="detail-feature">${Icons.undo} Easy returns within 7 days</div>
            </div>
            <div class="detail-tabs">
              <div class="tabs-header">
                <button class="tab-btn active" onclick="switchTab('description',this)">Description</button>
                <button class="tab-btn" onclick="switchTab('care',this)">Care Guide</button>
                <button class="tab-btn" onclick="switchTab('shipping',this)">Shipping</button>
              </div>
              <div class="tab-content active" id="tab-description"><p>${product.description}</p></div>
              <div class="tab-content" id="tab-care"><p><strong>Care Instructions</strong></p><p>${product.care}</p></div>
              <div class="tab-content" id="tab-shipping"><p>Standard delivery: 3–5 business days. Express delivery available at checkout. Free shipping on orders above ₹999.</p><p>Plants are carefully packaged with eco-friendly materials to ensure they arrive healthy and happy.</p></div>
            </div>
          </div>
        </div>
        ${related.length ? `<div class="recommended-section"><h2 class="section-heading">You Might Also Like</h2><div class="products-grid">${related.map(buildProductCard).join('')}</div></div>` : ''}
      </div>
    </div>`;
}

function switchGallery(index, src) {
  document.getElementById('mainGalleryImg').src = src;
  document.querySelectorAll('.gallery-thumb').forEach((t,i) => t.classList.toggle('active', i===index));
}
function selectColor(index, el) { state.selectedColor = index; document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active')); el.classList.add('active'); }
function selectVariant(index, el) { state.selectedVariant = index; document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active')); el.classList.add('active'); }
function changeQty(d) { state.selectedQty = Math.max(1, state.selectedQty + d); document.getElementById('qtyDisplay').textContent = state.selectedQty; }
function switchTab(id, btn) { document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active')); document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active')); document.getElementById(`tab-${id}`).classList.add('active'); btn.classList.add('active'); }
function buyNow(id) { addToCart(id, state.selectedQty); navigate('cart'); }

/* ============================================================
   CART PAGE
   ============================================================ */
function renderCart() {
  const subtotal = state.cart.reduce((s,i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 999 ? 0 : 99;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + gst;

  document.getElementById('app').innerHTML = `
    <div class="cart-page">
      <div class="cart-inner">
        <h1 class="cart-title">My Cart <span style="font-size:1.2rem;font-weight:300;color:var(--text-ghost)">(${state.cart.reduce((s,i)=>s+i.qty,0)} items)</span></h1>
        ${state.cart.length === 0 ? `
          <div class="cart-empty">
            <div class="cart-empty-icon">${Icons.cart}</div>
            <h3>Your cart is empty</h3>
            <p>Looks like you haven't added any plants yet.</p>
            <button class="btn btn-dark" onclick="navigate('shop')">${Icons.arrowRight} Start Shopping</button>
          </div>` : `
          <div class="cart-layout">
            <div>
              <div class="cart-items">
                ${state.cart.map(item => `
                  <div class="cart-item">
                    <div class="cart-item-img">
                      <img src="${item.images[0]}" alt="${item.name}" onerror="this.style.display='none'"/>
                    </div>
                    <div class="cart-item-info">
                      <div class="cart-item-name">${item.name}</div>
                      <div class="cart-item-cat">${item.category}</div>
                      <div class="cart-item-price">${formatPrice(item.price)}</div>
                    </div>
                    <div class="cart-item-controls">
                      <div class="cart-qty">
                        <button onclick="updateCartQty(${item.id},-1)">${Icons.minus}</button>
                        <span>${item.qty}</span>
                        <button onclick="updateCartQty(${item.id},1)">${Icons.plus}</button>
                      </div>
                      <span style="font-weight:600;color:var(--forest);font-size:.9rem">${formatPrice(item.price * item.qty)}</span>
                      <button class="cart-remove" onclick="removeFromCart(${item.id})">${Icons.trash}</button>
                    </div>
                  </div>`).join('')}
              </div>
              <div style="margin-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem">
                <button class="btn btn-outline btn-sm" onclick="navigate('shop')">${Icons.chevronLeft} Continue Shopping</button>
                <button class="btn btn-sm" style="background:#fef2f2;color:#ef4444;border:1px solid #fecaca;border-radius:var(--r-sm)" onclick="clearCart()">${Icons.trash} Clear Cart</button>
              </div>
            </div>
            <div class="cart-summary">
              <h3>Order Summary</h3>
              <div class="summary-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
              <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:var(--fern);font-weight:500">Free</span>' : formatPrice(shipping)}</span></div>
              <div class="summary-row"><span>GST (5%)</span><span>${formatPrice(gst)}</span></div>
              <div class="summary-row total"><span>Total</span><span>${formatPrice(total)}</span></div>
              ${shipping > 0 ? `<p style="font-size:.73rem;color:var(--terra);margin-top:.4rem">Add ₹${999-subtotal} more for free shipping</p>` : `<p style="font-size:.73rem;color:var(--fern);margin-top:.4rem">Free shipping unlocked!</p>`}
              <div class="coupon-input">
                <input type="text" placeholder="Coupon code…" id="couponInput"/>
                <button class="btn btn-outline btn-sm" onclick="applyCoupon()">Apply</button>
              </div>
              <button class="btn btn-dark checkout-btn" onclick="showToast('Redirecting to secure checkout…')">
                ${Icons.lock} Secure Checkout
              </button>
              <p style="text-align:center;font-size:.72rem;color:var(--text-ghost);margin-top:.85rem">256-bit SSL encrypted checkout</p>
            </div>
          </div>`}
      </div>
    </div>`;
}

function clearCart() { if(confirm('Clear your cart?')) { state.cart=[]; saveCart(); updateCartBadge(); renderCart(); } }
function applyCoupon() {
  const code = document.getElementById('couponInput')?.value?.toUpperCase();
  if (code === 'VERDANT10') showToast('Coupon applied! 10% off');
  else if (code === 'GREEN20') showToast('Coupon applied! 20% off');
  else showToast('Invalid coupon code.', 'error');
}

/* ============================================================
   ADMIN PAGE
   ============================================================ */
function renderAdmin() {
  document.getElementById('app').innerHTML = `
    <div class="admin-page">
      <div class="admin-inner">
        <div class="admin-header">
          <div>
            <div class="label-chip">Dashboard</div>
            <h1 class="admin-title">Admin Panel</h1>
          </div>
          <button class="btn btn-outline btn-sm" onclick="navigate('home')">${Icons.chevronLeft} Back to Store</button>
        </div>
        <div class="admin-stats">
          <div class="admin-stat"><div class="admin-stat-val">${state.products.length}</div><div class="admin-stat-label">Total Products</div></div>
          <div class="admin-stat"><div class="admin-stat-val">${state.cart.reduce((s,i)=>s+i.qty,0)}</div><div class="admin-stat-label">Cart Items</div></div>
          <div class="admin-stat"><div class="admin-stat-val">${formatPrice(state.cart.reduce((s,i)=>s+i.price*i.qty,0))}</div><div class="admin-stat-label">Cart Value</div></div>
        </div>
        <div class="admin-grid">
          <div class="admin-form-card">
            <div class="admin-card-title" id="adminFormTitle">${Icons.plus} <span>Add New Product</span></div>
            <div class="form-group"><label>Product Name *</label><input type="text" id="aName" placeholder="e.g. Money Plant"/></div>
            <div class="form-row">
              <div class="form-group"><label>Price (₹) *</label><input type="number" id="aPrice" placeholder="499"/></div>
              <div class="form-group"><label>Old Price (₹)</label><input type="number" id="aOldPrice" placeholder="699"/></div>
            </div>
            <div class="form-group"><label>Category *</label>
              <select id="aCategory">
                ${['Seeds','Plants','Planters','Accessories','Hangers'].map(c => `<option value="${c}">${c}</option>`).join('')}
              </select>
            </div>
            <div class="form-row">
              <div class="form-group"><label>Badge</label><input type="text" id="aBadge" placeholder="New, Bestseller…"/></div>
              <div class="form-group"><label>Rating</label><input type="number" id="aRating" min="1" max="5" step="0.1" placeholder="4.7"/></div>
            </div>
            <div class="form-group"><label>Description *</label><textarea id="aDesc" rows="3" placeholder="Product description…"></textarea></div>
            <div class="form-group"><label>Care Instructions</label><textarea id="aCare" rows="2" placeholder="Care tips…"></textarea></div>
            <div class="form-group"><label>Variants (comma separated)</label><input type="text" id="aVariants" placeholder="Small, Medium, Large"/></div>
            <div style="display:flex;gap:.75rem;margin-top:1.25rem">
              <button class="btn btn-dark w-full" onclick="submitAdminForm()" style="justify-content:center">
                ${Icons.check} <span id="adminSubmitLabel">Add Product</span>
              </button>
              <button class="btn btn-outline btn-sm" onclick="cancelAdminEdit()" id="adminCancelBtn" style="display:none">Cancel</button>
            </div>
          </div>
          <div class="admin-products-card">
            <div class="admin-card-title">
              ${Icons.box}
              <span>All Products</span>
              <span style="font-size:.75rem;font-weight:400;color:var(--text-ghost);margin-left:auto">${state.products.length} items</span>
            </div>
            <div class="admin-products-list" id="adminProductsList">${renderAdminList()}</div>
          </div>
        </div>
      </div>
    </div>`;
}

function renderAdminList() {
  return state.products.map(p => `
    <div class="admin-product-item">
      <div class="admin-product-img">
        <img src="${p.images[0]}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div style="display:none;width:100%;height:100%;align-items:center;justify-content:center;color:var(--mist)">${getCategoryIcon(p.category)}</div>
      </div>
      <div class="admin-product-info">
        <div class="admin-product-name">${p.name}</div>
        <div class="admin-product-meta">${p.category} · ★ ${p.rating}</div>
      </div>
      <div class="admin-product-price">${formatPrice(p.price)}</div>
      <div class="admin-product-actions">
        <button class="admin-edit-btn" onclick="editProduct(${p.id})" title="Edit">${Icons.edit}</button>
        <button class="admin-delete-btn" onclick="deleteProduct(${p.id})" title="Delete">${Icons.trash}</button>
      </div>
    </div>`).join('');
}

function submitAdminForm() {
  const name = document.getElementById('aName').value.trim();
  const price = parseFloat(document.getElementById('aPrice').value);
  const oldPrice = parseFloat(document.getElementById('aOldPrice').value) || null;
  const category = document.getElementById('aCategory').value;
  const badge = document.getElementById('aBadge').value.trim() || null;
  const description = document.getElementById('aDesc').value.trim();
  const care = document.getElementById('aCare').value.trim() || 'Water regularly and keep in bright indirect light.';
  const rating = parseFloat(document.getElementById('aRating').value) || 4.5;
  const variantsRaw = document.getElementById('aVariants').value.trim();
  const variants = variantsRaw ? variantsRaw.split(',').map(v => v.trim()) : ['Standard'];

  if (!name || !price || !description) { showToast('Please fill required fields.', 'error'); return; }
  const defaultImages = ['https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700','https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=700','https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=700'];

  if (state.adminEditId) {
    const idx = state.products.findIndex(p => p.id === state.adminEditId);
    if (idx !== -1) { state.products[idx] = { ...state.products[idx], name, price, oldPrice, category, badge, description, care, rating, variants }; showToast(`"${name}" updated`); }
    state.adminEditId = null;
  } else {
    state.products.unshift({ id: Date.now(), name, price, oldPrice, category, badge, description, care, rating, reviews: 0, variants, colors: ['#52b788','#2d6a4f','#40916c'], images: defaultImages });
    showToast(`"${name}" added to collection`);
  }
  saveProducts(); renderAdmin();
}

function editProduct(id) {
  const p = state.products.find(pr => pr.id === id);
  if (!p) return;
  state.adminEditId = id;
  document.getElementById('adminFormTitle').innerHTML = `${Icons.edit} <span>Edit Product</span>`;
  document.getElementById('adminSubmitLabel').textContent = 'Update Product';
  document.getElementById('adminCancelBtn').style.display = 'flex';
  document.getElementById('aName').value = p.name;
  document.getElementById('aPrice').value = p.price;
  document.getElementById('aOldPrice').value = p.oldPrice || '';
  document.getElementById('aCategory').value = p.category;
  document.getElementById('aBadge').value = p.badge || '';
  document.getElementById('aDesc').value = p.description;
  document.getElementById('aCare').value = p.care;
  document.getElementById('aRating').value = p.rating;
  document.getElementById('aVariants').value = p.variants.join(', ');
  document.querySelector('.admin-form-card')?.scrollIntoView({ behavior: 'smooth' });
}

function cancelAdminEdit() { state.adminEditId = null; renderAdmin(); }

function deleteProduct(id) {
  const p = state.products.find(pr => pr.id === id);
  if (!p || !confirm(`Delete "${p.name}"?`)) return;
  state.products = state.products.filter(pr => pr.id !== id);
  saveProducts(); showToast(`"${p.name}" deleted`, 'error');
  const listEl = document.getElementById('adminProductsList');
  if (listEl) listEl.innerHTML = renderAdminList();
}
