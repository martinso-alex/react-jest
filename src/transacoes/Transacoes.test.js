import React from "react";
import { render } from "@testing-library/react";

import Transacao from "./Transacao";

describe("Componente de transações", () => {
	it("snapshot do componente não deve ser alterado", () => {
    const transacoes = [
      {data:'08/09/2020', transacao:'saque', valor:'20.00'},
      {data:'09/09/2020', transacao:'saque', valor:'40.00'}
    ];

    const { container } = render(
			<Transacao transacoes={transacoes} />
		);

		expect(container.firstChild).toMatchSnapshot();
	});
});
