import calculate from '../logic/calculate';

let obj = { total: null, next: null, operation: null };

describe('Testing calculate file', () => {
  test('Reset', () => {
    obj = calculate(obj, '13');
    obj = calculate(obj, '+');
    obj = calculate(obj, '5');
    obj = calculate(obj, 'AC');
    expect(obj.total).toBe(null);
  });

  test('Summation', () => {
    obj = calculate(obj, '13');
    obj = calculate(obj, '+');
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('18');
  });

  test('Subtraction', () => {
    obj = calculate(obj, '13');
    obj = calculate(obj, '-');
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('8');
  });

  test('Multiplication', () => {
    obj = calculate(obj, '13');
    obj = calculate(obj, 'x');
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('65');
  });

  test('Division', () => {
    obj = calculate(obj, '40');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('8');
  });

  test('Division By Zero', () => {
    obj = calculate(obj, '13');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '0');
    obj = calculate(obj, '=');
    expect(obj.total).toBe("Can't divide by 0.");
  });

  test('Modulo operation', () => {
    obj = calculate(obj, '13');
    obj = calculate(obj, '%');
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('3');
  });

  test('Modulo operation By Zero', () => {
    obj = calculate(obj, '13');
    obj = calculate(obj, '%');
    obj = calculate(obj, '0');
    obj = calculate(obj, '=');
    expect(obj.total).toBe("Can't find modulo as can't divide by 0.");
  });
});
