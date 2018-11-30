var gui;
var [distance, distanceMin, distanceMax, distanceStep] = [400, 500, 14000, 5];
let r = 64
let pepe = [0,0]

function setup() {
	
	createCanvas(600, 200)
	gui = createGui('Main Panel for controling');
	gui.addGlobals('distance');
	pepe = [width/2, height/2]
}
function draw() {
	background(39,40,34);
	stroke(255,0,0)
	// find coordinates
	pepe = [distance, height/2]
	let t1 = [width/2, (height/2) + r]
	let t2 = [width/2, (height/2) - r]

	// paralel-ish lines
	line(...t1, ...pepe);
	line(...t2, ...pepe);

	// text
	push()
		fill(255)
		noStroke()
		text("Hey, Karatsuba:3", ...pepe)
	pop()

	// circe opacity
	push()
		let opac = map(distance, 400, 14000, 255, 0)
		fill(255, opac)
		ellipse(width/2, height/2,r*2,r*2)

	pop()

	// hline
	// vline
	if (opac < 60){
		strokeWeight(5)
		stroke(0, 255, 0)
		line(...t1, width/2, (height/2) + 5)
		stroke(0, 0, 255)
		line(...t2, width/2, (height/2) - 5)
		stroke(0, 255, 255)
		line((width/2)-r, height/2, (width/2)+r, height/2)
		strokeWeight(1)
		fill(180, 60, 80)
		ellipse(width/2, height/2, 10, 10)
	}

	// upper \ lower points
	push()
		stroke(0,0,255)
		ellipse(...t1, 5,5)
		ellipse(...t2, 5,5)
	pop()

	// calculations
	push()
		textSize(18) 
		fill(255)
		noStroke()
		let cos_val  	= Math.round((r/distance)*10000)/10000; // r/distance
		let message = `cos(α) = r/distance = ${r}/${distance} = ${cos_val}`
		// 			     r           ${r} 
		// cos(α) = ----------   = ---------- =  ${cos_val}  
		//           distance     ${distance}    
		text(message, 50, height-20)
	pop()


}