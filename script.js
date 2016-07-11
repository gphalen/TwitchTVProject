$(document).ready(function() {

  
  
  
  //Array of users.
  var members = ["Twitch", "ESL_SC2", "OgamingSC2", "storbeck", "RobotCaleb", "FreeCodeCamp",  "noobs2ninjas", "sheevergaming", "comster404", "thomasballinger", "terakilobyte", "Test_channel", "brunofin", "xbox", "Nathanias", "cretetion", "habathcx", "monstercat"];
  //var members = ['FreeCodeCamp', 'monstercat', 'thisShouldntWork'];

  var container = $('.container');
  var container2 = $('.container2');
  var myChannels = $('.myChannels');
var monstercat=$('.monstercat');
  
  


 classification(members);
  
    function classification(arr){
  for(var i=0; i<arr.length; i++) {
    
     (function(i) {
  $.getJSON('https://api.twitch.tv/kraken/streams/' + arr[i]+"?callback=?", function(data) {
      
    // e++;
      
       
       //var n = members.indexOf(members[i]); 
     
      //container.append(finalLen);
     //container.append(index);
      
if(data.error){
  container2.append(arr[i]+"is not active"+"<br>");
}
  
      if (data.stream !== null) {
    
        
      //activeLength.push(data.stream.channel.display_name);  
 container.append ("<br>" + data.stream.channel.display_name.link("https://www.twitch.tv/" + data.stream.channel.display_name) + "is currently streaming" + data.stream.game + data.stream.channel.status + "on Twitchtv." + "<br>");

         
    
      }
   
   
     
     else if  (data.stream == null) {
    
               $.getJSON(data._links.channel, function(data3) {  
         
          
          
         
          container.append(data3.display_name.link("https://www.twitch.tv/" + data3.display_name) + "is not currently streaming" + "<br>");
                                                        
                  
          
    
          
         
                               
        }
        
        )
     
     
     }
    
    
    
 
  }               

        
   
     
    

     
                            
)
  
  
  
  })(i);
      
                 
                 }
  
     
   

}

}
                  
                 )
                  
                  