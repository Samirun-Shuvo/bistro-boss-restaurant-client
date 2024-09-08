import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth(); // Destructure to get googleSignIn from the context
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res) {
            navigate("/");
          }
        });
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
      });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="px-6 pb-4">
        <button onClick={handleGoogleSignin} className="btn">
          <FaGoogle className="" />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
