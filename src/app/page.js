
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";
import { LoginForm } from "./components/LoginForm"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <LoginForm />
    </div>
  );
}
