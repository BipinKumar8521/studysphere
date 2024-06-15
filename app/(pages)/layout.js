import { StreamVideoProvider } from "/providers/StreamClientProvider.jsx";

export default function RootLayout({ children }) {
  return (
    <>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </>
  );
}
