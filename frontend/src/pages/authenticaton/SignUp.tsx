import { useState, ChangeEvent, FormEvent } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import OnboardingIntro from "../../components/onBoarding/OnboardingIntro";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import apiRequest from "../../lib/apiRequest";

// Define types for form data
interface FormData {
  fullName: string;
  email: string;
  password: string;
  role: string;
  cader: string;
  licenseNum: string;
  organization?: string;
  designation?: string;
}

// Define types for validation errors
interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  role?: string;
  cader?: string;
  licenseNum?: string;
  organization?: string;
  designation?: string;
}

const SignUp = () => {
const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    role: "healthworker",
    cader: "",
    licenseNum: "",
    organization: "",
    designation: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [role, setRole] = useState("Health Worker");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Map UI role to backend value
  const getBackendRole = () => {
    return role === "Health Worker" ? "healthworker" : "employee";
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    if (role === "Health Worker") {
      if (!formData.cader.trim()) newErrors.cader = "Cadre is required.";
      if (!formData.licenseNum.trim()) newErrors.licenseNum = "License number is required.";
    } else {
      if (!formData.organization?.trim()) newErrors.organization = "Organization is required.";
      if (!formData.designation?.trim()) newErrors.designation = "Designation is required.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});
  console.log("Submitting:", formData);

  try {
    const payload: any = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      role: getBackendRole(),
    };
    if (role === "Health Worker") {
      payload.cader = formData.cader;
      payload.licenseNum = parseInt(formData.licenseNum);
    } else {
      payload.organization = formData.organization;
      payload.designation = formData.designation;
    }
    const { data } = await apiRequest.post("/users/register", payload);
    console.log("Registration successful:", data);

    // ✅ Show success toast
    toast.success("Account created successfully!");

    // ✅ Redirect after a short delay
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  } catch (error: any) {
    console.error("Registration error:", error.message);
    toast.error(error.message || "Something went wrong!");
  }
};

  return (
    <>
    <Toaster />
    <div className="min-h-screen flex flex-col lg:flex-row md:justify-center items-center bg-gradient-to-t from-[#1E63B41A] to-[#244266] lg:bg-none">
      <div className="hidden lg:block w-1/2">
        <OnboardingIntro />
      </div>

      <div className="flex justify-start items-center w-full lg:w-1/2">
        <div className="bg-[#FFFFFF] py-8 px-6 rounded-2xl w-[90%] md:w-[60%]">
          {/* Account switch */}
          <div className="flex gap-4 items-center justify-end mb-4">
            <button
              type="button"
              className={`text-[#4640DE] p-2 rounded-md ${
                role === "Employer" ? "bg-[#E9EBFD]" : ""
              }`}
              onClick={() => {
                setRole("Employer");
                setFormData((prev) => ({
                  ...prev,
                  role: "employee",
                  cader: "",
                  licenseNum: "",
                }));
              }}
            >
              Employer
            </button>
            <button
              type="button"
              className={`text-[#4640DE] p-2 rounded-md ${
                role === "Health Worker" ? "bg-[#E9EBFD]" : ""
              }`}
              onClick={() => {
                setRole("Health Worker");
                setFormData((prev) => ({
                  ...prev,
                  role: "healthworker",
                  organization: "",
                  designation: "",
                }));
              }}
            >
              Health Worker
            </button>
          </div>

          {/* Google signup */}
          <div className="flex flex-col items-center">
                <button
                    className="w-full max-w-2xs font-bold shadow-sm rounded-sm py-2 border border-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white p-2 rounded-full">
                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                            <path
                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                fill="#4285f4" />
                            <path
                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                fill="#34a853" />
                            <path
                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                fill="#fbbc04" />
                            <path
                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                fill="#ea4335" />
                        </svg>
                    </div>
                    <span className="ml-4 text-[#4640DE]">
                        Sign Up with Google
                    </span>
                </button>
            </div>

          {/* Divider */}
          <div className="my-3 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-[#202430] opacity-50 tracking-wide font-medium bg-white translate-y-1/2">
              Or sign up with email
            </div>
          </div>

          {/* Signup form */}
          <form onSubmit={handleSubmit} className="space-y-2">
            {/* Full Name */}
            <div className="mb-4">
              <label className="text-[#4B5563] font-semibold block mb-1">Full Name</label>
              <input
                name="fullName"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-sm bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="text-[#4B5563] font-semibold block mb-1">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                className="w-full px-4 py-2 rounded-sm bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="text-[#4B5563] font-semibold block mb-1">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full px-4 py-2 rounded-sm bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEye className="text-[#292B33]" /> : <FiEyeOff className="text-[#292B33]" />}
                </span>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Conditional fields based on role */}
            {role === "Health Worker" ? (
              <>
                {/* Cadre */}
                <div className="mb-4">
                  <label className="text-[#4B5563] font-semibold block mb-1">Cadre</label>
                  <input
                    name="cader"
                    placeholder="Nurse, Doctor etc"
                    className="w-full px-4 py-2 rounded-sm bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none"
                    value={formData.cader}
                    onChange={handleChange}
                  />
                  {errors.cader && <p className="text-red-500 text-sm mt-1">{errors.cader}</p>}
                </div>
                {/* License Number */}
                <div className="mb-4">
                  <label className="text-[#4B5563] font-semibold block mb-1">License Number</label>
                  <input
                    name="licenseNum"
                    placeholder="Enter your license number"
                    className="w-full px-4 py-2 rounded-sm bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none"
                    value={formData.licenseNum}
                    onChange={handleChange}
                  />
                  {errors.licenseNum && <p className="text-red-500 text-sm mt-1">{errors.licenseNum}</p>}
                </div>
              </>
            ) : (
              <>
                {/* Organization */}
                <div className="mb-4">
                  <label className="text-[#4B5563] font-semibold block mb-1">Organization</label>
                  <input
                    name="organization"
                    placeholder="Enter your organization"
                    className="w-full px-4 py-2 rounded-sm bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none"
                    value={formData.organization}
                    onChange={handleChange}
                  />
                  {errors.organization && <p className="text-red-500 text-sm mt-1">{errors.organization}</p>}
                </div>
                {/* Designation */}
                <div className="mb-4">
                  <label className="text-[#4B5563] font-semibold block mb-1">Designation</label>
                  <input
                    name="designation"
                    placeholder="Enter your designation"
                    className="w-full px-4 py-2 rounded-sm bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none"
                    value={formData.designation}
                    onChange={handleChange}
                  />
                  {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation}</p>}
                </div>
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#4640DE] font-inter text-[#FFFFFF] py-2 rounded-sm"
            >
              Create
            </button>

            {/* Footer Text */}
            <div className="flex justify-between items-center py-4">
              <div className="flex flex-col">
                <p className="text-[#4B5563] text-sm">
                  Already have an account? <Link to="/login" className="ml-2 text-[#4640DE]">Login</Link>
                </p>
                <p className="py-4 text-[#7C8493] text-sm">
                  By clicking 'Continue', you acknowledge that you have read and accept the
                  <span className="text-[#4640DE]"> Terms of Service </span> and
                  <span className="text-[#4640DE]"> Privacy Policy</span>.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
