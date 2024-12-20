import "./inputStyles.scss";
interface IInputProps{
    type?:string,
    error?:string,
    placeholder?:string,
    name?:string
}
export default function Input({
    type,
    placeholder,
    name,
    error,
    ...props
}:IInputProps):React.ReactNode{
    return (
        <div className="content-input">
            <input
                className="input"
                type={type}
                placeholder={placeholder}
                name={name}
                {...props}
            />
            {error && <span className="input-error">{error}</span>}
        </div>
    )
}