import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'

import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

  /**
   * useMemo memoizará o valor de retorno da variãvel até que suas dependências
   * sofram alterações, dessa forma evitando propagação de renderização em
   * cadeia de componentes que consomem essa variável memoizada como prop
   */
  const summary = useMemo(() => {
    return transactions.reduce(
      (accumulator, transaction) => {
        if (transaction.type === 'income') {
          accumulator.income += transaction.price
          accumulator.total += transaction.price
        } else {
          accumulator.outcome += transaction.price
          accumulator.total -= transaction.price
        }

        return accumulator
      },
      { income: 0, outcome: 0, total: 0 },
    )
  }, [transactions])

  return summary
}
