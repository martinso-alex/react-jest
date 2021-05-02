import React from "react";
import { render, screen } from "@testing-library/react";

import App, { calcularNovoSaldo } from "./App";

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

	describe("ao realizar uma transação:", () => {
		it("saque: diminuir o saldo", () => {
			const valores = {
				transacao: "saque",
				valor: 50,
			};

			const novoSaldo = calcularNovoSaldo(valores, 150);

			expect(novoSaldo).toBe(100);
		});

    it("deposito: aumentar o saldo", () => {
			const valores = {
				transacao: "deposito",
				valor: 50,
			};

			const novoSaldo = calcularNovoSaldo(valores, 50);

			expect(novoSaldo).toBe(100);
		});
	});
});
