
var fs=require('fs');


var obj=new Object();
var arr=[];
var k=0;
fs.readFile("/home/rishabh/.bash_history","utf8", function (err,data) {
    arr=data.split("\n");
    for(var i=0;i<arr.length;i++)
    {
        var arr1=arr[i].split(" ");
        var cmd=arr1[0];
        console.log(cmd);
        if(cmd in obj) {
            obj[cmd]=++obj[cmd];
        }
        else
            obj[cmd]=1;

    }
    var str="";
    for(var i in obj)
        str+=i+","+obj[i]+"\n";
    console.log(str);

    fs.writeFile("./try1.csv",str,"utf8",function(err,data){
        if(err)
            console.log("there is some error");

    });
});