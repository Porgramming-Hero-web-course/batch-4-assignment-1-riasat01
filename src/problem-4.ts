{
    type Circle = {
        shape: `circle`;
        radius: number
    }

    type Rectangle = {
        shape: `rectangle`;
        width: number;
        height: number
    }

    type ShapeType = Circle | Rectangle;

    const calculateShapeArea = (shapeParam: ShapeType) : number | undefined => {
        if(shapeParam.shape === `circle`){
            return parseFloat((Math.PI * shapeParam.radius * shapeParam.radius).toPrecision(4));
        }else if(shapeParam.shape === `rectangle`){
            return shapeParam.width * shapeParam.height;
        }
    }
    // Sample Input 1:
    // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // console.log(circleArea);
    // Sample Output 1:
    // 78.54;

    // Sample Input 2:
    // const rectangleArea = calculateShapeArea({
    //     shape: "rectangle",
    //     width: 4,
    //     height: 6,
    // });
    // console.log(rectangleArea);
    // Sample Output 2:
    // 24;
}