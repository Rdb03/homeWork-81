import './App.css'
import {useAppSelector} from "./app/hook.ts";
import {selectLink} from "./app/linkSlice.ts";
import LinkForm from "./components/LinkForm/LinkForm.tsx";
import {apiUrl} from "./constants.ts";

const App = () => {
    const link = useAppSelector(selectLink);

    return (
        <>
            <LinkForm/>
            <div>
                <h2>Your link now looks like this:</h2>
                {link?
                    <a href={apiUrl + link.shortUrl} target="_blank" rel="noopener noreferrer">
                    {apiUrl + link.shortUrl}
                </a> : ''}
            </div>
        </>
    );
};

export default App;
