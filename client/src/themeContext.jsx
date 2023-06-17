import { createContext, useContext, useState } from "react";

// React Context can be a great way to handle state that you know will be used in a variety of
// places. To get started, first call "createContext" with an initial value. Here, I'm just using
// "null", but it will be assigned a real value in a minute.
const ThemeContext = createContext(null);

// Then, you'll need to create a "Provider". You'll wrap it around your main app (or at least
// the components that need "isDark") like this:
// 
// (inside main.jsx)
// ...
// <ThemeProvider>
//   <App/>
// </ThemeProvider>
// 
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    // Note that I'm passing in these state variables into the "value" prop
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Now that we've set up the context, we can create this little custom hook. If we call it in other
// places, we can easily get access to "isDark" without having to do prop drilling!
export const useThemeContext = () => {
  const value = useContext(ThemeContext);
  if (!value) throw "Must use theme within provider";
  return value;
};
