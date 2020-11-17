+ content
  + macro-call, MacroCount: 0..N
    + arg, ArgCount: 0..N
      + content
  + non-macro-content, NonMacroCount: 0..MacroCount+1

content:
    MacroCount-NonMacroCount-(n|m-ArgCount-(content)+-(content))+
