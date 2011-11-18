var socket,
	server = 'http://10.109.37.189:3008';

var connect = function(callback) {
	console.log("Attempting to connect to " + server);
	socket = io.connect(server);
	socket.on('ack', function() {
		console.log("Sending identification");
		socket.emit('identify', 'P', function(data) {
			console.log('Recieved confirmation');
			if (data && callback) callback();
		});
	});
};
