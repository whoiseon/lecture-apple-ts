let literal: '123' = '123'

function literalFnc(a: 'hello'): 1 | 0 {
  return 1;
}

literalFnc("hello");

function lspFnc(lsp: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return [lsp];
}

lspFnc("가위");