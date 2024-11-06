// Your code here

// Define the polygon class
class Polygon {
    constructor (sides) {
        this.sides = sides;
    }

    // Getter to count the number of sides
    get countSides() {
        return this.sides.length;
    }

    // Getter to claculate the perimeter by summing up the side lengths
    get perimeter (){
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

// Define the triangle class that inherits from polygon
class Triangle extends Polygon {
    // getter to check if the triangle is valid based on side lengths
    get isValid() {
        if (this.countSides !== 3) return false;
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
    }
}


// Define class square that inherits from the polygon
class Square extends Polygon {
    // Getter to check if square is valid (all sides equal)
    get isValid() {
        if (this.countSides !== 4) return false;
        const [a, b, c, d] = this.sides;
        return a === b && b === c && c === d;
    }

    // Getter to claculate the area of the square
    get area() {
        if (!this.isValid) return 0;
        const [side] = this.sides;
        return side ** 2;
    }
}

// Example usage

// testing the polygon class
const polygon = new Polygon([3, 4, 5]);
console.log(polygon.countSides);
console.log(polygon.perimeter);


// testing the triangle class
const triangle = new Triangle([3, 4, 5]);
console.log(triangle.isValid);
console.log(triangle.perimeter);

const triangle2 = new Triangle([3, 4, 8]);
console.log(triangle2.isValid);


// testing square
const square = new Square([4, 4, 4, 4]);
console.log(square.isValid);
console.log(square.perimeter);
console.log(square.area);

const square2 = new Square([4, 4, 4, 5]);
console.log(square2.isValid);