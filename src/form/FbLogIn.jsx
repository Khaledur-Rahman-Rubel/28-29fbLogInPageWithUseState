import { FaXmark } from "react-icons/fa6";

function FaceBook() {
  return (
    <div className="signUp">
      <button className="removeButton">
        <FaXmark />
      </button>
      <div className="heading">
        <h1>Sign Up</h1>
        <p>{`It's quick and easy`}</p>
      </div>
      {/* sign up end **form start */}
      <hr />
      <form action="">
        <div>
          <input
            className="inputName"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            required
          />
          <input
            className="inputName"
            type="text"
            name="surName"
            id="surName"
            placeholder="Surname"
            required
          />
        </div>
        {/* name part end */}

        <div>
          <input
            className="largInput"
            type="email,number"
            name="emailNumber"
            id="emailNumber"
            placeholder="Mobile number or email address"
            required
          />
        </div>
        {/* email end */}

        <div>
          <input
            className="largInput"
            type="password"
            name="password"
            id="password"
            placeholder="New password"
            required
          />
        </div>
        {/* password part end and date of birth start */}

        <div>
          <small>Date of birth</small>
          <button className="birthdayQustion">
            ?<span className="tooltiptext">Click more information</span>
          </button>
        </div>

        <div>
          <select className="dateOfBirth" name="day" id="day">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select className="dateOfBirth" name="month" id="month">
            <option value="Januarry">Januarry</option>
            <option value="Februarry">Februarry</option>
            <option value="March">March</option>
            <option value="April">April</option>
          </select>
          <select className="dateOfBirth" name="year" id="year">
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
          </select>
        </div>
        {/* Date of birth end and gender start */}
        <div className="birthText">
          <small>Gender</small>
          <button className="birthdayQustion">
            ?<span className="tooltiptext">Click more information</span>
          </button>
        </div>
        <div>
          <span className="gender" id="male">
            <label className="malelable" htmlFor="">
              Male
            </label>
            <input type="radio" value="Male" name="gender" />
          </span>
          <span className="gender" id="female">
            <label className="femalelable" htmlFor="">
              Female
            </label>
            <input type="radio" value="female" name="gender" />
          </span>
          <span className="gender" id="others">
            <label className="otherslable" htmlFor="">
              Others
            </label>
            <input type="radio" value="others" name="gender" />
          </span>
        </div>
        {/* Gender end and sign up button start  */}
        <button className="signupButton">Sign Up</button>
      </form>
    </div>
  );
}

export default FaceBook;
