// referenced from: https://www.youtube.com/watch?v=vjf774RKrLc&t=2093s

var express = require('express');
var router = express.Router();
var Album = require('../model/Album');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const albumData = await Album.find({})
    if(req.query.sortBy) {
      if (req.query.sortBy === 'name') {
        console.log('sort by name')
        albumData.sort((a, b) => a.album.localeCompare(b.album))
      } else if ((req.query.sortBy === 'price')) {
        console.log('sort by price')
        albumData.sort((a, b) => a.price.localeCompare(b.price))
      }
    }
    console.log('no sort')
    res.status(200).send(albumData);
  } catch (err) {
    console.log(err)
  }  
});

router.get('/:albumId', async (req, res, next) => {
  const foundAlbum = await Album.findById(req.params.albumId).exec();
  
  if (!foundAlbum) return res.status(404).send({ message: 'Album not found' });

  return res.status(200).send(foundAlbum);
});

router.put('/:albumId', async(req, res, next) => {
  try {
    const updatedAlbum = await Album.updateOne(
      { _id: req.params.albumId },
      { $set: 
        { album: req.body.album,
          description: req.body.description, 
          title: req.body.title, 
          price: req.body.price, 
          released: req.body.released, 
          image: req.body.image 
        }
      }
    );
    res.status(200).json(updatedAlbum)
  } catch (err) {
    res.json({ message: err })
  }
});

router.post('/', async (req, res, next) => {
  if (!req.body.album) {
    return res.status(400).send({ message: 'Album must have a name!' })
  }
  const album = new Album({
    album: req.body.album, 
    description: req.body.description, 
    title: req.body.title, 
    price: req.body.price, 
    released: req.body.released, 
    image: req.body.image
  })

  try {
    const savedAlbum = await album.save()
    res.status(201).json(savedAlbum)
  } catch (err) {
    res.status(500).json({message: err})
  }
});

router.delete('/:albumId', async (req, res, next) => {
  try {
    await Album.deleteOne({ _id: req.params.albumId })
    res.sendStatus(204)
  } catch (err) {
    res.status(404).json({ message: err})
  }
});

module.exports = router;

// able to load all, add one, delete one, update one, sort all