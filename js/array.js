var animals=["dog","cat","bird","octopus"];
if (3 in animals){
    console.log(" число есть в массиве");
}

console.log(animals[3])

var bird = new Pet();

   
var arr =   [];
var per = "";
for (var index = 1; index < 100; index++) {
    per =   per+" "+index;
}
prompt("cir",per);
console.log(per);

var per = "";
var count   =   0;
for (var m_index in document){
    count   ++;
    per =   per+" "+m_index;
    // console.log(m_index)
}
console.log(count);
console.log(per);