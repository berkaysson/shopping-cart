import waterBottleImg from '../Data/images/waterbottle.jpg';
import produceBagImg from '../Data/images/producebag.jpeg';
import cutlerySetImg from '../Data/images/cutleryset3.jpg';
import beeswaxWrapsImg from '../Data/images/wraps.jpeg';
import shampooBarImg from '../Data/images/shampoobar.jpg';
import coffeeCupImg from '../Data/images/coffeecup.jpg';
import dogWasteBagsImg from '../Data/images/dogbag.jpg';

const productData = {
  waterBottle: {
    id: 1,
    price: 29.95,
    imgPath: waterBottleImg,
    name: "Stainless Steel Water Bottle",
    description: "Durable and reusable.",
  },
  produceBags: {
    id: 2,
    price: 24.95,
    imgPath: produceBagImg,
    name: "Reusable Produce Bags",
    description: "Eco-friendly and sustainable.",
  },
  cutlerySet: {
    id: 3,
    price: 14.95,
    imgPath: cutlerySetImg,
    name: "Bamboo Cutlery Set",
    description: "Portable and stylish.",
  },
  beeswaxWraps: {
    id: 4,
    price: 19.95,
    imgPath: beeswaxWrapsImg,
    name: "Beeswax Wraps",
    description: "Sustainable alternative to plastic wrap.",
  },
  shampooBar: {
    id: 5,
    price: 12.95,
    imgPath: shampooBarImg,
    name: "Solid Shampoo Bar",
    description: "Natural and gentle on hair.",
  },
  coffeeCup: {
    id: 6,
    price: 18.95,
    imgPath: coffeeCupImg,
    name: "Reusable Coffee Cup",
    description: "Stylish and eco-friendly.",
  },
  dogWasteBags: {
    id: 7,
    price: 9.95,
    imgPath: dogWasteBagsImg,
    name: "Compostable Dog Waste Bags",
    description: "Eco-friendly and biodegradable.",
  },
};

export default productData;
