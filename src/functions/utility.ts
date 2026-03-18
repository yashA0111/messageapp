export const getExpiryDate = (hours: number = 1) =>
  new Date(Date.now() + hours * 60 * 60 * 1000)
