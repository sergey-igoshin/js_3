/*
4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

const count = 20; simbol = 'x';

for (let i = 1; i < count + 1; i++){
  let box = [];
  for(let j = 0; j < i; j++){
    box[box.length]=simbol;
  }  
  console.log(box.join(''))
}