const multiplyAsync = async (x, y) => {
    try {
      if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Jeden z argumentów nie jest liczbą!');
      } else {
        const result = x * y;
        return result;
      }
    } catch (error) {
      console.error('Błąd:', error.message);
    }
  };
  
  const performMultiplication = async () => {
    const result1 = await multiplyAsync(5, 10);
    console.log(result1); 
  
    const result2 = await multiplyAsync('abc', 10);
    console.log(result2); 
  };
  
  performMultiplication();
  