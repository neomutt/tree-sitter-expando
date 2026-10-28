rockspec_format = '3.0'
description = {
  summary = '',
  detailed = '',
  labels = {},
  homepage = 'https://github.com/neomutt/tree-sitter-expando',
  license = 'MIT',
}
package = description.homepage:match('/([^/]+)/?$')
version = 'scm-1'
source = {
  url = description.homepage:gsub('https', 'git')
}

build = {
  type = "treesitter-parser",
  lang = "expando",
  generate = true,
}
