function areaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  
  test('areaTriangulo', () => {
    expect(areaTriangulo(10, 5)).toBe(25);
    expect(areaTriangulo(20, 10)).toBe(100);
    expect(areaTriangulo(30, 15)).toBe(225);
  });
  

  function volumenEsfera(radio) {
    const pi = 3.141592653589793;
    return (4 / 3) * pi * radio ** 3;
  }
  
  test('volumenEsfera', () => {
    expect(volumenEsfera(1)).toBeCloseTo(4.1887902047863905, 6);
    expect(volumenEsfera(2)).toBeCloseTo(26.80834336491971, 6);
    expect(volumenEsfera(3)).toBeCloseTo(72.37941595942986, 6);
  });
  

  function division(numero1, numero2) {
    if (numero2 === 0) {
      throw new Error('El divisor no puede ser 0.');
    }
    return numero1 / numero2;
  }
  
  test('division', () => {
    expect(division(10, 2)).toBe(5);
    expect(division(20, 4)).toBe(5);
    expect(division(30, 6)).toBe(5);
  
    // Prueba con un divisor 0.
  
    expect(() => {
      division(10, 0);
    }).toThrow(Error);
  });

  function valorAbsoluto(numero) {
    return numero >= 0 ? numero : -numero;
  }
  
  test('valorAbsoluto', () => {
    expect(valorAbsoluto(10)).toBe(10);
    expect(valorAbsoluto(-10)).toBe(10);
    expect(valorAbsoluto(0)).toBe(0);
  });

  function factorial(numero) {
    if (numero < 0) {
      throw new Error('El número no puede ser negativo.');
    }
    if (numero === 0) {
      return 1;
    }
    return numero * factorial(numero - 1);
  }
  
  test('factorial', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
  });
  