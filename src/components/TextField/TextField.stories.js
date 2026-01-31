import { TextField } from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
    onChange: { action: "changed" },
  },
};

export const Default = {
  args: {
    label: "名前",
    placeholder: "テキストを入力してください",
  },
};

export const WithValue = {
  args: {
    label: "メールアドレス",
    placeholder: "example@example.com",
    value: "user@example.com",
    type: "email",
  },
};

export const Password = {
  args: {
    label: "パスワード",
    placeholder: "パスワードを入力",
    type: "password",
  },
};

export const WithHelperText = {
  args: {
    label: "ユーザー名",
    placeholder: "username",
    helperText: "半角英数字で入力してください",
  },
};

export const WithError = {
  args: {
    label: "メールアドレス",
    placeholder: "example@example.com",
    value: "invalid-email",
    error: true,
    helperText: "有効なメールアドレスを入力してください",
  },
};

export const Disabled = {
  args: {
    label: "無効なフィールド",
    placeholder: "入力できません",
    value: "固定値",
    disabled: true,
  },
};
