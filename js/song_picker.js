const song_url = [
	"quok-atariwave.mp3",
	"renard-sinisterrrrrrrr.mp3",
	"deadmau5-allihad.mp3",
	"baq5-outoftouch.mp3",
	"busdriver-imaginaryplaces.mp3",
	"imonster-daydreaminblue.mp3",
	"rude-eternalyouth.mp3",
	"goreshit-houmous.supreme.mp3",
	"HALLEYHARDSOUNDUNIT-roman_candle.mp3",
	"RQ-XX.mp3",
	"tqbf-wanderlust.mp3",
	"RQ-20n.mp3",
	"renard-burning_rome.mp3",
	"renard-halfway.mp3",
	"renard-megawatt.mp3",
	"kitsune2-everybody_rush.mp3",
	"tqbf-400_cherries_per_minute.mp3",
	"tqbf-fresh_out.mp3",
	"tqbf-numbnuts.mp3",
	"onefour-spot_the_diffrence.mp3",
	"renard-blind_cave_salamander.mp3",
	"renard-entire_world.mp3",
	"goreshit-ron.mp3",
	"renard-couldve_been_nice.mp3",
	"RQ-cum_monolith.mp3",
	"tqbf-bub_vs_bob.mp3",
	"darwin-take_you_back.mp3",
	"kitsune2-tung_icelandic_lesbian.mp3",
	"truxton-shotgun_jungle.mp3",
	"bandetto-hard_hop_9th_system.mp3",
	"rotteen-oh_mary.mp3",
	"rotteen-not_so_fast.mp3",
	"rotten-planet_belligerence.mp3",
	"rotteen-miku_is_still_alive.mp3",
	"renard-forced_devotion.mp3",
	"renard-je_taime.mp3",
	"kitsune2-yiff_yiff_yiff.mp3",
	"belladonnakillz-beautiful_halleylabs.mp3",
	"tqbf-burning_brain.mp3"
]

