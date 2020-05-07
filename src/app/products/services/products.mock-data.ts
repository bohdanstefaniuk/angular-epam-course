import { of } from 'rxjs';
import { Product } from 'src/app/shared/models/product';

const productsMockData = new Array<Product>();

export const productsMackDataObservable = of(productsMockData);

productsMockData.push({
	"id": 1,
	"name": "iPhone XR - 124 Gb (Black) - edited 32",
	"description": "iPhone XR (stylized and marketed as iPhone Xʀ; Roman numeral 'X' pronounced 'ten')[14][15] is a smartphone designed and manufactured by Apple Inc. It is the twelfth generation of the iPhone. It was announced by Phil Schiller on September 12, 2018, at the Steve Jobs Theater in the Apple Park campus, alongside the higher-priced iPhone XS and iPhone XS Max. Pre-orders began on October 19, 2018, with an official release on October 26, 2018.[16] 131",
	"price": 699,
	"category": 0,
	"isAvailable": true,
	"createdOn": new Date("Mon, 06 Apr 2020 13:29:39 GMT")
});
productsMockData.push({
	"id": 2,
	"name": "iPhone XR - 124 Gb (Gold)",
	"description": "iPhone XR (stylized and marketed as iPhone Xʀ; Roman numeral 'X' pronounced 'ten')[14][15] is a smartphone designed and manufactured by Apple Inc. It is the twelfth generation of the iPhone. It was announced by Phil Schiller on September 12, 2018, at the Steve Jobs Theater in the Apple Park campus, alongside the higher-priced iPhone XS and iPhone XS Max. Pre-orders began on October 19, 2018, with an official release on October 26, 2018.[16]",
	"price": 699,
	"category": 0,
	"isAvailable": true,
	"createdOn": new Date("Mon, 06 Apr 2020 13:29:39 GMT")
});
productsMockData.push({
	"id": 3,
	"name": "iPhone XR - 512 Gb (White)",
	"description": "iPhone XR (stylized and marketed as iPhone Xʀ; Roman numeral 'X' pronounced 'ten')[14][15] is a smartphone designed and manufactured by Apple Inc. It is the twelfth generation of the iPhone. It was announced by Phil Schiller on September 12, 2018, at the Steve Jobs Theater in the Apple Park campus, alongside the higher-priced iPhone XS and iPhone XS Max. Pre-orders began on October 19, 2018, with an official release on October 26, 2018.[16]",
	"price": 799,
	"category": 0,
	"isAvailable": true,
	"createdOn": new Date("Mon, 06 Apr 2020 13:29:39 GMT")
});
productsMockData.push({
	"id": 4,
	"name": "MacBook Pro 13 - 120 Gb (2017)",
	"description": "The MacBook Pro (sometimes unofficially abbreviated as MBP[1]) is a line of Macintosh portable computers introduced in January 2006, by Apple Inc. It is the higher-end model of the MacBook family, sitting above the consumer-focused MacBook Air, and is available in 13-inch and 16-inch screen sizes. A 17-inch version was sold from April 2006 to June 2012.",
	"price": 1299,
	"category": 1,
	"isAvailable": true,
	"createdOn": new Date("Mon, 06 Apr 2017 13:29:39 GMT")
});