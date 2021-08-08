import Link from 'next/link';

import Image from 'next/image';

import { Meta } from '../layout/Meta';

import { Main } from '../templates/Main';




const Bio = () => (
  <Main meta={<Meta title="Dwayne\'s Bio" description="Dwayne McDaniel\'s Improv Bio" />}>
    
    <p>

      <Link href='https://www.instagram.com/mcdwayne_real/' >Instagram </Link>
      {" "}
      <br></br>
      <Link href='https://twitter.com/McDwayne' >Twitter </Link>
      </p>
<p>
  Dwayne McDaniel has been an improvisor since 2010. Studying in San Francisco at schools such as Bay Area Theater Sports, Un-Scripted Theater and Joya Corey&apos;s Full Spectrum Improvisation. In 2013 he founded Elemental Improv, an outdoor based short form troupe and school that focused on pushing the limits of what improv could be and where it could be performed. He is the co-founder of SFBarprov and was an early producer at PianoFight, San Francisco&apos;s hottest theater and entertainment venue. Dwayne was also an early member of Endgames Improv.  
</p>
{" "}
<p>
  Dwayne is a public speaker as well, having spoken at tech conferences around the world and from MIT ro Stanford, <a href="https://wordpress.tv/2017/06/21/dwayne-mcdaniel-we-are-all-making-this-up-improv-lessons-for-developers-2/">sometimes about improv</a>. In 2018 he was awarded the San Francisco Improv Festival&apos;s Award for Community Achievement for producing hundreds of shows in the mid twenty-teens.  Dwayne relocated from San Francisco at the end of 2019.  

  </p>
  <div className="flex">
  <Image src="/../public/dwaynemic.jpg" alt="Dwayne McDaniel" 
          width={450}
          height={500}
          className="rounded-md"
        />
  <Image src="/../public/dwayne-headshot.jpg" alt="Dwayne McDaniel" 
          width={340} 
          height={500}
          className="rounded-md"
        />
    </div>
  </Main>
);
export default Bio;
