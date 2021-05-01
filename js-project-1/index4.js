let marks = " s";

//
if (marks) {
  marks = marks.trim();
}

console.log(typeof marks);

console.log(Boolean(marks));

if (!marks) {
  console.log("data not defined");
} else {
  console.log(marks.length, typeof marks);
}

//console.log(marks.length, typeof marks);
