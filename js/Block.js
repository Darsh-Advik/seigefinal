class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }
     
      display(){
        console.log(this.body.speed);
        if(this.body.speed <3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
1
class Block{
2
    constructor(x, y, width, height) {
3
        var options = {
4
           
5
            restitution :0.4,
6
            friction :0.0,
7
            //isStatic:true
8
           
9
        }
10
        this.visibility = 225;
11
        this.body = Bodies.rectangle(x, y, width, height, options);
12
        this.width = width;
13
        this.height = height;
14
        World.add(world, this.body);
15
        
16
      }
17
     
18
      display(){
19
        console.log(this.body.speed);
20
        if(this.body.speed <3){
21
        var angle = this.body.angle;
22
        var pos= this.body.position;
23
        push();
24
        translate(pos.x, pos.y);
25
        rotate(angle);
26
        rectMode(CENTER);
27
        rect(0,0,this.width, this.height);
28
        pop();
29
      }else{
30
        World.remove(world, this.body);
31
        push();
32
        this.visibility = this.visibility -5;
33
        pop();
34
        
35
      }
36
    }
37
​
38
      score() {
39
​
40
      if (this.visibility<0 && this.visibilty> -105){
41
    
42
        score= score +100;
43
        
44
      }
45
    }

        this.visibility = this.visibility -5;
        pop();
        
      }
    }

      score() {

      if (this.visibility<0 && this.visibility> -105){
    
        score= score +100;
        
      }
    }

}
