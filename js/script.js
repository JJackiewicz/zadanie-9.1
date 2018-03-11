function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
        return (a * h /2);
    }
      else {
        return 'Nieprawidłowe dane';
      }
    }

    var triangle1Area = getTriangleArea(10, 0);
    var triangle2Area = getTriangleArea(12, 12);
    var triangle3Area = getTriangleArea(15, 15);

    console.log(triangle1Area);