import "./App.css";
import SignUpForm from "./SignUpForm";
import { badges } from "./data";

function App() {
  return (
    <div className="bg-main text-white space-y-6">
      <div className="flex flex-col bg-yacht-Img bg-no-repeat bg-center py-6">
        <header className="mb-7 sm:mb-0">
          <button className="bg-white w-32 rounded p-2 m-4 float-right text-gray-800 font-semibold shadow-xl">
            Log In
          </button>
        </header>
        <main className="space-y-6">
          <h1 className="text-4xl font-mono font-bold text-center">
            My Product
          </h1>
          <SignUpForm />
          <div className="space-y-4">
            <h2 className="text-center text-2xl font-bold">
              MY PRODUCT ON YOUR DEVICE
            </h2>
            <div className="flex flex-wrap justify-center">
              {badges.map((badge) => (
                <img
                  key={badge.img}
                  src={badge.img}
                  alt=""
                  className="h-12 mr-4 border-2  rounded-xl mt-3"
                ></img>
              ))}
            </div>
          </div>
        </main>
      </div>
      <footer>footer</footer>
    </div>
  );
}

export default App;
