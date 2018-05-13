// Description:
//   HelloWorld

module.exports = function(robot) {
  //じゃれあい集
  robot.send({}, "Heloo, my master");

  robot.hear(/Good morning/, res => {
    res.send("Good morning, my master")
  })
  
  robot.hear(/疲.*/ || /つかれた.*/ || /I am tired/, msg => {
    msg.send(msg.random(["Cheers for good work","Please take a rest, You will always be in my heart"]))
  })

  robot.hear(/眠.*/ || /ねむい.*/ || /sleepy/, msg => {
    msg.send(msg.random(["Would you like some coffee?","Get your act together"]))
  })

  robot.hear(/好き.*/ || /I love you/ || /付き.*/ || /愛して.*/, msg => {
    msg.send(msg.random("I'm sorry my master..., I just don't see us that way"))
  })

  


};


