import { FC } from "react"
import { DefaultContainer } from "../components/Containers/DefaultContainer";

type Error = {errorCode? : number, errorMessage? : string}

const ErrorPage: FC<Error> = ({ errorCode, errorMessage }): JSX.Element => {
    return (
        <DefaultContainer>
            <h1>Error {errorCode}</h1>
            <h2>{errorMessage}</h2>
        </DefaultContainer>
    )
}

export default ErrorPage;