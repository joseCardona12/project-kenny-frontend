import "./TitleStyles.scss";

interface ITitleProps{
    title:string,
}
export default function Title({title}:ITitleProps):React.ReactNode{
    return (
        <div className="content-title">
            <h2 className="title">
                {title}
            </h2>
        </div>
    );
}