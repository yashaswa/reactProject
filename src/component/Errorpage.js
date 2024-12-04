import {useRouteError} from "react-router-dom"

const ErrorPage = ()=> {

    const err = useRouteError();
return <div className="error">

    <img src="https://content.imageresizer.com/images/memes/Cute-Cat-meme-4xgqu.jpg"></img>
<h1>Oops something went Wrong....</h1>

<h1>{err.status}:  {err.statusText}</h1>
</div>
}

export default ErrorPage;
