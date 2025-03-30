import { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    passwordConfirm: "",
    petSpecies: "",
    petWeight: "",
    petGender: "",
    password: "",
    username: "",
    petBreed: "",
    petname: "",
    petAge: "",
  });

  const {
    petAge,
    petname,
    username,
    petBreed,
    password,
    petWeight,
    petGender,
    petSpecies,
    passwordConfirm,
  } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("Введені паролі не співпадають.");
      return;
    }

    // 회원가입 API 호출
  };

  return (
    <div>
      <h1>Реєестрація</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Ім'я"
          value={username}
          onChange={onChange}
        />
        <input
          type="text"
          name="petname"
          placeholder="Кличка пацієнта"
          value={petname}
          onChange={onChange}
        />
        <input
          type="text"
          name="petSpecies"
          placeholder="Вид тварини"
          value={petSpecies}
          onChange={onChange}
        />
        <input
          type="text"
          name="petBreed"
          placeholder="Порода тварини"
          value={petBreed}
          onChange={onChange}
        />
        <input
          type="text"
          name="petGender"
          placeholder="Стать тварини"
          value={petGender}
          onChange={onChange}
        />
        <input
          type="text"
          name="petAge"
          placeholder="Вік тварини"
          value={petAge}
          onChange={onChange}
        />
        <input
          type="text"
          name="petWeight"
          placeholder="Вага тварини"
          value={petWeight}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={onChange}
        />
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Підтвердження паролю"
          value={passwordConfirm}
          onChange={onChange}
        />
        <button type="submit">Зареєструватись</button>
      </form>
    </div>
  );
};

export default RegisterPage;