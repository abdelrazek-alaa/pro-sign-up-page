import "./App.css";
import SignUpForm from "./SignUpForm";
import { badges, links, languages } from "./data";

function App() {
  return (
    <div className="bg-main text-white space-y-6">
      <div className=" bg-yacht-Img bg-no-repeat bg-center bg-cover ">
        <div className="flex flex-col py-6 2xl:container 2xl:mx-auto">
          <header className="mb-7 sm:mb-0">
            <button className="bg-white w-32 rounded p-2 m-4 float-right text-gray-800 border-gray-300 border font-semibold shadow-xl">
              Log In
            </button>
          </header>
          <main className="space-y-6">
            <h1 className="text-4xl font-black tracking-wide text-center">
              My Product
            </h1>
            <SignUpForm />
            <div className="space-y-4 px-2">
              <h2 className="text-center text-2xl font-bold">
                MY PRODUCT ON YOUR DEVICE
              </h2>
              <div className="flex flex-wrap justify-center">
                {badges.map((badge) => (
                  <img
                    key={badge.img}
                    src={badge.img}
                    alt=""
                    className="h-12 mr-4 border-2  rounded-xl mt-3 cursor-pointer"
                  ></img>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer className="max-w-4xl mx-auto p-3 space-y-6 text-gray-400">
        {/* links */}
        <ul className="flex flex-wrap justify-between sm:font-medium sm:text-lg">
          {links.map((link) => (
            <li key={link.link} className="m-2 hover:text-white">
              <a href={link.href}>{link.link}</a>
            </li>
          ))}
        </ul>
        <hr className="border-mainBorder" />
        {/* language and copyright */}
        <div className="flex flex-col items-center sm:flex-row space-y-6 sm:space-y-0">
          <select
            defaultValue="English"
            className="bg-main text-gray-400 border-[1px] border-mainBorder px-2 h-9 focus:border-sky-500 focus:border focus:outline-none sm:font-semibold rounded mr-6"
          >
            {languages.map((language) => (
              <option key={language}>{language}</option>
            ))}
          </select>
          <p>©2022 My Product Corporation.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
