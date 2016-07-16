![Bunnyscript- Simple Computer](https://github.com/NoahRoseLedesma/bunny/blob/master/bunny.png)

Bunnyscript is a pseudo assembly language designed for understanding the inner workings of simple computers.


## Installation

```sh
$ git clone https://github.com/NoahRoseLedesma/bunny.git
$ node bunny.js your.bunny
```

## Bunnyscript
Bunnyscript is _easy_ to pick up with little to no programming knowledge, yet can challenge the problem solving skills of master computer scientists. 
Loosely based on the [Harvard Architecture](https://en.wikipedia.org/wiki/Harvard_architecture), Bunnyscript consists of 11 operations, stored memory, and one 'cell' of stored memory

## Explain Like I'm 5
Bunnyscript is very simple computer. 

This computer is like working in a warehouse. There are places for boxes to sit on the ground. You can pick up a box and do stuff with it, however it is heavy and you can only carry one at a time. You can also place new boxes on the ground. 

These boxes resemble data. Bunnyscript can only hold one variable in its 'hands' at a time, but can store large quantities of data on the 'gound'.

## Language overview
This section covers all the functionality of bunnyscript

### `$` - variables
Variables in bunnyscript exist in the stored memory, but can be copied to the hands.
There are two variable operators `->` and `<-`.
#### `<-` - Copy To
Copies a literal to stored memory. If no literal is provided the hands will be copied to the sored memory.
Example:
```
$a <- 100
$a ->
$b <-
```
`$a` has been set to 100, copied into the hands, and copied from the hands into `$b`
#### `->` - Copy From
Copies from a variable to the hands

Example:
```
$a <- 100
$a ->
```
`100` in now in the hands
### out - Console output
`out` will output the data in hand to the console

Example:
```
$a <- 123
$a ->
out
```
Output:
```
: 123
```
### Hopping
If there is one thing bunnies do a lot, it's hopping!
Hopping allows execution to _hop_ from one point in the file to another.
There are three types of hops `hop`, `hoz`, and `hon`.
Additionally hopping requires a point to hop to.
### `@` - Hop point
`@` defines a point any of the hop commands can jump to. Points need to be named.

Example
```
hop @point2
@point1
@point2
```
In this program `@point1` is never reached, because it is hopped over.

### `hop` - Basic Hop
Hop will hop to a hop point

### `hoz` - Hop if Zero
Will hop to the specified point if the value stored in hands is zero.
### `hon` - Hop if Negative
Will hop to the specified point if the value stored in hands is negative.
## `add`
`add` will add the value stored in hands to a specified variable.
Note that the result is stored in the hands.

Example:
```
$a <- 1
$a ->
add $a
out
```
Output:
```
: 2
```
## `sub`
`sub` will subtract the value stored in hands from a specified variable
Functionality is similar to `add` in the sense that the result is stored in the hands.

Example:
```
$a <- 1
$a ->
sub $a
out
```
Output:
```
: 0
```

## `bump`
Bump will increment or decrement the value in hand.
* `bump+` increments
* `bump-` decrements

Example:
```
$a <- 1
bump+
out
bump-
out
```
Output:
```
: 2
: 1
```

## `#` - Memory
`#` initializes the stored memory, and must be used before sored memory is accessed.

Example:
```
#1
$a <- 123
```
`#1` creates enough space for one variable, `#2` for two, etc.
