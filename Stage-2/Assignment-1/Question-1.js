/* Write a program to implement polymorphism using inheritance. Consider the example of Shape as base class with method show(). And then a 
child class Circle and Rectangle which inherits the base class Shape and overrides its method show(). Add one more Method with the name of 
getInfo(). This method would display the class name in which it is implemented. Do not override this method. When you will call the method 
getInfo() with child object it would still show the name of the base class, which implies that method has been directly inherited and was 
not overridden.*/


//base class shape
class Shape{ 
    show(){
        console.log('This is a show method of base class');
    }
    getInfo(){
        console.log("This is base class shape info function");
    }
}

// inherit class circle in shape
class Circle extends Shape { 
    show(){
       console.log('This is circle show override method');
    }
}
c = new Circle();
c.getInfo(); //will call the method getInfo() with child object it would still show the name of the base class, which implies that method has been directly inherited and was  not overridden.
c.show();

//inherit class of rectangle in shape
class Rectangle extends Shape { 
    show(){
       console.log('This is Rectangle show override method');
    }
}
r = new Rectangle();
r.getInfo(); //will call the method getInfo() with child object it would still show the name of the base class, which implies that method has been directly inherited and was  not overridden.
r.show(); 
// this is branch code for feature branch
// this is second comment for master meerge