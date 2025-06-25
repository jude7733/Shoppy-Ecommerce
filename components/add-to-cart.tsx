'use client';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

async function addToCart(product: Product) {
  const payload = {
    userId: 0,
    date: new Date().toISOString().split('T')[0],
    products: [{ productId: product.id, quantity: 1 }],
  };
  const res = await fetch('https://fakestoreapi.com/carts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export default function AddToCartButton({ product }: { product: Product }) {
  return (
    <button
      className="bg-primary text-white px-6 py-2 rounded-lg font-semibold"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  );
}
