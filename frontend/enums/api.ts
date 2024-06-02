export enum api {
    mainServer = "http://10.0.0.11:5000/api",
    loginMainServer = "http://10.0.0.11:5000/api/auth/login",
    registerMainServer = "http://10.0.0.11:5000/api/auth/register",
    logoutMainServer = "http://10.0.0.11:5000/api/auth/logout",
    findUser = "http://10.0.0.11:5000/api/user/find",
    addToList = "http://10.0.0.11:5000/api/user/addToList",
    removeFromList = "http://10.0.0.11:5000/api/user/removeFromList",
    like = "http://10.0.0.11:5000/api/user/like",
    dislike = "http://10.0.0.11:5000/api/user/dislike",
    getNotification = "http://10.0.0.11:5000/api/notification/getNotification",
    addNotification = "http://10.0.0.11:5000/api/notification/addNotification"

}