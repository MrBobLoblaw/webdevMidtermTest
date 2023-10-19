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

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Employee Registered! First Name: ${formData.firstname}, Last Name: ${formData.lastname}, Email Id: ${formData.emailid}, Mobile Number: ${formData.mobilenumber}, Qualification: ${formData.qualification}.`
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
            <div className="registration__options__container">

                <label className="registration__checkbox__text">
                    <input
                    className="registration__checkbox__input"
                    id="qualification"
                    type="checkbox"
                    name="highschool"
                    checked={isChecked}
                    value={formData.qualification}
                    onChange={handleChange}
                    />
                    High School(10th)
                </label>
                <br></br>
                <label className="registration__checkbox__text">
                    <input
                    className="registration__checkbox__input"
                    id="qualification"
                    type="checkbox"
                    name="higher school"
                    checked={isChecked}
                    value={formData.qualification}
                    onChange={handleChange}
                    />
                    Higher School(12th)
                </label>
                <br></br>
                <label className="registration__checkbox__text">
                    <input
                    className="registration__checkbox__input"
                    id="qualification"
                    type="checkbox"
                    name="bachelors"
                    checked={isChecked}
                    value={formData.qualification}
                    onChange={handleChange}
                    />
                    Graduation(bachelors)
                </label>
                <br></br>
                <label className="registration__checkbox__text">
                    <input
                    className="registration__checkbox__input"
                    id="qualification"
                    type="checkbox"
                    name="masters"
                    checked={isChecked}
                    value={formData.qualification}
                    onChange={handleChange}
                    />
                    Post Graduation(Masters)
                </label>
                <br></br>
                <label className="registration__checkbox__text">
                    <input
                    className="registration__checkbox__input"
                    id="qualification"
                    type="checkbox"
                    name="other"
                    checked={isChecked}
                    value={formData.qualification}
                    onChange={handleChange}
                    />
                    Other
                </label>

            </div>
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