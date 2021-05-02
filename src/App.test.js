import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

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

		it("saque: realizar a transação", () => {
			render(<App />);

			const saldo = screen.getByText("R$ 1000");
			const transacao = screen.getByLabelText("Saque");
			const valor = screen.getByTestId("valor");
			const botaoTransacao = screen.getByText("Realizar operação");

			expect(saldo.textContent).toBe("R$ 1000");

			fireEvent.click(transacao, { target: { value: "saque" } });
			fireEvent.change(valor, { target: { value: 10 } });
			fireEvent.click(botaoTransacao);

			expect(saldo.textContent).toBe("R$ 990");
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
