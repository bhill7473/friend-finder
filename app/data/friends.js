$("#reloadbtn").click(function(){
window.location.href = "survey.html";
});


$("#submitbtn").click(function() {
  var friends = 
{
  name:"Ahmed",
  photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
    };


  var name = $('input[id=name]').val();
  var link = $('input[id=pic]').val();
  var val1 = $('input[name=optradio1]:checked').val();
  var val2 = $('input[name=optradio2]:checked').val();
  var val3 = $('input[name=optradio3]:checked').val();
  var val4 = $('input[name=optradio4]:checked').val();
  var val5 = $('input[name=optradio5]:checked').val();
  var val6 = $('input[name=optradio6]:checked').val();
  var val7 = $('input[name=optradio7]:checked').val();
  var val8 = $('input[name=optradio8]:checked').val();
  var val9 = $('input[name=optradio9]:checked').val();
  var val10 = $('input[name=optradio10]:checked').val();
  console.log(name);
  console.log(link);
  console.log(val1);
  console.log(val2);
  console.log(val3);
  console.log(val4);
  console.log(val5);
  console.log(val6);
  console.log(val7);
  console.log(val8);
  console.log(val9);
  console.log(val10);
  

  
  console.log(Math.abs(val1-friends.scores[0]));
  console.log(Math.abs(val2-friends.scores[1]));
  console.log(Math.abs(val3-friends.scores[2]));
  console.log(Math.abs(val4-friends.scores[3]));
  console.log(Math.abs(val5-friends.scores[4]));
  console.log(Math.abs(val6-friends.scores[5]));
  console.log(Math.abs(val7-friends.scores[6]));
  console.log(Math.abs(val8-friends.scores[7]));
  console.log(Math.abs(val9-friends.scores[8]));
  console.log(Math.abs(val10-friends.scores[9]));



  var dif1 = Math.abs(val1-friends.scores[0]); 
  var dif2 = Math.abs(val2-friends.scores[1]);
  var dif3 = Math.abs(val3-friends.scores[2]);
  var dif4 = Math.abs(val4-friends.scores[3]); 
  var dif5 = Math.abs(val5-friends.scores[4]);
  var dif6 = Math.abs(val6-friends.scores[5]);
  var dif7 = Math.abs(val7-friends.scores[6]); 
  var dif8 = Math.abs(val8-friends.scores[7]);
  var dif9 = Math.abs(val9-friends.scores[8]);
  var dif10 = Math.abs(val10-friends.scores[9]);

  console.log(dif1+dif2+dif3+dif4+dif5+dif6+dif7+dif8+dif9+dif10);
var difference = dif1+dif2+dif3+dif4+dif5+dif6+dif7+dif8+dif9+dif10;
alert("You have a difference of " + difference + " from Ahmed" );
if(difference<=15){
  alert("You have a potential friend match with Ahmed");
  
}
if(difference>=15){
  alert("You are not a good potential friend match with Ahmed");
}
  

});
