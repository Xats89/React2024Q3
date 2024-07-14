import Header from "../components/Header";

interface LayoutProps {
  children: JSX.Element;
}

export default function MainLayout({ children }: LayoutProps) {

  return (
    <>
      <Header />
      <main className="main">{children}</main>
    </>
  );
}