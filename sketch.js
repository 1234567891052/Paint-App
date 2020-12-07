let database, painter; 
let r, g, b, col; 
let w; 

function setup(){
     createCanvas(600, 600); 
     background(0); 
     var firebaseConfig = {
          apiKey: "AIzaSyD-Kgzj7CRTOvgpQ0m5Ya3usYnvyCmJZ3s",
          authDomain: "paint-app-alpha.firebaseapp.com",
          databaseURL: "https://paint-app-alpha-default-rtdb.firebaseio.com",
          projectId: "paint-app-alpha",
          storageBucket: "paint-app-alpha.appspot.com",
          messagingSenderId: "1079843133078",
          appId: "1:1079843133078:web:5fb13df5f9bc36294514b7"
     };
     firebase.initializeApp(firebaseConfig);
     database = firebase.database(); 
     r = createSlider(0, 255, 255); 
     g = createSlider(0, 255, 255); 
     b = createSlider(0, 255, 255); 
     w = createSlider(1, 50, 10); 
}

function draw(){
     let redval = r.value(); 
     let greenval = g.value(); 
     let blueval = b.value();
     let weightval = w.value(); 
     painter = new drawLine(mouseX, mouseY, pmouseX, pmouseY, redval, greenval, blueval, weightval); 
     painter.update(); 
}