import React from "react";
const UncontrolledForm = () => {

    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const handleSubmit = e => {
        e.preventDefault();
        alert(`Name: ${nameInput.current.value} and Age: ${ageInput.current.value}`);
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input name={'name'}
                       type={'text'}
                       placeholder={'Enter Name'}
                       ref={nameInput}
                />

                <input name={'age'}
                       type={'number'}
                       placeholder={'Enter Age'}
                       ref={ageInput}
                />

                <input type={'submit'} value={'Submit'}/>
            </form>
        </>
    );
};

export default UncontrolledForm;