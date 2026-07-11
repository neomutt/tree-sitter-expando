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
        $.character,
        $.variable,
      ),
    ),
    character: _ => token.immediate(/[^%]/),
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
      '%{',
      /[^}]+/,
      '}',
    ),
    padding: _ => seq(
      choice('%*', '%>', '%|'),
      token.immediate(/./),
    ),
    condition: _ => /[^}?]+/,
    if: $ => seq(
      choice('%<', '%?'),
      $.condition,
      '?',
      $.pattern,
      optional(seq('&', $.pattern)),
      choice('>', '?'),
    ),
  }
});
