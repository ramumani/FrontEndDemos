
function Circle(){
    this.firstName =  "regularCircle"
    this.draw = function(){
        //console.log("draw12");
        return "drawing circle";
    };
}

let circle = new Circle();
//console.log(circle.firstName);
//console.log(circle.draw());
circle.draw();