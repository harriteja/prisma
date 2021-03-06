export function maskSchema(schema: string): string {
  const regex = /url\s*=\s*.+/
  return schema
    .split('\n')
    .map(line => {
      const match = regex.exec(line)
      if (match) {
        return `${line.slice(0, match.index)}url = "***"`
      }
      return line
    })
    .join('\n')
}
