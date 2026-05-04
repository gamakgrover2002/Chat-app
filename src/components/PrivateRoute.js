import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const profile = false;

  useEffect(() => {
    if (!profile) {
      navigate("/signin", { replace: true });
    }
  }, [profile, navigate]);

  return profile ? children : null;
}

export default PrivateRoute;