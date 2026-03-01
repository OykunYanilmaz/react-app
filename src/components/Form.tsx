// import React from "react";
// import type { FormEvent } from "react"; // Deprecated ??


const Form = () => {
    
  // Deprecated ??
//   const handleSubmit2 = (event: FormEvent) => {
//     event.preventDefault();
//     console.log("Submitted");
//   };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted");
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
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
