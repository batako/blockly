// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.Ruby=new Blockly.Generator("Ruby");Blockly.Ruby.addReservedWords("Class,Object,BEGIN,END,__ENCODING__,__END__,__FILE__,__LINE__alias,and,begin,break,case,class,def,defined?,do,else,elsif,end,ensure,false,for,if,in,module,nextnil,not,or,redo,rescue,retry,return,self,super,then,true,undef,unless,until,when,while,yield");Blockly.Ruby.ORDER_ATOMIC=0;Blockly.Ruby.ORDER_MEMBER=2;Blockly.Ruby.ORDER_FUNCTION_CALL=2;Blockly.Ruby.ORDER_EXPONENTIATION=3;Blockly.Ruby.ORDER_LOGICAL_NOT=4;
Blockly.Ruby.ORDER_UNARY_SIGN=4;Blockly.Ruby.ORDER_BITWISE_NOT=4;Blockly.Ruby.ORDER_MULTIPLICATIVE=5;Blockly.Ruby.ORDER_ADDITIVE=6;Blockly.Ruby.ORDER_BITWISE_SHIFT=7;Blockly.Ruby.ORDER_BITWISE_AND=8;Blockly.Ruby.ORDER_BITWISE_XOR=9;Blockly.Ruby.ORDER_BITWISE_OR=9;Blockly.Ruby.ORDER_RELATIONAL=11;Blockly.Ruby.ORDER_LOGICAL_AND=13;Blockly.Ruby.ORDER_LOGICAL_OR=14;Blockly.Ruby.ORDER_CONDITIONAL=15;Blockly.Ruby.ORDER_NONE=99;Blockly.Ruby.INFINITE_LOOP_TRAP=null;
Blockly.Ruby.init=function(){Blockly.Ruby.definitions_=Object.create(null);Blockly.Ruby.functionNames_=Object.create(null);if(Blockly.Variables){Blockly.Ruby.variableDB_?Blockly.Ruby.variableDB_.reset():(Blockly.Ruby.variableDB_=new Blockly.Names(Blockly.Ruby.RESERVED_WORDS_),Blockly.Ruby.variableDB_.localVars=null,Blockly.Ruby.variableDB_.localVarsDB=null,Blockly.Ruby.variableDB_.getRubyName=function(a,b){if(b==Blockly.Variables.NAME_TYPE){for(var c=this.localVars;null!=c;){if(a in c)return c[a];
c=c.chain}return"$"+this.getName(a,b)}return this.getName(a,b)},Blockly.Ruby.variableDB_.pushScope=function(){var a=this.localVars,b=this.localVarsDB;this.localVars=Object.create(null);this.localVarsDB=new Blockly.Names(Blockly.Ruby.RESERVED_WORDS_);this.localVars.chain=a;this.localVarsDB.chain=b},Blockly.Ruby.variableDB_.addLocalVariable=function(a){this.localVars[a]=this.localVarsDB.getName(a,Blockly.Variables.NAME_TYPE);return this.localVars[a]},Blockly.Ruby.variableDB_.popScope=function(){this.localVars=
this.localVars.chain;this.localVarsDB=this.localVarsDB.chain});for(var a=[],c=Blockly.Variables.allVariables(Code.workspace).map(function(a){return a.name}),b=0;b<c.length;b++)a[b]="$"+Blockly.Ruby.variableDB_.getName(c[b],Blockly.Variables.NAME_TYPE)+" = nil";a=a.join("\n");Blockly.Ruby.definitions_.variables=a}};Blockly.Ruby.validName=function(a){return this.variableDB_.safeName_(a)};
Blockly.Ruby.generateDefinitions=function(){var a=[],c;for(c in Blockly.Ruby.definitions_)a.push(Blockly.Ruby.definitions_[c]);return a};
Blockly.Ruby.finish=function(a){var c=Blockly.Ruby.generateDefinitions(),b=0,d=[];d[b++]="def blockly_puts x";d[b++]="  if x.is_a?(Array)";d[b++]="    puts x.join(',')";d[b++]="  else";d[b++]="    puts x";d[b++]="  end";d[b++]="end";d[b++]="";d[b++]="class Array";d[b++]="  def find_first v";d[b++]="    i = self.index(v)";d[b++]="    i ? i + 1 : 0";d[b++]="  end";d[b++]="";d[b++]="  def find_last v";d[b++]="    i = self.rindex(v)";d[b++]="    i ? i + 1 : 0";d[b++]="  end";d[b++]="";d[b++]="  def numbers";
d[b++]="    self.delete_if {|v| !v.is_a?(Numeric)}";d[b++]="  end";d[b++]="";d[b++]="  def sum";d[b++]="    self.numbers.inject(0) {|sum, v| sum + v}";d[b++]="  end";d[b++]="";d[b++]="  def average";d[b++]="    x = self.numbers";d[b++]="    x.sum / x.size.to_f";d[b++]="  end";d[b++]="";d[b++]="  def standard_deviation";d[b++]="    x = self.numbers";d[b++]="    return 0 if x.empty?";d[b++]="    mean = x.average";d[b++]="    variance = x.map {|v| (v - mean) ** 2}.sum / x.size";d[b++]="    Math.sqrt(variance)";
d[b++]="  end";d[b++]="";d[b++]="  def median";d[b++]="    x = self.numbers";d[b++]="    x.sort!";d[b++]="    index  = x.size / 2";d[b++]="    x.size.odd? ? x[index] : ((x[index - 1] + x[index]) / 2.0)";d[b++]="  end";d[b++]="end";d[b++]="";d[b++]="class String";d[b++]="  def find_first v";d[b++]="    i = self.index(v)";d[b++]="    i ? i + 1 : 0";d[b++]="  end";d[b++]="";d[b++]="  def find_last v";d[b++]="    i = self.rindex(v)";d[b++]="    i ? i + 1 : 0";d[b++]="  end";d[b++]="end";d[b++]="";d[b++]=
"class Float";d[b++]="  def even?";d[b++]="    false";d[b++]="  end";d[b++]="";d[b++]="  def odd?";d[b++]="    false";d[b++]="  end";d[b++]="end";return(d.join("\n")+"\n\n"+c.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a};Blockly.Ruby.scrubNakedValue=function(a){return a+"\n"};Blockly.Ruby.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/%/g,"\\%").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Ruby.scrub_=function(a,c){if(null===c)return"";var b="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(b+=this.prefixLines(d,"# ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=this.allNestedComments(d))&&(b+=this.prefixLines(d,"# "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=this.blockToCode(e);return b+c+e};Blockly.Ruby.colour={};Blockly.Ruby.colour_picker=function(a){return["'"+a.getFieldValue("COLOUR")+"'",Blockly.Ruby.ORDER_ATOMIC]};Blockly.Ruby.colour_random=function(a){return["'#%06x' % rand(2**24 - 1)",Blockly.Ruby.ORDER_FUNCTION_CALL]};
Blockly.Ruby.colour_rgb=function(a){var c=Blockly.Ruby.provideFunction_("colour_rgb",["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+"(r, g, b)","  r = (2.55 * [100, [0, r].max].min).round","  g = (2.55 * [100, [0, g].max].min).round","  b = (2.55 * [100, [0, b].max].min).round","  '#%02x%02x%02x' % [r, g, b]","end"]),b=Blockly.Ruby.valueToCode(a,"RED",Blockly.Ruby.ORDER_NONE)||0,d=Blockly.Ruby.valueToCode(a,"GREEN",Blockly.Ruby.ORDER_NONE)||0;a=Blockly.Ruby.valueToCode(a,"BLUE",Blockly.Ruby.ORDER_NONE)||
0;return[c+"("+b+", "+d+", "+a+")",Blockly.Ruby.ORDER_FUNCTION_CALL]};
Blockly.Ruby.colour_blend=function(a){var c=Blockly.Ruby.provideFunction_("colour_blend",["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+"(colour1, colour2, ratio) ",'  _, r1, g1, b1 = colour1.unpack("A1A2A2A2").map {|x| x.to_i(16)}','  _, r2, g2, b2 = colour2.unpack("A1A2A2A2").map {|x| x.to_i(16)}',"  ratio = [1, [0, ratio].max].min","  r = (r1 * (1 - ratio) + r2 * ratio).round","  g = (g1 * (1 - ratio) + g2 * ratio).round","  b = (b1 * (1 - ratio) + b2 * ratio).round","  '#%02x%02x%02x' % [r, g, b]",
"end"]),b=Blockly.Ruby.valueToCode(a,"COLOUR1",Blockly.Ruby.ORDER_NONE)||"'#000000'",d=Blockly.Ruby.valueToCode(a,"COLOUR2",Blockly.Ruby.ORDER_NONE)||"'#000000'";a=Blockly.Ruby.valueToCode(a,"RATIO",Blockly.Ruby.ORDER_NONE)||0;return[c+"("+b+", "+d+", "+a+")",Blockly.Ruby.ORDER_FUNCTION_CALL]};Blockly.Ruby.lists={};Blockly.Ruby.lists_create_empty=function(a){return["[]",Blockly.Ruby.ORDER_ATOMIC]};Blockly.Ruby.lists_create_with=function(a){for(var c=Array(a.itemCount_),b=0;b<a.itemCount_;b++)c[b]=Blockly.Ruby.valueToCode(a,"ADD"+b,Blockly.Ruby.ORDER_NONE)||"None";c="["+c.join(", ")+"]";return[c,Blockly.Ruby.ORDER_ATOMIC]};
Blockly.Ruby.lists_repeat=function(a){var c=Blockly.Ruby.valueToCode(a,"ITEM",Blockly.Ruby.ORDER_NONE)||"None";a=Blockly.Ruby.valueToCode(a,"NUM",Blockly.Ruby.ORDER_MULTIPLICATIVE)||"0";return["["+c+"] * "+a,Blockly.Ruby.ORDER_MULTIPLICATIVE]};Blockly.Ruby.lists_length=function(a){return[(Blockly.Ruby.valueToCode(a,"VALUE",Blockly.Ruby.ORDER_NONE)||"[]")+".length",Blockly.Ruby.ORDER_FUNCTION_CALL]};
Blockly.Ruby.lists_isEmpty=function(a){return[(Blockly.Ruby.valueToCode(a,"VALUE",Blockly.Ruby.ORDER_NONE)||"[]")+".empty?",Blockly.Ruby.ORDER_LOGICAL_NOT]};Blockly.Ruby.lists_indexOf=function(a){var c=Blockly.Ruby.valueToCode(a,"FIND",Blockly.Ruby.ORDER_NONE)||"[]",b=Blockly.Ruby.valueToCode(a,"VALUE",Blockly.Ruby.ORDER_MEMBER)||"''";a="FIRST"==a.getFieldValue("END")?".find_first":".find_last";return[b+a+"("+c+")",Blockly.Ruby.ORDER_FUNCTION_CALL]};
Blockly.Ruby.lists_getIndex=function(a){var c=a.getFieldValue("MODE")||"GET",b=a.getFieldValue("WHERE")||"FROM_START",d=Blockly.Ruby.valueToCode(a,"AT",Blockly.Ruby.ORDER_UNARY_SIGN)||"1";a=Blockly.Ruby.valueToCode(a,"VALUE",Blockly.Ruby.ORDER_MEMBER)||"[]";if("FIRST"==b){if("GET"==c)return[a+".first",Blockly.Ruby.ORDER_FUNCTION_CALL];b=a+".shift";if("GET_REMOVE"==c)return[b,Blockly.Ruby.ORDER_FUNCTION_CALL];if("REMOVE"==c)return b+"\n"}else if("LAST"==b){if("GET"==c)return[a+".last",Blockly.Ruby.ORDER_MEMBER];
b=a+".pop";if("GET_REMOVE"==c)return[b,Blockly.Ruby.ORDER_FUNCTION_CALL];if("REMOVE"==c)return b+"\n"}else if("FROM_START"==b){d=Blockly.isNumber(d)?parseInt(d,10)-1:"("+d+" - 1).to_i";if("GET"==c)return[a+"["+d+"]",Blockly.Ruby.ORDER_MEMBER];b=a+".delete_at("+d+")";if("GET_REMOVE"==c)return[b,Blockly.Ruby.ORDER_FUNCTION_CALL];if("REMOVE"==c)return b+"\n"}else if("FROM_END"==b){if("GET"==c)return[a+"[-"+d+"]",Blockly.Ruby.ORDER_MEMBER];b=a+".delete_at(-"+d+")";if("GET_REMOVE"==c)return[b,Blockly.Ruby.ORDER_FUNCTION_CALL];
if("REMOVE"==c)return b+"\n"}else if("RANDOM"==b){if("GET"==c)return b=Blockly.Ruby.provideFunction_("lists_random_item",["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+"(myList)","  myList[rand(myList.size)]","end"]),[b+"("+a+")",Blockly.Ruby.ORDER_FUNCTION_CALL];b=Blockly.Ruby.provideFunction_("lists_remove_random_item",["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+"(myList)","  myList.delete_at(rand(myList.size))","end"]);b=b+"("+a+")";if("GET_REMOVE"==c)return[b,Blockly.Ruby.ORDER_FUNCTION_CALL];
if("REMOVE"==c)return b+"\n"}throw"Unhandled combination (lists_getIndex).";};
Blockly.Ruby.lists_setIndex=function(a){var c=Blockly.Ruby.valueToCode(a,"LIST",Blockly.Ruby.ORDER_MEMBER)||"[]",b=a.getFieldValue("MODE")||"GET",d=a.getFieldValue("WHERE")||"FROM_START",e=Blockly.Ruby.valueToCode(a,"AT",Blockly.Ruby.ORDER_NONE)||"1";a=Blockly.Ruby.valueToCode(a,"TO",Blockly.Ruby.ORDER_NONE)||"None";if("FIRST"==d){if("SET"==b)return c+"[0] = "+a+"\n";if("INSERT"==b)return c+".unshift("+a+")\n"}else if("LAST"==d){if("SET"==b)return c+"[-1] = "+a+"\n";if("INSERT"==b)return c+".push("+
a+")\n"}else if("FROM_START"==d){e=Blockly.isNumber(e)?parseInt(e,10)-1:"("+e+" - 1).to_i";if("SET"==b)return c+"["+e+"] = "+a+"\n";if("INSERT"==b)return c+".insert("+e+", "+a+")\n"}else if("FROM_END"==d){if("SET"==b)return e=Blockly.isNumber(e)?parseInt(e,10):"("+e+").to_i",c+"[-"+e+"] = "+a+"\n";if("INSERT"==b)return e=Blockly.isNumber(e)?parseInt(e,10)+1:"("+e+" + 1).to_i",c+".insert(-"+e+", "+a+")\n"}else if("RANDOM"==d){if("SET"==b)return b=Blockly.Ruby.provideFunction_("lists_set_random_item",
["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+"(myList, value)","  myList[rand(myList.size)] = "+a,"end"]),b+"("+c+", "+a+")\n";if("INSERT"==b)return b=Blockly.Ruby.provideFunction_("lists_insert_random_item",["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+"(myList, value)","  myList.insert(rand(myList.size), "+a+")","end"]),b+"("+c+", "+a+")\n"}throw"Unhandled combination (lists_setIndex).";};
Blockly.Ruby.lists_getSublist=function(a){var c=Blockly.Ruby.provideFunction_("lists_sublist",["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+"(myList, range)","  myList[range] || []","end"]),b=Blockly.Ruby.valueToCode(a,"LIST",Blockly.Ruby.ORDER_MEMBER)||"[]",d=a.getFieldValue("WHERE1"),e=a.getFieldValue("WHERE2"),f=Blockly.Ruby.valueToCode(a,"AT1",Blockly.Ruby.ORDER_ADDITIVE)||"1";a=Blockly.Ruby.valueToCode(a,"AT2",Blockly.Ruby.ORDER_ADDITIVE)||"1";"FIRST"==d||"FROM_START"==d&&"1"==f?f="0":"FROM_START"==
d?f=Blockly.isNumber(f)?parseInt(f,10)-1:f+".to_i - 1)":"FROM_END"==d&&(f=Blockly.isNumber(f)?-parseInt(f,10):"-"+f+".to_i");"LAST"==e||"FROM_END"==e&&"1"==a?a="-1":"FROM_START"==e?a=Blockly.isNumber(a)?parseInt(a,10)-1:a+".to_i - 1":"FROM_END"==e&&(a=Blockly.isNumber(a)?-parseInt(a,10):"-"+a+".to_i");return[c+"("+b+", "+f+".."+a+")",Blockly.Ruby.ORDER_FUNCTION_CALL]};Blockly.Ruby.logic={};Blockly.Ruby.controls_if=function(a){var c=0,b=Blockly.Ruby.valueToCode(a,"IF"+c,Blockly.Ruby.ORDER_NONE)||"false",d=Blockly.Ruby.statementToCode(a,"DO"+c)||"\n",e="if "+b+"\n"+d;for(c=1;c<=a.elseifCount_;c++)b=Blockly.Ruby.valueToCode(a,"IF"+c,Blockly.Ruby.ORDER_NONE)||"false",d=Blockly.Ruby.statementToCode(a,"DO"+c)||"\n",e+="elsif "+b+"\n"+d;a.elseCount_&&(d=Blockly.Ruby.statementToCode(a,"ELSE")||"\n",e+="else\n"+d);return e+"end\n"};
Blockly.Ruby.logic_compare=function(a){var c={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],b=Blockly.Ruby.ORDER_RELATIONAL,d=Blockly.Ruby.valueToCode(a,"A",b)||"0";a=Blockly.Ruby.valueToCode(a,"B",b)||"0";return[d+" "+c+" "+a,b]};
Blockly.Ruby.logic_operation=function(a){var c="AND"==a.getFieldValue("OP")?"&&":"||",b="&&"==c?Blockly.Ruby.ORDER_LOGICAL_AND:Blockly.Ruby.ORDER_LOGICAL_OR,d=Blockly.Ruby.valueToCode(a,"A",b);a=Blockly.Ruby.valueToCode(a,"B",b);if(d||a){var e="&&"==c?"true":"False";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+c+" "+a,b]};Blockly.Ruby.logic_negate=function(a){return["! "+(Blockly.Ruby.valueToCode(a,"BOOL",Blockly.Ruby.ORDER_LOGICAL_NOT)||"true"),Blockly.Ruby.ORDER_LOGICAL_NOT]};
Blockly.Ruby.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"true":"false",Blockly.Ruby.ORDER_ATOMIC]};Blockly.Ruby.logic_null=function(a){return["nil",Blockly.Ruby.ORDER_ATOMIC]};Blockly.Ruby.logic_ternary=function(a){var c=Blockly.Ruby.valueToCode(a,"IF",Blockly.Ruby.ORDER_CONDITIONAL)||"false",b=Blockly.Ruby.valueToCode(a,"THEN",Blockly.Ruby.ORDER_CONDITIONAL)||"nil";a=Blockly.Ruby.valueToCode(a,"ELSE",Blockly.Ruby.ORDER_CONDITIONAL)||"nil";return[c+" ? "+b+" : "+a,Blockly.Ruby.ORDER_CONDITIONAL]};Blockly.Ruby.loops={};Blockly.Ruby.controls_repeat=function(a){var c=parseInt(a.getFieldValue("TIMES"),10),b=Blockly.Ruby.statementToCode(a,"DO")||"end\n";Blockly.Ruby.INFINITE_LOOP_TRAP&&(b=Blockly.Ruby.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+a.id+"'")+b);return c+".times do\n"+b+"end\n"};
Blockly.Ruby.controls_repeat_ext=function(a){var c=Blockly.Ruby.valueToCode(a,"TIMES",Blockly.Ruby.ORDER_NONE)||"0";c=Blockly.isNumber(c)?parseInt(c,10):c+".to_i";var b=Blockly.Ruby.statementToCode(a,"DO")||"end\n";Blockly.Ruby.INFINITE_LOOP_TRAP&&(b=Blockly.Ruby.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+a.id+"'")+b);return c+".times do\n"+b+"end\n"};
Blockly.Ruby.controls_whileUntil=function(a){var c="UNTIL"==a.getFieldValue("MODE"),b=Blockly.Ruby.valueToCode(a,"BOOL",c?Blockly.Ruby.ORDER_LOGICAL_NOT:Blockly.Ruby.ORDER_NONE)||"false",d=Blockly.Ruby.statementToCode(a,"DO")||"end\n";Blockly.Ruby.INFINITE_LOOP_TRAP&&(d=Blockly.Ruby.INFINITE_LOOP_TRAP.replace(/%1/g,'"'+a.id+'"')+d);return(c?"until ":"while ")+b+" do\n"+d+"end\n"};
Blockly.Ruby.controls_for=function(a){Blockly.Ruby.variableDB_.pushScope();var c=Blockly.Ruby.variableDB_.addLocalVariable(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),b=Blockly.Ruby.valueToCode(a,"FROM",Blockly.Ruby.ORDER_NONE)||"0",d=Blockly.Ruby.valueToCode(a,"TO",Blockly.Ruby.ORDER_NONE)||"0",e=Blockly.Ruby.valueToCode(a,"BY",Blockly.Ruby.ORDER_NONE)||null,f=Blockly.Ruby.statementToCode(a,"DO")||"";Blockly.Ruby.INFINITE_LOOP_TRAP&&(f=Blockly.Ruby.INFINITE_LOOP_TRAP.replace(/%1/g,'"'+a.id+
'"')+f);var g=function(){return Blockly.Ruby.provideFunction_("for_loop",["# loops though all numbers from +params[:from]+ to +params[:to]+ by the step","# value +params[:by]+ and calls the given block passing the numbers","def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+" params","","  from = params[:from] #.to_f","  to = params[:to] #.to_f","  by = params[:by].abs #.to_f","","  from.step(to, (from > to) ? -1 * by : by) do |value|","    yield value","  end","","end"])};a=function(a,b,c){return g()+
" from: ("+a+"), to: ("+b+"), by: ("+c+")"};Blockly.isNumber(b)&&Blockly.isNumber(d)&&(null==e||Blockly.isNumber(e))?(null==e&&(e="1"),b=parseFloat(b),d=parseFloat(d),e=parseFloat(e),g=a(b,d,e)):g=a(b+".to_f",d+".to_f",null==e?"1":"("+e+").to_f");Blockly.Ruby.variableDB_.popScope();return g+" do |"+c+"|\n"+f+"end\n"};
Blockly.Ruby.controls_forEach=function(a){Blockly.Ruby.variableDB_.pushScope();var c=Blockly.Ruby.variableDB_.addLocalVariable(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),b=Blockly.Ruby.valueToCode(a,"LIST",Blockly.Ruby.ORDER_RELATIONAL)||"[]",d=Blockly.Ruby.statementToCode(a,"DO")||"end\n";Blockly.Ruby.INFINITE_LOOP_TRAP&&(d=Blockly.Ruby.INFINITE_LOOP_TRAP.replace(/%1/g,'"'+a.id+'"')+d);Blockly.Ruby.variableDB_.popScope();return b+".each do |"+c+"|\n"+d+"end\n"};
Blockly.Ruby.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"break\n";case "CONTINUE":return"next\n"}throw"Unknown flow statement.";};Blockly.Ruby.math={};Blockly.Ruby.math_number=function(a){a=parseFloat(a.getFieldValue("NUM"));return[a,0>a?Blockly.Ruby.ORDER_UNARY_SIGN:Blockly.Ruby.ORDER_ATOMIC]};
Blockly.Ruby.math_arithmetic=function(a){var c={ADD:[" + ",Blockly.Ruby.ORDER_ADDITIVE],MINUS:[" - ",Blockly.Ruby.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.Ruby.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.Ruby.ORDER_MULTIPLICATIVE],POWER:[" ** ",Blockly.Ruby.ORDER_EXPONENTIATION]}[a.getFieldValue("OP")],b=c[0];c=c[1];var d=Blockly.Ruby.valueToCode(a,"A",c)||"0";a=Blockly.Ruby.valueToCode(a,"B",c)||"0";return[d+b+a,c]};
Blockly.Ruby.math_single=function(a){var c=a.getFieldValue("OP");if("NEG"==c){var b=Blockly.Ruby.valueToCode(a,"NUM",Blockly.Ruby.ORDER_UNARY_SIGN)||"0";return["-"+b,Blockly.Ruby.ORDER_UNARY_SIGN]}a="SIN"==c||"COS"==c||"TAN"==c?"("+Blockly.Ruby.valueToCode(a,"NUM",Blockly.Ruby.ORDER_MULTIPLICATIVE)+")"||"0":"("+Blockly.Ruby.valueToCode(a,"NUM",Blockly.Ruby.ORDER_NONE)+")"||"0";switch(c){case "ABS":b=a+".abs";break;case "ROOT":b="Math.sqrt("+a+")";break;case "LN":b="Math.log("+a+")";break;case "LOG10":b=
"Math.log10("+a+")";break;case "EXP":b="Math.exp("+a+")";break;case "POW10":b="(10 ** "+a+")";break;case "ROUND":b=a+".round";break;case "ROUNDUP":b=a+".ceil";break;case "ROUNDDOWN":b=a+".floor";break;case "SIN":b="Math.sin("+a+" / 180.0 * Math::PI)";break;case "COS":b="Math.cos("+a+" / 180.0 * Math::PI)";break;case "TAN":b="Math.tan("+a+" / 180.0 * Math::PI)"}if(b)return[b,Blockly.Ruby.ORDER_FUNCTION_CALL];switch(c){case "ASIN":b="Math.asin("+a+") / Math::PI * 180";break;case "ACOS":b="Math.acos("+
a+") / Math::PI * 180";break;case "ATAN":b="Math.atan("+a+") / Math::PI * 180";break;default:throw"Unknown math operator: "+c;}return[b,Blockly.Ruby.ORDER_MULTIPLICATIVE]};
Blockly.Ruby.math_constant=function(a){var c={PI:["Math::PI",Blockly.Ruby.ORDER_MEMBER],E:["Math::E",Blockly.Ruby.ORDER_MEMBER],GOLDEN_RATIO:["(1 + Math.sqrt(5)) / 2",Blockly.Ruby.ORDER_MULTIPLICATIVE],SQRT2:["Math.sqrt(2)",Blockly.Ruby.ORDER_MEMBER],SQRT1_2:["Math.sqrt(1.0 / 2)",Blockly.Ruby.ORDER_MEMBER],INFINITY:["1/0.0",Blockly.Ruby.ORDER_ATOMIC]};a=a.getFieldValue("CONSTANT");return c[a]};
Blockly.Ruby.math_number_property=function(a){var c=Blockly.Ruby.valueToCode(a,"NUMBER_TO_CHECK",Blockly.Ruby.ORDER_MULTIPLICATIVE)||"0",b=a.getFieldValue("PROPERTY");if("PRIME"==b)return[Blockly.Ruby.provideFunction_("is_prime",["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+" n","  return false if n < 0","  (2..Math.sqrt(n)).each { |i| return false if n % i == 0}","  true","end"])+"("+c+")",Blockly.Ruby.ORDER_FUNCTION_CALL];switch(b){case "EVEN":var d=c+".even?";break;case "ODD":d=c+".odd?";break;
case "WHOLE":d=c+" % 1 == 0";break;case "POSITIVE":d=c+" > 0";break;case "NEGATIVE":d=c+" < 0";break;case "DIVISIBLE_BY":a=Blockly.Ruby.valueToCode(a,"DIVISOR",Blockly.Ruby.ORDER_MULTIPLICATIVE);if(!a||"0"==a)return["false",Blockly.Ruby.ORDER_ATOMIC];d=c+" % "+a+" == 0"}return[d,Blockly.Ruby.ORDER_RELATIONAL]};
Blockly.Ruby.math_change=function(a){var c=Blockly.Ruby.valueToCode(a,"DELTA",Blockly.Ruby.ORDER_ADDITIVE)||"0";return Blockly.Ruby.variableDB_.getRubyName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" += "+c+"\n"};Blockly.Ruby.math_round=Blockly.Ruby.math_single;Blockly.Ruby.math_trig=Blockly.Ruby.math_single;
Blockly.Ruby.math_on_list=function(a){var c=a.getFieldValue("OP");a=Blockly.Ruby.valueToCode(a,"LIST",Blockly.Ruby.ORDER_NONE)||"[]";switch(c){case "SUM":c=a+".sum";break;case "MIN":c=a+".numbers.min";break;case "MAX":c=a+".numbers.max";break;case "AVERAGE":c=a+".average";break;case "MEDIAN":c=a+".median";break;case "MODE":c=Blockly.Ruby.provideFunction_("math_modes",["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+"(some_list)","  groups = some_list.group_by{|v| v}","  ","  groups = groups.sort {|a,b| b[1].size <=> a[1].size}",
"  ","  max_size = groups[0][1].size","  ","  modes = []","  ","  groups.each do |group|","    ","    break if group[1].size != max_size","    ","    modes << group[0]","    ","  end","  ","  modes","","end"])+"("+a+")";break;case "STD_DEV":c=a+".standard_deviation";break;case "RANDOM":c=a+"[rand("+a+".size)]";break;default:throw"Unknown operator: "+c;}return[c,Blockly.Ruby.ORDER_FUNCTION_CALL]};
Blockly.Ruby.math_modulo=function(a){var c=Blockly.Ruby.valueToCode(a,"DIVIDEND",Blockly.Ruby.ORDER_MULTIPLICATIVE)||"0";a=Blockly.Ruby.valueToCode(a,"DIVISOR",Blockly.Ruby.ORDER_MULTIPLICATIVE)||"0";return[c+" % "+a,Blockly.Ruby.ORDER_MULTIPLICATIVE]};
Blockly.Ruby.math_constrain=function(a){var c=Blockly.Ruby.valueToCode(a,"VALUE",Blockly.Ruby.ORDER_NONE)||"0",b=Blockly.Ruby.valueToCode(a,"LOW",Blockly.Ruby.ORDER_NONE)||"0";a=Blockly.Ruby.valueToCode(a,"HIGH",Blockly.Ruby.ORDER_NONE)||"float('inf')";return["[["+c+", "+b+"].max, "+a+"].min",Blockly.Ruby.ORDER_FUNCTION_CALL]};
Blockly.Ruby.math_random_int=function(a){var c=Blockly.Ruby.valueToCode(a,"FROM",Blockly.Ruby.ORDER_NONE)||"0";a=Blockly.Ruby.valueToCode(a,"TO",Blockly.Ruby.ORDER_NONE)||"0";return["rand("+c+".."+a+")",Blockly.Ruby.ORDER_FUNCTION_CALL]};Blockly.Ruby.math_random_float=function(a){return["rand",Blockly.Ruby.ORDER_FUNCTION_CALL]};Blockly.Ruby.procedures={};
Blockly.Ruby.procedures_defreturn=function(a){Blockly.Ruby.variableDB_.pushScope();for(var c=Blockly.Variables.allVariables(a),b=c.length-1;0<=b;b--){var d=c[b];-1==a.arguments_.indexOf(d)?c[b]=Blockly.Ruby.variableDB_.getRubyName(d,Blockly.Variables.NAME_TYPE):c.splice(b,1)}c=[];for(b=0;b<a.arguments_.length;b++)c[b]=Blockly.Ruby.variableDB_.addLocalVariable(a.arguments_[b],Blockly.Variables.NAME_TYPE);b=Blockly.Ruby.variableDB_.getRubyName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE);d=
Blockly.Ruby.statementToCode(a,"STACK");Blockly.Ruby.INFINITE_LOOP_TRAP&&(d=Blockly.Ruby.INFINITE_LOOP_TRAP.replace(/%1/g,'"'+a.id+'"')+d);var e=Blockly.Ruby.valueToCode(a,"RETURN",Blockly.Ruby.ORDER_NONE)||"";e&&(e="\n  return "+e+"\n");c="def "+b+"("+c.join(", ")+")\n"+d+e+"end";c=Blockly.Ruby.scrub_(a,c);Blockly.Ruby.definitions_[b]=c;Blockly.Ruby.variableDB_.popScope();return null};Blockly.Ruby.procedures_defnoreturn=Blockly.Ruby.procedures_defreturn;
Blockly.Ruby.procedures_callreturn=function(a){for(var c=Blockly.Ruby.variableDB_.getRubyName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=[],d=0;d<a.arguments_.length;d++)b[d]=Blockly.Ruby.valueToCode(a,"ARG"+d,Blockly.Ruby.ORDER_NONE)||"None";return[c+"("+b.join(", ")+")",Blockly.Ruby.ORDER_FUNCTION_CALL]};
Blockly.Ruby.procedures_callnoreturn=function(a){for(var c=Blockly.Ruby.variableDB_.getRubyName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),b=[],d=0;d<a.arguments_.length;d++)b[d]=Blockly.Ruby.valueToCode(a,"ARG"+d,Blockly.Ruby.ORDER_NONE)||"None";return c+"("+b.join(", ")+")\n"};
Blockly.Ruby.procedures_ifreturn=function(a){var c="if "+(Blockly.Ruby.valueToCode(a,"CONDITION",Blockly.Ruby.ORDER_NONE)||"False")+"\n";a.hasReturnValue_?(a=Blockly.Ruby.valueToCode(a,"VALUE",Blockly.Ruby.ORDER_NONE)||"None",c+="\n  return "+a+"\n"):c+="\n  return\n";return c+"end\n"};Blockly.Ruby.text={};Blockly.Ruby.text=function(a){return[Blockly.Ruby.quote_(a.getFieldValue("TEXT")),Blockly.Ruby.ORDER_ATOMIC]};
Blockly.Ruby.text_join=function(a){if(0==a.itemCount_)return["''",Blockly.Ruby.ORDER_ATOMIC];if(1==a.itemCount_){var c=Blockly.Ruby.valueToCode(a,"ADD0",Blockly.Ruby.ORDER_NONE)||"''";return[c+".to_s",Blockly.Ruby.ORDER_FUNCTION_CALL]}if(2==a.itemCount_)return c=Blockly.Ruby.valueToCode(a,"ADD0",Blockly.Ruby.ORDER_NONE)||"''",a=Blockly.Ruby.valueToCode(a,"ADD1",Blockly.Ruby.ORDER_NONE)||"''",[c+".to_s + "+a+".to_s",Blockly.Ruby.ORDER_UNARY_SIGN];c=[];for(var b=0;b<a.itemCount_;b++)c[b]=(Blockly.Ruby.valueToCode(a,
"ADD"+b,Blockly.Ruby.ORDER_NONE)||"''")+".to_s";c=c.join(" + ");return[c,Blockly.Ruby.ORDER_FUNCTION_CALL]};Blockly.Ruby.text_append=function(a){var c=Blockly.Ruby.variableDB_.getRubyName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=Blockly.Ruby.valueToCode(a,"TEXT",Blockly.Ruby.ORDER_NONE)||"''";return c+" = "+c+".to_s + ("+a+").to_s\n"};Blockly.Ruby.text_length=function(a){return[(Blockly.Ruby.valueToCode(a,"VALUE",Blockly.Ruby.ORDER_NONE)||"''")+".size",Blockly.Ruby.ORDER_FUNCTION_CALL]};
Blockly.Ruby.text_isEmpty=function(a){return[(Blockly.Ruby.valueToCode(a,"VALUE",Blockly.Ruby.ORDER_NONE)||"''")+".empty?",Blockly.Ruby.ORDER_FUNCTION_CALL]};Blockly.Ruby.text_indexOf=function(a){var c="FIRST"==a.getFieldValue("END")?".find_first":".find_last",b=Blockly.Ruby.valueToCode(a,"FIND",Blockly.Ruby.ORDER_NONE)||"''";return[(Blockly.Ruby.valueToCode(a,"VALUE",Blockly.Ruby.ORDER_MEMBER)||"''")+c+"("+b+")",Blockly.Ruby.ORDER_FUNCTION_CALL]};
Blockly.Ruby.text_charAt=function(a){var c=a.getFieldValue("WHERE")||"FROM_START",b=Blockly.Ruby.valueToCode(a,"AT",Blockly.Ruby.ORDER_UNARY_SIGN)||"1";a=Blockly.Ruby.valueToCode(a,"VALUE",Blockly.Ruby.ORDER_MEMBER)||"''";b=Blockly.isNumber(b)?parseInt(b,10)-1:b+".to_i - 1";switch(c){case "FIRST":return[a+"[0]",Blockly.Ruby.ORDER_MEMBER];case "LAST":return[a+"[-1]",Blockly.Ruby.ORDER_MEMBER];case "FROM_START":return c=Blockly.Ruby.provideFunction_("text_get_from_start",["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+
" (text, index)",'  return "" if index < 0','  text[index] || ""',"end"]),[c+"("+a+", "+b+")",Blockly.Ruby.ORDER_FUNCTION_CALL];case "FROM_END":return c=Blockly.Ruby.provideFunction_("text_get_from_end",["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+" (text, index)",'  return "" if index < 0','  text[-index-1] || ""',"end"]),[c+"("+a+", "+b+")",Blockly.Ruby.ORDER_FUNCTION_CALL];case "RANDOM":return c=Blockly.Ruby.provideFunction_("text_random_letter",["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+
" (text)","  text[rand(text.size)]","end"]),[c+"("+a+")",Blockly.Ruby.ORDER_FUNCTION_CALL]}throw"Unhandled option (text_charAt).";};
Blockly.Ruby.text_getSubstring=function(a){var c=Blockly.Ruby.valueToCode(a,"STRING",Blockly.Ruby.ORDER_MEMBER)||"''",b=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2"),e=Blockly.Ruby.valueToCode(a,"AT1",Blockly.Ruby.ORDER_NONE)||"1";a=Blockly.Ruby.valueToCode(a,"AT2",Blockly.Ruby.ORDER_NONE)||"1";"FIRST"==b||"FROM_START"==b&&"1"==e?e="0":"FROM_START"==b?e=Blockly.isNumber(e)?parseInt(e,10)-1:t1+".to_i - 1":"FROM_END"==b&&(e=Blockly.isNumber(e)?-parseInt(e,10):"-"+e+".to_i");"LAST"==d||"FROM_END"==
d&&"1"==a?a="-1":"FROM_START"==d?a=Blockly.isNumber(a)?parseInt(a,10)-1:a+".to_i - 1":"FROM_END"==d&&(a=Blockly.isNumber(a)?-parseInt(a,10):a+".to_i");return[c+"["+e+".."+a+"]",Blockly.Ruby.ORDER_MEMBER]};
Blockly.Ruby.text_changeCase=function(a){var c={UPPERCASE:".upcase",LOWERCASE:".downcase",TITLECASE:null},b=c[a.getFieldValue("CASE")];b?(b=c[a.getFieldValue("CASE")],a=Blockly.Ruby.valueToCode(a,"TEXT",Blockly.Ruby.ORDER_MEMBER)||"''",a+=b):(b=Blockly.Ruby.provideFunction_("text_to_title_case",["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+"(str)","  str.gsub(/\\S+/) {|txt| txt.capitalize}","end"]),a=Blockly.Ruby.valueToCode(a,"TEXT",Blockly.Ruby.ORDER_NONE)||"''",a=b+"("+a+")");return[a,Blockly.Ruby.ORDER_MEMBER]};
Blockly.Ruby.text_trim=function(a){var c={LEFT:".lstrip",RIGHT:".rstrip",BOTH:".strip"}[a.getFieldValue("MODE")];return[(Blockly.Ruby.valueToCode(a,"TEXT",Blockly.Ruby.ORDER_MEMBER)||"''")+c,Blockly.Ruby.ORDER_MEMBER]};Blockly.Ruby.text_print=function(a){return"blockly_puts("+(Blockly.Ruby.valueToCode(a,"TEXT",Blockly.Ruby.ORDER_NONE)||"''")+")\n"};
Blockly.Ruby.text_prompt=function(a){var c=Blockly.Ruby.provideFunction_("text_prompt",["def "+Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_+"(msg):","    print (msg)","    $stdin.gets"]),b=Blockly.Ruby.quote_(a.getFieldValue("TEXT"));c=c+"("+b+")";"NUMBER"==a.getFieldValue("TYPE")&&(c+=".to_f");return[c,Blockly.Ruby.ORDER_FUNCTION_CALL]};Blockly.Ruby.variables={};Blockly.Ruby.variables_get=function(a){return[Blockly.Ruby.variableDB_.getRubyName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Ruby.ORDER_ATOMIC]};Blockly.Ruby.variables_set=function(a){var c=Blockly.Ruby.valueToCode(a,"VALUE",Blockly.Ruby.ORDER_NONE)||"0";return Blockly.Ruby.variableDB_.getRubyName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+c+"\n"};