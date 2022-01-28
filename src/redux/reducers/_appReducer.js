const intialState = {
    messages:[
        {
            id:1,
            message:"This is an default message",
            gif:"https://media3.giphy.com/media/Tk9mGeRPwnR2CryFQp/giphy.gif?cid=5fbbf8b7tbaknjz38dub386vy2hrn57xvrdaj9pg4ndgmo9u&rid=giphy.gif&ct=g"
        },
    ],
    modal:false,
    gifInput:false
}


function AppReducer(state=intialState,action){
    console.log("AppReducer",action)
        switch(action.type){
            case "ADD_MESSAGE":
                return {
                    ...state,
                    messages:[action.message,...state.messages]
                }

                case "SET_MODAL":
                    return {
                        ...state,
                        modal:action.modal
                    }

                    case "SET_GIF_MODAL":
                        return {
                            ...state,
                            gifInput:action.gifInput
                        }

            default:
                return state;
        }
}

export default AppReducer;