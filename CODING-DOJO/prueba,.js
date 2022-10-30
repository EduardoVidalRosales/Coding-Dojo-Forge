
    var auntContactInfo = ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);


    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croquetas de papa");
    console.log(frozen);


var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

var x = [2,4,6,3,7]
var y = x.length
console.log(x[y-1])

var arr = ["Up", "You", "Give", "To", "Going", "Never"];
for(var i = arr.length-1; i >= 0; i = i - 1) {
    console.log(arr[i]);
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for(var i = 1; i < arr.length; i = i + 2) {
    sum = sum + arr[i];
    console.log(arr[i]);
    console.log(sum);
}
var arr = [8, 2, 0, 6, 12, 4, 3];
for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 6) {
        console.log(true);
    }
}
var a = [1,3,5,7];
a[a.length-3] = a[a.length/2+a.lenght/4];
console.log(a);
var x = [1,3,5,7];
x[x.length-3] = x[x.length/2+x.length/4];
console.log(x)
var x = [1,3,5,7];
var y = [2,4,6];
x[2] = y[x.length-3];
console.log(x);
var x = [1,3,5,7];
var y = [2,4,6];
x[2] = y[x.length-3] + x[x[0] + y[0]];
console.log(x);
var x = [1,3,5]
x[0] = x[2];
x[1] = x[0];
console.log(x);