import { useEffect, useRef, useState } from 'react';

enum Operator{
  divide = '÷',
  multiply = '×',
  substract = '-',
  add = '+',
}

export function useCalculator() {
  const [formula, setFormula] = useState('');

  const [number, setNumber] = useState('0');
  const [previewNumber, setPreviewNumber] = useState('0');

  const lastOperator =  useRef<Operator>();
  const lastNumber = useRef<string>('0');

  useEffect(() => {
    if (lastOperator.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperator.current} ${number}`);
    } else {
      setFormula(number);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ number ]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPreviewNumber(`${subResult}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formula]);


  const clean = () => {
    setNumber('0');
    setPreviewNumber('0');

    lastOperator.current = undefined;
    setFormula('');

    return;
  };

  const toggleSign = () => {
    if (number.startsWith('-')) {return setNumber(prev => prev.substring(1));}
    setNumber('-' + number);
  };

  const buildNumberString = (numberString: string) => {
    lastNumber.current = numberString;

    // Bien para no poner varios puntos .
    if (number.includes('.') && numberString === '.') {return;}

    if (number.startsWith('0') || number.startsWith('-0')) {

      // Bien poner -0. mas numberString que funcione bien
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

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

      // Numero -0 remplazarlo por un -(numeroString)
      if (number.startsWith('-0')) {return setNumber(`-${numberString}`);}

      // Bien para controlar no escribir muchos 0 antes
      if (numberString === '0') {
        return;
      }

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    calculateOperation();

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
    // calculateOperation();
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

  const calculateOperation = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);

    lastOperator.current = undefined;
    setPreviewNumber('0');
  };

  const calculateSubResult = ():number => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const number1 = Number(`${firstValue}`);
    const number2 = Number(`${secondValue}`);

    if ( isNaN( number2 ) ) {return (number1);}

    switch (operation) {
      case Operator.add:
        return(number1 + number2);

      case Operator.substract:
        return(number1 - number2);

      case Operator.multiply:
        return(number1 * number2);

      case Operator.divide:
        return(number1 / number2);

      default:
        throw ('Operation no implemented');
        // break;
      }
  };

  return ({
    number,
    previewNumber,
    formula,

    buildNumberString,
    clean,
    fundel,
    toggleSign,
    divideOperator,
    multiplyOperator,
    addOperator,
    substractOperator,
    calculateOperation,
  });
}
