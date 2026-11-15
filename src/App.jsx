import { useState } from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const INITIAL_PRODUCTS = [
    { id: 1, name: 'Pulpen', price: 5000 },
    { id: 2, name: 'Buku Tulis', price: 12000 },
    { id: 3, name: 'Spidol', price: 8000 },
    { id: 4, name: 'Penggaris', price: 6000 },
    { id: 5, name: 'Penghapus', price: 3000 },
];

function App() {
    const [products, setProducts] = useState(INITIAL_PRODUCTS);
    const [nextId, setNextId] = useState(INITIAL_PRODUCTS.length + 1);
    const [searchQuery, setSearchQuery] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const normalizedQuery = searchQuery.trim().toLowerCase();
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(normalizedQuery)
    );

    function openAddModal() {
        setEditingProduct(null);
        setIsFormOpen(true);
    }

    function openEditModal(product) {
        setEditingProduct(product);
        setIsFormOpen(true);
    }

    function closeFormModal() {
        setIsFormOpen(false);
        setEditingProduct(null);
    }

    function handleSaveProduct({ name, price }) {
        if (editingProduct) {
            setProducts((prev) =>
                prev.map((item) =>
                    item.id === editingProduct.id ? { ...item, name, price } : item
                )
            );
        } else {
            setProducts((prev) => [...prev, { id: nextId, name, price }]);
            setNextId((prev) => prev + 1);
        }
        closeFormModal();
    }

    return (
        <div className="min-h-screen bg-slate-50 text-gray-900">
            <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
                <Navbar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    onAddClick={openAddModal}
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
                                onEdit={openEditModal}
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
                                ? 'Tambahkan produk pertama Anda menggunakan tombol di bawah ini.'
                                : 'Coba gunakan kata kunci lain atau tampilkan semua produk.'}
                        </p>
                        <div className="mt-4">
                            {products.length === 0 ? (
                                <button
                                    type="button"
                                    onClick={openAddModal}
                                    className="min-h-[44px] px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    + Tambah Produk
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setSearchQuery('')}
                                    className="min-h-[44px] px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-500 rounded-lg hover:bg-blue-50 transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    Reset Pencarian
                                </button>
                            )}
                        </div>
                    </div>
                )}

                <footer className="mt-6">
                    <p className="text-sm text-gray-500">
                        Menampilkan {filteredProducts.length} dari {products.length} produk
                    </p>
                </footer>
            </main>

            {isFormOpen && (
                <ProductModal
                    key={editingProduct ? editingProduct.id : 'new'}
                    product={editingProduct}
                    onClose={closeFormModal}
                    onSave={handleSaveProduct}
                />
            )}
        </div>
    );
}

export default App;
