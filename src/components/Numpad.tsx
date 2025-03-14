interface NumpadProps {
  onNumberClick: (value: string) => void;
  onBackspace: () => void;
  onClear: () => void;
}

const Numpad = ({ onNumberClick, onBackspace, onClear }: NumpadProps) => {
  const buttons = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '.', '0'
  ];

  return (
    <div className="numpad">
      {buttons.map((btn) => (
        <button
          key={btn}
          className="num-btn"
          onClick={() => onNumberClick(btn)}
        >
          {btn}
        </button>
      ))}
      <button className="action-btn backspace-btn" onClick={onBackspace}>
        ⌫
      </button>
      <button className="action-btn clear-btn" onClick={onClear}>
        C
      </button>
    </div>
  );
};

export default Numpad; 