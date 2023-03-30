// Example of Controlled component where state is not defined.

// UnControlled Component : keeps track of their own states and release data only when event occurs e.g submit event.

// Controlled Component: do not keep track of their own state. All state is passed in as props
// (that is when we use useState Hook with text inputs)

// Controlled components are more preferable as they are more reusable and easy to test.

// Controlled form allows us to do the validations before the user submits the form.

import {useEffect, useState} from "react";

const ControlledForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [nameInputError, setNameInputError] = useState('');

    useEffect(() => {
        if (name.length <= 2) {
            setNameInputError('Enter more than 2 chars.');
        } else {
            setNameInputError('');
        }

    }, [name, age])

    return(
        <>
            <form>
                <input name={'name'}
                       type={'text'}
                       placeholder={'Name: '}
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                />
                {nameInputError &&
                    <p>{nameInputError}</p>
                }

                <input name={'age'}
                       type={'number'}
                       placeholder={'Age: '}
                       value={age}
                       onChange={(e) => setAge(Number(e.target.value))}
                />

                <button>Submit</button>
            </form>
        </>
    );
};

export default ControlledForm;