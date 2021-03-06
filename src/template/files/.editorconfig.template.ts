import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

const editorConfigTemplate = trimAndAddFinalNewline(`
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
printWidth = 80

[*.{ts,tsx,js,jsx,mjs,json,json5,jsonc}]
curly_bracket_next_line	= true
spaces_around_operators = true
spaces_around_brackets = outside
indent_brace_style = K&R
max_line_length = 120

[*.md]
trim_trailing_whitespace = false
`);

export default editorConfigTemplate;
