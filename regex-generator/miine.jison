&&	and
||	or
!	not
==	be
!=	aint
=	as
===	is
!==	isnt
!(===)	is not
.	+ (string)
function	fn

{([	{([
})]	})]

@, this	this
of	in
in	no JS equivalent
a ** b	Math.pow(a, b)
a // b	Math.floor(a / b)
a %% b	(a % b + b) % b

true/false,yes/no,on/off
if/else/elseif/then/unless
for/while/dowhile/until/dountil

...
..
for/in
do
foreach/each/map/iter/every/all/any/some
try/catch/finally

**	exponentiation
\/\/	integer division
%%	provides true mathematical modulo.

solipsism = true if mind? and not world?
speed = 0
speed ?= 15
footprints = yeti ? "bear"

switch day
  when "Mon" then go work
  when "Tue" then go relax
  when "Thu" then go iceFishing
  when "Fri", "Sat"
    if day is bingoDay
      go bingo
      go dancing
  when "Sun" then go church
  else go work

[expression] = switch
  when [expression] then [case]
  else [default]

healthy = 200 > cholesterol > 60

await/defer

OPERATOR = /// ^ (
  ?: [-=]>             # function
   | [-+*/%<>&|^!?=]=  # compound assign / compare
   | >>>=?             # zero-fill right shift
   | ([-+:])\1         # doubles
   | ([&|<>])\2=?      # logic / shift
   | \?\.              # soak access
   | \.{2,3}           # range or splat
) ///

OPERATOR = /^(?:[-=]>|[-+*\/%<>&|^!?=]=|>>>=?|([-+:])\1|([&|<>])\2=?|\?\.|\.{2,3})/;