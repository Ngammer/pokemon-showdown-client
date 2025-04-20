var Config = Config || {};

/* version */ Config.version = "0";

Config.bannedHosts = ['cool.jit.su', 'pokeball-nixonserver.rhcloud.com'];

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
	'discord.com',
	'discord.gg',
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
	'https://infinitefusion.fandom.com/',
	'pokeathlon.com',
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
	'bigbangpokemon.com',
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

// `defaultserver` specifies the server to use when the domain name in the
// address bar is `Config.routes.client`.
Config.defaultserver = {
	id: 'showdown',
	host: 'sim3.psim.us',
	port: 443,
	httpport: 8000,
	altport: 80,
	registered: true
};

Config.roomsFirstOpenScript = function () {
};

Config.customcolors = {
	'zarel': 'aeo',
	'stafkigtn': 'oihey167',
	'symphoniigaming': 'frenchizeswoops',
};

Config.groups = {
	'~': {
		name: "Administrator (~)",
		type: 'leadership',
		order: 10001
	},
	'#': {
		name: "Room Owner (#)",
		type: 'leadership',
		order: 10002
	},
	'&': {
		name: "Administrator (&amp;)",
		type: 'leadership',
		order: 10003
	},
	'\u2605': {
		name: "Host (\u2605)",
		type: 'staff',
		order: 10004
	},
	'@': {
		name: "Moderator (@)",
		type: 'staff',
		order: 10005
	},
	'%': {
		name: "Driver (%)",
		type: 'staff',
		order: 10006
	},
	'*': {
		name: "Bot (*)",
		type: 'normal',
		order: 10008
	},
	'\u2606': {
		name: "Player (\u2606)",
		type: 'normal',
		order: 10009
	},
	'+': {
		name: "Voice (+)",
		type: 'normal',
		order: 10010
	},
	'»': {
		name: 'Verified (»)',
		type: 'normal',
		order: 10011
	},
	' ': {
		type: 'normal',
		order: 10012
	},
	'!': {
		name: "<span style='color:#777777'>Muted (!)</span>",
		type: 'punishment',
		order: 10013
	},
	'✖': {
		name: "<span style='color:#777777'>Namelocked (✖)</span>",
		type: 'punishment',
		order: 10014
	},
	'\u203d': {
		name: "<span style='color:#777777'>Locked (\u203d)</span>",
		type: 'punishment',
		order: 10015
	}
};

/*** Begin automatically generated configuration ***/
Config.version = "0.11.2 (c5aef63b)";

Config.routes = {
	root: 'pokemonshowdown.com',
	client: 'play.pokemonshowdown.com',
	dex: 'dex.pokemonshowdown.com',
	replays: 'replay.pokemonshowdown.com',
	users: 'pokemonshowdown.com/users',
};
/*** End automatically generated configuration ***/
