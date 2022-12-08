import { useEffect, useState } from "react"

const useArrayMapper = (arr:any, item:any) => {
    const [myState, setMyState] = useState<any[]>([])
    useEffect(() => {
        arr.map((val : any) => val.Items.map((value:any) => setMyState(value[item])))
        return () => setMyState([]);
    }, [arr])
    return myState;
}
export default useArrayMapper;