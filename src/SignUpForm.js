import { monthNames } from "./data";

export default function SignUpForm() {
  const year = new Date().getFullYear();
  const years = Array.from(new Array(60), (val, index) => year - index);
  const days = Array.from(new Array(31));
  return (
    <div className="mx-auto max-w-md bg-sec p-5 rounded">
      <h4 className="text-xs xs:text-lg font-bold text-center">
        SIGN UP AND START HAVING FUN!
      </h4>

      <form>
        {/* Birthday */}
        <div>
          <label className="block text-xs xs:text-base my-2">Birthday</label>
          <div className="flex border border-gray-400 rounded text-[10px] xs:text-base my-2">
            {/* Month */}
            <Select>
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
            <Select>
              <option>Year</option>
              {years.map((year, index) => (
                <option key={`year${index}`} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </form>
    </div>
  );
}

function Select(props) {
  return (
    <select className="bg-black text-gray-400 px-2 h-9 flex-1">
      {props.children}
    </select>
  );
}
