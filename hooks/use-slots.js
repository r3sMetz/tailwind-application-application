export const useSlots = (children, slotNames) => {
  const slots = {}

  slotNames.forEach((name) => {
    const slotElement = children.find((child) => child.props.slot === name)
    if (slotElement) slots[name] = slotElement.props.children
  })

  return slots
}
