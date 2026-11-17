import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    name: "Pulpen",
    price: 5000,
    description: "Pulpen hitam standar kualitas tinggi.",
  },
  {
    id: 2,
    name: "Buku Tulis",
    price: 12000,
    description: "Buku tulis 58 halaman kertas tebal.",
  },
  {
    id: 3,
    name: "Spidol",
    price: 8000,
    description: "Spidol whiteboard warna pekat.",
  },
  {
    id: 4,
    name: "Penggaris",
    price: 6000,
    description: "Penggaris plastik transparan 30 cm.",
  },
  {
    id: 5,
    name: "Penghapus",
    price: 3000,
    description: "Penghapus karet lembut bersih.",
  },
];

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSaveAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputName || Number(inputPrice) <= 0) return;
    const newId =
      products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    setProducts([
      ...products,
      {
        id: newId,
        name: inputName,
        price: Number(inputPrice),
        description: "Produk baru ditambahkan.",
      },
    ]);
    setActiveModal(null);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputName || Number(inputPrice) <= 0) return;
    setProducts(
      products.map((p) =>
        p.id === selectedProduct.id
          ? { ...p, name: inputName, price: Number(inputPrice) }
          : p,
      ),
    );
    setActiveModal(null);
  };

  const handleConfirmDelete = () => {
    setProducts(products.filter((p) => p.id !== selectedProduct.id));
    setActiveModal(null);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto min-h-screen bg-slate-50 font-sans">
      <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Manajemen Produk
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola daftar produk dan harga dalam satu tempat.
          </p>
        </div>
        <button
          onClick={() => {
            setInputName("");
            setInputPrice("");
            setActiveModal("add");
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition shadow-sm"
        >
          + Tambah Produk
        </button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Cari nama produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-80 rounded-lg border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
        <span className="text-sm font-medium text-slate-500">
          Total: {filteredProducts.length} produk
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold text-slate-400">
                ID: {product.id}
              </span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">
                {product.name}
              </h3>
              <p className="text-blue-600 font-bold text-base mt-1 mb-4">
                Rp{product.price.toLocaleString("id-ID")}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to={`/products/${product.id}`}
                className="w-full py-1.5 text-center bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium text-xs transition"
              >
                Lihat Detail
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setInputName(product.name);
                    setInputPrice(product.price);
                    setActiveModal("edit");
                  }}
                  className="flex-1 py-1.5 bg-white border border-blue-300 text-blue-600 rounded-md font-semibold text-xs hover:bg-blue-50 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setActiveModal("delete");
                  }}
                  className="flex-1 py-1.5 bg-white border border-red-300 text-red-600 rounded-md font-semibold text-xs hover:bg-red-50 transition"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeModal && (
        <div className="fixed inset-0 bg-slate-900/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
            {activeModal === "add" && (
              <form onSubmit={handleSaveAdd}>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Tambah Produk
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Masukkan informasi produk baru.
                </p>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Produk
                </label>
                <input
                  type="text"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  placeholder="Contoh: Pulpen"
                  className="w-full p-2 border border-slate-300 rounded mb-3 text-sm"
                  required
                />
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Harga (Rp)
                </label>
                <input
                  type="number"
                  value={inputPrice}
                  onChange={(e) => setInputPrice(e.target.value)}
                  placeholder="Contoh: 5000"
                  className="w-full p-2 border border-slate-300 rounded mb-1 text-sm"
                  required
                />
                <p className="text-[11px] text-slate-400 mb-4">
                  Harga harus lebih dari 0.
                </p>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 border rounded text-xs font-medium text-slate-600"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded text-xs font-semibold"
                  >
                    Simpan Produk
                  </button>
                </div>
              </form>
            )}

            {activeModal === "edit" && (
              <form onSubmit={handleSaveEdit}>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Edit Produk
                </h3>
                <p className="text-xs text-slate-500 mb-1">
                  Perbarui informasi produk.
                </p>
                <p className="text-[11px] text-slate-400 mb-4">
                  ID: {selectedProduct?.id}
                </p>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Produk
                </label>
                <input
                  type="text"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded mb-3 text-sm"
                  required
                />
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Harga (Rp)
                </label>
                <input
                  type="number"
                  value={inputPrice}
                  onChange={(e) => setInputPrice(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded mb-1 text-sm"
                  required
                />
                <p className="text-[11px] text-slate-400 mb-4">
                  Harga harus lebih dari 0.
                </p>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 border rounded text-xs font-medium text-slate-600"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded text-xs font-semibold"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            )}

            {activeModal === "delete" && (
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-1">
                  Hapus Produk?
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Produk yang dihapus tidak dapat dikembalikan.
                </p>
                <div className="bg-slate-50 p-3 rounded border border-slate-200 mb-4">
                  <div className="font-bold text-slate-800">
                    {selectedProduct?.name}
                  </div>
                  <div className="text-blue-600 text-sm font-semibold">
                    Rp{selectedProduct?.price.toLocaleString("id-ID")}
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 border rounded text-xs font-medium text-slate-600"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded text-xs font-semibold"
                  >
                    Hapus Produk
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
