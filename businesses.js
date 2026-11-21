
const businesses = [

  { name: "The Archers Thread", categories: ["Clothing & Apparel"], country: "USA", description: "Clothing featuring your favourite Taylor lyrics, alongside Swiftie x pop culture apparel.", url: "https://thearchersthread.com/collections/tortured-poets", symbol: "A" },
  
  { name: "Art By Carmie", categories: ["Art & Prints"], country: "The Netherlands", description: "A curated collection of Taylor Swift–inspired paintings, each thoughtfully paired with a hand-selected vintage frame. Prints also available.", url: "https://carmieperez.com/", symbol: "A" },

  { name: "Broad Spectrum Designs", categories: ["Art & Prints", "Home & Lifestyle"], country: "USA", description: "Celebrate your favourite lyrics, eras, and unforgettable moments with handcrafted Taylor-inspired gifts and décor.", url: "https://broadspectrumdesigns.com/collections/taylor-inspired", symbol: "B" },
  
  { name: "The Cardigan Department", categories: ["Clothing & Apparel", "Jewellery & Accessories"], country: "UK", description: "Discover unique cardigans, sweaters and knitwear inspired by music, film and pop culture.", url: "https://thecardigandepartment.com/", symbol: "C" },

  { name: "Colors4Love", categories: ["Jewellery & Accessories"], country: "USA", description: "Beautiful friendship bracelets to keep the Eras magic going, alongside other fun and colourful jewellery.", url: "https://Colors4LoveDesigns.etsy.com/", symbol: "C" },
  
  { name: "Daisy Wood Design", categories: ["Home & Lifestyle", "Jewellery & Accessories"], country: "USA", description: "Explore vibrant, eco-friendly planters and home decor designed to brighten spaces and inspire joy.", url: "https://www.daisywooddesign.com/shop/swiftie", symbol: "D" },

  { name: "Day Of The Moon", categories: ["Clothing & Apparel", "Jewellery & Accessories"], country: "UK", description: "Graphic tees, sweatshirts and tote bags inspired by Taylor's music, alongside other musical artists.", url: "https://dayofthemoon.com/collections/eras-collection?page=1", symbol: "D" },
  
  { name: "Dorkface Creates", categories: ["Art & Prints", "Clothing & Apparel", "Jewellery & Accessories", "Stationery"], country: "USA", description: "Swiftie and pop culture themed illustrated products such as art prints, stickers, notebooks, and much more.", url: "https://dorkfacecreates.com", symbol: "D" },

  { name: "The Embroidery Department", categories: ["Home & Lifestyle"], country: "USA", description: "Custom embroidery, beginner-friendly kits, digital stencil guides, seasonal collections, and little clubs made for stitching together.", url: "https://the-embroidery-department.square.site/s/shop", symbol: "E" },
  
  { name: "Foolery Co.", categories: ["Art & Prints", "Clothing & Apparel", "Home & Lifestyle", "Jewellery & Accessories", "Stationery"], country: "USA", description: "Whimsical designs for serendipitous times. Funny graphic tees, protest shirts, and gifts designed by Foolery.", url: "https://www.fooleryco.com", symbol: "F" },

  { name: "Gemma Rose Pins", categories: ["Clothing & Apparel", "Home & Lifestyle", "Jewellery & Accessories", "Stationery"], country: "UK", description: "Swiftie-inspired enamel pins, stickers, blankets, jewellery, apparel and more.", url: "https://gemmarosepins.com", symbol: "G" },

  { name: "Heartly Things", categories: ["Clothing & Apparel", "Jewellery & Accessories"], country: "Germany", description: "Taylor lyric inspired sweatshirts & tees, tote bags, jewellery, phone cases and more.", url: "https://heartlythings.com/collections/miss-americana", symbol: "H" },

  { name: "Hébe Jewel", categories: ["Jewellery & Accessories"], country: "Greece", description: "Taylor Swift inspired charms that you can mix and match to create your own personalized necklaces, bracelets, and keychains. Ready-to-wear jewellery also available.", url: "https://hebejewel.com", symbol: "H" },

  { name: "Little Pond Department", categories: ["Art & Prints", "Jewellery & Accessories"], country: "UK", description: "Jewellery & prints inspired by lyrics, quotes & pop culture magic.", url: "https://littleponddepartment.my.canva.site/", symbol: "L" },
  
  { name: "Long Story Short Bracelet Co.", categories: ["Jewellery & Accessories"], country: "USA", description: "Shop beautiful friendship bracelets to support Lisa who is a full-time caregiver to her son.", url: "https://www.etsy.com/shop/LSSBraceletCo", symbol: "L" },

  { name: "Lyrics and Lit", categories: ["Clothing & Apparel", "Jewellery & Accessories"], country: "USA", description: "Subtle designs for the Swiftie who wants to wear their favorite lyrics daily.", url: "https://www.etsy.com/shop/lyricsandlit", symbol: "L" },

  { name: "Magical By Marissa", categories: ["Home & Lifestyle", "Jewellery & Accessories", "Stationery"], country: "USA", description: "Clothing, enamel pins, stickers, slip mats, cutting boards, watch bands and collectibles inspired by today's biggest pop stars.", url: "https://magicalbymarissa.com", symbol: "M" },
  
  { name: "Mango Illustrated", categories: ["Stationery"], country: "USA", description: "Stickers, pens, notepads... stationery heaven! Playfully profound, randomly relatable, and made for self-gifting.", url: "https://mangoillustrated.com/collections/all-swiftie", symbol: "M" },

  { name: "Mirrorball Magic", categories: ["Home & Lifestyle"], country: "USA", description: "A women-centered travel and friendship community inspired by the magic of Taylor Swift, offering themed multi-day retreats, bringing Swifties together through thoughtfully planned activities, shared experiences, and plenty of opportunities to make genuine connections.", url: "https://mirrorballmagic.com", symbol: "M" },
  
  { name: "The Mock Turtle", categories: ["Art & Prints", "Home & Lifestyle", "Jewellery & Accessories", "Stationery"], country: "UK", description: "Taylor Swift merchandise including apparel, trinket dishes, puzzles, and themed home goods.", url: "https://themockturtle.co.uk/", symbol: "M" },

  { name: "Nova & the new moon", categories: ["Art & Prints", "Clothing & Apparel", "Jewellery & Accessories"], country: "UK", description: "Swiftie and pop culture inspired sweatshirts, t-shirts, art prints, postcards and more.", url: "https://novaandthenewmoon.com", symbol: "N" },

  { name: "Oh Snap Bracelets", categories: ["Home & Lifestyle", "Jewellery & Accessories"], country: "USA", description: "Bedazzled keychains, phone charms, bracelets, and more! Bedazzled all the things!", url: "https://www.etsy.com/shop/OhSnapBracelets", symbol: "O" },

  { name: "Paperbacks and Prints", categories: ["Art & Prints"], country: "UK", description: "Digital downloads of prints and kindle inserts for Swifties and book lovers.", url: "https://paperbacksandprints.etsy.com/", symbol: "P" },

  { name: "The Polite Bee", categories: ["Art & Prints", "Home & Lifestyle"], country: "Australia", description: "Mini guitars, vinyl toppers, magnets, lithographs, and other handmade trinkets.", url: "https://thepolitebee.com", symbol: "P" },

  { name: "The ReSwiftance", categories: ["Art & Prints", "Clothing & Apparel", "Home & Lifestyle", "Jewellery & Accessories", "Stationery"], country: "USA", description: "Blending Swiftiehood with progressive politics - shop thematic apparel, stickers and much more.", url: "https://the-reswiftance.printify.me", symbol: "R" },
  
  { name: "Schoolhouse Sweets", categories: ["Home & Lifestyle", "Jewellery & Accessories"], country: "USA", description: "Delicious custom cookies alongside Swiftie-inspired keychains and custom painted shoes.", url: "https://schoolhousesweetsandcrafts.square.site/", symbol: "S" },

  { name: "Sparta Candle Co.", categories: ["Home & Lifestyle"], country: "USA", description: "Intricately designed soap, candles, and home & body products to serve as functional art and add a little magic to everyday life.", url: "https://spartacandleco.com/collections/swiftie-collection?_su_rec=G_goAxbZNt7VW-TQekZKME4ZIg5FRA5zCTQlhBWLU0zINS66WM3OGxi9jV_2Ru0llJlcq9ojr88VTmJbOY1bsp0bYef2F58d04QTtKzOJAsfimtur80olHMq3VrJjp43NxSqh-4kM9J8b8JHZ9Vn2ffEUicf_FuMA7UEhB-INi1YieLbT_kNcJOEuUwpQ-HMKtr0qU7yMfb7E1J8T_j3lxL9JvLZnGT4IjQtTx5aQQFHLISjC84Lix6DoQKBYvMDmRud5mBQaQ&_su_rec_id=d99e409a-6674-4245-990c-49908a766e1c-1794786854", symbol: "S" },

  { name: "Third Wish Designs", categories: ["Clothing & Apparel", "Stationery"], country: "USA", description: "A place where all your Swiftie x Disney mashup dreams come true! Shop graphic tees perfect for subtly showing off your favourite Taylor Swift songs on your next Disney trip.", url: "https://thirdwishdesigns.com/collections/taylor-swift-mashups", symbol: "T" },
  
  { name: "Two Lost Girls Art", categories: ["Art & Prints", "Home & Lifestyle", "Jewellery & Accessories", "Stationery"], country: "USA", description: "Shop enamel pins, stickers, puzzles, blankets, jewellery, album-themed bundles and other Swiftie-inspired gifts.", url: "https://twolostgirlsart.com", symbol: "T" },
  
  { name: "Typo Lettering Co.", categories: ["Home & Lifestyle", "Jewellery & Accessories", "Stationery"], country: "USA", description: "Swiftie stickers, magnets, keychains and other gorgeous little things.", url: "https://typoletteringco.etsy.com/", symbol: "T" },
];
