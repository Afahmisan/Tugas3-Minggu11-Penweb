import { formatPrice } from './utils/formatPrice';

function ProductCard({ product, onEdit, onDelete }) {
    return (
        <article className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
            <div>
                <p className="text-xs font-medium text-gray-500">ID: {product.id}</p>
                <h2 className="text-lg font-bold text-gray-900 mt-1 break-words">
                    {product.name}
                </h2>
                <p className="text-lg font-bold text-blue-600 mt-1">
                    {formatPrice(product.price)}
                </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                    type="button"
                    onClick={() => onEdit(product)}
                    className="min-h-[44px] px-3 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-500 rounded-lg hover:bg-blue-50 transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    Edit
                </button>
                <button
                    type="button"
                    onClick={() => onDelete(product)}
                    className="min-h-[44px] px-3 py-2 text-sm font-medium text-red-600 bg-white border border-red-500 rounded-lg hover:bg-red-50 transition cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                    Hapus
                </button>
            </div>
        </article>
    );
}

export default ProductCard;
