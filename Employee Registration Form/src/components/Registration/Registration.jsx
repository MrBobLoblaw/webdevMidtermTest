import React, { useState } from "react";
import "./registration.css";

export default function Registration() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    emailid: "",
    mobilenumber: "",
    qualification: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The new shop is called: ${formData.name}, Additional Information: ${formData.description}`
    );
  };

  const handleReset = (event) => {
    setFormData({ firstname: "", lastname: "", emailid: "", mobilenumber: "", qualification: "", });
  }

  return (
    <form onSubmit={handleSubmit} className="registration">
        <h1 className="registration__header">
            Employee Registration Form
        </h1>

        <div className="registration__container1">
            <label className="registration__label">
                First Name
            </label>
            <input
                type="text"
                id="firstname"
                className="registration__input"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
            />
            <label className="registration__label__warning">
                (Minimum 5 Char)
            </label>
        </div>
        <div className="registration__container2">
            <label className="registration__label">
                Last Name
            </label>
            <input
                type="text"
                id="lastname"
                className="registration__input"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
            />
        </div>
        <div className="registration__container3">
            <label className="registration__label">
                Email Id
            </label>
            <input
                type="text"
                id="emailid"
                className="registration__input"
                name="emailid"
                value={formData.emailid}
                onChange={handleChange}
            />
        </div>
        <div className="registration__container4">
            <label className="registration__label">
                Mobile Number
            </label>
            <input
                type="text"
                id="mobilenumber"
                className="registration__input"
                name="mobilenumber"
                value={formData.mobilenumber}
                onChange={handleChange}
            />
        </div>
        <div className="registration__container5">
            <label className="registration__label">
                Qualification
            </label>
            <input
                type="text"
                id="mobilenumber"
                className="registration__input"
                name="mobilenumber"
                value={formData.mobilenumber}
                onChange={handleChange}
            />
        </div>

        <button className="registration__button__submit" type="submit">
            Submit
        </button>
        <button className="registration__button__reset" type="button" onClick={handleReset}>
            Reset
        </button>
    </form>
  );
}