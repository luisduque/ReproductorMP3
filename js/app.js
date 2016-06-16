var elementos =  [{
		song: " About You",
		artist: "XX YY XX",
		album: "About You",
		audio: "./songs/About-You.mp3",
		cover: "./covers/About You.jpg",
		alt: "About You"
	},
	{
		song: " The View From The Afternoon",
		artist: "Artic Monkeys",
		album: "I Bet You Look Good On The Dancefloor",
		audio: "./songs/The_View_From_The_Afternoon.mp3",
		cover: "./covers/I_Bet_You_Look_Good_On_the_Dancefloor.jpg",
		alt: "I Bet You Look Good On The Dancefloor"
	},
	{
		song: " A Toast to the Future Kinds!",
		artist: "Emarosa",
		album: "Emarosa",
		audio: "./songs/A toast to the future kids.mp3",
		cover: "./covers/ema.PNG",
		alt: "Emarosa"
	},
	{
		song: " Otherside",
		artist: "Red Hot Chili Peppers",
		album: "Californication",
		audio: "./songs/otherside.mp3",
		cover: "./covers/otherside.jpg",
		alt: "Otherside"
	},
	{
		song: " Bohemian Rhapsody",
		artist: "Queen",
		album: "A Night at the Opera",
		audio: "./songs/bohemianRhapsody.mp3",
		cover: "./covers/bohemian.png",
		alt: "Bohemian Rhapsody"
	},
	{
		song: " Sweet Child O' Mine",
		artist: "Guns N' Roses",
		album: "Appetite for Destruction",
		audio: "./songs/sweetChildOMine.mp3",
		cover: "./covers/sweet.jpg",
		alt: "Sweet Child O' Mine"
	},
	{
		song: " Staying Alive",
		artist: "Bee Gees",
		album: "Saturday Night Fever",
		audio: "./songs/stayingAlive.mp3",
		cover: "./covers/staying.jpg",
		alt: "Staying Alive"
	},
	{
		song: " Someone Like You",
		artist: "Adele",
		album: "21",
		audio: "./songs/someoneLikeYou.mp3",
		cover: "./covers/someone.png",
		alt: "Someone Like You"
	},
	{
		song: " In The End",
		artist: "Linkin Park",
		album: "Hybrid Theory",
		audio: "./songs/inTheEnd.mp3",
		cover: "./covers/inTheEnd.jpg",
		alt: "In The End"
	},
	{
		song: " Man In The Mirror",
		artist: "Michael Jackson",
		album: "Bad",
		audio: "./songs/manInTheMirror.mp3",
		cover: "./covers/manInTheMirror.jpg",
		alt: "Man In The Mirror"
	},
	{
		song: " Animals",
		artist: "Martin Garrix",
		album: "Gold Skies - EP",
		audio: "./songs/animals.mp3",
		cover: "./covers/animals.jpg",
		alt: "Animals"
	},
	{
		song: " Mambo No 5",
		artist: "Lou Bega",
		album: "A Little Bit of Mambo",
		audio: "./songs/mambo.mp3",
		cover: "./covers/mambo.jpg",
		alt: "Mambo No 5"
	}];

function initApp(){

	loadElements(elementos);
    titleMove();
	var elements = document.getElementsByClassName('element');

	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener("mouseover",function(){
			this.getElementsByClassName("overlay")[0].style.display = "block";
		},false);
		
	    var sonando=elements[i].getElementsByClassName("overlay")[0].getElementsByTagName("audio")[0].id;
		
		
			elements[i].addEventListener("mouseleave",function(){
            var sonando=this.getElementsByClassName("overlay")[0].getElementsByTagName("audio")[0].id;
            
            if(sonando!="playing"){
			this.getElementsByClassName("overlay")[0].style.display = "none";
	          }
		},false);
        
		   var controls = elements[i].getElementsByClassName("overlay")[0];

		    controls.addEventListener("click",function(){
			console.log("clicked controls");

			var playingPlayer=document.getElementById("playing");
			if(playingPlayer!=undefined){
				playingPlayer.pause();

			}
			var player = this.getElementsByTagName("audio")[0];
			if(player.paused){
				player.play();
				
				quitarOverlays(document.getElementsByClassName("overlay"),document.getElementsByTagName("audio"));
			    player.id="playing";
			    document.title=this.getElementsByClassName("song")[0].innerHTML+" - "+this.getElementsByClassName("artist")[0].innerHTML+"-";
			}else{
				player.pause();
				player.id="";
			}
		},false);
	};

}

function quitarOverlays(overlays,audios){

	for (var i = 0; i < overlays.length; i++) {
		overlays[i].style.display = "none";
	};
	for (var i = 0; i < audios.length; i++) {
		
		audios[i].id="";
	};
}

function titleMove(){
	var text=document.title;
	var tam=text.length;
	var pos=1;
    title=text.substring(pos, tam) + text.substring(0, pos);
    document.title=title;
    pos++
    if (pos==tam+1) {
      pos=0;
      
    }
    setTimeout("titleMove()",500);
} 

function loadElements(elementos){
	var gw = document.getElementById("globalWrapper");

	console.log(elementos);
	for (var i = 0; i < elementos.length; i++) {

		var elementTag = document.createElement("div");
		elementTag.className = "element";

			var overlay = document.createElement("div");
			overlay.className = "overlay";

				var controls = document.createElement("div");
				controls.className = "controls";

					var playStop = document.createElement("div");
					playStop.className = "play-stop";

					var audio = document.createElement("audio");
					audio.src = elementos[i].audio;

				controls.appendChild(playStop);
				controls.appendChild(audio);

				var content = document.createElement("div");
				content.className = "content";
					var song = document.createElement("div");
					song.className = "song";
					song.innerHTML = elementos[i].song;
					var artist = document.createElement("div");
					artist.className = "artist";
					artist.innerHTML = elementos[i].artist;
					var album = document.createElement("div");
					album.className = "album";
					album.innerHTML = elementos[i].album;
				content.appendChild(song);
				content.appendChild(artist);
				content.appendChild(album);

			overlay.appendChild(controls);
			overlay.appendChild(content);

			var albumCover = document.createElement("div");
			albumCover.className = "albumCover";
				var img = document.createElement("img");
				img.src = elementos[i].cover;
				img.alt = elementos[i].alt;
			albumCover.appendChild(img);
		elementTag.appendChild(overlay);
		elementTag.appendChild(albumCover);

		gw.appendChild(elementTag);

	};
}