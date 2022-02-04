//Handling the sending of contact form
import { uiAction } from "./ui-slice";
import { init, sendForm } from "@emailjs/browser";

init(process.env.REACT_APP_EMAILJS);

export const sendContactFormData = (formData) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending message!",
      })
    );
    const sendEmail = async () => {
      const response = await sendForm(
        "contact_service",
        "contact_form",
        "#contact-form"
      );
      if (!response.ok) {
        throw new Error("Did not send data");
      }
    };
    try {
      await sendEmail();
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
