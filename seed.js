const { User, Whiskey, Review } = require('./models');

const main = async () => {
  const userA = await User.create({
    user_name: 'Sterling Archer',
    email: 'archer@isis.gov',
    password_digest: 'lana',
  });

  const userB = await User.create({
    user_name: 'Grounds Keeper Willy',
    email: 'willy@springfieldelem.com',
    password_digest: 'aye',

  });

  const whiskeyA = await Whiskey.create({
    name: 'BUCHANAN',
    brand: 'BUCHANAN’S Delux',
    type: 'SCOTCH',
    description: 'Popular in the States as well as Latin America, Buchanan’s 12 Year is noted for its honey toast, spice, and fruit flavors.',
    url_to_image: '',
  });

  const whiskeyB = await Whiskey.create({
    name: 'RICH AND RARE CANADIAN ',
    brand: 'R & R',
    type: 'WHISKY',
    description: 'What’s in a name? In the case of Rich & Rare, not much — the widely available whisky averages $6 a bottle. Nevertheless, this Sazerac-owned Canadian staple nabs a spot on the list.',
    url_to_image: '',
  });

  const whiskeyC = await Whiskey.create({
    name: 'KESSLER AMERICAN',
    brand: 'KESSLER',
    type: 'WHISKY',
    description: 'This Beam Suntory-owned whiskey claims to be “smooth as silk,” which could contribute to its success in the American market.',
    url_to_image: '',
  });

  const review1 = await Review.create({

    rating: 5,
    comment: 'I’m scared that if I stop drinking all at once, the cumulative hangover will literally kill me.',

  });

  const review2 = await Review.create({
    rating: 3,
    comment: "If it was up to me, I'd let you go, but the boys have a temper, and they've been drinking all day.",
  });

  await review1.setUser(userA);
  await review2.setUser(userB);
  await review1.setWhiskey(whiskeyA);
  await review2.setWhiskey(whiskeyA);
};

main();