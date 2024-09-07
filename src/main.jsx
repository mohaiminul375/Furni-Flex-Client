import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import AuthProvider from "./Provider/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import FurnitureProvider from "./Provider/FurnitureProvider";
import CartProvider from "./Provider/CartProvider";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FurnitureProvider>
        <CartProvider>
      <AuthProvider>
        <RouterProvider router={router} />
         <Toaster position="top-center" reverseOrder={false}/>
      </AuthProvider>
      </CartProvider>
      </FurnitureProvider>
    </QueryClientProvider>
  </StrictMode>
);
