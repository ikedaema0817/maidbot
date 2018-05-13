// Description:
//   HelloWorld
let cronJob = require('cron').CronJob;
// Todoのモジュールを受け取る

// Description:
//   TODO を管理することができるボットです
// Commands:
//   ボット名 todo     - TODO を作成
//   ボット名 done     - TODO を完了にする
//   ボット名 del      - TODO を消す
//   ボット名 list     - TODO の一覧表示
//   ボット名 donelist - 完了した TODO の一覧表示
const todo = require("todo");
console.log(todo.list());


module.exports = function(robot) {
  //じゃれあい集
  robot.send({}, "Heloo, my master.");

  robot.hear(/Good morning/, res => {
    res.send("Good morning, my master.")
  })
  
  robot.hear(/疲.*/ || /つかれた.*/ || /I am tired/, msg => {
    msg.send(msg.random(["Cheers for good work.","Please take a rest, You will always be in my heart.","Don't give up, You can get throuph this."]))
  })

  robot.hear(/眠.*/ || /ねむい.*/ || /sleepy/, msg => {
    msg.send(msg.random(["Would you like some coffee?","Get your act together."]))
  })

  robot.hear(/好き.*/ || /I love you/ || /付き.*/ || /愛して.*/, msg => {
    msg.send(msg.random("I'm sorry my master..., I just don't see us that way." , "I love you too, my master."))
  })

  //時間お知らせ機能
  let morningjob;
  return morningjob = new cronJob({
    cronTime: "0 0 8 * * *",
    start: true,
    timeZone: "Asia/Tokyo",
    onTick: function(){
      return robot.send({
        room: "#myroom"
      },"Good morning, my master");
    }
  });

  let returningHome;
  return returningHome = new cronJob({
    cronTime: "0 1 6 * * *",
    start: true,
    timeZone: "Asia/Tokyo",
    onTick: function(){
      return robot.send({
        room: "#myroom"
      },"It is already time to go home, my master");
    }
  });

  //Todo処理
};


