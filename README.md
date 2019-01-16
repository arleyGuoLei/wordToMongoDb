#### 介绍

> 第一次自己手写使用`nodejs`,记录一下代码,功能是读取json格式的数据写入到`mongodb`数据库

1. 单词导入量为7w+,含义及单词详情齐全,例如:

```json
{
    "_id" : ObjectId("5c3eb45bb95a5f188ec1362d"),
    "wordRank" : 1,
    "headWord" : "weight-training",
    "content" : {
        "word" : {
            "wordHead" : "weight-training",
            "wordId" : "BeiShiGaoZhong_10_1",
            "content" : {
                "sentence" : {
                    "sentences" : [ 
                        {
                            "sContent" : "I used to do weight training years ago.",
                            "sCn" : "我多年前曾进行过举重训练。"
                        }
                    ],
                    "desc" : "例句"
                },
                "speech" : "weight+training",
                "trans" : [ 
                    {
                        "tranCn" : "举重运动",
                        "descOther" : "英释",
                        "descCn" : "中释",
                        "tranOther" : "Weight training is a kind of physical exercise in which people lift or push heavy weights with their arms and legs in order to strengthen their muscles"
                    }
                ]
            }
        }
    },
    "bookId" : "BeiShiGaoZhong_10"
}
```

2. 代码为`mian.js`,`fileDisplay.js`为参考.

3. 由于不能把不是自己的东西,直接放网上,所以词库不上传,需要词库的可以`chat me and star me`.

![如图](https://i.loli.net/2019/01/16/5c3eb9e7c5137.png)