import {FormLogin} from "@/ui/organisms";
import "./loginStyles.scss";

export default function Login():React.ReactNode{
    return (
        <main className="content-form-login">
            <section>
                <FormLogin />
            </section>
        </main>
    )
}