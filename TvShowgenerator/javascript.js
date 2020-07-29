var shows=[
	'The office',
	'Dark',
	'Brooklyn 99',
	'That 70\'s Show',
	'Friends',
	'How I Met Your Mother',
	'The Shanara Chronicles',
	'13 Reasons Why',
	'Mirzapur',
	'Sacred Games',
	'Patal Lok',
	'Riverdale',
	'Sex Education',
	'Ozark',
	'Flash',
	'Supernatural',
	'Arrow',
	'Rick and Morty',
	'Money Heist',
	'Prison Break',
]
var movie=[
	'Main Hoon Na',
	'Om Shanti Om',
	'Kabhi Alvida na Kehna',
	'Kabhi Khushi Kabhi Gham',
	'Billu',
	'Dilwale',
	"Dilwale Dulhaniya Le Jayenge",
	'Don',
	'Don2',
	'Kal Ho na Ho',
	'Duplicate',
	'Dabang 1',
	'Dabang 2',
	'Dabang 3',
	'Race 1',
	'Race 2',
	'Race 3',
	'Kuch Kuch Hota Hai',
	'Chicchore',
	'Kai Po Che',
	'Chamatkar',
	'Kedarnath',
	'Judwaa',
	'Judwaa 2',
	'Kalank',
	'Main Tera Hero',
	'Kaal'
	]
function newShow(){
	var randomNumber=Math.floor(Math.random()*(shows.length));	
	document.getElementById('showDisplay').innerHTML=shows[randomNumber];
}
function newMovie(){
	var randomNumber=Math.floor(Math.random()*(movie.length));	
	document.getElementById('showMovie').innerHTML=movie[randomNumber];
}