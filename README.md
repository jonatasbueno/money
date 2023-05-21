# Sobre Performance

## Por que um componenete renderiza ?
- Hook changed (mudou estado, contexto, reducer)
- Props chenged (mudou propriedades)
- Parent rerendered (component pai renderizou)

## Fluxo de renderização ?
<ol>
  <li>O React recria o HTML da interface daquele componente</li>
  <li>Compara a versão do HTMl recriada com a versão anterior</li>
  <li>Se mudou algo ele rescreve o HTML na tela</li>
</ol>

## Memo

Ele adiciona uma etapa antes do fluxo de renderização (por isso deve ser utilizado com cuidado)

<ol>
  <li>Hooks Changed, Props Changed (deep comparison, por isso ele deve ser utilizado com cuidado)</li>
  <li>Compara com a versão anterior dos hooks e props</li>
  <li>Se mudou algo ele permite a nova renderização</li>
</ol>