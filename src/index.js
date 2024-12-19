import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
<div className="app" dir="rtl">
  <div className="floating-cloud cloud-1" />
  <div className="floating-cloud cloud-2" />
  <div className="floating-cloud cloud-3" />
  {/* ... שאר הקוד */}
</div>;
