/*Question==>1 Write a program to implement polymorphism using inheritance. Consider the example of Shape as base class with method show(). And then a 
child class Circle and Rectangle which inherits the base class Shape and overrides its method show(). Add one more Method with the name of 
getInfo(). This method would display the class name in which it is implemented. Do not override this method. When you will call the method 
getInfo() with child object it would still show the name of the base class, which implies that method has been directly inherited and was 
not overridden.*/
/* Question==>2 Repeat the same example in Question No.1 and make the Shape class Abstract and then 
implement its methods in Derived classes Circle and Rectangle. This time keep the method 
show() as abstract. And you would notice if an abstract method is not implemented in derived 
class then you get a compile time error.
*/


//base class shape
class Shape{ 
    show(){
        throw new Error("Method 'say()' must be implemented.");
    }
    getInfo(){
        console.log("This is base class shape info function");
    }
   
}

// inherit class circle in shape
class Circle extends Shape { 

}
c = new Circle();
c.show();
c.getInfo();

//inherit class of rectangle in shape
class Rectangle extends Shape { 
}
r = new Rectangle();
r.show();
r.getInfo();

