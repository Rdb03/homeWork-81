import './App.css'
import {useAppSelector} from "./app/hook.ts";
import {selectLink} from "./app/linkSlice.ts";
import LinkForm from "./components/LinkForm/LinkForm.tsx";

const App = () => {
    const link = useAppSelector(selectLink);

    return (
        <>
            <LinkForm/>
            <div>
                <h2>Your link now looks like this:</h2>
                {link?
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.shortUrl}
                </a> : ''}
            </div>
        </>
    );
};

export default App;
