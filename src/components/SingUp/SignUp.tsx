import { useState } from "react";
import { useNavigate } from "react-router";
import { createUser } from "../../firebase";
import { startSession } from "../../session";
import style from "./style/style.module.scss";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secendPassword, setSecendPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onChangeSecendPassword = (event: React.FormEvent<HTMLInputElement>) => {
    setSecendPassword(event.currentTarget.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password || !secendPassword) {
      return  setError("Please fill out all the fields.");
    
    } else if (password !== secendPassword) {
      return setError("Passwords do not match");
      
    }
    setError("");

    try {
      let newUser = await createUser(email, password);
      startSession(newUser.user);
      navigate('/verification_email')
    } catch (error) {
      if(error instanceof Error){
        setError(error.message)
        console.log(error.message)
      }
      else {
        console.log('Unexpected error', error)
      }
    }
  };

  return (
    <div className={style.signUp_main}>

      <div className={style.signUp_errorBlock}>
        <h4>Sign up</h4>
        {error && ( 
            <h4 className={style.error_text}>{error}</h4>
        )}
      </div>

      <form onClick={onSubmit} className={style.signUp_form}>
        <input type="email" placeholder="Type email..." onChange={onChangeEmail} value={email} />
        <input
          type="password"
          placeholder="Type password..."
          onChange={onChangePassword}
          value={password}
        />
        <input
          type="password"
          placeholder="Type password..."
          onChange={onChangeSecendPassword}
          value={secendPassword}
        />
        <button type="submit" className={style.signUp_button}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
