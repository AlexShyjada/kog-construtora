import ReactModal from "react-modal";
import { Contact, Footer, Header, Hero, Portfolio, Product, SobreNos } from "./components";

ReactModal.setAppElement('#root')

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Product />
      <Portfolio />
      <SobreNos />
      <Contact />
      <Footer />
    </>
  );
}
