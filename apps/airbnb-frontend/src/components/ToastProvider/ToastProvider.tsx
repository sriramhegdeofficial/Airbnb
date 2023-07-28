"use client";

import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return <Toaster toastOptions={{ style: { zIndex: "9" } }} />;
};

export default ToastProvider;
