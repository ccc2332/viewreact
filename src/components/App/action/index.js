
function fetchData(type, content){
    return {
        type,
        content
    }
}

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}



const getTableData = (params) => {
    return (dispatch) => {
        dispatch(fetchData("APP_GETTABLEDATA", {data}))
    }
}


//输出 type 与 方法
export {
    getTableData
}