export function computeStoryScore (cards) {
  if (!cards) {
    return -1
  }

  const cardValueCounts = cards.reduce((acc, card) => {
    const isPositiveValue = card.value > -1
    const isInAccumulator = acc.find(v => v.value === card.value)
    if (!isInAccumulator && isPositiveValue) {
      return acc.concat({
        value: card.value,
        count: cards.filter(v => v.value === card.value).length,
      })
    }
    return acc
  }, [])

  if (cardValueCounts.length === 0) {
    return -1
  }

  const greatestCount = cardValueCounts.slice().sort(function(a,b) {
    const aValue = cardValueCounts.find(v => v.value === a.value)
    const bValue = cardValueCounts.find(v => v.value === b.value)
    const aCount = aValue.count
    const bCount = bValue.count

    return aCount - bCount
  }).pop()

  const greatestCountValues = cardValueCounts.filter(value => value.count === greatestCount.count)

  if (greatestCountValues.length === 1) {
    return greatestCount.value
  }

  const sortedValues = greatestCountValues.reduce((acc, value) => acc.concat(value.value), []).sort()

  var half = Math.floor(sortedValues.length / 2);

  return sortedValues[half];
}
