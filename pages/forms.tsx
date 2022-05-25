import { useForm } from "react-hook-form";

// Less code (c)
// Better validation
// Better Erros (set, clear, display)
// Have control over inputs
// Dont deal with events (c)
// Easier Inputs (c)

export default function Forms() {
  const { register } = useForm();
  return (
    <form>
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
      />
      <input {...register("email")} type="email" placeholder="Email" required />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}

{/*
  preventDefault => 새로고침 방지
  register 함수는 input을 state와 연결시키는 역할을 한다. useForm에서 온다.
*/}