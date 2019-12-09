import stringHash from "string-hash";


export function localHashTool(txt: string | number, salt: "FOO" | "BAR") {
  return stringHash(txt + salt);
}