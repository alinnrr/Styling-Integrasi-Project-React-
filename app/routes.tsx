import RootPage from "./page";
import { Route, Routes } from "react-router";
import PageLayout from "../src/components/templates/PageLayout";
import ProductsPage from "./products/page";
import ProductDetailPage from "../src/components/pages/ProductDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<RootPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route
          path="*"
          element={
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
              <h1 className="text-5xl font-extrabold text-blue-600 mb-2">
                404
              </h1>
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                Halaman Tidak Ditemukan
              </h2>
              <p className="text-slate-500 mb-4 text-sm">
                Maaf, halaman atau produk yang kamu cari tidak tersedia.
              </p>
              <a
                href="/"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xs hover:bg-blue-700 transition"
              >
                Kembali ke Beranda
              </a>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
