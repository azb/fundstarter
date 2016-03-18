///index.js part2

var http = require('http');
var fs = require('fs');

var requestListener = function(rqst, resp)
	{
	fs.open(__dirname + "./index.html" , 'r', function(err, fd)
		{
		if (fs.exists() && !err)
			{
			fs.fstat(fd, function(err, stats)
				{
				if (!err)
					{
					var bufferSize = stats.size;
					buffer = new Buffer(stats.size);
					fs.read(fd, buffer, 0, bufferSize, 0, function(err, bytesRead, buff)
						{
						if (!err)
							{
							resp.end(buff);
							}
						});
					}
				});
			}
		});
	}

}

var server = http.createServer(requestListener);
server.listen(8080);