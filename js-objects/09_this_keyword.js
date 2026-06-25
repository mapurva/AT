let student={

name:"Rahul",

show(){

console.log(this.name);

}

};

student.show();

let show=student.show;

show(); //Calling object changed.