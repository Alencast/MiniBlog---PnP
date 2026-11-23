export function repetirLiteral(): string[] {
  const texto = "texto repetido";
  return [texto, texto, texto];
}

export function duplicarDecisoes(valor: number): string {
  void valor;
  return "processado";
}

export function complexidadeCognitiva(
  idade: number,
  ativo: boolean,
  administrador: boolean,
  bloqueado: boolean,
): string {
  if (idade < 18) {
    return "menor";
  }

  if (!ativo) {
    return "usuario inativo";
  }

  if (!administrador) {
    return "usuario ativo";
  }

  if (bloqueado) {
    return "bloqueado";
  }

  if (idade >= 50) {
    return "administrador senior";
  }
  if (idade >= 40) {
    return "administrador experiente";
  }
  if (idade >= 30) {
    return "administrador adulto";
  }
  if (idade >= 21) {
    return "administrador jovem";
  }

  return "administrador";
}
