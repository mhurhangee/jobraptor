export const validateUrl = (url: string | undefined) => {
  try {
    new URL(url || '')
    return true
  } catch {
    return false
  }
}
