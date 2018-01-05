export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const modify=(user,a)=>{
    const b= a.target.value;
    console.log("hai inside function ",user,b);
    return {
        type: 'modify',
        payload: {id:user.id,
            first: user.first,
            last: user.last,
            age: 31,
            description: user.description,
            thumbnail: user.thumbnail}
    }

}
