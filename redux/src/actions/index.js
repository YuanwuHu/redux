import { ADD, SQUARE, GET } from "../constans/actionTypes" 
 
  // action 创建函数
  const addAction = (num) => {
    return {
        type: ADD,
        num: 1
    }
  }

  const squareAction = () => {
      return {
          type: SQUARE
      }
  }

  const getAction = () => {
      return (dispatch, getState) => {
        fetch('./data.json')
          .then(res => res.json())
          .then(res => {
            dispatch({
              type: GET,
              num: Number(res[3])
            })
          })
      }
  }

  export {
    addAction,
    squareAction,
    getAction
  }