import { FC } from "react"

type Error = {errorCode? : number, errorMessage? : string}

const ErrorPage: FC<Error> = ({ errorCode, errorMessage }): JSX.Element => {
    return (
    <>
        <h1>Error {errorCode}</h1>
        <h2>{errorMessage}</h2>
    </>
    )
}

export default ErrorPage;