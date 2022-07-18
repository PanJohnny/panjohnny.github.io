# CatScript
CatScript is interpreted programming language made on top of JavaScript.

## Basic concepts
In cat script we have an array. We call it stack. In the stack there are values. We store the stack index. You can move the index and change value called cursor. Which is the value at the index. Only cat or cat related emojis can be used. Other characters are ignored making it great for commenting.

## Commands
```
x++ 🙀 increment cursor
x-- 😿 decrement cursor
>>> 😽 increment stack indexc
<<< 😾 decrement stack index
x 😺 return cursor
stack 😸 return stack
print 🐱‍👓 
if 😼 
() 🐈
{} 😻
= 😹
> 🐱‍🏍
< 🐱‍🐉
! 🐶
end 🐱‍🚀
toChar 🐱‍💻
x=input 🐭
```

## Examples

### Simple if example
---
**CatScript**
```catscript
😼🐈😺 😹😹 😽😺🐈 😻
  😾
  🙀
😻
```

**More understandable:**
```js
if(cursor == >>corser) { // see that the index moves, we support any operation in if statement if it returns value
// this is true because stack is currently 0,0
  << // index moves back
  cursor++ // increment at original position
}
```
This will result in stack `1,0`
### Hello world
---
**CatScript:**
```
🙀🙀🙀🙀🙀🙀🙀🙀🐱‍👓🐱‍💻😺😽 h
🙀🙀🙀🙀🙀🐱‍👓🐱‍💻😺😽 e
🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🐱‍👓🐱‍💻😺😽 l
🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🐱‍👓🐱‍💻😺😽 l
🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🐱‍👓🐱‍💻😺😽 o
🐱‍👓🐱‍💻😺😽 SPACE
🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🐱‍👓🐱‍💻😺😽 w
🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🐱‍👓🐱‍💻😺😽 o
🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🐱‍👓🐱‍💻😺😽 r
🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🙀🐱‍👓🐱‍💻😺😽 l
🙀🙀🙀🙀🐱‍👓🐱‍💻😺 d
```

**More understandable:**
```js
Increment cursor 8 times print(toChar(cursor)) >>> move to next index
```
That process is repeated for every letter