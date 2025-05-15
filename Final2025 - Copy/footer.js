

const template = document.createElement('template');
template.innerHTML = 
      <div class="linksHolder">
			<div>
				<a href="xxx_design.html" title="Design Document" target="_blank" rel="noopener"> Design Document </a>
				<a href="https://www.tccd.edu/" title="TCCD link"> TCC Home </a>
			</div>
			
			<div>
				<a href="mailto:nerdentalk@nerden.com" title="Nerden Email"> nerdentalk@nerden.com </a>
				<a href="xxx_sitemap.html" title="Site Map"> Site Map </a>
			</div>
			
			<div>
				<img src="images\facebook.png" alt="Facebook Logo" height="100px"> 
				<img src="images\twitter.png" alt="Twitter Logo" height="100px"> 
				<img src="images\insta.png" alt="Instagram Logo" height="100px"> 
				<img src="images\tiktok.png" alt="TikTok Logo" height="100px"> 
				<img src="images\email.png" alt="Email Icon" height="100px"> 
			</div>
		</div>
		
		<script src="date.js"> 
		</script>
		
		<script src="xam_lastUpdate.js"> </script>
</div>

document.body.appendChild(template.content);