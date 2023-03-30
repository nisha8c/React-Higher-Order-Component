// Higher Order component Example.
// Note: name of HOC starts with small letter, unlike normal react components.

import {Component, useEffect, useState} from "react";

const userHOC = (Component) => {
    return props => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/");
                const data = await response.json();
                setUser(data);
            }) ();
        });

        return <Component {...props} user={user} />
    }
}
export default userHOC;