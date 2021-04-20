function Interval(von, bis, step) {
    var Numbers = [0];
    for (var i = von; i <= bis;i=i+step) {
        Numbers[Numbers.length] = i;
        document.write("<tr><td>"+i+"</td></tr>");
    }
    return Numbers;
}
console.log(Interval(1,100,2));



//document.getElementById("table").innerHTML+='<tr>'+'<td>'+(Numbers[Numbers.length]) +'</td>'  +'</td>'