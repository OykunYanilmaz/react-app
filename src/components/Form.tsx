// import React from "react";
// import type { FormEvent } from "react"; // Deprecated ??
import { useRef, useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

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
  //   const [person, setPerson] = useState({
  //     name: "",
  //     age: "",
  //   });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  //   console.log(register('name'));

  //   const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     // Ref Hook
  //     // if (nameRef.current !== null) person.name = nameRef.current.value;
  //     // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //     // console.log(person);

  //     // State Hook
  //     // console.log(person);
  //   };

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form
      //   onSubmit={(event) => {
      //     event.preventDefault();
      //     console.log("Submitted");
      //   }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
        <input
          //   onChange={(event) =>
          //     setPerson({ ...person, name: event.target.value })
          //   }
          //   value={person.name}
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
        <input
          //   onChange={(event) =>
          //     setPerson({ ...person, age: parseInt(event.target.value) })
          //   }
          //   value={person.age}
          {...register("age")}
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
