export const increate = () => {
    return {
      type: 'INCREMENT'
    }
  }
  
  // 异步自增（等待1秒才触发自增action）
  export const increateAsync = () => {
    return {
      type: 'INCREMENT_ASYNC' ,
     
    }
  }