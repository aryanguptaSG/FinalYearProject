import endPoint from "./endPoints";


export const logIn = (email, pass, type, navigateToHomePage) => {
    const data = {
        "email": email,
        "pass": pass
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    if (type === "Customer") {
        fetch(endPoint.LOGIN_C, requestOptions)
            .then(response => {
                if (response.status === 500) {
                    alert("Email or PAssword is Incorrect !");
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (!data) return;
                console.log(data);
                localStorage.setItem("user", JSON.stringify(data));
                localStorage.setItem("type", "c");
                navigateToHomePage();
                alert(`Logged In`);
            })
            .catch(err => {
                alert(err);
            });
    }

    else {
        fetch(endPoint.LOGIN_W, requestOptions)
            .then(response => {
                if (response.status === 500) {
                    alert("Email or PAssword is Incorrect !");
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (!data) return;
                console.log(data);
                localStorage.setItem("user", JSON.stringify(data));
                localStorage.setItem("type", "w");
                navigateToHomePage();
                alert(`Logged In`);
            })
            .catch(err => {
                alert(err);
            });
    }

}


export const signUp = (email, pass, type, navigateToHomePage) => {
    const data = {
        "email": email,
        "pass": pass
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    if (type === "Customer") {
        fetch(endPoint.SIGNUP_C, requestOptions)
            .then(response => {
                if (response.status === 400) {
                    alert("Email is Already Used !");
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (!data) return;
                console.log(data);
                logIn(email, pass, type, navigateToHomePage);
                alert(`Account Created`);
            })
            .catch(err => {
                alert(err);
            });
    }

    else {
        fetch(endPoint.SIGNUP_W, requestOptions)
            .then(response => {
                if (response.status === 400) {
                    alert("Email is Already Used !");
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (!data) return;
                console.log(data);
                logIn(email, pass, type, navigateToHomePage);
                alert(`Account Created`);
            })
            .catch(err => {
                alert(err);
            });
    }
}


export const logOut = (navigateToLoginPage) => {
    localStorage.clear();
    navigateToLoginPage();
}

export const deleteAccount = (token, type, navigateToLoginPage) => {
    const data =
    {
        "authToken": token
    }
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    if (type === "c") {
        fetch(endPoint.DELETE_PROFILE_C, requestOptions)
            .then(response => {
                if (response.status === 500 || response.status === 404) {
                    alert(response);
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (!data) return;
                console.log(data);
                alert(data.msg);
                localStorage.clear();
                navigateToLoginPage();
            })
            .catch(err => {
                alert(err);
            });
    }

    else {
        fetch(endPoint.DELETE_PROFILE_W, requestOptions)
            .then(response => {
                if (response.status === 500 || response.status === 404) {
                    alert(response);
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (!data) return;
                console.log(data);
                alert(data.msg);
                localStorage.clear();
                navigateToLoginPage();
            })
            .catch(err => {
                alert(err);
            });
    }
}



export const updateProfile = (data, type, navigateToHomePage) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    if (type === "c") {
        fetch(endPoint.UPDATE_PROFILE_C, requestOptions)
            .then(response => {
                if (response.status === 500 || response.status === 404) {
                    alert(response);
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (!data) return;
                const auth = JSON.parse(localStorage.getItem("user"));
                auth.user = data;
                console.log(auth);
                localStorage.setItem("user", JSON.stringify(auth));
                alert("Saved Changes");
                navigateToHomePage();
            })
            .catch(err => {
                alert(err);
            });
    }

    else {
        fetch(endPoint.UPDATE_PROFILE_W, requestOptions)
            .then(response => {
                if (response.status === 500 || response.status === 404) {
                    alert(response);
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (!data) return;
                const auth = JSON.parse(localStorage.getItem("user"));
                auth.user = data;
                console.log(auth);
                localStorage.setItem("user", JSON.stringify(auth));
                alert("Saved Changes");
                navigateToHomePage();
            })
            .catch(err => {
                alert(err);
            });
    }
}


export const searchWorker = async (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const response = await fetch(endPoint.SEARCH_WORKER, requestOptions);
    const result = await response.json();
    return result;
}