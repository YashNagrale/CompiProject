import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <>
      <header className="relative flex bg-white justify-center py-5">
        <Navbar />
      </header>
      <main className="relative z-10 flex h-[100vh] bg-white items-center justify-center rounded-b-3xl">
        <Body />
      </main>
      <footer className="z-0 sticky bottom-0 w-full flex items-center justify-center h-[11rem] bg-black text-white">
        <Footer />
      </footer>
    </>
  );
}

export default App;
