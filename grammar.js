/**
 * @file muttrc expando
 * @author Wu <wuzhenyu@ustc.edu>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "expando",

  rules: {
    pattern: $ => repeat1(
      choice(
        $._character,
        $.user_variable,
        $.variable,
      ),
    ),
    _character: _ => token.immediate(/[^%$]/),
    user_variable: $ => seq(
      '$',
      alias(token.immediate(/[_a-zA-Z]+/), $.identifier),
    ),
    variable: $ => choice(
      $.simple_expansion,
      $.expansion,
      $.padding,
      $.if,
    ),

    simple_expansion: _ => seq(
      '%',
      /[^\{*>|<?]/,
    ),
    expansion: _ => seq(
      '%',
      token.immediate('{'),
      /[^}]+/,
      '}',
    ),
    padding: $ => seq(
      '%',
      alias(token.immediate(choice('*', '>', '|')), $.padding_type),
      alias(token.immediate(/./), $.padding_character),
    ),
    condition: _ => /[^}?]+/,
    if: $ => seq(
      '%',
      alias(token.immediate(choice('<', '?')), $.start_if),
      $.condition,
      '?',
      $.pattern,
      optional(seq('&', $.pattern)),
      alias(choice('>', '?'), $.end_if),
    ),
  }
});
