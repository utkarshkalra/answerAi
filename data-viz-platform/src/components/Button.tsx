const Button = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className={`px-4 py-2 ${
        active
          ? "bg-header-btn-bg border border-button-border"
          : "bg-transparent"
      } rounded  `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
