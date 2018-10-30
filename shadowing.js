var name = "Global";
var friendsName = "Scopes";
var bandName = name + " and the " + friendsName;

function makeBandName(name, friendsName) {
  var bandName = name + " and the " + friendsName;
  return bandName;
}

var band1 = makeBandName("Statement", "Semicolons");
var band2 = makeBandName("Function", "Stack Frames");
console.log(band1);
