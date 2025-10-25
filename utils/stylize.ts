type Config<Key extends string> = {
  base?: string
  options: Record<Key, Record<string, string>>
  preset: Record<Key, string>
}

export function stylize<Key extends string>(config: Config<Key>) {
  return (props: Partial<Record<Key, string>> = {}) =>
    [config.base]
      .concat(
        Object.entries({ ...config.preset, ...props }).map(
          ([key, value]) => config.options[<Key>key][<string>value],
        ),
      )
      .join(' ')
}
