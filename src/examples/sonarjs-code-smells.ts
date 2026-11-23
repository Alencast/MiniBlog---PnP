const TEXTO_REUTILIZAVEL = "texto reutilizado";

export function reutilizarLiteral(): string[] {
  return [
    TEXTO_REUTILIZAVEL,
    TEXTO_REUTILIZAVEL,
    TEXTO_REUTILIZAVEL,
  ];
}

export function classificarValor(valor: number): string {
  if (valor > 10) {
    return "alto";
  }

  if (valor > 5) {
    return "medio";
  }

  return "baixo";
}

export function classificarUsuario(
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

  if (bloqueado) {
    return "bloqueado";
  }

  if (administrador) {
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

  return "usuario ativo";
}
