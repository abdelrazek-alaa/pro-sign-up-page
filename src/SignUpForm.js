/* eslint-disable jsx-a11y/anchor-is-valid */
import { monthNames } from "./data";
const inputStyles =
  " bg-black text-gray-400 border-[1px] border-mainBorder px-2 h-9 focus:border-sky-500 focus:border focus:outline-none sm:font-semibold ";

export default function SignUpForm() {
  const year = new Date().getFullYear();
  const years = Array.from(new Array(60), (val, index) => year - index);
  const days = Array.from(new Array(31));

  return (
    <div className="mx-auto max-w-[465px] bg-sec p-5 rounded">
      <h4 className="text-xs xs:text-lg font-bold text-center">
        SIGN UP AND START HAVING FUN!
      </h4>

      <form className="space-y-4">
        {/* Birthday */}
        <div>
          <label>Birthday</label>
          <div className="flex  text-[10px] xs:text-base my-2">
            {/* Month */}
            <Select border="rounded-l border-r-0">
              <option>Month</option>
              {monthNames.map((month, index) => (
                <option key={`month${index}`} value={month}>
                  {month}
                </option>
              ))}
            </Select>
            {/* Day */}
            <Select>
              <option>Day</option>
              {days.map((day, index) => (
                <option key={`day${index}`} value={day}>
                  {index > 9 ? index + 1 : `0${index + 1}`}
                </option>
              ))}
            </Select>
            {/* Year */}
            <Select border="rounded-r border-l-0">
              <option>Year</option>
              {years.map((year, index) => (
                <option key={`year${index}`} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* Username */}
        <div>
          <Label>Username</Label>
          <input
            placeholder="Don't use your real name"
            className={"rounded w-full" + inputStyles}
          ></input>
        </div>
        {/* Password */}
        <div>
          <Label>Password</Label>
          <input
            placeholder="At least 8 characters"
            className={"rounded w-full" + inputStyles}
            type="password"
          ></input>
        </div>
        {/* Gender */}
        <div>
          <Label>Gender</Label>
          <div className="flex">
            <ToggleButton border="rounded-l border-r-0" id="Male">
              <input
                className="opacity-0 checked:opacity-100  ml-2"
                type="radio"
                name="Gender"
                value="male"
                id="Male"
              />
            </ToggleButton>
            <ToggleButton border="rounded-r border-r-0" id="Female">
              <input
                className="opacity-0 checked:opacity-100 ml-2"
                type="radio"
                name="Gender"
                value="female"
                id="Female"
              />
            </ToggleButton>
          </div>
        </div>
        <p>
          By clicking Sign Up, you are agreeing to the <Link>Terms of Use</Link>{" "}
          including the arbitration clause and you are acknowledging the{" "}
          <Link>Privacy Policy</Link>
        </p>
        <button className="bg-white w-full rounded p-2 text-gray-800 font-semibold">
          Sign Up
        </button>
      </form>
    </div>
  );
}

function Select({ children, border }) {
  return (
    <select className={"flex-1  " + border + inputStyles}>{children}</select>
  );
}

function Label({ children }) {
  return <label className="block my-2">{children}</label>;
}

function ToggleButton({ children, border, id }) {
  return (
    <label
      // eslint-disable-next-line no-useless-concat
      className={"flex-1 leading-loose" + ` ${inputStyles} ${border} `}
      htmlFor={id}
    >
      {id}
      {children}
    </label>
  );
}

function Link({ children }) {
  return (
    <a href="#" className="text-sky-500 underline">
      {children}
    </a>
  );
}
