{
    class Car {
        constructor( public make: string, public model: string, public year: number){};
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