import { toast } from "react-toastify";

const useToast = (msg, status = null) => {
  if (!status) {
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  } else {
    toast.error(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
    });
  }
};

export default useToast;
