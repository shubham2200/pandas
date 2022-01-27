


function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log('register end  ')
            resolve(' error on the register ');
        }, 2000);

    })
}

function sendmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log('send mail end')
            resolve();
        }, 5000);

    })
}

function login() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log('login are the end')
            resolve();

        }, 6000);
    })
}

function getuserdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log('get the user data successfuly')
            resolve();

        }, 1000);

    })
}

function display() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log('data now display')
            resolve();
        }, 1000);

    })
}

// register()
//     .then(sendmail)
//     .then(login)
//     .then(getuserdata)
//     .then(display)
//     .catch((err) =>{
//         console.log('error :',err)
//     });

async  function  authenticate(){
    await register();
    await sendmail();
    await login();
    await getuserdata();
    await display();
}
authenticate().then(()=>{
    console.log('all set now user')
})

console.log('hello user sir')