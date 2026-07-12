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

[
  (padding_type)
  (padding_character)
  (simple_expansion)
  (expansion)
  (condition)
] @operator
