import { useState } from "react";

const RegForm = () => {
  const [user, setUser] = useState({
    name: "Kokki Kumar",
    age: 25,
    gender: "Male",
    isMarried: true,
    country:"India",
    bio: ""
  });

  function changeHandler(e) {
    const name = e.target.name;
    // console.log(name);

    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({ ...user, [name]: value });
  }

  return (
    <>
      <table className=" mx-2 mt-10 ">
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold ">Name</td>
            <td className="border border-gray-400 text-slate-600 p-2">
              {user.name}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold ">Age</td>
            <td className="border border-gray-400 text-slate-600 p-2 ">
              {user.age}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold">Gender</td>
            <td className="border border-gray-400 text-slate-600 p-2">
              {user.gender}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold ">
              Marital Status{" "}
            </td>
            <td className="border border-gray-400 text-slate-600 p-2">
              {user.isMarried ? "Married" : "Not Married"}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold ">Country</td>
            <td className="border border-gray-400 text-slate-600 p-2 ">
              {user.country}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold ">Bio</td>
            <td className="border border-gray-400 text-slate-600 p-2 ">
              {user.bio}
            </td>
          </tr>
        </tbody>
      </table>

      <form className="w-60 mt-2.5 flex flex-col gap-2.5 mx-2">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={changeHandler}
          className="border-2 border-amber-900 px-2 h-8 rounded-md"
          value={user.name}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          onChange={changeHandler}
          className="border-2 border-amber-900 px-2 h-8 rounded-md"
          value={user.age}
        />
        <div className="flex gap-4">
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              onChange={changeHandler}
              checked={user.gender == "Male"}
              value="Male"
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              onChange={changeHandler}
              checked={user.gender == "Female"}
              value="Female"
            />
            Female
          </label>
        </div>
        <label htmlFor="isMarried">
          <input
            type="checkbox"
            name="isMarried"
            onChange={changeHandler}
            checked={user.isMarried}
          />
          is Married
        </label>
        <div className=" flex flex-col">
          <label htmlFor="country">Select Country</label>
          <select className=" border-2 border-slate-500 bg-emerald-300 text-purple-700 font-medium my-2 py-1 px-2 rounded-md" name="country" id="country" value={user.country} onChange={changeHandler}>
          <option>USA</option>
          <option>India</option>
          <option>UK</option>
          </select>
        </div>
        <textarea className="border-2 border-slate-500 text-cyan-400 text-lg rounded p-2 bg-slate-700" name="bio" id="bio" cols='25' rows="5"  value={user.bio} onChange={changeHandler} placeholder="Write about you"/>
      </form>
    </>
  );
};

export default RegForm;
