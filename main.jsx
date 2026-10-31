import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Menu, X, MapPin, Clock3, Phone, Instagram, Compass, Sparkles, Waves, Coffee, Flame, Heart, TreePine, Footprints } from 'lucide-react';
import './style.css';

const WA = 'https://wa.me/918861633566';
const phoneLink = (number) => `tel:+91${number.replace(/\D/g, '')}`;
const maps = (place) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place + ', Chikmagalur, Karnataka')}`;

const attractions = [
  { name: 'Mullayangiri Peak', type: 'Mountain & viewpoints', distance: 'Distance to be confirmed', note: 'A mountain escape with sweeping views of the Western Ghats.' },
  { name: 'Baba Budangiri', type: 'Mountain & viewpoints', distance: 'Distance to be confirmed', note: 'A scenic mountain range known for its dramatic landscapes.' },
  { name: 'Jhari Falls', type: 'Waterfalls', distance: 'Distance to be confirmed', note: 'A waterfall stop surrounded by lush greenery.' },
  { name: 'Hebbe Falls', type: 'Waterfalls', distance: 'Distance to be confirmed', note: 'A popular waterfall experience in the Chikmagalur region.' },
  { name: 'Hirakolale Lake', type: 'Nature & lakes', distance: 'Distance to be confirmed', note: 'A peaceful lakeside stop, especially lovely around sunset.' },
  { name: 'Deviramma Temple', type: 'Temples & heritage', distance: 'Distance to be confirmed', note: 'A local place of worship set in the hills.' },
  { name: 'Belur Temple', type: 'Temples & heritage', distance: '43 km listed in guest guide', note: 'Explore the region’s remarkable Hoysala heritage.' },
  { name: 'Hebbali Coffee Estate', type: 'Coffee experiences', distance: 'Distance to be confirmed', note: 'For a coffee estate visit, contact the estate directly.' },
  { name: 'Cafe Tatva', type: 'Cafés & local food', distance: 'Distance to be confirmed', note: 'A café recommendation from the Lokah team.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const nav = [['Explore Lokah','#explore'],['Nava','#nava'],['Curated Moments','#moments'],['The Lokah Guide','#guide'],['Good to Know','#good-to-know']];
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="topbar">
      <a className="brand-logo" href="#top" onClick={closeMenu} aria-label="Lokah home"><img src="/images/lokah-logo-dark.png" alt="Lokah" /></a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>{nav.map(([label,href])=><a key={href} href={href} onClick={closeMenu}>{label}</a>)}</nav>
      <a className="nav-cta" href={WA} target="_blank" rel="noreferrer">Need a hand? <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" aria-label="Toggle menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <img className="hero-image" src="/images/lokah-cover.jpg" alt="Aerial view of Lokah at night" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <h1>A little more<br/><em>to discover.</em></h1>
          <p className="hero-sub">Your guide to the little things, the big views<br className="desktop-only"/> and everything in between at Lokah.</p>
          <a className="round-link" href="#explore" aria-label="Explore the guide"><ArrowDown size={19}/></a>
        </div>
        <div className="hero-note">CHIKMAGALUR, KARNATAKA <span>·</span> INDIA</div>
        <div className="hero-index">01 / THE GUIDE</div>
      </section>

      <section className="home-shortcuts section-pad" aria-label="Quick access to the guest guide">
        <div className="shortcut-heading">
          <p className="eyebrow">YOUR LOKAH, YOUR WAY</p>
          <h2>Where would you<br/><em>like to begin?</em></h2>
          <p>Everything in one place. Pick what you need and find it in a moment.</p>
        </div>
        <div className="shortcut-grid">
          <a className="shortcut-card shortcut-olive" href="#explore"><span>01 / ON THE ESTATE</span><b>Explore Lokah</b><small>Facilities, little rituals and views</small><ArrowUpRight/></a>
          <a className="shortcut-card shortcut-deep" href="#nava"><span>02 / AT THE TABLE</span><b>Nava</b><small>Our in-house cafe and restaurant</small><ArrowUpRight/></a>
          <a className="shortcut-card shortcut-terracotta" href="#moments"><span>03 / MAKE IT SPECIAL</span><b>Curated Moments</b><small>Celebrations and Bespoke Experiences</small><ArrowUpRight/></a>
          <a className="shortcut-card shortcut-azul" href="#guide"><span>04 / OUT AND ABOUT</span><b>The Lokah Guide</b><small>Nearby places, treks and jeep rides</small><ArrowUpRight/></a>
          <a className="shortcut-card shortcut-mud" href="#good-to-know"><span>05 / THE USEFUL DETAILS</span><b>Good to Know</b><small>Information and FAQs</small><ArrowUpRight/></a>
          <a className="shortcut-card shortcut-stays" href="#stays"><span>06 / FIND YOUR STAY</span><b>Rooms at Lokah</b><small>Nine stays, each with a story of its own</small><ArrowUpRight/></a>
        </div>
        <div className="stay-schedule home-stay-schedule">
          <div className="schedule-heading"><p className="eyebrow">A FEW TIMINGS TO KEEP HANDY</p><h3>The little details that help<br/><em>your stay run smoothly.</em></h3></div>
          <div className="schedule-grid"><div><span>CHECK-IN</span><b>2:00 PM</b></div><div><span>CHECK-OUT</span><b>11:00 AM</b></div><div><span>BREAKFAST</span><b>8:00-10:30 AM</b></div><div><span>MORNING CAFE</span><b>10:30 AM-12:30 PM</b></div><div><span>LUNCH</span><b>12:30-3:30 PM</b></div><div><span>EVENING CAFE</span><b>3:30-7:00 PM</b></div><div><span>DINNER</span><b>7:00-10:30 PM</b></div><div><span>HIGH TEA</span><b>4:30-5:30 PM</b></div></div>
        </div>
      </section>

      <section className="intro section-pad">
        <div className="intro-label"><span className="tiny-mark">✳</span> A NOTE FROM LOKAH</div>
        <div className="intro-text"><h2>Stay a little.<br/><em>Explore a lot.</em></h2><p>There’s more to a stay than the place you sleep. Take a dip, find a quiet corner, follow a winding road or make an ordinary evening feel special. We’ve put together a few ways to make your time here your own.</p></div>
      </section>

      <section id="stays" className="stays-section section-pad">
        <div className="section-heading"><div><p className="eyebrow">A PLACE TO CALL YOUR OWN</p><h2>Nine stays.<br/><em>Nine stories.</em></h2></div><p className="section-aside">Each stay takes its cue from a creature in nature, with its own shape, character and little details.</p></div>
        <div className="stays-grid">
          <a className="stay-card" href="https://www.lokahresort.com/pods/colony" target="_blank" rel="noreferrer"><img src="https://www.lokahresort.com/lokahpics/gallery/colony/13-m.webp" alt="The Colony, an anthill-inspired stay"/><div><span>01 / INSPIRED BY THE ANT</span><h3>The Colony</h3><p>An anthill brought indoors, with four chambers that come together as one stay.</p><small>SLEEPS 2–4 · 1,000 SQ FT <ArrowUpRight size={14}/></small></div></a>
          <a className="stay-card" href="https://www.lokahresort.com/pods/burrow" target="_blank" rel="noreferrer"><img src="https://www.lokahresort.com/lokahpics/burrow.webp" alt="The Burrow, a stone stay beside a stream"/><div><span>02 / INSPIRED BY THE RABBIT</span><h3>The Burrow</h3><p>Tucked beside a small stream, in a quiet corner of the property.</p><small>SLEEPS 2–4 · 500 SQ FT <ArrowUpRight size={14}/></small></div></a>
          <a className="stay-card" href="https://www.lokahresort.com/pods/amber-chamber" target="_blank" rel="noreferrer"><img src="https://www.lokahresort.com/lokahpics/gallery/amber-chamber/05-m.webp" alt="The Amber Chamber, inspired by a wasp nest"/><div><span>03 / INSPIRED BY THE WASP</span><h3>The Amber Chamber</h3><p>Inspired by a wasp nest, assembled like a jigsaw puzzle.</p><small>SLEEPS 2–3 · 400 SQ FT <ArrowUpRight size={14}/></small></div></a>
          <a className="stay-card" href="https://www.lokahresort.com/pods/aqua" target="_blank" rel="noreferrer"><img src="https://www.lokahresort.com/lokahpics/stays/aqua-exterior-square.webp" alt="The Aqua, a stay surrounded by water"/><div><span>04 / INSPIRED BY THE FISH</span><h3>The Aqua</h3><p>A stay surrounded by water, with fish on three sides of the bed.</p><small>SLEEPS 2–3 · 400 SQ FT <ArrowUpRight size={14}/></small></div></a>
          <a className="stay-card" href="https://www.lokahresort.com/pods/weave" target="_blank" rel="noreferrer"><img src="https://www.lokahresort.com/lokahpics/gallery/weave/07-m.webp" alt="The Weave, inspired by a spider's web"/><div><span>05 / INSPIRED BY THE SPIDER</span><h3>The Weave</h3><p>Inspired by a spider’s web, with a hammock at its heart.</p><small>SLEEPS 2–4 · 350 SQ FT <ArrowUpRight size={14}/></small></div></a>
          <a className="stay-card" href="https://www.lokahresort.com/pods/hive" target="_blank" rel="noreferrer"><img src="https://www.lokahresort.com/lokahpics/stays/hive-exterior.webp" alt="The Hive, three honeycomb-shaped rooms"/><div><span>06 / INSPIRED BY THE BEE</span><h3>The Hive</h3><p>Three honeycomb-shaped rooms that can be booked individually or together.</p><small>SLEEPS 2–6 · 250 SQ FT <ArrowUpRight size={14}/></small></div></a>
          <a className="stay-card" href="https://www.lokahresort.com/pods/nest" target="_blank" rel="noreferrer"><img src="https://www.lokahresort.com/lokahpics/gallery/nest/01-m.webp" alt="The Nest, woven like a bird's nest"/><div><span>07 / INSPIRED BY THE BIRD</span><h3>The Nest</h3><p>Woven like a bird’s nest, with a rooftop jacuzzi beneath the sky.</p><small>SLEEPS 2–3 · 350 SQ FT <ArrowUpRight size={14}/></small></div></a>
          <a className="stay-card" href="https://www.lokahresort.com/pods/shore" target="_blank" rel="noreferrer"><img src="https://www.lokahresort.com/lokahpics/stays/shore-exterior.webp" alt="The Shore, a seashell-inspired stay"/><div><span>08 / INSPIRED BY THE SEA SHELL</span><h3>The Shore</h3><p>A seashell-inspired stay with a bed that moves out to the open sky.</p><small>SLEEPS 2–3 · 400 SQ FT <ArrowUpRight size={14}/></small></div></a>
          <a className="stay-card" href="https://www.lokahresort.com/pods/cocoon" target="_blank" rel="noreferrer"><img src="https://www.lokahresort.com/lokahpics/stays/cocoon-exterior.webp" alt="The Cocoon, inspired by a butterfly"/><div><span>09 / INSPIRED BY THE BUTTERFLY</span><h3>The Cocoon</h3><p>A cocoon that transforms, with hydraulic wings that move.</p><small>SLEEPS 2–4 · 300 SQ FT <ArrowUpRight size={14}/></small></div></a>
        </div>
        <p className="stays-footnote">Explore each stay for more photographs and details on the Lokah website.</p>
      </section>

      <section id="explore" className="section-pad explore-section">
        <div className="section-heading"><div><p className="eyebrow">01, WITHIN THE ESTATE</p><h2>Explore <em>Lokah.</em></h2></div><p className="section-aside">Little discoveries, right<br/>outside your door.</p></div>
        <div className="feature-grid">
          <article className="feature-card feature-large"><div className="image-wrap"><img src="/images/bio-pool.jpg" alt="The natural bio pool at Lokah"/><span className="image-number">01</span></div><div className="feature-meta"><div><h3>The Bio Pool</h3><p>A natural swimming pool, filtered by plants. No chlorine, no harsh chemicals, just a slower kind of swim.</p></div><span className="tag">OPEN 24 HOURS</span></div><p className="small-note">Please wear swimwear before entering the pool.</p></article>
          <article className="feature-card feature-tall"><div className="image-wrap"><img src="/images/wooden-play-area.jpg" alt="Wooden outdoor play area"/><span className="image-number">02</span></div><div className="feature-meta"><div><h3>Wooden Play Area</h3><p>Room to run, climb and play. A handmade timber playground with a treehouse, slide, swings, seesaw, climbing frames and rope bridge.</p></div></div><div className="detail-photo"><img src="/images/wooden-play-detail.jpg" alt="A guest enjoying the wooden play structure, shown in the original full portrait photograph"/><span>A LITTLE ROOM TO CLIMB, TOO</span></div></article>
          <article className="feature-card feature-small"><div className="image-wrap"><img src="/images/picnic-area.jpg" alt="Outdoor picnic table at Lokah"/><span className="image-number">03</span></div><div className="feature-meta"><div><h3>Picnic Area</h3><p>A little open-air pause. Picnic arrangements can be made on request at an additional charge, or you can enjoy the space on your own.</p></div></div></article>
          <article className="feature-card feature-small tea-card"><div className="image-wrap"><img src="/images/high-tea-spread.jpg" alt="Tea, coffee and snacks at Lokah high tea"/><span className="image-number">04</span><span className="photo-time">4:30-5:30 PM</span></div><div className="feature-meta"><div><h3>Evening High Tea</h3><p>Tea, coffee and a spread of snacks. A small ritual to ease into the evening, every day.</p></div></div></article>
          <article className="feature-card feature-large bonfire-card"><div className="image-wrap"><img src="/images/bonfire.jpg" alt="Evening bonfire at Lokah"/><span className="image-number">05</span></div><div className="feature-meta"><div><h3>Bonfire Nights</h3><p>After dinner, gather around the fire and let the day wind down. Marshmallows may be available, depending on the day.</p></div><span className="tag">9-10 PM</span></div><p className="small-note">Bonfire is weather-dependent and will not be held during rain. Please take care when seated around the fire.</p></article>
          <article className="feature-card feature-small feature-sunset"><div className="image-wrap"><img src="/images/sunset-view.jpg" alt="Sunset view over the hills from Lokah"/><span className="image-number">06</span></div><div className="feature-meta"><div><h3>Sunset View from Lokah</h3><p>Pause for the last light of the day as the sky settles over the hills and the landscape turns golden.</p></div></div></article>
        </div>
      </section>

      <section id="nava" className="nava-section section-pad">
        <div className="nava-hero">
          <img src="/images/nava-pavilion.png" alt="Nava restaurant pavilion beside the landscape at Lokah" />
          <div className="nava-hero-shade" />
          <div className="nava-hero-copy"><img className="nava-wordmark" src="/images/nava-logo.png" alt="Nava by Lokah"/><p>CAFE & RESTAURANT</p><h2>Soulful <em>dining.</em></h2><span>Set among Lokah’s nine stays, with the landscape just beyond the table.</span></div>
        </div>
        <div className="nava-intro">
          <div><p className="eyebrow">02 / OUR IN-HOUSE RESTAURANT</p><h2>Nava means nine.<br/><em>It also means new.</em></h2></div>
          <div className="nava-meaning"><p><b>Nine</b><br/>For the nine stays Nava sits among, each a private world, cradled in nature.</p><p><b>New</b><br/>For food prepared fresh, to order, from ingredients grown in our own soil.</p></div>
        </div>
        <div className="nava-no-buffet">
          <div><p className="eyebrow light">THE WAY WE COOK</p><h3>There is no buffet<br/><em>at Nava.</em></h3></div>
          <p>Every plate is prepared fresh, to order, by the head chef and his team. The menu brings together European and Malnad cuisines, creating food that satisfies everybody’s tastebuds. We wanted the food to feel rooted in its surroundings while taking a different approach to dining in Chikmagalur.</p>
        </div>
        <div className="nava-food-gallery">
          <figure><img src="/images/nava-main-course.png" alt="A freshly prepared dish at Nava"/><figcaption>FRESH FROM THE KITCHEN</figcaption></figure>
          <figure><img src="/images/nava-dessert.png" alt="A chocolate and cream dessert at Nava"/><figcaption>A SWEET FINISH</figcaption></figure>
          <figure><img src="/images/nava-croquettes.png" alt="Golden croquettes served with salad at Nava"/><figcaption>MADE TO ORDER</figcaption></figure>
        </div>
        <div className="nava-senses">
          <div className="nava-senses-heading"><p className="eyebrow">A PLACE TO TAKE IT ALL IN</p><h3>The space follows<br/><em>the same philosophy.</em></h3><p>Soulful eating, experienced through all five senses.</p></div>
          <div className="sense-grid">
            <article><span>01 / SIGHT</span><h4>Look up.</h4><p>The Mullayanagiri peaks are there. Beside you, the natural Bio Pool reflects the surroundings.</p></article>
            <article><span>02 / SMELL</span><h4>Take it in.</h4><p>The kitchen window opens onto the dining space. Freshly ground spices meet the scent of wet earth, wild herbs and the forest beyond.</p></article>
            <article><span>03 / TOUCH</span><h4>Feel at ease.</h4><p>Warm timber covers the surfaces, creating a grounding, natural setting that keeps you connected to the landscape as you eat.</p></article>
            <article><span>04 / TASTE</span><h4>Find your flavour.</h4><p>European and Malnad cuisines come together, rooted in their surroundings and made fresh to order.</p></article>
            <article><span>05 / HEARING</span><h4>Listen closely.</h4><p>A waterfall in the distance. Birds in conversation. Wind moving through the trees. Silence is never empty here.</p></article>
            <article><span>06 / SOUND</span><h4>Stay in the mood.</h4><p>A playlist curated track by track. We spent time choosing the music because the right songs do more than fill a room. They set the feeling of the table.</p></article>
          </div>
        </div>
        <div className="nava-kitchen"><p className="eyebrow">THE KITCHEN</p><h3>Curated by a Michelin-star-trained chef,<br/><em>a first for Chikmagalur.</em></h3><p>It is slower, quieter and more personal, quite simply, the way food was always meant to be eaten.</p><a href="https://www.lokahresort.com/nava" target="_blank" rel="noreferrer">Explore Nava on the Lokah website <ArrowUpRight size={15}/></a></div>
        <div className="nava-menu-links"><p className="eyebrow">TAKE A LOOK AT THE MENU</p><a href="https://www.lokahresort.com/nava/menu-breakfast.pdf" target="_blank" rel="noreferrer">Breakfast menu <ArrowUpRight size={14}/></a><a href="https://www.lokahresort.com/nava/menu-lunch.pdf" target="_blank" rel="noreferrer">Lunch menu <ArrowUpRight size={14}/></a><a href="https://www.lokahresort.com/nava/menu-cafe.pdf" target="_blank" rel="noreferrer">Cafe menu <ArrowUpRight size={14}/></a><a href="https://www.lokahresort.com/nava" target="_blank" rel="noreferrer">Make a reservation <ArrowUpRight size={14}/></a></div>
        <div className="nava-hours"><div><p className="eyebrow">WHEN TO DROP BY</p><h3>Good food, from<br/><em>morning to night.</em></h3></div><div className="nava-hours-grid"><div><span>BREAKFAST</span><b>8:00-10:30 AM</b></div><div><span>MORNING CAFE</span><b>10:30 AM-12:30 PM</b></div><div><span>LUNCH</span><b>12:30-3:30 PM</b></div><div><span>EVENING CAFE</span><b>3:30-7:00 PM</b></div><div><span>DINNER</span><b>7:00-10:30 PM</b></div></div></div>
      </section>

      <section id="moments" className="moments-section section-pad">
        <div className="section-heading"><div><p className="eyebrow">03, MAKE IT A MOMENT</p><h2>Curated <em>moments.</em></h2></div><p className="section-aside">Celebrations and Bespoke<br/>Experiences.</p></div>
        <div className="moments-intro"><p>Some days deserve a little extra. From getting creative to celebrating the people you love, let’s make something memorable while you’re here.</p><Sparkles size={27}/></div>
        <div className="moments-grid">
          <article className="moment-card"><img src="/images/sip-and-paint.png" alt="Guests enjoying a painting activity at Lokah"/><div className="moment-copy"><span>01 / GET CREATIVE</span><h3>Sip <em>&</em> Paint</h3><p>Pick up a brush, pour yourself a coffee and enjoy a little creative time. We provide the colours and materials. Complimentary during your stay.</p></div></article>
          <article className="moment-card"><img src="/images/celebration-setup.png" alt="A special celebration setup at Lokah"/><div className="moment-copy"><span>02 / MARK THE DAY</span><h3>Celebrate <em>at Lokah.</em></h3><p>Birthdays, anniversaries, proposals or just-because moments. Tell us what you have in mind and our team can help plan a personalised setup.</p></div></article>
        </div>
        <div className="celebration-gallery">
          <article className="celebration-item"><img src="/images/birthday.png" alt="Birthday celebration setup at Lokah"/><span>01 / BIRTHDAYS</span></article>
          <article className="celebration-item"><img src="/images/celebration-couple.png" alt="A couple celebrating at Lokah"/><span>02 / PROPOSALS</span></article>
          <article className="celebration-item"><img src="/images/celebration-dining.png" alt="A personalised moment for a special occasion"/><span>03 / ANNIVERSARIES</span></article>
          <article className="celebration-item"><img src="/images/special-dining-arrangement.png" alt="A floral table arrangement for a special dining experience at Lokah"/><span>04 / SPECIAL DINING ARRANGEMENTS</span></article>
          <article className="celebration-item"><img src="/images/candlelight-dinner.png" alt="Candlelight dinner at Lokah"/><span>05 / CANDLELIGHT DINNER</span></article>
          <article className="celebration-item"><img src="/images/celebration-stationery.jpg" alt="Personalised celebration stationery and floral details"/><span>06 / PERSONALISED SETUPS</span></article>
        </div>
        <div className="celebration-details"><p><b>Personalised setups.</b> Bouquets, balloons and thoughtful details to make the occasion yours.</p><p><b>Celebration packages.</b> Every celebration is different. Share your requirements with our team over a call and we can discuss the possibilities.</p></div>
        <div className="moments-cta"><p>Have something in mind?</p><a href={WA} target="_blank" rel="noreferrer">Let’s plan it together <ArrowUpRight size={16}/></a></div>
      </section>

      <section id="guide" className="guide-section section-pad">
        <div className="guide-top"><div><p className="eyebrow light">04, OUT THERE, SOMEWHERE</p><h2>The Lokah<br/><em>Guide.</em></h2></div><p>Take the scenic route. Find a new favourite. Here are a few places and experiences to start with.</p></div>
        <div className="guide-image"><img src="/images/lokah-aerial.png" alt="The green landscape around Lokah"/><div className="guide-image-caption">THE WESTERN GHATS, AT YOUR PACE</div></div>
        <div className="guide-tools"><div className="guide-tool"><Compass/><div><b>Nearby places</b><span>Waterfalls, peaks, lakes and local favourites.</span></div></div><div className="guide-tool"><Footprints/><div><b>Guided treks</b><span>Ask our team about routes and arrangements.</span></div></div><div className="guide-tool"><TreePine/><div><b>Jeep rides</b><span>Explore with our local activity partners.</span></div></div></div>
        <div className="activity-heading"><div><p className="eyebrow light">GO A LITTLE FURTHER</p><h3>More ways to <em>explore.</em></h3></div><p>Experiences available through our local activity partner. Call directly to check routes, timings and availability.</p></div><div className="activity-grid">{[{n:"Wildlife Safaris",d:"Jeep, boat and bus safari experiences."},{n:"Guided Treks",d:"Easy, moderate and difficult trails."},{n:"River Rafting",d:"Rafting experiences for adventure seekers."},{n:"Water Games",d:"Fun water-based recreational activities."},{n:"Coffee Plantation Tours",d:"Guided tours through local coffee estates."},{n:"Jeep Off-Roading",d:"Exciting off-road experiences."},{n:"Local Sightseeing",d:"Explore popular attractions around Chikmagalur."},{n:"Temple Tours",d:"Visits to local temples and heritage spots."},{n:"Adventure Activities",d:"A range of outdoor and adventure experiences."},{n:"Pickup & Drop Services",d:"Transfers from airports, railway stations and bus stands."}].map((x,i)=><div className="activity-item" key={x.n}><span>{String(i+1).padStart(2,'0')}</span><div><b>{x.n}</b><p>{x.d}</p></div></div>)}</div>
        <div className="attraction-heading"><h3>Worth the detour.</h3><span>LOCAL PICKS / CHIKMAGALUR</span></div>
        <div className="attraction-grid">{attractions.map((item,i)=><article className="attraction" key={item.name}><a className="attraction-map" href={maps(item.name)} target="_blank" rel="noreferrer"><span className="attraction-no">{String(i+1).padStart(2,'0')}</span><div><small>{item.type}</small><h4>{item.name}</h4><p>{item.note}</p></div><ArrowUpRight size={17}/></a></article>)}</div>
        <div className="travel-strip"><div><p className="eyebrow">GETTING HERE</p><h3>Find your way<br/><em>to Lokah.</em></h3><p>Coming from Bengaluru? The guest guide recommends the route via Hassan.</p></div><div className="travel-facts"><div><b>266 km</b><span>From Bengaluru</span></div><div><b>78.2 km</b><span>From Hassan</span></div><div><b>187 km</b><span>From Coorg</span></div><div><b>43 km</b><span>From Belur</span></div><div><b>166 km</b><span>From Mangaluru</span></div><div><b>183 km</b><span>From Udupi</span></div><div><b>160 km</b><span>Mangaluru Airport</span></div><div><b>27 km</b><span>Birur Junction</span></div><a href="https://maps.app.goo.gl/bwQ5JRTUP3NcTkLh6" target="_blank" rel="noreferrer" className="text-link">Open directions <ArrowUpRight size={15}/></a><small>Distances are reproduced from the Lokah guest guide.</small></div></div>
        <div className="contact-panel"><div className="contact-panel-intro"><p className="eyebrow light">A LITTLE HELP WITH THE DETAILS</p><h3>Useful <em>contacts.</em></h3><p>For local experiences, coffee visits and getting to Lokah, reach out to the right person below.</p></div><div className="contact-list"><a href={phoneLink('8722334405')}><span>ACTIVITY PARTNER · TREKS, JEEP RIDES & SIGHTSEEING</span><b>87223 34405</b><Phone size={15}/></a><a href={phoneLink('8618491951')}><span>HEBBALI COFFEE ESTATE</span><b>86184 91951</b><Phone size={15}/></a><a href={phoneLink('8317326676')}><span>CAFE TATVA</span><b>83173 26676</b><Phone size={15}/></a><a href={phoneLink('8861633566')}><span>LOKAH FRONT DESK · GETTING HERE & GUEST ASSISTANCE</span><b>88616 33566</b><Phone size={15}/></a></div></div>
      </section>

      <section id="good-to-know" className="good-section section-pad">
        <div className="section-heading"><div><p className="eyebrow">05, BEFORE YOU SETTLE IN</p><h2>Good to <em>know.</em></h2></div><p className="section-aside">Information and FAQs<br/>for an easy stay.</p></div>
        <div className="pet-welcome"><img src="/images/pet-friendly.jpg" alt="One of Lokah’s in-house dogs"/><div><span className="eyebrow">FOUR-LEGGED FRIENDS ARE WELCOME</span><h3>A pet-friendly<br/><em>little escape.</em></h3><p>Lokah is a pet-friendly property. You may meet our in-house pets during your stay. Bringing your own pet? Please keep them close and be mindful around the other animals.</p></div></div><div className="faq-layout"><div><p className="eyebrow">THE SMALL PRINT, MADE SIMPLE</p><h3>Just so<br/><em>you know.</em></h3></div><div className="faqs">{[
          ['What should I carry for the Bio Pool?','Please carry your swimwear. Swimwear is mandatory for using the Bio Pool.'],
          ['Is Lokah pet-friendly?','Yes, Lokah is pet-friendly and you may come across the property’s in-house pets. If you are travelling with your own pet, please be mindful and keep an eye on them around other animals.'],
          ['Do we have a pet’s menu?','Yes, we have a curated pet’s menu for our four-legged guests.'],
          ['What are the restaurant timings?','Breakfast is served from 8:00 AM to 10:30 AM. The morning cafe is open from 10:30 AM to 12:30 PM, lunch is served from 12:30 PM to 3:30 PM, the evening cafe is open from 3:30 PM to 7:00 PM, and dinner is served from 7:00 PM to 10:30 PM. High tea is served from 4:30 PM to 5:30 PM.'],
          ['Can I bring alcohol?','Lokah does not sell or provide alcohol. Guests may bring their own to enjoy in their rooms, in accordance with property guidelines.'],
          ['What happens if something gets damaged?','Any damage to the property or its belongings may be chargeable. Please treat the spaces with care.'],
          ['Can I arrange a celebration or an outing?','Absolutely. Speak to the Lokah team in advance so we can discuss availability, arrangements and any applicable charges.'],
        ].map(([q,a],i)=><div className="faq" key={q}><button onClick={()=>setActiveFaq(activeFaq===i?null:i)} aria-expanded={activeFaq===i}><span>{q}</span><b>{activeFaq===i?'−':'+'}</b></button>{activeFaq===i&&<p>{a}</p>}</div>)}</div></div>
        <div className="care-note"><span>A GENTLE REMINDER</span><p>Please respect the property, its natural surroundings and fellow guests. If you need anything during your stay, our team is happy to help.</p></div>
      </section>

      <section className="final-cta"><img src="/images/evening-setup.png" alt="An evening at Lokah"/><div className="final-overlay"/><div className="final-copy"><p className="eyebrow light">THERE’S ALWAYS A LITTLE MORE</p><h2>Make yourself<br/><em>at home.</em></h2><p>For anything you need, we’re just a message away.</p><a href={WA} target="_blank" rel="noreferrer" className="light-button"><Phone size={15}/> Chat with the Lokah team <ArrowUpRight size={15}/></a></div></section>
    </main>
    <footer className="footer"><a className="brand-logo footer-logo" href="#top" aria-label="Lokah home"><img src="/images/lokah-logo-light.png" alt="Lokah" /></a><p>A little guide to your time here.</p><div className="footer-links"><a href="https://www.lokahresort.com/" target="_blank" rel="noreferrer">Visit Lokah website <ArrowUpRight size={14}/></a><a href={WA} target="_blank" rel="noreferrer">Front desk · 88616 33566 <ArrowUpRight size={14}/></a></div><small className="footer-location">Nine architectural stays · Mullayanagiri foothills, Chikmagalur</small><div className="copyright">© LOKAH · MADE FOR SLOWER DAYS</div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
