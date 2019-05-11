var coins = require("./coins.js");

var currentCoin = "LTFN";

var credentials = require("./defaultCredentials.js");
var overwriteCredentials = require("./credentials.js");

for (var key in overwriteCredentials) {
	credentials[key] = overwriteCredentials[key];
}

module.exports = {
	cookiePassword: credentials.cookiePassword,
	coin: currentCoin,

	siteInfo: {
		title: "Lightning Explorer",
		sourceUrl: "https://github.com/janoside/lightning-rpc-explorer",
		demoSiteUrl: "https://lightning.chaintools.io"
	},

	demoSite: true,

	rpcBlacklist:[
		"stop"
	],

	credentials: credentials,

	site: {
		pubkeyMaxDisplayLength: 22,
		aliasMaxDisplayLength: 25,
		addressMaxDisplayLength: 25,
		txidMaxDisplayLength: 22,
	},

	donationAddresses:{
		coins:["LTFN"],

		"LTFN":{address:"NKzo8N7QxiALtK5yQRicP9p1bttedC65jv", urlPrefix:"LitecoinFinance:"}
	},

	blockExplorerUrl:"http://lightning.ltfnd.info",

	headerDropdownLinks: {
		title:"Related Sites",
		links:[
			{name: "LitecoinFinance Explorer", url:"http://lightning.ltfnd.info", imgUrl:"/img/logo/ltc.svg"},
		]
	}
};
