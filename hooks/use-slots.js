export const useSlots = (children, slotNames) => {
  const slots = {}

  slotNames.forEach((name) => {
    const slotIndex = children.findIndex((child) => child.props.slot === name)
    if (slotIndex >= 0) slots[name] = children[slotIndex + 1]
  })

  return slots
}
