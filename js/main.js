function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  var i = 0;
  marks.forEach(function(element) {
  i = i+= element
});
  i = Math.floor(i / marks.length)
  return(i)
}
