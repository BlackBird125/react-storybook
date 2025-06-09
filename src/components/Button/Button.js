import React from "react";
import PropTypes from "prop-types";

export const Button = ({ label, onClick, variant = "primary" }) => {
  const baseStyles = "px-4 py-2 rounded font-semibold";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * ボタンに表示するテキスト
   */
  label: PropTypes.string.isRequired,
  /**
   * クリック時のハンドラー
   */
  onClick: PropTypes.func,
  /**
   * ボタンのバリエーション
   */
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
