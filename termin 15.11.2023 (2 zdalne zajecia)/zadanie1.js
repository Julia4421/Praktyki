let x = 8;
let y = 11;


function rekurencja(x,y){

	if(y<x){
		console.log(y);
		
	} else if(y==x){
        console.log(y);
	}
	
	else{
		console.log(y);
		return rekurencja(x,y-1)
	}

}

rekurencja(x,y);