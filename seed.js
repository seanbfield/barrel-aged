const { User, Whiskey, Review } = require('./models');

const main = async () => {
  const userA = await User.create({
    username: 'Sterling Archer',
    email: 'archer@isis.gov',
    password_digest: 'lana',

  });

  const userB = await User.create({
    username: 'Grounds Keeper Willy',
    email: 'willy@springfieldelem.com',
    password_digest: 'aye',

  });

  const userC = await User.create({
    username: 'Peter Quill',
    email: 'starlord@guardians.com',
    password_digest: 'gamora',
  });

  const userD = await User.create({
    username: 'Gamora',
    email: 'gamora@guardians.com',
    password_digest: 'starlord',
  });

  const userE = await User.create({
    username: 'Drax',
    email: 'destroyer@guardians.com',
    password_digest: 'password',
  });

  const userF = await User.create({
    username: 'Groot',
    email: 'iamgroot@guardians.com',
    password_digest: 'iamgroot',
  });

  const userG = await User.create({
    username: 'Rocket',
    email: 'rocketraccoon@guardians.com',
    password_digest: 'trashpanda',
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
    type: 'WHISKEY',
    description: 'What’s in a name? In the case of Rich & Rare, not much — the widely available whisky averages $6 a bottle. Nevertheless, this Sazerac-owned Canadian staple nabs a spot on the list.',
    url_to_image: '',
  });

  const whiskeyC = await Whiskey.create({
    name: 'KESSLER AMERICAN',
    brand: 'KESSLER',
    type: 'WHISKEY',
    description: 'This Beam Suntory-owned whiskey claims to be “smooth as silk,” which could contribute to its success in the American market.',
    url_to_image: '',
  });

  const whiskeyD = await Whiskey.create({
    name: 'Hibiki 21',
    brand: 'Suntory',
    type: 'Japanese',
    description: 'Cooked fruit, blackberry, ripe banana, caramel. Long finish, rich with incense aroma.'
  });

  const whiskeyE = await Whiskey.create({
    name: 'High West Double Rye',
    brand: 'High West',
    type: 'Rye',
    description: 'Thanks to its balance of cinnamon, anise, and honey, High West Double Rye! stands on its own in cocktails, but is great served neat, with a little water, or on the rocks.'
  })

  const review1 = await Review.create({

    rating: 5,
    comment: 'I’m scared that if I stop drinking all at once, the cumulative hangover will literally kill me.',

  });

  const review2 = await Review.create({
    rating: 3,
    comment: "If it was up to me, I'd let you go, but the boys have a temper, and they've been drinking all day.",
  });

  const review3 = await Review.create({
    rating: 1,
    comment: 'HUUUUUURGHGLGLFHRUUUUUGHGHGH'
  });

  const review4 = await Review.create({
    rating: 5,
    comment: "I CAN'T FEEL MY TASTE-FEELERS",
  });

  const review5 = await Review.create({
    rating: 2,
    comment: "It's whiskey. It gets you drunk. That's about it.",
  });

  const review6 = await Review.create({
    rating: 3,
    comment: "I drank so much of this that I forgot if it was good or not.",
  });

  const review7 = await Review.create({
    rating: 4,
    comment: "I am Groot.",
  });

  await review1.setUser(userA);
  await review2.setUser(userB);
  await review3.setUser(userG);
  await review4.setUser(userE);
  await review5.setUser(userD);
  await review6.setUser(userC);
  await review7.setUser(userF);
  await review1.setWhiskey(whiskeyA);
  await review2.setWhiskey(whiskeyA);
  await review3.setWhiskey(whiskeyC);
  await review4.setWhiskey(whiskeyB);
  await review5.setWhiskey(whiskeyE);
  await review6.setWhiskey(whiskeyE);
  await review7.setWhiskey(whiskeyE);
};

main();