import operate from '../logic/operate';

describe('Testing operate file', () => {
  test('Summation', () => {
    const result = operate(10, 12, '+');
    expect(result).toBe('22');
  });

  test('Subtraction', () => {
    const result = operate(22, 8, '-');
    expect(result).toBe('14');
  });

  test('Multiplication', () => {
    const result = operate(5, 12, 'x');
    expect(result).toBe('60');
  });

  test('Division', () => {
    const result = operate(25, 5, '÷');
    expect(result).toBe('5');
  });

  test('Division By Zero', () => {
    const result = operate(8, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  test('Modulo operation', () => {
    const result = operate(8, 4, '%');
    expect(result).toBe('0');
  });

  test('Modulo operation', () => {
    const result = operate(8, 3, '%');
    expect(result).toBe('2');
  });

  test('Modulo operation By Zero', () => {
    const result = operate(8, 0, '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });
});
