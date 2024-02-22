import { useForm } from "react-hook-form";
import Field from "../componenets/Field";
import FieldSet from "../componenets/FieldSet";

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState:{errors},
        setError,

    } = useForm();
    const submitForm = (formData) => {
        const user = {email: 'x@example.com', password: '123456789'}
        const found = formData.email === user.email && formData.password === user.password;
        if(!found) {
            setError(
                "root.random" ,{message : `User with email ${formData.email} not found`, type: "random"}
            )
        }
        console.log(formData)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(submitForm)}>
                <FieldSet label="Enter Login Details">
                    <Field label="Email" error={errors.email}>
                        <input

                            {...register("email", { required: "Email is required" })}
                            className={`p-2 border box-border w-[300px] rounded-md ${!!errors.email ? "border-red-500" : "border-gray-200"}`}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email address"
                        />
                    </Field>
                    <Field label="Password" error={errors.password}>
                        <input
                        
                            {...register("password", { required: "Password is required", minLength: { value: 8, message: "Your Password must be at least 8 characters" } })}
                            className={`p-2 border box-border w-[300px] rounded-md ${!!errors.password ? "border-red-500" : "border-gray-200"}`}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your Password"
                        />
                    </Field>
                </FieldSet>
                <div>
                    {errors?.root?.random?.message}
                </div>
                <Field >
                    <button className="text-md text-white cursor-pointer p-1 border rounded-lg bg-purple-500 mx-auto ">Login</button>
                </Field>
            </form>
        </div>
    );
}