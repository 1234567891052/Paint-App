function drawLine(x, y, px, py, red, green, blue, strW){
     this.properties = database.ref('properties');  
     this.info = {
          x : x, 
          y : y, 
          px : px, 
          py : py, 
          red : red, 
          green : green, 
          blue : blue, 
          strW : strW 
     }
     this.update = function(){
          this.updateDatabase(); 
          this.draw(); 
     }
     this.updateDatabase = function(){
          if(mouseIsPressed){
               this.properties.set(this.info); 
          }
     }
     this.draw = function(){
          this.properties.on("value", (snapshot)=>{
               const data = snapshot.val();
               strokeWeight(data.strW); 
               stroke(data.red, data.green, data.blue); 
               line(data.x, data.y, data.px, data.py);   
          }); 
     }
}