export function app(options: AppOptions) {
  console.log(`Hello ${options.place}`);
}

interface AppOptions {
  place: "world"
}
