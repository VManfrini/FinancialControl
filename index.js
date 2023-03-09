let icash = prompt("Informe a quantidade inicial:");
icash = parseFloat(icash);
let choice = "";

do {
  choice = prompt(
    `Saldo disponivel: R$${icash}\n 1.Adicionar\n 2.Remover\n 3.Sair`
  );
  switch (choice) {
    case "1":
      icash += parseFloat(prompt("Valor a adicionar:"));
      break;
    case "2":
      icash -= parseFloat(prompt("Valor a remover:"));
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Entrada inválida!");
  }
} while (choice !== "3");
