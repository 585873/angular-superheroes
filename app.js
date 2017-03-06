let superheroData = [
  { name: "Iron Man", phone_number: "111-222-3333", comic_affiliation: "Marvel", photo_url: "https://s-media-cache-ak0.pinimg.com/736x/84/5f/9a/845f9a4b45ff5377e37c6dd36d45b591.jpg"},
  { name: "Superman", phone_number:"000-456-9835", comic_affiliation: "Marvel", photo_url: "http://static.comicvine.com/uploads/original/11111/111113523/3605753-1936874063-31646.png"},
  { name: "Batman", phone_number:"546-546-6492", comic_affiliation: "DC", photo_url: "http://www.drodd.com/images13/batman28.jpg"},
  { name: "Hulk", phone_number: "646-728-0000", comic_affiliation: "Marvel", photo_url: "https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_(comics_character).png"},
]

angular
 .module("superhero", [])
 .controller("superheroCtrl", [superheroController])

 function superheroController (){
   this.superhero = superheroData;

   this.addSuperhero = function(){
     let superhero = {name: this.newSuperheroName, phone_number: this.newSuperheroPhone_number, comic_affiliation: this.newSuperheroComic_affiliation, photo_url: this.newSuperheroPhoto_url};
     this.superhero.push(superhero);
     console.log("clicked")
   }
 }