const namelinks = [
'<a href="https://soundcloud.com/lofi-fpv/quok-atariwave-instrumental?in=jylescoad-ward/sets/good-music">Atariwave [Instrumental]</a> by Quok',
'<a href="https://www.youtube.com/watch?v=74cfflczqRw">Sinisterrrrrrrr</a> by <a href="https://lapfoxtrax.com/">Renard</a>',
'<a href="https://soundcloud.com/djmkh/deadmau5-all-i-had-original?in=jylescoad-ward/sets/good-music">All I Had</a> by deadmau5',
'<a href="https://soundcloud.com/baq5/out-of-touch?in=jylescoad-ward/sets/good-music">Out of Touch</a> by Baq5',
'<a href="https://soundcloud.com/user-874886282/busdriver-imaginary-places">Imaginary Places</a> by Busdriver',
'<a href="https://soundcloud.com/i-monster/02-daydream-in-blue-original_single_version?in=jylescoad-ward/sets/good-music">Daydream in Blue</a> by I Monster',
'<a href="https://soundcloud.com/itsrudeboy/eternal-youth?in=jylescoad-ward/sets/good-music">Eternal Youth</a> by R&Uring;DE',
'<a href="http://share.jyles.club/music/Goreshit/Goreshit%20-2012%20-%20Nineties%20Rave%20Retrospective%20Vol.2/">Houmous Supreme</a> by goreshit',
'<a href="http://share.jyles.club/music/HALLEYLABS/HALLEY%20LABS/B-SIDE%20U%20%5b201X%20OVERFLOW%5d/HALLEY%20HARD%20SOUND%20UNIT%20-%20B-SIDE%20U%20%e3%80%8e%f0%9d%9f%9a%f0%9d%9f%98%f0%9d%9f%99%f0%9d%95%8f%20%c3%b8%db%b7%ef%bb%89%c9%bc%e0%a4%bf%c9%ad%e0%b9%8f%e0%b8%9d%e3%80%8f%20-%2003%20GALGALE12%e2%80%a0roman_candle.mp3">GALGALE12 roman_candle</a> by HALLEY LABS & HALLEY HARD SOUND UNIT',
'<a href="https://www.youtube.com/watch?v=aEvyGmiTc-k">XX</a> by RQ',
'<a href="https://www.youtube.com/watch?v=BZJofwUBG6M">WANDERLUST</a> by The Quick Brown Fox',
'<a href="https://www.youtube.com/watch?v=DUAYxJh1--g">20,n</a> by RQ',
'<a href="https://www.youtube.com/watch?v=wRz1rVK1c78">Burning Rome</a> by Renard',
'<a href="https://www.youtube.com/watch?v=6wpbRKgQWQM">Halfway</a> by Renard',
'<a href="https://www.youtube.com/watch?v=CuKMrS2ZLaA">Megawatt</a> by Renard',
'<a href="https://www.youtube.com/watch?v=ynwFNSdJ7_k">Everybody Rush</a> by Kitsune<sup>2</sup>',
'<a href="https://www.youtube.com/watch?v=icDjOt7xsKQ">400 Cherries Per Minute</a> by The Quick Brown Fox',
'<a href="https://www.youtube.com/watch?v=sR8xCuv8N7E">Fresh Out</a> by The Quick Brown Fox',
'<a href="https://www.youtube.com/watch?v=KBeTdJ4PZd8">Numbnuts</a> by The Quick Brown Fox',
'<a href="https://www.youtube.com/watch?v=6ajjtzwz930" title="FHAKING ESHAY CUNTT">Spot the Difference</a> by ONEFOUR',
'<a href="https://www.youtube.com/watch?v=tcbULWFH_FM" title="hi morgane">I&#39;m a Blind Cave Salamander</a> by Renard',
'<a href="https://www.youtube.com/watch?v=Q3GyuN2N-3c">The Entire World</a> by Renard',
'<a href="https://www.youtube.com/watch?v=ITjrMPiAYfY">Ron</a> by Goreshit',
'<a href="https://www.youtube.com/watch?v=OK64kNdVgQw">This Could&#39;ve Been Nice</a> by Renard',
'<a href="https://www.youtube.com/watch?v=EfYaMOjBRkU" title="dont mind the name hun <3">CUM MONOLITH</a> by RQ',
'<a href="https://www.youtube.com/watch?v=jAG-TsV63Wo">BUB VS BOB</a> The Quick Brown Fox',
'<a href="http://share.jyles.club/music/HALLEYLABS/Renard/Trauma/CD%202/23%20-%20Takes%20You%20Back%20-%20Darwin.mp3">Take you back</a> by Darwin',
'<a href="https://www.youtube.com/watch?v=eaBOu0QVi3Q">Tung, The Icelandic Lesbian</a> by Kitsune<sup>2</sup>',
'<a href="https://www.youtube.com/watch?v=Jfpq6ae1KVk">SHOTGUN JUNGLE</a> by TRUXTON',
'<a href="https://www.youtube.com/watch?v=k5nmC67m4Jo">hard hop 9th system</a> by BANDETTO',
'<a href="https://www.youtube.com/watch?v=5iRD8OPlxWg">Oh, Mary!</a> by Rotteen',
'<a href="https://www.youtube.com/watch?v=jAepQ40rJ_o">Not So Fast!!</a> by Rotteen',
'<a href="https://www.youtube.com/watch?v=9119R3KYU4c">Planet Belligerence</a> by Rotteen',
'<a href="https://www.youtube.com/watch?v=Kg0HrmSegk0">MiKU iS STiLL ALiVE</a> by Rotteen',
'<a href="https://www.youtube.com/watch?v=V11bvVkHoYY">Forced Devotion</a> by Renard',
'<a href="https://www.youtube.com/watch?v=0Bm7pwntyzY">Je T&#39;aime</a> by Renard',
'<a href="https://www.youtube.com/watch?v=4YxMWmJNZ_o">yiff yiff yiff</a> by Kitsune<sup>2</sup>',
'<a href="https://www.youtube.com/watch?v=ZlBn8MqOGhk">beautiful (JQ & Emoticon RMX)</a> by belladonnakillz',
'<a href="https://www.youtube.com/watch?v=UENrSXo9DDw">BURNING BRAIN (Emoticon & Mayhem&#39;s "STAR LAB" RMX)</a> by The Quick Brown Fox'
]


function marqueeGen(content) {
	return '<marquee class="song_scroll" width="250px" direction="left" scrollamount="3" behavior="scroll">' + content + '</marquee>';
}
function randomSongPicker() {
	let songNames = namelinks;
	let songURLs = song_url;
	
	let randomInt = Math.floor(Math.random() * (songURLs.length - 1));
	
	let marquee = marqueeGen(songNames[randomInt]);
	
	let songChoice = "https://storage.googleapis.com/cdn.jyles.club/pageaudio/" + songURLs[randomInt];
	console.log("song url;\n" + songChoice);
	let iframe = '<iframe frameborder=0 style="position:absolute;top:0;left:0;" src="' + songChoice + '" allow="autoplay" height="0" id="song_iframe"></iframe>';
	
	return marquee + iframe;
}

function song() {
	document.getElementById("now_playing").innerHTML = randomSongPicker();
}
