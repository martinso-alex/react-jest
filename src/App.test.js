import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("Componente Principal", () => {
	describe("ao iniciar o app:", () => {
		it("exibir o nome do banco", () => {
			render(<App />);
			expect(screen.getByText("ByteBank")).toBeInTheDocument();
		});

		it("exibir o saldo", () => {
			render(<App />);
			expect(screen.getByText("Saldo:")).toBeInTheDocument();
		});

		it("exibir o botão de realizar operação", () => {
			render(<App />);
			expect(screen.getByText("Realizar operação")).toBeInTheDocument();
		});
	});
});
