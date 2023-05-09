export const parseCookies = () => {
  const cookies = document.cookie.split("; ")
  const parsedCookies: Record<string, string> = {}

  for (const cookie of cookies) {
    const [key, value] = cookie.split("=")

    parsedCookies[key] = decodeURIComponent(value)
  }

  return parsedCookies
}

export const IsLoggedIn = () => !!parseCookies().username

export const capitalize = (s: string): string =>
  s
    .split(/[-_\s]/g)
    .map((part) => part.at(0)?.toUpperCase() + part.slice(1).toLowerCase())
    .join(" ")

export const formattedDate = (date: string | Date) => {
  date = new Date(date)

  const [hours, minutes, day, month, year] = [
    date.getHours().toString().padStart(2, "0"),
    date.getMinutes().toString().padStart(2, "0"),
    date.getDate().toString().padStart(2, "0"),
    date.getMonth().toString().padStart(2, "0"),
    date.getFullYear().toString().padStart(2, "0"),
  ]

  return `${hours}:${minutes}\n${day}/${month}/${year}`
}
