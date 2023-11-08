		function ciag(n) { 
			if(n < 2) return n; 
			return (ciag(n - 1) + ciag(n - 2));
		}

		for(i = 0; i < 30; i++) console.log(ciag(i));

