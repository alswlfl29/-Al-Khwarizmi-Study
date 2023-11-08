// 소수 찾기

//블로그 참조

function generateNumbers(numbers, current = '', result = new Set()) {
  if (numbers.length === 0) {
    result.add(current);
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    const nextDigit = numbers[i];
    const remainingDigits = numbers.substring(0, i) + numbers.substring(i + 1);
    generateNumbers(remainingDigits, current + nextDigit, result);
    generateNumbers(remainingDigits, current, result);
  }

  return Array.from(result);
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function solution(numbers) {
  const ans = generateNumbers(numbers);
  const primeNumbers = ans.filter((num) => isPrime(Number(num)));
  return primeNumbers.length;
}

console.log(solution('17'));
