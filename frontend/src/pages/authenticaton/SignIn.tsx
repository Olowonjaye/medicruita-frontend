import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useFormik } from "formik";
import { loginValidationSchema } from "../../validations/authValidations/AuthValidation";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useNavigate, Link } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";


const SignIn = () => {
  const { token } = useAppSelector((state: any) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
  const { data: response } = await apiRequest.post("/login", values);

        // ✅ Store token
        const { token } = response;
        localStorage.setItem("token", token);

        // ✅ Redirect
        navigate("/dashboard");

        console.log("Login success:", response.data);
      } catch (error: any) {
        console.error("Login error:", error.response?.data || error.message);
      } finally {
        setIsLoading(false);
      }
    }
  });

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row md:justify-center items-center bg-gradient-to-t from-[#1E63B41A] to-[#244266] lg:bg-none">
        <div className="hidden lg:block w-1/2">
          
    <div className="w-full flex h-screen flex-col text-white p-4">
      {/* Top - Logo */}
      <div className="flex items-center h-[10%]">
        <img src="/logo.png" alt="Logo" className="w-[200px]" />
      </div>
      <div className="flex justify-center items-center w-full h-[90%]">
        <img
          src="hero.png"
          alt="Hero"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
        </div>
        <div className="flex justify-start items-center w-full lg:w-1/2">
          <div className="bg-[#FFFFFF] py-8 px-6 rounded-2xl w-[90%] md:w-[60%]">
            <h2 className="text-black text-3xl font-bold mb-2 text-center">Account Login</h2>
           <p className="text-gray-800 opacity-50 text-sm">If you are already a member you can login with your email address and password.</p>

            <form onSubmit={formik.handleSubmit} className="space-y-2 pb-8">
              {/* Email Input */}
              <div className="pt-8 pb-2">
                <label htmlFor="email" className="block mb-3 text-sm font-medium text-black opacity-50">Email address </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-4 py-2 rounded-lg bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none  focus:border-blue-500"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                )}
              </div>
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block mb-3 text-sm font-medium text-black opacity-50"> Password </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full px-4 py-2 rounded-lg bg-[#FFFFFF] text-[#141519] border border-[#9EA2B3] focus:outline-none  focus:border-blue-500"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <span
                    className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEye className="text-[#292B33]" /> : <FiEyeOff className="text-[#292B33]" />}
                  </span>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                )}
              </div>

          <div className="flex items-center space-x-2 py-3">
            <input type="checkbox" id="remember" className="accent-blue-500" />
            <label htmlFor="remember" className="text-sm text-black opacity-50">
              Remember me
            </label>
          </div>

              {/* Submit Button */}
            <button
            type="submit"
            className="w-full py-4 bg-[#2C73EB] hover:bg-blue-700 text-white rounded-sm transition-colors"
            >
            {isLoading ? "Logging in..." : "Login"}
          </button>
            </form>
          <p className="text-sm text-center text-gray-800 opacity-50">
          Don't have an account?{" "}

          {/* Use React Router Link for client-side navigation */}
          <Link to="/register" className="text-[#2C73EB] hover:underline">
            Sign up here
          </Link>
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
