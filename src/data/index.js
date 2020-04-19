import fs from 'fs'
import path from 'path'
const file_path = path.join(__dirname, './data.json').replace(/\\/g, "\/");

// 异步读取
export const result = JSON.parse((fs.readFileSync(file_path)).toString())

export const addJson = (params) => {
  var data = result
  data.list.push(params)
  var str = JSON.stringify(data)
  // 写入文件
  fs.writeFile(file_path, str, function(err){
    if(err){
        console.log(err);
    } else {
      console.log(str)
      console.log('----------新增成功-------------');
    }
  })
}

// 删除
export const deleteJson = (id) => {
  fs.readFile(file_path, (error, data) => {
    if(error) {
      return console.log(error)
    }
    var listData = JSON.parse(data.toString())
    for(var i = 0; i <listData.list.length;i++){
      if(id ==listData.list[i].id){
         listData.list.splice(i,1);
      }
    }
    var str = JSON.stringify(listData)
    // console.log(str)
    // 写入数据
    fs.writeFileSync(file_path, str, function(err){
      if(err){
        console.log(err);
      } else {
        console.log(str)
        console.log('----------写入成功-------------');
      }
    })

  })
}
