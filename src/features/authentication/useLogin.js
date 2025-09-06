import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      //from this we can store the data in cache
      queryClient.setQueryData(["user"], user.user);
      //       navigate('/dashboard')	Adds a new entry – you can go back to previous page
      //       navigate('/dashboard', { replace: true })	Replaces the current entry – prevents going back to previous page
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { login, isLoading };
}

export default useLogin;
