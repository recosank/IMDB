const init = {}


export default (state=init,{type,payload}) => {
    switch (type) {
        case 'userActive':
            return state=payload
        default:
            return init;
    }
}