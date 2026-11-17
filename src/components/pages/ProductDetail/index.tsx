import React from "react";
import { useParams, Link } from "react-router-dom";

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

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = initialProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Produk Tidak Ditemukan
        </h2>
        <p className="text-slate-500 mb-4">
          Maaf, produk dengan ID {id} tidak tersedia.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700"
        >
          ← Kembali ke Daftar Produk
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm max-w-lg w-full">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Detail Produk ID: {product.id}
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mt-2 mb-2">
          {product.name}
        </h1>
        <p className="text-2xl font-bold text-blue-600 mb-6">
          Rp{product.price.toLocaleString("id-ID")}
        </p>

        <div className="border-t border-slate-100 pt-4 mb-8">
          <h4 className="text-xs font-bold text-slate-500 uppercase mb-1">
            Deskripsi
          </h4>
          <p className="text-slate-700 text-sm">{product.description}</p>
        </div>

        <Link
          to="/"
          className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium text-sm transition"
        >
          ← Kembali ke Daftar Produk
        </Link>
      </div>
    </div>
  );
}
