// 1 Write a simple JavaScript program to print expected Output using following array.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange 
document.write(" <b>1. Write a simple JavaScript program to print expected Output using following arraySample array : myColor = ['Red', 'Green', 'White', 'Black'];>Red,Green,White,Black<br/>Red+Green+White+Black<br/>Red,Green,White<br/>Red<br/>Green,White<br/>Red,Green,White,Black,orange</b>");

let myColor = ["Red", "Green", "White", "Black"];

document.write("<br/><b>Ans :-</b><br/>"+myColor);
document.write("<br/>");
document.write(myColor.join('+'));
document.write("<br/>");
document.write(myColor.slice(0,3));
document.write("<br/>");
document.write(myColor.at(0));
document.write("<br/>");
document.write(myColor.slice(1,3));
document.write("<br/>");
myColor.push('orange');
document.write(myColor);

document.write("<br/><br/>");

document.write(" <b>2. Write a JavaScript program to get sum of all array element using for loop and foreach loop.</b><br/><b>Ans:-</b><br/>");

let array = [1,2,3,4,5,6,7,8,9];
let sum = 0,sum2 = 0;
for(let i=0;i<array.length;i++){
    sum += array[i];
}
document.write("With For Loop :- "+sum);

document.write("<br/>");

array.forEach(function(element){
    sum2 += element;
});
document.write("With Foreach loop :- "+sum2);

document.write("<br/><br/>");

document.write(" <b>3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)</b><br/><b>Ans:-</b><br/>");

let array2 = [4,2,6,4,7,8];
function mini_max(){
    let min = array2[0];
    let max = array2[0];
    for(i=1;i<array.length;i++){
        if(min>array2[i]){
            min = array2[i];
        }
        if(max<array2[i]){
            max = array2[i];
        }
    }
    document.write("minimum value is :- "+min+"<br/>");
    document.write("minimum value is :- "+max);
}
mini_max();

document.write("<br/><br/>");

document.write(" <b>4.Write a JavaScript program for convert all array element in ASCII value.</b><br/><b>Ans:-</b><br/>");
// 

let chars = ['A','B','c','4'];
document.write("Original Array :- "+chars+"<br/>");
for(i=0;i<chars.length;i++){
    chars[i] = chars[i].charCodeAt(0);
}
document.write("ASCII value :- "+chars);

document.write("<br/><br/>");

document.write(" <b>5.Write a JavaScript program for remove negative values using the filter array function. numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];</b><br/><b>Ans:-</b><br/>");

let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let result = numbers.filter(function(num){
     return num >= 0;
});
document.write("Positive Numbers:- "+ result);

document.write("<br/><br/>");

document.write(" <b>6. Write a JavaScript program using array map() method and return the square of array element. arr = [2, 5, 6, 3, 8, 9];</b><br/><b>Ans:-</b><br/>");

let Array = [2,5,6,3,8,9];

let square = Array.map((num) => num*num);
document.write("Square of array element :- "+square);

document.write("<br/><br/>");

document.write(" <b>7.Write a JavaScript program for sort array in ascending descending.numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];</b><br/><b>Ans:-</b><br/>");

let sort = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
let ass = [...sort].sort(function(a,b){
    return a-b;
});
let dis = [...sort].sort(function(a,b){
    return b-a;
});
document.write(ass+"<br/>");
document.write(dis);

document.write("<br/><br/>");

document.write(" <b>8. Write a JavaScript program which filters out any string which is less than 8 characters. words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];</b><br/><b>Ans:-</b><br/>");

let Arr = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

let res = Arr.filter(function(num){
    return num.length >= 8;
});
document.write(res);

document.write("<br/><br/>");

document.write(" <b>9. write a JavaScript program to  to print expected output for following string.<br/>x = 'airplane';    output:- r <br/> x = 'oxoxoxox';   output:- 'oXoXoXoX'<br/>x = 'A New Java Book';  <br/> output:-  'a new java book' , 'A NEW JAVA BOOK'</b><br/><b>Ans:-</b><br/>");


let A = "airplane";
document.write(A.split('').at(2)+"<br/>");
document.write(A.charAt(2));

document.write("<br/>");

let B = "oxoxoxox";
for(i=0;i<B.length;i++){
    if(i%2===0){
        document.write(B[i].toLowerCase());
    }else{
        document.write(B[i].toUpperCase());
    }
} 

let C = "A New Java Book";
document.write("<br/>"+C.toLowerCase()+"<br/>");
document.write(C.toUpperCase());

document.write("<br/><br/>");

document.write(" <b>10. write a JavaScript program for array reverse.</b><br/><b>Ans:-</b><br/>");

let a = ["a","b","1",2];

let reverse = a.reverse();
document.write(reverse);

document.write("<br/><br/>");

document.write(" <b>11. write a JavaScript program for check value is found or not?</b><br/><b>Ans:-</b><br/>");

let arr = [10,20,30,40];
document.write(arr.includes(10));

document.write("<br/><br/>");

document.write(" <b>12. write a JavaScript program for print your name and write the no of total character.</b><br/><b>Ans:-</b><br/>");
let name = "varun";
document.write(name+"<br/>");
document.write(name.length);

document.write("<br/><br/>");

document.write(' <b>13.  write a JavaScript program given this output using replace concept.<br/>Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I do not feed my dog in the morning";<br/>Output:-  "I often take a walk with my cat in the evening. His cat follows him everywhere. I do not feed my cat in the morning";</b><br/><b>Ans:-</b><br/>');


let str = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
document.write(str+"<br/>");
let re = str.replace("dog","cat");
document.write(re);

document.write("<br/><br/>");

document.write(' <b>14.  write a JavaScript program convert string to array.<br/>Input :- "Hire the top 1% freelance developers";<br/>Output :- ["Hire", "the", "top", "1%"]; </b><br/><b>Ans:-</b><br/>');

let s = "Hire the top 1% freelance developers";
let sp = s.split(" ").slice(0,4);
document.write("["+sp+"]");

document.write("<br/><br/>");

document.write(" <b>15. write a JavaScript program convert for array to string.<br/>Input:- ['5', 32, 'Daniel'];<br/>Output: 5,32,Daniel </b><br/><b>Ans:-</b><br/>");
let ar = ['5', 32, 'Daniel'];
document.write(ar.join(','));






