import { useRef, useState } from 'react';

enum Operator{
  divide,
  multiply,
  add,
  substract,
}

export function useCalculator() {
  const [number, setNumber] = useState('0');
  const [previewNumber, setPreviewNumber] = useState('0');

  const lastOperator =  useRef<Operator>();

  const clean = () => {
    setNumber('0');
    setPreviewNumber('');

    return;
  };

  const toggleSign = () => {
    if (number.startsWith('-')) {return setNumber(prev => prev.substring(1));}
    setNumber('-' + number);
  };

  const buildNumberString = (numberString: string) => {
    // Bien para no poner varios puntos .
    if (number.includes('.') && numberString === '.') {return;}

    if (number.startsWith('0') || number.startsWith('-0')) {

      // Bien para poner 0. solamente
      if (number === '0' && numberString === '.') { return setNumber(number + numberString); }

      // Bien para escribit numeros flotantes
      if (number.includes('.')) { return setNumber(number + numberString); }

      // Bien para remplazar inicio de 0 con un numero
      if (number.startsWith('0') && numberString !== '0') {return setNumber(numberString);}

      // if (!number.includes('.') && numberString !== '0') {
      //   console.log('entró');
      //   setNumber(numberString);
      // }

      // Bien para controlar no escribir muchos 0 antes
      if (numberString === '0') {
        return;
      }

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    const num = parseFloat(number);

    if (number.endsWith('.')) {
      setPreviewNumber(number.slice(1, -1));
    }
    else {
      setPreviewNumber(num % 1 === 0 ? num.toFixed(0) : parseFloat(num.toString()).toString()); //! Valida que el numero sea entero o no
    }
    setNumber('0');
  };

  const divideOperator = () => {
    setLastNumber();
    lastOperator.current = Operator.divide;
  };

  const multiplyOperator = () => {
    setLastNumber();
    lastOperator.current = Operator.multiply;
  };

  const addOperator = () => {
    setLastNumber();
    lastOperator.current = Operator.add;
  };

  const substractOperator = () => {
    setLastNumber();
    lastOperator.current = Operator.substract;
  };

  const fundel = () => {
    if (number.length === 1) { return setNumber('0'); }

    if (number.includes('-') && number.length === 2) { return setNumber('0'); }

    setNumber(prev => prev.slice(0, -1));
  };

  return ({
    number,
    previewNumber,
    buildNumberString,
    clean,
    fundel,
    toggleSign,
    divideOperator,
    multiplyOperator,
    addOperator,
    substractOperator,
  });
}
