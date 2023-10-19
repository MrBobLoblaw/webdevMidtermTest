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

  //const [is1Checked, setIs1Checked] = useState(false);
  //const [is2Checked, setIs2Checked] = useState(false);
  //const [is3Checked, setIs3Checked] = useState(false);
  //const [is4Checked, setIs4Checked] = useState(false);
  //const [is5Checked, setIs5Checked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    //setIs1Checked(event.target.checked);
    //setIs2Checked(event.target.checked);
    //setIs3Checked(event.target.checked);
    //setIs4Checked(event.target.checked);
    //setIs5Checked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //var qualificationList = "{ ";
    //if (document.getElementById("qualification1").checked) { qualificationList.concat(document.getElementById("qualification1").name, ", ")};
    //if (document.getElementById("qualification2").checked) { qualificationList +  document.getElementById("qualification2").name + ", "};
    //if (document.getElementById("qualification3").checked) { qualificationList +  document.getElementById("qualification3").name + ", "};
    //if (document.getElementById("qualification4").checked) { qualificationList +  document.getElementById("qualification4").name + ", "};
    //if (document.getElementById("qualification5").checked) { qualificationList +  document.getElementById("qualification5").name + ", "};
    //qualificationList.concat(" ", "}");
    alert(
      `Employee Registered! First Name: ${formData.firstname}, Last Name: ${formData.lastname}, Email Id: ${formData.emailid}, Mobile Number: ${formData.mobilenumber}, Qualification(s): ${formData.qualification}.`
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
                min="5"
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
                    id="qualification1"
                    type="checkbox"
                    name="highschool"
                    value={formData.qualification}
                    onChange={handleChange}
                    />
                    High School(10th)
                </label>
                <br></br>
                <label className="registration__checkbox__text">
                    <input
                    className="registration__checkbox__input"
                    id="qualification2"
                    type="checkbox"
                    name="higher school"
                    value={formData.qualification}
                    onChange={handleChange}
                    />
                    Higher School(12th)
                </label>
                <br></br>
                <label className="registration__checkbox__text">
                    <input
                    className="registration__checkbox__input"
                    id="qualification3"
                    type="checkbox"
                    name="bachelors"
                    value={formData.qualification}
                    onChange={handleChange}
                    />
                    Graduation(bachelors)
                </label>
                <br></br>
                <label className="registration__checkbox__text">
                    <input
                    className="registration__checkbox__input"
                    id="qualification4"
                    type="checkbox"
                    name="masters"
                    value={formData.qualification}
                    onChange={handleChange}
                    />
                    Post Graduation(Masters)
                </label>
                <br></br>
                <label className="registration__checkbox__text">
                    <input
                    className="registration__checkbox__input"
                    id="qualification5"
                    type="checkbox"
                    name="other"
                    value={formData.qualification}
                    onChange={handleChange}
                    />
                    Other
                </label>

            </div>
        </div>

        <div className="registration__container6">
            <button className="registration__button__submit" type="submit">
                Submit
            </button>
            <button className="registration__button__reset" type="button" onClick={handleReset}>
                Reset
            </button>
        </div>
    </form>
  );
}