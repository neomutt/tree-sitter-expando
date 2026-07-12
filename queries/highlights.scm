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

(padding_type) @operator

(padding_character) @variable

(simple_expansion) @property

(expansion) @property

(condition) @property
