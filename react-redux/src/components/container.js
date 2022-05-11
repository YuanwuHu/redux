import React, { useState, useMemo, useCallback, useEffect } from "react";
import { connect } from 'react-redux'
import { addAction, squareAction, getAction } from "../actions";
 
function Container(props) {
    const [inputVal, setInputVal] = useState(0)
    const { num, add, square, get } = props

    const oClick = useCallback(() => {
        console.log('callback');
        setInputVal(5)
    }, [])

    const memory = useMemo(() => 
    {
        console.log('memory');
        return [inputVal]
    }, [inputVal])

    useEffect(() => {
        console.log('useEffect');
    })

    return (
        <div>
            <p>{inputVal}</p>
            <p>{num}</p>
            <p>{ memory }</p>
            <button onClick={() => add(1)}>加1</button>
            <button onClick={() => add(2)}>加2</button>
            <button onClick={() => square()}>乘方</button>
            <button onClick={() => oClick()}>点击</button>
            <button onClick={() => get()}>获取数据</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        num: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => dispatch(addAction(value)),
        square: () => dispatch(squareAction()),
        get: () => dispatch(getAction())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)