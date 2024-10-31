const Button = ({ className, htmlType, onClick, children }) => {
  return (
    <button className={className} type={htmlType} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
