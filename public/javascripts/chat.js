/**
 * Created by han on 16/9/10.
 */
var socket = io('http://localhost:3000');


$('form').submit(function(){
    socket.emit('chat message', username + ":" + $('#m').val());
    $('#m').val('');
    return false;
});

socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
});