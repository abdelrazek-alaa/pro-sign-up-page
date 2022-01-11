import "./App.css";
import SignUpForm from "./SignUpForm";

function App() {
  return (
    <div className="bg-main sm:p-5 text-white space-y-6">
      <div className="flex flex-col">
        <header className="mb-7 sm:mb-0">
          <button className="bg-white w-32 rounded p-2 m-4 float-right text-gray-800 font-semibold">
            Log In
          </button>
        </header>
        <main className="space-y-6">
          <h1 className="text-4xl font-mono font-bold text-center">
            My Product
          </h1>
          <SignUpForm />
        </main>
      </div>
      <footer>footer</footer>
    </div>
  );
}

export default App;
