var Config = Config || {};

Config.bannedHosts = ['cool.jit.su', 'pokeball-nixonserver.rhcloud.com', /\.glitch\.me/];
//Config.afd = true;
Config.whitelist = [
	// general sites
	'wikipedia.org',
	'wikimedia.org',
	'wiktionary.org',
	'github.com',
	'reddit.com',
	'gamefaqs.com',
	'facebook.com',
	'fbcdn.net',
	'twitter.com',
	'tumblr.com',
	'deviantart.com',
	'youtube.com',
	'youtu.be',
	'zombo.com',
	'strawpoll.me',
	'twitch.tv',
	'take-a-screenshot.org',
	'4chan.org',
	'tumblr.com',
	'git.io',
	'mibbit.com',
	'codecademy.com',
	'xkcd.com',
	'stackoverflow.com',
	'stackexchange.com',
	'malwarebytes.org',
	'zombo.com',
	'html5zombo.com',
	'whatismyipaddress.com',
	'iplocationtools.com',
	'iplocation.net',
	'ipqualityscore.com',

	// pokemon sites
	'pokemonshowdown.com',
	'psim.us',
	'smogon.com',
	'upokecenter.com',
	'veekun.com',
	'bulbagarden.net',
	'serebii.net',
	'nuggetbridge.com',
	'pokecommunity.com',
	'pokemon-online.eu',
	'pokemonlab.com',
	'shoddybattle.com',
	'pokemonxy.com',
	'pokemon.com',
	'pokemon-gl.com',
	'pokecheck.org',
	'projectpokemon.org',
	'pokemondb.net',
	'pokemoncentral.it',
	'poketrade.us',
	'neverused.net',
	'pokestrat.com',
	'pokestrat.io',
	'spo.ink',
	'jooas.com',
	'pokemongodb.net',
	'pokeassistant.com',
	'pokemon-sunmoon.com',
	'gamepress.gg',
	'trainertower.com',
	'pokepast.es',
	'pokepedia.fr',
	'randbatscalc.github.io',
	'ruins-of-alph.github.io',
	'gamespot.com',
	'victoryroadvgc.com',
	'pikalytics.com',
	'vgcstats.com',
	'worldcupvgc.com',

	// personal sites
	'breakdown.forumotion.com',
	'pokemonmillennium.net',
	'thebattletower.no-ip.org',
	'meltsner.com',
	'guangcongluo.com',
	'cathyjf.com',
	'xiaotai.org',
	'xfix.pw',
	'pkmn.cc',
	'strategydatabase.jimdo.com',
	'hidden50.github.io',
	'krisxv.github.io',
	'psbot.xyz',
	'pswifi.github.io',
	// personal hosting sites
	'forumieren.com',
	'soforums.com',
	'proboards.com',
	'weebly.com',
	'freeforums.org',
	'forumactif.com',
	'forumotion.com',
	'sites.google.com',

	// rich text
	'docs.google.com',

	// text
	'pastebin.com',
	'hastebin.com',
	'pastie.io',
	'trello.com',
	'challonge.com',
	'piratepad.net',
	'pastebin.run',

	// anime
	'myanimelist.net',
	'animenewsnetwork.com',
	'animenewsnetwork.cc',
	'anilist.co',
	'mangaupdates.com',
	'anime-planet.com',
	'anichart.net',

	// music
	'plug.dj',
	'openings.moe',
	'animethemes.moe',
	'catbox.moe',

	// images
	'prntscr.com',
	'prnt.sc',
	'puu.sh',
	'd.pr',
	'snag.gy',
	'gyazo.com',
	'imgur.com',
	'gfycat.com',
	'4cdn.org',
	'discordapp.com'
];

Config.roomsFirstOpenScript = function (mainMenuOnly) {
	/* eslint-disable */
	if (mainMenuOnly) {
		$('.leftmenu .activitymenu').first().after('<div id="mainmenu-mobile" style="text-align:center"></div>');
	} else {
		$('.roomlisttop').first().after('<div id="roomlist1-desktop"></div>');
		$('.roomlist').first().after('<div id="roomlist2-desktop"></div>');
	}
	/* eslint-enable */
};

// `defaultserver` specifies the server to use when the domain name in the
// address bar is `Config.routes.client`.
Config.defaultserver = {
	id: 'showdown',
	host: 'localhost:',
	port: 8000,
	httpport: 8000,
	altport: 80,
};

Config.customcolors = {
	'zarel': 'aeo'
};
/*** Begin automatically generated configuration ***/
Config.version = "0.11.2 (8ebc8e9a)";

Config.routes = {
	root: '192.168.0.20:3001',
	client: '192.168.0.20:3000',
	dex: '192.168.0.20:3003',
	replays: '192.168.0.20:3002',
	users: 'pokemonshowdown.com/users',
};
/*** End automatically generated configuration ***/
