export function repetirLiteral(): string[] {
  return ["texto repetido", "texto repetido", "texto repetido"];
}

export function duplicarDecisoes(valor: number): string {
  if (valor > 10) {
    const resultado = "processado";
    return resultado;
  } else if (valor > 5) {
    const resultado = "processado";
    return resultado;
  } else {
    const resultado = "processado";
    return resultado;
  }
}

export function complexidadeCognitiva(
  idade: number,
  ativo: boolean,
  administrador: boolean,
  bloqueado: boolean,
): string {
  if (idade >= 18) {
    if (ativo) {
      if (administrador) {
        if (bloqueado) {
          return "bloqueado";
        } else {
          if (idade >= 21) {
            if (idade >= 30) {
              if (idade >= 40) {
                if (idade >= 50) {
                  return "administrador senior";
                }
                return "administrador experiente";
              }
              return "administrador adulto";
            }
            return "administrador jovem";
          }
          return "administrador";
        }
      } else {
        return "usuario ativo";
      }
    } else {
      return "usuario inativo";
    }
  } else {
    return "menor";
  }
}
