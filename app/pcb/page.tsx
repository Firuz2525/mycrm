type Product = {
  id: number;
  name: string;
  price: number;
};

const mockProducts: Product[] = [
  { id: 1, name: 'Electric Shisha Roller', price: 120 },
  { id: 2, name: 'Portable Hookah Kit', price: 80 },
  { id: 3, name: 'LED Hose Set', price: 45 },
];

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ul className="space-y-2">
        {mockProducts.map((product) => (
          <li
            key={product.id}
            className="bg-white p-4 rounded shadow flex justify-between"
          >
            <span>{product.name}</span>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
