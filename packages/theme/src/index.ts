import './themes/light.less'
import './themes/dark.less'

// 负责实际切换主题的函数
export const applyTheme = (themeName) => {
  // 确保 themeName 只有 'light' 或 'dark'
  const validTheme = themeName === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", validTheme);

  // 可以选择性地保存用户偏好到 localStorage
  localStorage.setItem("app-theme", validTheme);
};
