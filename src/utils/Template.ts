export type WithDefaultProps<P extends Partial<DP>, DP extends object> = Omit<P, keyof DP> & Partial<Pick<P, keyof DP>>;

export interface Template<P extends Partial<DP>, DP extends object = {}> {
  (props: WithDefaultProps<P, DP>): string;
  defaultProps: DP;
}

export default function template<P extends object>(fn: (props: P) => string): Template<P, {}>;
export default function template<P extends Partial<DP>, DP extends object>(
  fn: (props: P) => string,
  defaultProps: DP,
): Template<P, DP>;
export default function template<P extends Partial<DP>, DP extends object = {}>(
  fn: (props: P) => string,
  defaultProps: DP = {} as DP,
) {
  const tmpl = ((props: WithDefaultProps<P, DP>) => fn(({ ...defaultProps, ...props } as unknown) as P)) as Template<
    P,
    DP
  >;
  tmpl.defaultProps = defaultProps;
  return tmpl;
}
