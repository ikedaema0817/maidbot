// Description:
//   HelloWorld

module.exports = function(robot) {
  robot.send({}, "Heloo, my master");

  robot.hear(/Good morning/i, res => {
    res.send("Good morning, my master")
  })

  
};


