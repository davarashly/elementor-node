export const parseCookies = () => {
  const cookies = document.cookie.split("; ")
  const parsedCookies: Record<string, string> = {}

  for (const cookie of cookies) {
    const [key, value] = cookie.split("=")

    parsedCookies[key] = decodeURIComponent(value)
  }

  return parsedCookies
}
