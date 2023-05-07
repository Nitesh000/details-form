import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, InferType } from "yup";
import style from "./Form.module.css";

let userSchema = object({
  name: string().required("Please enter a name."),
  dob: number()
    .positive()
    .integer()
    .typeError("Please enter your age")
    .required("Please enter age."),
  sex: string()
    .oneOf(["Male", "Female", "Transgender", "Other"])
    .required("Please enter your gender."),
  mobile: string().length(10),
  govtIdType: string(),
  govtId: string(),
  guardianLabel: string()
    .oneOf(["Mr.", "Mrs.", "Miss", "Master", ""])
    .required("Please select the label"),
  guardianName: string().required("Please enter the guardian Name"),
  guardianEmail: string().email().required("Please enter a valid email"),
  guardianMobile: string()
    .length(10)
    .required("Please enter a valid phone number"),
  address: string().required("Please enter your address"),
  state: string().required("Please enter your state"),
  city: string().required("Please enter your city"),
  country: string().required("Please enter your country"),
  pincode: string().length(6).required("Please enter your pincode"),
  occupation: string().required("Please enter your occupation"),
  religion: string().required("Please enter your religion"),
  maritalStatus: string().required("Please enter your marital status"),
  bloodGroup: string().required("Please enter your blood group"),
  nationality: string().required("Please enter your nationality"),
});

type UserType = InferType<typeof userSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    resolver: yupResolver(userSchema),
  });

  const onsubmit = async (data: UserType) => {
    const response = await fetch("http://localhost:3000/api/formdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok == true) {
      console.log("User created!");
    } else {
      console.error("Unable to upload the data");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        {/* NOTE: From here there is Personal section */}
        <h3 className={style.heading}>Personal Details</h3>
        <div className={style.detailsContainer}>
          <div>
            <label htmlFor="name">Name: </label>
            <input {...register("name")} id="name" />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <label htmlFor="dob">Age: </label>
            <input {...register("dob")} id="dob" type="number" />
            <p>{errors.dob?.message}</p>
          </div>
          <div>
            <label htmlFor="sex">sex: </label>
            <select {...register("sex")} id="sex">
              <option hidden disabled>
                select
              </option>
              <option hidden>select sex</option>
              <option value="Male">Male</option>
              <option value="female">Female</option>
              <option value="Transgender">Transgender</option>
              <option value="Other">Other</option>
            </select>
            <p>{errors.sex?.message}</p>
          </div>
          <div>
            <label htmlFor="mobile">Mobile: </label>
            <input {...register("mobile")} id="mobile" />
            <p>{errors.mobile?.message}</p>
          </div>
          <div className={style.spanTwo}>
            <label htmlFor="govtId">Govt Issued ID: </label>
            <select {...register("govtIdType")}>
              <option hidden>ID Type</option>
              <option value="Aadhar">Aadhar Card</option>
              <option value="DrivingLicence">Driving Licence</option>
              <option value="VoterCard">Voter Card</option>
            </select>
            <input {...register("govtId")} id="govtId" />
          </div>
        </div>
        {/* NOTE: From here there is contact section */}
        <h3 className={style.heading}>Contact Details</h3>
        <div className={style.detailsContainer}>
          <div>
            <label htmlFor="guardianName">Gurdian Details: </label>
            <select {...register("guardianLabel")}>
              <option hidden>Enter Label</option>
              <option value="Mr.">Father</option>
              <option value="Mrs.">Mother</option>
              <option value="Miss">Sibling</option>
              <option value="Master">Other</option>
              <option value="">None</option>
            </select>
            <input {...register("guardianName")} id="guardianName" />
            <p>
              <span>{errors.guardianName?.message}</span>
              <span>{errors.guardianLabel?.message}</span>
            </p>
          </div>
          <div>
            <label htmlFor="guardianEmail">Email: </label>
            <input {...register("guardianEmail")} />
            <p>{errors.guardianEmail?.message}</p>
          </div>
          <div>
            <label htmlFor="guardianMobile">Contact Number: </label>
            <input {...register("guardianMobile")} />
            <p>{errors.guardianMobile?.message}</p>
          </div>
        </div>
        {/* NOTE: From here there is Address section */}
        <h3 className={style.heading}>Address Details</h3>
        <div className={style.detailsContainer}>
          <div>
            <label htmlFor="address">Address: </label>
            <input {...register("address")} />
            <p>{errors.address?.message}</p>
          </div>
          <div>
            <label htmlFor="state">State: </label>
            <input {...register("state")} />
            <p>{errors.state?.message}</p>
          </div>
          <div>
            <label htmlFor="city">City: </label>
            <input {...register("city")} />
            <p>{errors.city?.message}</p>
          </div>
          <div>
            <label htmlFor="country">Country: </label>
            <input {...register("country")} />
            <p>{errors.country?.message}</p>
          </div>
          <div>
            <label htmlFor="pincode">Pincode: </label>
            <input {...register("pincode")} />
            <p>{errors.pincode?.message}</p>
          </div>
        </div>
        {/* NOTE: From here there is Other details section */}
        <h3 className={style.heading}>Other Details</h3>
        <div className={style.detailsContainer}>
          <div>
            <label htmlFor="occupation">Occupation: </label>
            <input {...register("occupation")} />
            <p>{errors.occupation?.message}</p>
          </div>
          <div>
            <label htmlFor="religion">Religion: </label>
            <select {...register("religion")}>
              <option hidden>Select Religion</option>
              <option value="Christianity">Christianity</option>
              <option value="Hinduism">Hinduism</option>
              <option value="Buddhism">Buddhism</option>
              <option value="Other">Other</option>
            </select>
            <p>{errors.religion?.message}</p>
          </div>
          <div>
            <label htmlFor="maritalStatus">Marital Status: </label>
            <select {...register("maritalStatus")}>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
            <p>{errors.maritalStatus?.message}</p>
          </div>
          <div>
            <label htmlFor="bloodGroup">Blood Group: </label>
            <select {...register("bloodGroup")}>
              <option hidden>Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O-">O-</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <p>{errors.bloodGroup?.message}</p>
          </div>
          <div>
            <label htmlFor="nationality">Nationality: </label>
            <input {...register("nationality")} />
            <p>{errors.nationality?.message}</p>
          </div>
        </div>
        <div
          style={{
            textAlign: "right",
            marginRight: 30,
            marginTop: 30,
          }}
        >
          <button
            style={{
              marginRight: 10,
            }}
            onClick={() => location.reload()}
          >
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
