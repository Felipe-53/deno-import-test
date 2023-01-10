import { hello } from "./hello.ts";
import { world } from "./world.ts";

export function helloWorld() {
  return hello() + " " + world();
}
