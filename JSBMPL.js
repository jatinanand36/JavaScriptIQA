var x;
undefined
typeof x;
"undefined"
x=100;
100
typeof x;
"number"
x = 100.20;
100.2
typeof x;
"number"
x = 100/0;
Infinity
typeof x;
"number"
x="100"+100;
"100100"
typeof x;
"string"
x = 100+"100";
"100100"
typeof x;
"string"
x = 1100-"100";
1000
x = 100/"100"
1
x = 100/"amit"
NaN
typeof x;
"number"
x = 100%"100"
0
x = 100/"amit"
NaN
typeof x;
"number"
var y;
undefined
x = 100/y;
NaN
x = 100 + true;
101
x = 100 + false;
100
x = 100 * false;
0
"ten"/"two";
NaN
var d = "two"/"one";
undefined
isNaN(d);
true
isNaN(d)?"YES":"NO";
"YES"
var t = "100";
undefined
typeof t;
"string"
parseInt("3");
3
parseInt("y");
NaN
var d = 10.20;
undefined
var e = Number("10");
undefined
e;
10
var e = Number("10.34");
undefined
e;
10.34
var e = Number("df");
undefined
e;
NaN
e =100/0;
Infinity
isFinite(e);
false
var r = "Jatin"
undefined
typeof r
"string"
r = "It's my Life"
"It's my Life"
print(r)
undefined
typeof r;
"string"
var w = true;
undefined
typeof w;
"boolean"
v = [1,2,3];
(3) [1, 2, 3]
typeof v;
"object"
v instanceof Array;
true
x instanceof HTMLAllCollection;
false
typeof Array;
"function"
x instanceof Object;
false
v instanceof Object;
true
typeof Object;
"function"
var mike = {};
undefined
mike instanceof Object;
true
typeof mike;
"object"
typeof mike;
"object"
var d=[];
undefined
typeof d;
"object"
d instanceof Object;
true
d instanceof Array;
true
mike instanceof Array;
false
var tim = {id:1001,name:"Jatin"}
undefined
typeof tim;
"object"
Function
ƒ Function() { [native code] }
typeof function;
VM4241:1 Uncaught SyntaxError: Unexpected token ';'
typeof function()
{}
"function"
tim;
{id: 1001, name: "Jatin"}
tim instanceof Object;
true
var d = ["Hi",true,1,1.23,{"id":123},function(){}]
undefined
d;
(6) ["Hi", true, 1, 1.23, {…}, ƒ]
typeof d;
"object"
d instanceof Object; 
true
d instanceof Array;
true
d[5] instanceof Array;
false
d[5] instanceof Function;
true
d[5] instanceof Object;
true
d[5] instanceof Number;
false
d[5] instanceof Boolean;
false
var s = {id:123,name:'Jatin anand',city:['Delhi',"Ghaziabad"]};
undefined
s;
{id: 123, name: "Jatin anand", city: Array(2)}
typeof s;
"object"
s instanceof Object;
true
s instanceof Function;
false
s instanceof Window;
false
s instanceof Object;
true
s instanceof Array;
false
s.city instanceof Array;
true
s.city instanceof Object;
true
s.city instanceof Function;
false
s.city instanceof Window;
false
s.city instanceof function;
VM5406:1 Uncaught SyntaxError: Unexpected token ';'
function JatinAnand(){console.log('ddff');}
undefined
typeof JatinAnand;
"function"
JatinAnand();
VM5538:1 ddff
undefined
var JA = JatinAnand();
VM5538:1 ddff
undefined
JS;
VM5667:1 Uncaught ReferenceError: JS is not defined
    at <anonymous>:1:1
(anonymous) @ VM5667:1
JA();
VM5699:1 Uncaught TypeError: JA is not a function
    at <anonymous>:1:1
(anonymous) @ VM5699:1
var JA = JatinAnand;
undefined
JA()
VM5538:1 ddff
undefined
JatinAnand()
VM5538:1 ddff
undefined
s;
{id: 123, name: "Jatin anand", city: Array(2)}
s = null;
null
s;
null
typeof tim;
"object"
var a;
undefined
a = null;
null
typeof a;
"object"
typeof null;
"object"
t =100;
100
var t2="100";
undefined
t ==t2;
true
t===t2;
false
var ee;
undefined
typeof ee;
"undefined"
(ee==undefined)?"Y":"N"
"Y"
(ee===undefined)?"Y":"N"
"Y"
(ee=="undefined")?"Y":"N"
"N"
ee;
undefined
var nn = null;
undefined
typeof nn;
"object"
(nn==null)?"Y":"N"
"Y"
(nn=="null")?"Y":"N"
"N"
(typeof nn==="null")?"Y":"N"
"N"
(typeof ee=="undefined")?"Y":"N"
"Y"
var k;
undefined
if(k){console.log("Truthy")} else{console.log("False");}
VM7682:1 False
undefined
k=1;
1
if(k){console.log("Truthy")} else{console.log("False");}
VM7756:1 Truthy
undefined
k=11/"11"
1
if(k){console.log("Truthy")} else{console.log("False");}
VM7846:1 Truthy
undefined
k=11/"elevn"
NaN
if(k){console.log("Truthy")} else{console.log("False");}
VM7888:1 False
undefined
