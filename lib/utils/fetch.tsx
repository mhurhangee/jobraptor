export const fetchAPI = async (url: string, body: unknown, errorMessage: string) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    if (!response.ok || !data || !data.success) {
      throw new Error(errorMessage)
    }
    return data
  } catch (error) {
    throw error
  }
}
