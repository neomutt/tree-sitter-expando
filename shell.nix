{
  pkgs ? import <nixpkgs> { },
}:

with pkgs;
mkShell {
  name = "tree-sitter-expando";
  buildInputs = [
    tree-sitter
  ];
}
