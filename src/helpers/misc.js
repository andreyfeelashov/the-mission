const environment = {
  browser: window != null
};

export function getEnvironment() {
  return environment;
}
