interface DisplaySectionProps {
  tipAmount: number;
  totalAmount: number;
}

const DisplaySection = ({ tipAmount, totalAmount }: DisplaySectionProps) => {
  // Format currency to 2 decimal places
  const formatCurrency = (amount: number): string => {
    return amount.toFixed(2);
  };

  return (
    <div className="display-section">
      <div className="result-item">
        <span className="result-label">Tip Amount:</span>
        <span className="result-value">${formatCurrency(tipAmount)}</span>
      </div>
      <div className="result-item total-row">
        <span className="result-label">Total:</span>
        <span className="result-value">${formatCurrency(totalAmount)}</span>
      </div>
    </div>
  );
};

export default DisplaySection; 