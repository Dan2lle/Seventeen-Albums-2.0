var express = require('express');
var router = express.Router();

let albums = [
  {
    id: "1",
    album: "17 CARAT",
    description: "1st mini album",
    price: "29",
    image: "https://upload.wikimedia.org/wikipedia/en/2/21/Seventeen-17_Carat_%28EP%29.jpg",
  },
  {
    id: "2",
    album: "BOYS BE",
    description: "2nd mini album",
    price: "27",
    image: "https://upload.wikimedia.org/wikipedia/en/d/dc/Boys_Be_EP.png",
  },
  {
    id: "3",
    album: "LOVE&LETTER",
    description: "1st full album",
    price: "35",
    image: "https://upload.wikimedia.org/wikipedia/en/d/de/Seventeen_-_Love_and_Letter.jpg"
  },
  {
    id: "4",
    album: "Going Seventeen",
    description: "3rd mini album",
    price: "39",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f5/Going_Seventeen_EP.jpg"
  }
]

let idNumber = 4

/* GET users listing. */
/* referenced from: https://levelup.gitconnected.com/node-js-filtering-sorting-and-pagination-50ce6c90d0ad */
router.get('/', function(req, res, next) {
  if(req.query.sortBy) {
    if (req.query.sortBy === 'name') {
      console.log('sort by name')
      albums.sort((a, b) => a.album.localeCompare(b.album))
    } else if ((req.query.sortBy === 'price')) {
      console.log('sort by price')
      albums.sort((a, b) => a.price.localeCompare(b.price))
    }
  }

  res.send(albums);
});

router.get('/:albumId', function(req, res, next) {
  const foundAlbum = albums.find(user => user.id === req.params.albumId);
  
  if (!foundAlbum) return res.status(404).send({ message: 'Album not found' });

  return res.send(foundAlbum);
});

router.post('/', function (req, res, next) {
  idNumber ++
  if (!req.body.album) {
    return res.status(400).send({ message: 'Album must have a name!' })
  }
  const album = { id: idNumber.toString(), album: req.body.album, description: req.body.description, price: req.body.price, image: req.body.image};
  albums.push(album);
  res.statusCode = 201;
  return res.send(album);
});

router.delete('/:albumId', function(req, res, next) {
  let i = 0;
  while (i < albums.length) {
    if (albums[i].id === req.params.albumId) {
      albums.splice(i, 1)
      break
    } else {
      ++i
    }
  }
  return res.sendStatus(200);
});

module.exports = router;