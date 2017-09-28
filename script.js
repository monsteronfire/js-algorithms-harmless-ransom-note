function harmlessRansomNote(noteText, magazineText) {
  var noteArray = noteText.split(' ');
  var magazineArray = magazineText.split(' ');
  var magazineObj ={};

  magazineArray.forEach(function(word) {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  });

  console.log(magazineObj);
}

harmlessRansomNote('', 'this is all the magazine text from the magazine text all of it');
