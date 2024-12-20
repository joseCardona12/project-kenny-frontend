"use client";
import * as yup from 'yup'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ILoginRequestDto} from "@/app/core/application/dto/auth/loginRequestDto";
import {FormField} from "@/ui/molecules";
import {Title,Button} from "@/ui/atoms";
import "./formLoginStyles.scss";
import Link from "next/link";

const loginSchema = yup.object().shape({
    phone_number: yup
    .string()
    .required()
        .max(10, "The phone number mush be less than 10 characters")
        .min(1, "The phone number must have more than 1 character"),
    password: yup
    .string()
    .required()
    .max(10, "The phone number must have more than 10 characters"),
});

export default function FormLogin():React.ReactNode{

    const {
        control,
        handleSubmit,
        formState: { errors}
    } = useForm<ILoginRequestDto>({
        mode: 'onChange',
        reValidateMode: "onChange",
        resolver: yupResolver(loginSchema),
    });

    const handleLogin = async({phone_number,password}: ILoginRequestDto ):Promise<void> =>{
        console.log(phone_number,password);
    }

    return (
        <form className="form-login" onSubmit={handleSubmit(handleLogin)}>
            <Title
                title="Sign In"
            />
            <p>Continue with email address</p>
            <FormField<ILoginRequestDto>
                label="Phone number"
                type="text"
                name="phone_number"
                placeholder="Enter your phone number"
                control={control}
                error={errors.phone_number}
            />
            <FormField<ILoginRequestDto>
                label="Password"
                type="password"
                name="password"
                placeholder="Enter password"
                control={control}
                error={errors.password}
            />
            <p className="login-link">Dont have a account?
                <Link className="link" href="#">Sign up</Link>
            </p>
            <Button
                text="login"
            />
        </form>
    )
}