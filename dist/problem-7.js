"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        ;
        getCarAge() {
            const date = new Date();
            return date.getFullYear() - this.year;
        }
    }
    // Sample Input 1:
    // const car = new Car("Honda", "Civic", 2008);
    // const x: number = car.getCarAge();
    // console.log(x);
    // Sample Output 1:
    // 6(assuming current year is 2024)
}
