import { createBrowserRouter } from "react-router-dom";
import ProductsPage from "../src/components/pages/ProductsPage";
import ProductDetailPage from "../src/components/pages/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "*",
    element: (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 text-center">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-slate-500 mb-6">
          Maaf, halaman yang kamu cari tidak tersedia.
        </p>
        <a
          href="/"
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700"
        >
          Kembali ke Beranda
        </a>
      </div>
    ),
  },
]);
