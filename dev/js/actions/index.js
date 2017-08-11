export const selectUser = (user) => {
    console.log(user.first);
    return {
        type: "USER_SELECTED",
        payload: user
    }
}

/* ACTION HAS A TYPE * PAYLOAD*/
/*function=action creator called and returns object=action */

/*HAVE TO HOOK THIS TO THE USERLIST.JS*/