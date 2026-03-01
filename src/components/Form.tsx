// import React from "react";
// import type { FormEvent } from "react"; // Deprecated ??

import { useRef, useState } from "react";

const Form = () => {
  // Deprecated ??
  //   const handleSubmit2 = (event: FormEvent) => {
  //     event.preventDefault();
  //     console.log("Submitted");
  //   };

  // Ref Hook
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };

  // State Hook
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Ref Hook
    // if (nameRef.current !== null) person.name = nameRef.current.value;
    // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    // console.log(person);

    // State Hook
    console.log(person);
  };

  return (
    <form
      //   onSubmit={(event) => {
      //     event.preventDefault();
      //     console.log("Submitted");
      //   }}
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
