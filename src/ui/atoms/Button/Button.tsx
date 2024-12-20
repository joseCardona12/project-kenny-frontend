import "./buttonStyles.scss";
interface IButtonProps{
    text:string,
}
export default function Button({
    text,
    ...props
}:IButtonProps):React.ReactNode{
    return (
        <button className="button" {...props}>
            {text}
        </button>
    )
}