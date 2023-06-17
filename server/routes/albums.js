var express = require('express');
var router = express.Router();

const albums = [
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
router.get('/', function(req, res, next) {
  res.send(albums);
});

router.get('/:albumId', function(req, res, next) {
  const foundAlbum = albums.find(user => user.id === req.params.albumId);
  
  if (!foundAlbum) return res.status(404).send({ message: 'User not found' });

  return res.send(foundAlbum);
});

router.post('/', function (req, res, next) {
  idNumber ++
  if (!req.body.album) {
    return res.status(400).send({ message: 'User must have a name!' })
  }
  const album = { id: idNumber.toString(), name: req.body.album, description: req.body.description, price: req.body.price, image: req.body.image};
  albums.push(album);
  return res.send(albums);
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
  return res.send(200);
});

module.exports = router;
