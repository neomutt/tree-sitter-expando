[
  "{"
  "}"
  (start_if)
  (end_if)
] @punctuation.bracket

[
  "?"
  "&"
] @punctuation.delimiter

"%" @punctuation.special

(identifier) @variable

[
  (padding_type)
  (padding_character)
  (simple_expansion)
  (expansion)
  (condition)
] @operator
