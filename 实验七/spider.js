const cheerio = require("cheerio");
const https = require("https");
const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");



http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathName = urlObj.pathname;
    switch (pathName) {
        case "/":
            showIndex(res);
            break;
        case "/getfilelist":
            showList(res);
            break;
    }
}).listen(8081);
console.log("8081 is listening");
function showIndex(res) {
    var indexPath = path.join(__dirname, "index.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200, { 'Content-Type': "text/html" });
    res.write(fileContent);
    res.end();
}
function showList(res1) {
    var movieList = [];
    https.get("https://maoyan.com/films", function (res) {
        var result = "";
        res.on("data", function (chunk) {
            result += chunk;
        });
        res.on("end", function () {
            const $ = cheerio.load(result);
            $(".movie-item-title a").each(function () {
                var movie = {};
                movie.movieId = $(this).attr("data-val").slice(9, -1);
                movie.movieName = $(this).text();
                if (isNaN(parseInt($(this).parent().next().text()))) {
                    movie.movieRange = "暂无评分";
                }
                else {
                    movie.movieRange = $(this).parent().next().children().text();
                }
                movie.movieRange == "暂无评分";
                movieList.push(movie);
            })
            console.log(movieList);
            var listStr = JSON.stringify(movieList);
            res1.writeHead(200, { 'Content-Type': 'text/plain' });
            res1.write(listStr);
            res1.end();
        })

    })
}