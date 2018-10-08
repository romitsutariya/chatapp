//make  connection
var socket = io.connect("http://localhost:4000");

//dom query
// Query DOM
// var message = document.getElementById('message').value,
//       handle = document.getElementById('handle'),
//       btn = document.getElementById('send'),
//       output = document.getElementById('output'),
//       feedback = document.getElementById('feedback');

//event


function sendData()
{
    socket.emit('chat', {
        message: document.getElementById('message').value,
        handle: document.getElementById('handle').value
    });
    message.value = "";
}
//listen for event

socket.on("chat",function(data){
  output.innerHTML+='<p><strong>'+data.handle +' :</strong>' + data.message +'</p>';
});