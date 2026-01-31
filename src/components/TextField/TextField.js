import React from "react";
import PropTypes from "prop-types";

export const TextField = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled = false,
  error = false,
  helperText,
}) => {
  const baseStyles =
    "w-full px-3 py-2 border rounded focus:outline-none focus:ring-2";
  const normalStyles = "border-gray-300 focus:ring-blue-500 focus:border-blue-500";
  const errorStyles = "border-red-500 focus:ring-red-500 focus:border-red-500";
  const disabledStyles = "bg-gray-100 cursor-not-allowed";

  const inputStyles = `${baseStyles} ${
    error ? errorStyles : normalStyles
  } ${disabled ? disabledStyles : ""}`;

  return (
    <div className="w-full max-w-xs">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        className={inputStyles}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {helperText && (
        <p
          className={`text-sm mt-1 ${
            error ? "text-red-500" : "text-gray-500"
          }`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

TextField.propTypes = {
  /**
   * テキストフィールドのラベル
   */
  label: PropTypes.string,
  /**
   * プレースホルダーテキスト
   */
  placeholder: PropTypes.string,
  /**
   * 入力値
   */
  value: PropTypes.string,
  /**
   * 入力変更時のハンドラー
   */
  onChange: PropTypes.func,
  /**
   * 入力タイプ (text, email, password など)
   */
  type: PropTypes.string,
  /**
   * 無効化フラグ
   */
  disabled: PropTypes.bool,
  /**
   * エラー状態フラグ
   */
  error: PropTypes.bool,
  /**
   * ヘルパーテキスト（説明文やエラーメッセージ）
   */
  helperText: PropTypes.string,
};
