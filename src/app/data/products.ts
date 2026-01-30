export interface Product {
  id: string;
  name: string;
  stoneType: string;
  colorRange: string;
  finishOptions: string[];
  standardSizes: string[];
  thickness: string[];
  edgeFinish: string[];
  applications: string[];
  origin: string;
  description: string;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 'wall-cladding',
    name: 'Wall Cladding',
    stoneType: 'Sandstone',
    colorRange: 'Beige, Cream, Light Brown',
    finishOptions: ['Natural', 'Honed', 'Polished', 'Shotblast', 'Bush Hammered'],
    standardSizes: ['300x300mm', '400x400mm', '600x300mm', '600x600mm', 'Custom'],
    thickness: ['20mm', '30mm', '40mm', '50mm'],
    edgeFinish: ['Sawn', 'Calibrated', 'Hand Cut', 'Machine Cut'],
    applications: ['Flooring', 'External Paving', 'Wall Cladding', 'Landscape'],
    origin: 'Dholpur, Rajasthan, India',
    description: 'Premium beige sandstone with consistent color and minimal variation. Suitable for both interior and exterior architectural applications.',
    imageUrl: '/dist/images/wallCladings.png'
  },
  {
    id: 'stone-steps',
    name: 'Stone Steps',
    stoneType: 'Sandstone',
    colorRange: 'Grey, Blue-Grey, Silver',
    finishOptions: ['Natural Split', 'Honed', 'Shotblast', 'Tumbled'],
    standardSizes: ['300x300mm', '600x400mm', '600x600mm', '900x600mm', 'Custom'],
    thickness: ['22mm', '30mm', '40mm'],
    edgeFinish: ['Sawn', 'Calibrated', 'Hand Cut'],
    applications: ['External Paving', 'Flooring', 'Pool Coping', 'Hardscape'],
    origin: 'Kota, Rajasthan, India',
    description: 'Dense grey sandstone with excellent slip resistance and durability. Ideal for high-traffic exterior applications.',
    imageUrl: '/dist/images/stoneSteps.png'
  },
  {
    id: 'steppings',
    name: 'Steppings',
    stoneType: 'Sandstone',
    colorRange: 'Red, Pink, Burgundy',
    finishOptions: ['Natural', 'Honed', 'Polished', 'Shotblast'],
    standardSizes: ['300x300mm', '400x400mm', '600x400mm', 'Custom'],
    thickness: ['20mm', '30mm', '40mm'],
    edgeFinish: ['Sawn', 'Calibrated', 'Machine Cut'],
    applications: ['Wall Cladding', 'Flooring', 'Landscape', 'Feature Walls'],
    origin: 'Agra, Rajasthan, India',
    description: 'Distinctive red sandstone with warm tones. Popular for architectural accents and traditional Indian aesthetics.',
    imageUrl: '/dist/images/steppings.png'
  },
  {
    id: 'cobbles',
    name: 'Cobbles',
    stoneType: 'Sandstone',
    colorRange: 'Green, Mint, Grey-Green',
    finishOptions: ['Natural Split', 'Honed', 'Shotblast'],
    standardSizes: ['300x300mm', '600x300mm', '600x600mm', 'Custom'],
    thickness: ['25mm', '30mm', '50mm'],
    edgeFinish: ['Sawn', 'Hand Cut'],
    applications: ['External Paving', 'Landscape', 'Garden Features', 'Pool Surrounds'],
    origin: 'Jodhpur, Rajasthan, India',
    description: 'Unique green-toned sandstone with excellent weather resistance. Suitable for landscape and garden applications.',
    imageUrl: '/dist/images/cobbles.png'
  },
  {
    id: 'pavers',
    name: 'Pavers',
    stoneType: 'Sandstone',
    colorRange: 'Green, Brown, Multi-color',
    finishOptions: ['Natural Split', 'Shotblast', 'Tumbled'],
    standardSizes: ['300x300mm', '600x400mm', '900x600mm', 'Random'],
    thickness: ['22mm', '25mm', '30mm'],
    edgeFinish: ['Sawn', 'Hand Cut', 'Natural'],
    applications: ['External Paving', 'Driveways', 'Pathways', 'Garden Features'],
    origin: 'Kota, Rajasthan, India',
    description: 'Multi-colored sandstone with natural variation. Popular for traditional and contemporary landscape designs.',
    imageUrl: '/dist/images/pavers.png'
  },
  {
    id: 'circular',
    name: 'Circular',
    stoneType: 'Limestone',
    colorRange: 'Yellow, Gold, Beige',
    finishOptions: ['Honed', 'Polished', 'Brushed', 'Tumbled'],
    standardSizes: ['400x400mm', '600x400mm', '600x600mm', 'Custom'],
    thickness: ['20mm', '30mm', '40mm'],
    edgeFinish: ['Calibrated', 'Machine Cut'],
    applications: ['Flooring', 'Wall Cladding', 'Interior Design', 'Countertops'],
    origin: 'Jaisalmer, Rajasthan, India',
    description: 'Premium limestone with warm golden tones. Ideal for high-end interior and exterior applications.',
    imageUrl: '/dist/images/circular.png'
  }
];

