import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import api from "../api"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const SignIn = () => {
  const navigate = useNavigate()
  const { setIsLoggedIn } = useAuth()

  type Data = { username: string; password: string }
  const {
    register,
    handleSubmit,
    formState: { errors: _errors },
  } = useForm<Data>({
    reValidateMode: "onChange",
  })

  const [errors, setErrors] = useState<typeof _errors>({})

  const onSubmit = async (data: Data) => {
    try {
      await api.signIn(data)
      setIsLoggedIn(true)

      navigate("/")
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    setErrors(_errors)
  }, [_errors])

  return (
    <div className="d-flex flex-grow-1 align-items-center">
      <div className="mx-auto" style={{ width: "100%", maxWidth: 300 }}>
        <form
          className={`d-flex flex-column${
            !!Object.keys(errors).length ? " is-invalid" : ""
          }`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              {...register("username", {
                required: {
                  value: true,
                  message: "Please provide a username.",
                },
              })}
              className={`form-control${errors.username ? " is-invalid" : ""}`}
              id="username"
            />
            <div className="invalid-feedback">
              {errors?.username?.message as string}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Please provide a valid password.",
                },
                min: 6,
                pattern: {
                  message:
                    "Must be at least 6 characters long, contain at least 1 uppercase letter, 1 lowercase letter, and 1 number or special character.",
                  value:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9!@#$%^&*()_+,.?;:{}|<>=-]).{6,}$/g,
                },
              })}
              className={`form-control${errors.password ? " is-invalid" : ""}`}
              id="password"
              type="password"
            />
            <div className="invalid-feedback">
              {errors?.password?.message as string}
            </div>
          </div>
          <p className="text-end">
            <small>
              Need an account? <Link to="/sign-up">Sign Up</Link>
            </small>
          </p>
          <button className="btn btn-primary">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
