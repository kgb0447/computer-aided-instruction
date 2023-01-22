import React from "react"
const Mapper = (arr:any[],ele?:any) => {
    arr.map((item: any,index : number) => (
        <React.Fragment key={item + index}>
            <h1>{item.Subject}</h1>
        </React.Fragment>
    ))
}

export default Mapper