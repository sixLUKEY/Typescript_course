// Template Literal Types
// Allows to create more precise types using template literals, capable of defining custom types that depend on the actual values of strings at compile time

type Color = "red" | "blue" | "green";
type HexColor<T extends Color> = `#${string}`;

let myColor: HexColor<"blue"> = "#0000ff";

// Index Signature Labels
