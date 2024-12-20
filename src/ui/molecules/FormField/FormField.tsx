import {Control, Controller, FieldError, FieldValues, Path} from "react-hook-form";
import {Input} from "@/ui/atoms";
import "./formFieldStyles.scss";

interface IFormFieldProps<T extends FieldValues> {
    label:string,
    type:string,
    name:Path<T>
    placeholder:string,
    error?:FieldError,
    control:Control<T>
    id?:string
}
export default function FormField<T extends FieldValues>({
    label,
    type,
    name,
    placeholder,
    error,
    control,
    id
}:IFormFieldProps<T>):React.ReactNode{
    return (
        <div className="form-field">
            <label
            htmlFor={id || label.toLowerCase()}
            >
                {label}
            </label>
            <Controller
                name={name}
                control={control}
                render={({field})=>(
                    <Input
                        {...field}
                        id={id || label.toLowerCase()}
                        type={type}
                        placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
                        error={error?.message}
                    />
                )}
            />
        </div>
    )
}