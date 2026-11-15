import { useEffect, useRef, useState } from 'react';

function ProductModal({ product, onClose, onSave }) {
    const isEdit = Boolean(product);
    const [name, setName] = useState(product ? product.name : '');
    const [price, setPrice] = useState(product ? String(product.price) : '');
    const [error, setError] = useState('');
    const nameInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current?.focus();

        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    function handleSubmit(e) {
        e.preventDefault();

        const trimmedName = name.trim();
        if (!trimmedName) {
            setError('Nama produk wajib diisi.');
            return;
        }

        if (price.trim() === '') {
            setError('Harga produk wajib diisi.');
            return;
        }

        const parsedPrice = Number(price);
        if (!Number.isFinite(parsedPrice) || parsedPrice <= 0) {
            setError('Harga harus lebih dari 0.');
            return;
        }

        if (!Number.isInteger(parsedPrice)) {
            setError('Harga harus berupa angka bulat.');
            return;
        }

        onSave({ name: trimmedName, price: parsedPrice });
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="product-modal-title"
                className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg p-6"
            >
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h2
                            id="product-modal-title"
                            className="text-lg font-bold text-gray-900"
                        >
                            {isEdit ? 'Edit Produk' : 'Tambah Produk'}
                        </h2>
                        <p className="text-sm text-gray-500 mt-0.5">
                            {isEdit
                                ? 'Perbarui informasi produk yang dipilih.'
                                : 'Masukkan informasi produk baru.'}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Tutup modal"
                        className="min-w-[44px] min-h-[44px] -mr-2 -mt-2 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {isEdit && (
                    <p className="text-xs font-medium text-gray-500 mt-3">
                        ID: {product.id}
                    </p>
                )}

                <form onSubmit={handleSubmit} noValidate className="mt-4 space-y-4">
                    {error && (
                        <p
                            role="alert"
                            className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2"
                        >
                            {error}
                        </p>
                    )}

                    <div>
                        <label
                            htmlFor="product-name"
                            className="block text-sm font-medium text-gray-900 mb-1.5"
                        >
                            Nama Produk
                        </label>
                        <input
                            ref={nameInputRef}
                            id="product-name"
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (error) setError('');
                            }}
                            placeholder="Contoh: Pulpen"
                            className="w-full min-h-[44px] px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="product-price"
                            className="block text-sm font-medium text-gray-900 mb-1.5"
                        >
                            Harga (Rp)
                        </label>
                        <input
                            id="product-price"
                            type="number"
                            min="1"
                            step="1"
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value);
                                if (error) setError('');
                            }}
                            placeholder="Contoh: 5000"
                            className="w-full min-h-[44px] px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                        />
                        <p className="text-xs text-gray-500 mt-1.5">
                            Harga harus lebih dari 0.
                        </p>
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="min-h-[44px] px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="min-h-[44px] px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            {isEdit ? 'Simpan Perubahan' : 'Simpan Produk'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductModal;
