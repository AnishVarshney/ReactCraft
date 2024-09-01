import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// const persistedUser = JSON.parse(localStorage.getItem("persist:root"));
// const TOKEN = persistedUser?.user?.currentUser?.accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

let TOKEN = "";
const persistRoot = localStorage.getItem("persist:root");
if (persistRoot) {
    try {
        const parsedPersistRoot = JSON.parse(persistRoot);
        const user = parsedPersistRoot?.user;
        const currentUser = typeof user === 'string' ? JSON.parse(user).currentUser : user?.currentUser;
        TOKEN = currentUser?.accessToken || "";
    } catch (error) {
        console.error("Error parsing persist:root or accessing currentUser:", error);
    }
}

console.log("Access Token:", TOKEN);

// // Safe parsing with default values
// let TOKEN = "";
// try {
//     const storedData = localStorage.getItem("persist:root");
//     if (storedData) {
//         const parsedData = JSON.parse(storedData);
//         if (parsedData.user) {
//             const user = JSON.parse(parsedData.user);
//             if (user && user.currentUser && user.currentUser.accessToken) {
//                 TOKEN = user.currentUser.accessToken;
//             }
//         }
//     }
// } catch (error) {
//     console.error("Error parsing accessToken from localStorage:", error);
// }


// console.log(localStorage.getItem("persist:root"));
// console.log(JSON.parse(localStorage.getItem("persist:root")));
// console.log(JSON.parse(localStorage.getItem("persist:root")).currentUser);
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).accessToken);
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});