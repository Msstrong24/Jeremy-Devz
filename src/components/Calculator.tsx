import { useState, useEffect } from 'react';
import DisplaySection from './DisplaySection';
import InputSection from './InputSection';
import Numpad from './Numpad';

const Calculator = () => {
  const [billAmount, setBillAmount] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<string>('15'); // Default tip percentage
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [activeInput, setActiveInput] = useState<'bill' | 'tip'>('bill'); // Track which input is active

  // Calculate tip and total amount whenever bill or tip percentage changes
  useEffect(() => {
    const billValue = parseFloat(billAmount) || 0;
    const tipValue = parseFloat(tipPercentage) || 0;
    
    const calculatedTip = billValue * (tipValue / 100);
    const calculatedTotal = billValue + calculatedTip;
    
    setTipAmount(calculatedTip);
    setTotalAmount(calculatedTotal);
  }, [billAmount, tipPercentage]);

  // Handle number pad input
  const handleNumpadInput = (value: string) => {
    if (activeInput === 'bill') {
      // For bill amount, add decimal precision
      if (value === '.' && billAmount.includes('.')) {
        return; // Prevent multiple decimal points
      }
      setBillAmount(prev => prev + value);
    } else {
      // For tip percentage, keep it as a whole number
      if (value === '.') {
        return; // Ignore decimal points for tip percentage
      }
      setTipPercentage(prev => prev + value);
    }
  };

  // Handle backspace
  const handleBackspace = () => {
    if (activeInput === 'bill') {
      setBillAmount(prev => prev.slice(0, -1));
    } else {
      setTipPercentage(prev => prev.slice(0, -1));
    }
  };

  // Clear all inputs
  const handleClear = () => {
    setBillAmount('');
    setTipPercentage('15');
    setActiveInput('bill');
  };

  return (
    <div className="calculator">
      <DisplaySection 
        tipAmount={tipAmount} 
        totalAmount={totalAmount} 
      />
      <InputSection 
        billAmount={billAmount}
        tipPercentage={tipPercentage}
        activeInput={activeInput}
        setActiveInput={setActiveInput}
        setBillAmount={setBillAmount}
        setTipPercentage={setTipPercentage}
      />
      <Numpad 
        onNumberClick={handleNumpadInput}
        onBackspace={handleBackspace}
        onClear={handleClear}
      />
    </div>
  );
};

export default Calculator; 