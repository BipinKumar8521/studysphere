import Sidebar from "@/app/Components/Sidebar";

export const metadata = {
  title: "StudySphere",
  description:
    "studySphere is a platform for students and teachers to connect and learn together",
};

export default function RootLayout({ children }) {
  return (
    <main className="root">
      <Sidebar />
      {/* <MobileNav /> */}
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}
