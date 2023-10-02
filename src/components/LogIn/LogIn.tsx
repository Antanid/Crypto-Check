import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../../firebase";
import { startSession } from "../../session";
import style from "./style/style.module.scss";

const LogIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!password || !email) {
      return setError("Please enter your username and password.");
    }
    setError("");

    try {
      let logIn = await signInUser(email, password);
      startSession(logIn.user);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.log(error.message);
      }
    }
  };
 

  return (
    <div  className={style.logIn_main}>
      <div className={style.logIn_errorBlock}>
        <h4>Sign up</h4>
        {error && <h4 className={style.error_text}>{error}</h4>}
      </div>

      <form onClick={onSubmit} className={style.logIn_form}>
        <input type="email" placeholder="Type email..." onChange={onChangeEmail} value={email} />
        <input
          type="password"
          placeholder="Type password..."
          onChange={onChangePassword}
          value={password}
        />
        <button type="submit" className={style.logIn_button}>
          Log In
        </button>
        <div className={style.logIn_toRegister}>
          Don't have an account yet? <Link to="/sign_up">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