/** Product within a range – for the grid when a range’s “View Details” is opened. Replace names/images when you have final data. */
export interface ProductInRange {
  id: string;
  name: string;
  imageUrl: string;
}

/** Products in each range. Replace with your names and image URLs. */
export const productsInRange: Record<string, ProductInRange[]> = {
  'basalt-stone': [
    { id: 'basalt-stone-1', name: 'Product 1 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1603759641536-f584639f226d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
    { id: 'basalt-stone-2', name: 'Product 2 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1603759641536-f584639f226d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
    { id: 'basalt-stone-3', name: 'Product 3 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1603759641536-f584639f226d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  ],
  'kandla-grey': [
    { id: 'kandla-grey-1', name: 'Product 1 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1634669545806-75b21288cdc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
    { id: 'kandla-grey-2', name: 'Product 2 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1634669545806-75b21288cdc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
    { id: 'kandla-grey-3', name: 'Product 3 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1634669545806-75b21288cdc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  ],
  'manadana-red': [
    { id: 'manadana-red-1', name: 'Product 1 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1648639035105-6bce23c55b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
    { id: 'manadana-red-2', name: 'Product 2 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1648639035105-6bce23c55b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
    { id: 'manadana-red-3', name: 'Product 3 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1648639035105-6bce23c55b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  ],
  'autumn-brown': [
    { id: 'autumn-brown-1', name: 'Product 1 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1551458601-14e8150ece4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
    { id: 'autumn-brown-2', name: 'Product 2 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1551458601-14e8150ece4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
    { id: 'autumn-brown-3', name: 'Product 3 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1551458601-14e8150ece4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  ],
  'raj-green': [
    { id: 'raj-green-1', name: 'Product 1 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1762200057530-73e7a7990daa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
    { id: 'raj-green-2', name: 'Product 2 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1762200057530-73e7a7990daa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
    { id: 'raj-green-3', name: 'Product 3 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1762200057530-73e7a7990daa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  ],
  'snow-white': [
    { id: 'snow-white-1', name: 'Product 1 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1708694812044-1cb79c9fb256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
    { id: 'snow-white-2', name: 'Product 2 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1708694812044-1cb79c9fb256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
    { id: 'snow-white-3', name: 'Product 3 (placeholder)', imageUrl: 'https://images.unsplash.com/photo-1708694812044-1cb79c9fb256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  ],
};

export const applications = [
  {
    id: 'flooring',
    name: 'Flooring',
    description: 'Interior and exterior flooring applications',
    recommendedFinish: ['Honed', 'Polished', 'Shotblast'],
    recommendedThickness: '20mm - 30mm',
    environmentSuitability: 'Interior and Exterior'
  },
  {
    id: 'external-paving',
    name: 'External Paving',
    description: 'Outdoor paving, driveways, and pathways',
    recommendedFinish: ['Natural Split', 'Shotblast', 'Tumbled'],
    recommendedThickness: '25mm - 40mm',
    environmentSuitability: 'Exterior'
  },
  {
    id: 'wall-cladding',
    name: 'Wall Cladding',
    description: 'Internal and external wall cladding',
    recommendedFinish: ['Natural', 'Honed', 'Bush Hammered'],
    recommendedThickness: '20mm - 30mm',
    environmentSuitability: 'Interior and Exterior'
  },
  {
    id: 'landscape',
    name: 'Landscape & Hardscape',
    description: 'Garden features, stepping stones, and landscape design',
    recommendedFinish: ['Natural Split', 'Shotblast'],
    recommendedThickness: '30mm - 50mm',
    environmentSuitability: 'Exterior'
  },
  {
    id: 'pool-coping',
    name: 'Pool Coping & Steps',
    description: 'Pool surrounds, coping, and step treads',
    recommendedFinish: ['Shotblast', 'Tumbled', 'Honed'],
    recommendedThickness: '30mm - 50mm',
    environmentSuitability: 'Exterior - Water Contact'
  }
];

export const exportProcess = [
  {
    step: 1,
    title: 'Block Selection',
    description: 'Careful selection of stone blocks from our quarries based on color, density, and quality requirements.'
  },
  {
    step: 2,
    title: 'Processing',
    description: 'Precision cutting, calibration, and finishing using modern machinery to meet exact specifications.'
  },
  {
    step: 3,
    title: 'Quality Control',
    description: 'Rigorous inspection for dimensional accuracy, finish quality, and structural integrity.'
  },
  {
    step: 4,
    title: 'Packing',
    description: 'Secure packaging in wooden crates or pallets with protective materials for international shipping.'
  },
  {
    step: 5,
    title: 'Global Dispatch',
    description: 'Coordination with logistics partners for timely delivery to ports worldwide with full documentation.'
  }
];
