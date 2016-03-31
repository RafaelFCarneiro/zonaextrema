export default function addActivity(state, action) {
console.log("*********", state, action);

    if(state === undefined) state = {}

    if(action.type && action.type === "addActivity") {
        debugger
    }

    return state

}