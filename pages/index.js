import Navbar from "../Components/Navbar/Navbar";
import HomePage from "../Components/HomePage/HomePage";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <style global jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
