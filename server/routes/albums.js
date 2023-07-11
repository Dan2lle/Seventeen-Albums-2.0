// referenced from: https://www.youtube.com/watch?v=vjf774RKrLc&t=2093s
// page pagination referenced from: https://www.youtube.com/watch?v=ja4yIn2pCzw

var express = require('express');
var router = express.Router();
var Album = require('../model/Album');

// const ITEMS_PER_PAGE = 4

/* GET users listing. */
router.get('/', async (req, res, next) => {
  // const page = req.query.page || 1
  // console.log(page)
  // console.log(req.query.page)

  // // to put query params
  // const query = {}

  try {
    // const count = await Album.estimatedDocumentCount(query)
    var albumData = await Album.find({})
    // var albumData = await Album.find({}).skip(page * ITEMS_PER_PAGE).limit(ITEMS_PER_PAGE)
    if(req.query.sortBy) {
      if (req.query.sortBy === 'name') {
        console.log('sort by name')
        albumData = await Album.find({}).sort({ album: 1 })
        // albumData = await Album.find({}).sort({ album: 1 }).skip(page * ITEMS_PER_PAGE).limit(ITEMS_PER_PAGE)
      } else if ((req.query.sortBy === 'price')) {
        console.log('sort by price')
        albumData = await Album.find({}).sort({ price: 1 })
      } else if ((req.query.sortBy === 'year')) {
        console.log('sort by year')
        albumData = await Album.find({}).sort({ released: 1 })
      }
    }

    // const pageCount = count / ITEMS_PER_PAGE

    console.log('no sort')
    // res.status(200).send({
    //   pagination: {
    //     count,
    //     pageCount
    //   },
    //   albumData
    // });
    res.status(200).send(albumData)
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

// able to load all, add one, delete one, update one, sort all by name/price/year