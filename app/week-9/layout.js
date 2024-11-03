import { AuthContextProvider } from "./shopping-list/_utils/auth-context";

export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
