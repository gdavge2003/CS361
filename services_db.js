//template for a service
function Service(
	articleId,
	name,
	type,
	author,
	features,
	description,
	price,
	rate,
	guideId
) {
		this.articleId = articleId;
		this.name = name;
		this.type = type;
		this.author = author;
		this.features = features; 
		this.description = description;
		this.price = price;
		this.rate = rate;
		this.guideId = guideId;
}

//services in the "database"
var service1 = new Service(
	1,
	"Trans Tech VPN",
	"VPN",
	"James Bod",
	"Easy Setup, Low Experience Needed, Works in over 30 countries",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor justo, malesuada ut dui tincidunt, facilisis rutrum eros. Duis fringilla luctus condimentum. Sed at mauris at nibh imperdiet ultrices at et augue. Nulla ornare egestas libero nec lobortis. Praesent efficitur metus ex, a suscipit risus consequat nec. Duis quis convallis sem. Sed rutrum tellus felis, quis scelerisque lorem finibus at. Cras in lacus at massa molestie placerat vitae sit amet ante. Praesent finibus augue sagittis bibendum varius. Nunc ut orci tellus. Morbi velit turpis, fringilla ut lorem imperdiet, ultricies luctus nibh. Maecenas dapibus aliquet eros, non vestibulum dolor molestie vitae. Suspendisse rutrum posuere ex. Nullam rhoncus posuere interdum. Vivamus fermentum efficitur diam id rhoncus.",
	"$5.99/mo",
	4.2,
	0
	);

var service2 = new Service(
	1,
	"Joe's Adblocker",
	"Adblocker",
	"Joe Alderman",
	"Instant Setup, Trial Period, Customer Support 24/7",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor justo, malesuada ut dui tincidunt, facilisis rutrum eros. Duis fringilla luctus condimentum. Sed at mauris at nibh imperdiet ultrices at et augue. Nulla ornare egestas libero nec lobortis. Praesent efficitur metus ex, a suscipit risus consequat nec. Duis quis convallis sem. Sed rutrum tellus felis, quis scelerisque lorem finibus at. Cras in lacus at massa molestie placerat vitae sit amet ante. Praesent finibus augue sagittis bibendum varius. Nunc ut orci tellus. Morbi velit turpis, fringilla ut lorem imperdiet, ultricies luctus nibh. Maecenas dapibus aliquet eros, non vestibulum dolor molestie vitae. Suspendisse rutrum posuere ex. Nullam rhoncus posuere interdum. Vivamus fermentum efficitur diam id rhoncus.",
	"$15.99/mo",
	2.4,
	0
	);

//store services into array for easy finding/manipulating
var servicesDB = [
	service1,
	service2
];


//generate services list
var list_id = document.getElementById("generate_services");
if (list_id != null) {
	//iterate through each services in the DB, create a link for it
	for (var i = 0; i < servicesDB.length; i++) {

		//currently just creates a linked bullet list
		var bulletPoint = document.createElement("LI");
		var text = document.createTextNode(servicesDB[i].name);

		bulletPoint.appendChild(text);

		list_id.appendChild(bulletPoint);
	}
}


//generate service page info

























