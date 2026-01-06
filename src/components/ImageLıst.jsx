import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React from 'react';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageLıst() {
  return (
    <ImageList
      sx={{ width: 1000, height: 750 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://i.lezzet.com.tr/images-xxlarge-secondary/evde-kultur-mantari-nasil-yetistirilir-6bd07f78-84ca-4d36-b3d6-3f54ddaf240c.jpg",
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpwXQEUoH4ex6xzXry4BYdmJAjN_omBiF_g&s',
    title: 'Burger',
  },
  {
    img: 'https://www.unileverfoodsolutions.com.tr/dam/global-ufs/mcos/TURKEY/calcmenu/recipes/TR-recipes/pasta-dishes/peynirli-tortellini/peynirli-tortellini-header.jpg',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dC_DBZkGnqmhTfmfg8EBMc4ydsUtWJ8XdQ&s',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/istiridye-mantari_106636_1.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.damlicaciftligi.com/image/cache/catalog/100566-mantar-1-550x550.jpg',
    title: 'Basketball',
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQebQpkivubCuZXqIy_XjBy2-M1pVHqP6Urw&s",
    title: 'Fern',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMYuBP4FfFS-NvRoTafOAhQIZfthFOfzUlw&s',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dC_DBZkGnqmhTfmfg8EBMc4ydsUtWJ8XdQ&s',
    title: 'Sea star',
  },
  {
    img: 'https://www.hayger.com/wp-content/uploads/revslider/business3/pembe-istiridye.png',
    title: 'Bike',
    cols: 2,
  },
];
