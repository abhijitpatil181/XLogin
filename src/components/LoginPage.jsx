import { useState } from "react";
import { Form } from "./form";

const LoginPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Login Page</h1>
        {!isSubmitted ? (
          <Form setIsSubmitted={setIsSubmitted} />
        ) : (
          <p>Welcome, user</p>
        )}
      </div>
    </>
  );
};

export default LoginPage;
