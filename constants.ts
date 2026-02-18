import { Category, Product } from './types.ts';

export const PRODUCTS: Product[] = [
  {
    id: 'zenith-energy',
    name: 'Zenith Energy+',
    price: 34.99,
    description: 'Sustained focus and natural vitality without the crash.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRdwhkxxqSNu785oqf8H42Y5-OtBxstO_S8RNcAjaJm309qehKwmWPcNd6QKbIT39wVGkZw3US8o56IHzW2EDwOnhixPftjZTRRkTFaKON9KxOtghM4-ovW6_wBTbt4cDFt6l5ULqtYaJXQCEyz5Z3xwYDbR9qdsMASET1qeMpZp23YSw6RD2QslhQ9olj5Njum0vcILbqtAPK166zgz2Tcu8db7e-qycDv0762Ua0uN6TXlqBpkbNRyCoem-sfK8YEBgwmuzvg3Wd',
    category: Category.ENERGY,
    rating: 4.8,
    reviews: 1200,
    count: '60 Capsules',
    tag: 'Bestseller'
  },
  {
    id: 'immune-shield',
    name: 'Immune Shield',
    price: 29.99,
    description: 'Daily defense complex with Zinc and Elderberry.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDak4FUTKIMjA1S9_g76ihW9gzB0OFIgHaQMnVEKjQmP6IrurOjlqea426f-ayYkk2UzzFkGLNpRiSp20JTZKTr4GTGDlXyt5dfIAAV9xeSZxYjdXOdsdIu8JPVlfmeY1IBO2H8g1hR-iuQd4X_rz-4SZW3yx9UFuSRZFq4tDciDtXQFUwg_gBVAs6UbcMkeyjFQpt90jULFh_VRRFNEKBBraMm60LLKIwqeWAI9lDITpMDbP01K-fGDGN5dJJOEn9IRD5Mik2NL7g5',
    category: Category.IMMUNITY,
    rating: 4.2,
    reviews: 850,
    count: '30 Day Supply',
    tag: 'New'
  },
  {
    id: 'magnesium-calm',
    name: 'Magnesium Calm',
    price: 39.99,
    description: 'High-absorption recovery formula for deep relaxation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHPeNiSF7xMt8o51R_-vMsHEh2x4p6cEKTHqNM_K_75Ec1SVu5Ex0VN0zcoyTuJlbvkSlk2eYQ93XJMqYle66d-w9LYntD0DV1rIxahfBQm9knHs27lPWh9ULysugN22CXvrDcqyuoPKFD9APtLh6M4z4JlB5iT6p9-fyQ9uUSTB-U98XDnahbOtRiwZR4F4RDhU7sD7THthLQy5_ksgwJHiRK3ar9nU4HQUVLAMUQNNV8f03PysthuMUuxxHNFpE_S7WICYoMZ96R',
    category: Category.RECOVERY,
    rating: 5.0,
    reviews: 520,
    count: '90 Tablets'
  },
  {
    id: 'nocturnal-rest',
    name: 'Nocturnal Rest',
    price: 27.50,
    description: 'Melatonin-free blend for natural circadian rhythm support.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcVvRQkkWgRtKwAjC_0ZLmRyuHw95l90QCxc3qIzLwnRUG5BQ8r7MRdonFpvNSIrjl9zAJDE1K1WfKLJ8oUQTywW1AvRFIhyDWRQkddOquSrJpS59RV-2gAfTz4ljF46CzZXx8X6kkQd5daacM_pw4B2GK7sx6HncoEcr0EFfqsH_NDGL7csQKFx0txTwDVan4qpom3wOoqA1tve52ULwNdX3Mpw6HDO8FnHnB6WZbdqlwLvnrWqEJ4PA3ArZwfZdxfmN9lFT8Z9aV',
    category: Category.SLEEP,
    rating: 4.6,
    reviews: 410,
    count: 'Powder Mix'
  },
  {
    id: 'cognitive-plus',
    name: 'Cognitive+',
    price: 49.00,
    description: 'Nootropic blend for enhanced mental clarity and memory.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBJcQ1pSMyvXYTpTznARVtLG60i9SgICqEJ2zkK3X4LYOyOLrbnHtCAyJ1Tmjl0sJ29EY7qksPTNBt4dCOV1sbAbcTFCqgxt1IiE6_rQMFztD4z_t1Ym1vdaIhQNkgVm8Jsql_DYgeVxhnpfYl5wzox50W4cETjbcfeBF5-l7-tXDAz1eMZiwcY6Ht36SnDDPj20pZTZX9o5wpOn0aqGG1J6BfY9ICuwiRiflT4KctpdlantD7zHRylVts6n-AnRqYfWkMeNAxcjqF',
    category: Category.FOCUS,
    rating: 4.9,
    reviews: 920,
    count: '60 Capsules'
  },
  {
    id: 'strength-core',
    name: 'Strength Core',
    price: 24.99,
    description: 'Pure creatine monohydrate for muscle development.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGwNS8hhztybIeyfREP5emc_R1jpss9CIvTZKHaAU-ErgoRW9AD7Y3TfHBRqIjvXK0RXV7WLf0EBlAbDQDojGjryFbWuzjTtlnJ5TWVmp-3vgtbT4W0dHa-ZD6zaZSXYWp4maA80NwTZz9jek2CdM9eaJv5QWhKHRj_eLyyown6SdB4D7sZfQDD2kJGde6nZN-JCduxtV8i6eT2Fn1y6cpizvPtBXVOKKzLoLubHRqI8mXfUZDF2CPjo5t-MDy-sfnQzw2_EdvZ_xX',
    category: Category.RECOVERY,
    rating: 4.5,
    reviews: 210,
    count: '30 Servings',
    tag: 'Limited'
  },
  {
    id: 'plant-base-calm',
    name: 'Plant Base Calm',
    price: 59.65,
    description: 'Masterfully crafted adaptogens for emotional balance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa4o4jQHCxXmUt1C8ypvAdLViRp57X-tCjQPfzwJurVTCPnpwgNoqSQ8tsvB3BmftXCib20KZiJn6AQsCV5jBBIRn5o_gr2z4a_vHYxmvx0oBU0mHoa6qtvwvj979qtfhVKcXXQt91l3rHYzU6uSI49uomWV1frmyaW298upflmQNkxGzGeIWKMY3wFS_T3Xp36zbz6ljPS40c4aPK9U6AZYE_7JnjT0FfbSbiiR9ObFrXnXTN6Z_PlQjJCHs5D--bIYubhCIBrZIF',
    category: Category.FOCUS,
    rating: 4.8,
    reviews: 128,
    count: '60 Capsules',
    bgColor: '#e2f0e9'
  }
];

export const NAVIGATION = [
  { name: 'Home', hash: '#/' },
  { name: 'Shop All', hash: '#/shop' },
  { name: 'Ingredients', hash: '#/ingredients' },
  { name: 'Our Story', hash: '#/about' },
  { name: 'Science', hash: '#/science' },
];

export const FOOTER_LINKS = {
  shop: [
    { name: 'Best Sellers', href: '#' },
    { name: 'Daily Essentials', href: '#' },
    { name: 'Bundles & Sets', href: '#' },
    { name: 'Gift Cards', href: '#' },
  ],
  support: [
    { name: 'Shipping Policy', href: '#' },
    { name: 'Returns & Refunds', href: '#' },
    { name: 'Track Your Order', href: '#' },
    { name: 'FAQ', href: '#' },
  ]
};