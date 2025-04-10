import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="font-sans bg-gray-50">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
