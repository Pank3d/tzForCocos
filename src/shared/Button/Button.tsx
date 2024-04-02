const Button = ({ text, onClick }: { text: string; onClick: any }) => {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
