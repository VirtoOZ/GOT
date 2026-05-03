import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { GotProvider } from "./contexts"

// Объект для вывода
const root = document.querySelector("#root")
	|| document.querySelector(".wrapper");

createRoot(root).render(
	<GotProvider>
		<App />
	</GotProvider>
);