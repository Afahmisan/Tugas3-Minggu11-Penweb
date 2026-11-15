function Navbar({ searchQuery, onSearchChange, onAddClick, totalProducts }) {
    return (
        <header className="mb-6">
            {/* Baris 1: Judul & Tombol Tambah */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Manajemen Produk</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Kelola daftar produk dan harga dalam satu tempat.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onAddClick}
                    className="min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    + Tambah Produk
                </button>
            </div>

            {/* Baris 2: Search Bar & Total Produk */}
            <div className="flex items-center justify-between gap-4">
                <div className="relative w-full max-w-xs">
                    <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                        />
                    </svg>

                    <input
                        type="text"
                        aria-label="Cari nama produk"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Cari nama produk..."
                        className="w-full min-h-[44px] pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                </div>

                <p className="text-sm text-gray-500 shrink-0">
                    {totalProducts} produk
                </p>
            </div>
        </header>
    );
}

export default Navbar;