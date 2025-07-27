export function withInstall(components: any, options: any = {}) {
  const result = options.install
    ? { ...components, install: options.install }
    : components;
  return result;
}