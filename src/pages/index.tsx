/* eslint-disable */
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import Image from 'next/image';


const Index = () => {

  return (
    <Main
      meta={
        <Meta
          title="Dwayne McDaniel Improv"
          description="Exploring what Improv can be and do since 2010"
        />
      }>
        
      <h1 className="font-bold text-2xl">
      Sign up for the next Stage Skills Workshop here!
      </h1>
      <p>
        Happening Sunday August 15th at 2:00pm to 4:00pm CDT
      </p>
      <p>
        At the <a href="https://www.theannoyance.com/">Annoyance Theater</a> in Chicago.
      </p>
      <div className="flex justify-between">
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input className="bg-green-200" type="text" name="name" /></label>   
          </p>
          <p>
            <label>Your Email: <input className="bg-green-200" type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea className="bg-green-200" name="message"></textarea></label>
          </p>
          <p>
            <button className="float-right border-double rounded-full py-3 px-6 border-black border-4 text-red-800" type="submit">{" "}Send</button>
              </p>
            </form>
        </div>
        {" "}<br></br>
        <div>
        <Image src="/../public/dwaynemic.jpg" alt="Picture of the author" 
          width={440} 
          height={450}
          className="rounded-full"
        />
        </div>
      </Main>
  );
};

export default Index;
