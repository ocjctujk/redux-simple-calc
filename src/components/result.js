import { useSelector } from "react-redux/es/exports";

function Result(){

    const myState = useSelector((state)=>state.calcReducer);
    return (
        <>
            <h1>Result : {myState.value}</h1>
            <h3>Logs : {myState.log}</h3>
        </>
    )
}

export default Result;