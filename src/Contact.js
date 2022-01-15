import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Message sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    try {
      const templateParams = {
        name,
        email,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <Title>Contact Us</Title>
      <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Name
          type="text"
          name="name"
          {...register("name", {
            required: {
              value: true,
              message: "Please enter your name",
            },
            maxLength: {
              value: 30,
              message: "Please use 30 characters or less",
            },
          })}
          placeholder="Name"
        ></Name>
        {errors.name && (
          <span className="errorMessage">{errors.name.message}</span>
        )}

        <Email
          type="email"
          name="email"
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          placeholder="Email address"
        ></Email>
        {errors.email && (
          <span className="errorMessage">
            Please enter a valid email address
          </span>
        )}

        {/* Row 3 of form */}

        <TextArea
          rows={5}
          name="message"
          {...register("message", {
            required: true,
          })}
          placeholder="Message"
        ></TextArea>
        {errors.message && (
          <span className="errorMessage">Please enter a message</span>
        )}

        <Send type="submit">Submit</Send>
      </Form>
      <ToastContainer></ToastContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 60px 30px 100px 30px;
  text-align: center;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 40px auto;
  font-weight: bold;
  color: rgb(110, 175, 186);
`;

const Form = styled.form`
  margin: auto;
  text-align: left;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Name = styled.input`
  width: 35%;
  padding: 10px;

  margin-right: 5%;
  margin-bottom: 20px;
  border: 0.2px solid black;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;
const Email = styled.input`
  width: 60%;
  margin-bottom: 20px;
  padding: 10px;
  border: 0.2px solid black;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;
const TextArea = styled.textarea`
  padding: 10px;
  border: 0.2px solid black;
  border-radius: 5px;
  display: block;
  width: 100%;
  margin-bottom: 20px;
`;
const Send = styled.button`
  background-color: black;
  color: white;
  height: 35px;
  text-align: center;
  padding: 0 20px 0 20px;
  font-size: 16px;
  line-height: 2em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 1s ease;
  margin: 5px 10px 4px 10px;
  &:hover {
    color: #8efb2c;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: 10px 10%;
    height: 50px;
  }
`;

export default Contact;
