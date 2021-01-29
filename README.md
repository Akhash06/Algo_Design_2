# p5.play-boilerplate
Boiler plate for p5.play
Algo_Design_1 and Algo_Design_2
 We did the function called isTouching. If object1 touches object2 the shape color should change. First to find the distances between the two objects, subtract their x positions which should less than objects width /2. and Return = True (if the object touch each other) or else return = False.
 object1.x - object2.x < object1.width/2 + object2.width/2 &&
 object2.x - object1.x < object1.width/2 + object2.width/2 &&
 object1.y - object2.y < object1.height/2 + object2.height/2 &&
 object2.y - object1.y < object1.height/2 + object2.height/2
 
 We did the function called bounceOff. If object1 touches object2 the objects bounce move to the opposite direction. The same code above works here.
 object1.x - object2.x < object1.width/2 + object2.width/2 &&
 object2.x - object1.x < object1.width/2 + object2.width/2 &&
 object1.y - object2.y < object1.height/2 + object2.height/2 &&
 object2.y - object1.y < object1.height/2 + object2.height/2
 
