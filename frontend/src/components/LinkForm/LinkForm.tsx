import {useAppDispatch} from "../../app/hook.ts";
import {LinkMutation} from "../../../type";
import React, {useState} from "react";
import {createLink} from "../../app/linkThunk.ts";


const LinkForm = () => {
    const dispatch = useAppDispatch();

    const [url, setUrl] = useState<LinkMutation>({
        link: '',
    });

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (url.link !== '') {
            await dispatch(createLink(url));

            setUrl((prevState) => ({
                ...prevState,
                link: ''
            }));
        } else {
            alert('Enter Link!');
        }
    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setUrl(prevState => {
            return {...prevState, [name]: value};
        });
    };

    return (
        <div>
            <h1>Shorten your link!</h1>
            <form style={{display: 'flex', flexDirection: 'column'}}
                  onSubmit={onSubmit}>
                <input
                    className="input-link"
                    placeholder="Enter your link!"
                    name="link"
                    required    
                    id="link"
                    value={url.link}
                    onChange={inputChangeHandler}
                />
                <button className='btn-link'>Shorten</button>
            </form>
        </div>
    );
};

export default LinkForm;