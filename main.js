const fs = require('fs')
const path = require('path')//解析需要遍历的文件夹
const filePath = path.resolve('./book')
const exec = require('child_process').exec;

const writeToMongoDb = path => {
    // mongoimport --db test --collection user --file C:\Users\zhang_zk\Desktop\new.json
    const db_name = "word"
    const db_table = "wx_word"

    var cmd = `mongoimport --db ${db_name} --collection ${db_table} --file ${path}`

    exec(cmd, function(error, stdout, stderr) {
        if(error){
            console.log(error)
            debugger
        }
        if(stdout){
            console.log('sucess => ',stdout)
        }else if(stderr){
            debugger
            console.log('fail => ',stderr)
        }
    })
}

const getFileByPath = filePath => {
    console.log(filePath)
    fs.readdir(filePath, (err,files) => {
        if(err){
            console.warn(err)
        }else{
            console.log(files)
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                var filedir = path.join(filePath, filename)
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                // 使用 fs.stat() 检查文件是否存
                fs.stat(filedir,function(eror, stats){
                    if(eror){
                        console.warn('获取文件stats失败')
                    }else{
                        var isFile = stats.isFile()//是文件
                        var isDir = stats.isDirectory()//是文件夹
                        if(isFile){
                            console.log(filedir)
　　　　　　　　　　　　　　　　　writeToMongoDb(filedir)
                        }
                        if(isDir){
                            getFileByPath(filedir)//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            })
        }
    })
}

const start = () => {
    getFileByPath(filePath)
}

start()