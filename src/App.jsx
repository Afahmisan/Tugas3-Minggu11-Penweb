import { useState } from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';

const INITIAL_PRODUCTS = [
    { id: 1, name: 'Pulpen', price: 5000 },
    { id: 2, name: 'Buku Tulis', price: 12000 },
    { id: 3, name: 'Spidol', price: 8000 },
    { id: 4, name: 'Penggaris', price: 6000 },
    { id: 5, name: 'Penghapus', price: 3000 },
];

function App() {
    const [products] = useState(INITIAL_PRODUCTS);
    const [searchQuery, setSearchQuery] = useState('');

    const normalizedQuery = searchQuery.trim().toLowerCase();
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(normalizedQuery)
    );

    return (
        <div className="min-h-screen bg-slate-50 text-gray-900">
            <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
                <Navbar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    onAddClick={() => {}}
                    totalProducts={products.length}
                />

                {filteredProducts.length > 0 ? (
                    <section
                        aria-label="Daftar produk"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onEdit={() => {}}
                                onDelete={() => {}}
                            />
                        ))}
                    </section>
                ) : (
                    <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
                        <p className="text-sm font-medium text-gray-900">
                            {products.length === 0
                                ? 'Belum ada produk yang tersimpan.'
                                : `Tidak ada produk dengan kata kunci "${searchQuery.trim()}".`}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            {products.length === 0
                                ? 'Tambahkan produk pertama Anda menggunakan tombol + Tambah Produk.'
                                : 'Coba gunakan kata kunci lain atau tampilkan semua produk.'}
                        </p>
                        {products.length > 0 && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery('')}
                                className="mt-4 min-h-[44px] px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-500 rounded-lg hover:bg-blue-50 transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Reset Pencarian
                            </button>
                        )}
                    </div>
                )}

                <footer className="mt-6">
                    <p className="text-sm text-gray-500">
                        Menampilkan {filteredProducts.length} dari {products.length} produk
                    </p>
                </footer>
            </main>
        </div>
    );
}

export default App;
