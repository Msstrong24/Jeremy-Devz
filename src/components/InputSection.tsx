import React from 'react';

interface InputSectionProps {
  billAmount: string;
  tipPercentage: string;
  activeInput: 'bill' | 'tip';
  setActiveInput: (input: 'bill' | 'tip') => void;
  setBillAmount: (amount: string) => void;
  setTipPercentage: (percentage: string) => void;
}

const InputSection = ({
  billAmount,
  tipPercentage,
  activeInput,
  setActiveInput,
  setBillAmount,
  setTipPercentage
}: InputSectionProps) => {
  // Handle input changes directly from keyboard
  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (/^[0-9]*\.?[0-9]*$/.test(value) || value === '') {
      setBillAmount(value);
    }
  };

  const handleTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    if (/^[0-9]*$/.test(value) || value === '') {
      setTipPercentage(value);
    }
  };

  return (
    <div className="input-section">
      <div className="input-group">
        <label htmlFor="bill-amount" className="label">Bill Amount</label>
        <div className="input-wrapper">
          <span className="prefix">$</span>
          <input
            type="text"
            id="bill-amount"
            className={`input-field ${activeInput === 'bill' ? 'active' : ''}`}
            value={billAmount}
            onChange={handleBillChange}
            onFocus={() => setActiveInput('bill')}
            placeholder="0.00"
            inputMode="decimal"
            readOnly // Using the number pad instead of keyboard
          />
        </div>
      </div>
      
      <div className="input-group">
        <label htmlFor="tip-percentage" className="label">Tip Percentage</label>
        <div className="input-wrapper">
          <span className="prefix">%</span>
          <input
            type="text"
            id="tip-percentage"
            className={`input-field ${activeInput === 'tip' ? 'active' : ''}`}
            value={tipPercentage}
            onChange={handleTipChange}
            onFocus={() => setActiveInput('tip')}
            placeholder="15"
            inputMode="numeric"
            readOnly // Using the number pad instead of keyboard
          />
        </div>
      </div>
    </div>
  );
};

export default InputSection; 