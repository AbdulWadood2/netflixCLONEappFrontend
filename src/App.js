/* globalcss */
import "./App.css";
/* downarrow in nav bar */
import arrow from "../src/images/downArrow.png";
/* logi in nav */
import logo from "../src/images/logo.png";
/* square icon in nav */
import squareUpperArrow from "../src/images/squareUpperRightArrow.png";
/* slashImg */
import slashImg from "../src/images/slash.png";
/* apple png */
import apple from "../src/images/appleLogo.png";
/* play png */
import play from "../src/images/play.png";
/* firetv png */
import firetv from "../src/images/firetv.png";
/* chrome png */
import chrome from "../src/images/chrome.png";
/* entertainment png */
import entertainment from "../src/images/Entertainment.png";
/* downArrow png */
import leftArrow from "../src/images/leftArrow.png";
/* downloadImg feature */
import downloadImg from "../src/images/dowloadImg.png";
/* kids Png */
import kidsPng from "../src/images/kids.png";
/* TVshows */
import heyYOU from "../src/images/products/TVshows/Hey You.png";
import lockWood from "../src/images/products/TVshows/lockwood & co.png";
import recruit from "../src/images/products/TVshows/recruit.png";
import SEXLIFE from "../src/images/products/TVshows/sexLife.png";
/* movies */
import brotherHood from "../src/images/products/movies/brotherHood.png";
import JUNG from "../src/images/products/movies/JUNG E.png";
import spiderMan from "../src/images/products/movies/spiderMan.png";
import VENOM from "../src/images/products/movies/VENOM 2.png";
/* groundBreaking */
import faraway from "../src/images/products/groundBreaking/faraway.png";
import luther from "../src/images/products/groundBreaking/luther.png";
import outlast from "../src/images/products/groundBreaking/outlast.png";
import shadow from "../src/images/products/groundBreaking/shadow & bone.png";
/* socialImgs */
import facebook from "../src/images/social/facebook.png";
import instagram from "../src/images/social/instagram.png";
import twitter from "../src/images/social/twitter.png";
import footerLogo from "../src/images/social/logo.png";

function App() {
  return (
    <div class="mainContainer">
      <div class="box-1">
        <div>
          <div class="nav">
            <div class="name">
              <img src={logo} alt="this is logo"></img>
            </div>
            <div class="flex-1">
              <div class="media">Media Center</div>
              <div class="resources downArrow">
                Resources
                <img src={arrow} alt="this is down arrow"></img>
              </div>
              <div class="newRoom">
                <div class="text">Newsroom</div>
                <div class="img">
                  <img
                    src={squareUpperArrow}
                    alt="this is sqaure upper arrow"
                  ></img>
                </div>
              </div>
              <div class="company downArrow">
                Company
                <img src={arrow} alt="this is down arrow"></img>
              </div>
            </div>
            <div class="flex-2">
              <div class="signInButton">Sign In</div>
              <div class="getStartedButton">Get Started</div>
            </div>
          </div>
          <div class="heading-1">Binge-Watch Your Favorite TV</div>
          <div class="heading-2">Shows And Movies On Netflix</div>
          <div class="para">
            With Netflix's Vast Library Of TV Shows And Movies, You'll Never Run
            Out of Options For Your Next Binge-Watch Session.From The Latest
            Blockbuster Movies To Classic TV shows,Netflix Has it All.
          </div>
          <div class="form">
            <form>
              <input placeholder="Email Address" />
            </form>
            <button>Get Started</button>
          </div>
          <div class="proud">
            <div class="one">230M+</div>
            <div class="two">
              <div class="flex-columb">
                <div>Worldwide</div>
                <div>Subscribers</div>
              </div>
            </div>
            <div class="three">
              <div class="flex-columb">
                <img src={slashImg} alt="slashImg"></img>
                <img src={slashImg} alt="slashImg"></img>
                <img src={slashImg} alt="slashImg"></img>
                <img src={slashImg} alt="slashImg"></img>
                <img src={slashImg} alt="slashImg"></img>
              </div>
            </div>
            <div class="four">17k+</div>
            <div class="five">
              <div class="flex-columb">
                <div>Movies &</div>
                <div>TV shows</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-2">
        <div class="A">Available On These Platforms</div>
        <div class="B">
          <div class="apple">
            <div class="img">
              <img src={apple} alt="apple"></img>
            </div>
            <div class="appName">AppStore</div>
          </div>
          <div class="googlePlay">
            <div class="img">
              <img src={play} alt="play"></img>
            </div>
            <div class="appName">Google Play</div>
          </div>
          <div class="roku">Roku</div>
          <div class="fireTv">
            <img src={firetv} alt="firetv"></img>
          </div>
          <div class="androidtv">androidtv</div>
          <div class="chromecast">
            <div class="img">
              <img src={chrome} alt="chrome"></img>
            </div>
            <div class="appName">chromecast</div>
          </div>
        </div>
      </div>
      <div class="box-3">
        <div class="img">
          <img src={entertainment} alt="entertainment"></img>
        </div>
        <div class="text">
          <div class="A">
            Your Entertainment, Anytime, AnyWhere: Netflix On All Devices
          </div>
          <div class="B">
            Netflix is compatible with a wide range of devices, so you can watch
            on the device of your choice. Whether you prefer watching on a big
            screen or a smaller device, Netflix has you covered.
          </div>
          <div class="C">
            <div class="text">View Device List</div>
            <div class="img">
              <img src={leftArrow} alt="left Arrow"></img>
            </div>
          </div>
        </div>
      </div>
      <div class="box-4">
        <div class="A">
          <div class="big">
            <div>Download Now, Watch Later:</div>
            <div>Netflix For On-The-Go Viewing</div>
          </div>
          <div class="small">
            With Netflix's download feature, you never have to miss a moment of
            your favorite TV shows and movies. Download now and watch later, on
            your own terms.
          </div>
        </div>
        <div class="B">
          <img src={downloadImg} alt="downloadImg"></img>
        </div>
      </div>
      <div class="box-5">
        <div class="img">
          <img src={kidsPng} alt="kids png"></img>
        </div>
        <div class="text">
          <div class="large">
            Parental Controls: keeping your Kids Safe On Netflix
          </div>
          <div class="small">
            With parental controls, you can give your children the freedom to
            explore, while still keeping them safe from inappropriate content.
          </div>
        </div>
      </div>
      <div class="box-6">
        <div class="large">
          Discover What To Watch Next: Movies And TV Shows On Netflix
        </div>
        <div class="small">
          With Netflix, you're sure to find your next favorite movie, and maybe
          even discover some hidden gems along the way.
        </div>
      </div>
      <div class="box-7">
        <div class="header">
          <div class="A">
            <div class="one">Past & Current Seasons</div>
            <div class="two">TV Shows</div>
          </div>
          <div class="B">View All</div>
        </div>
        <div class="movieList">
          <div>
            <div>
              <img src={heyYOU} alt="hey you show"></img>
            </div>
            <div class="title">HEY, YOU</div>
          </div>
          <div>
            <div>
              <img src={lockWood} alt="lockwood show"></img>
            </div>
            <div class="title">LOCKWOOD & CO</div>
          </div>
          <div>
            <div>
              <img src={recruit} alt="recruit show"></img>
            </div>
            <div class="title">THE RECRUIT</div>
          </div>
          <div>
            <div>
              <img src={SEXLIFE} alt="sexlife show"></img>
            </div>
            <div class="title">SEXLIFE</div>
          </div>
        </div>
      </div>
      <div class="box-8">
        <div class="header">
          <div class="A">
            <div class="one">New & Classic</div>
            <div class="two">Movies</div>
          </div>
          <div class="B">View All</div>
        </div>
        <div class="movieList">
          <div>
            <div>
              <img src={brotherHood} alt="BROTHERHOOD movie"></img>
            </div>
            <div class="title">BROTHERHOOD</div>
          </div>
          <div>
            <div>
              <img src={JUNG} alt="JUNG movie"></img>
            </div>
            <div class="title">JUNG</div>
          </div>
          <div>
            <div>
              <img src={spiderMan} alt="spiderMan"></img>
            </div>
            <div class="title">SPIDERMAN: NO WAY...</div>
          </div>
          <div>
            <div>
              <img src={VENOM} alt="VENOM"></img>
            </div>
            <div class="title">VENOM 2</div>
          </div>
        </div>
      </div>
      <div class="box-9">
        <div class="header">
          <div class="A">
            <div class="one">GroundBreaking</div>
            <div class="two">Netflix Originals</div>
          </div>
          <div class="B">View All</div>
        </div>
        <div class="movieList">
          <div>
            <div>
              <img src={faraway} alt="FARAWAY movie"></img>
            </div>
            <div class="title">FARAWAY</div>
          </div>
          <div>
            <div>
              <img src={luther} alt="LUTHER movie"></img>
            </div>
            <div class="title">LUTHER</div>
          </div>
          <div>
            <div>
              <img src={outlast} alt="OUTLAST"></img>
            </div>
            <div class="title">OUTLAST</div>
          </div>
          <div>
            <div>
              <img src={shadow} alt="SHADOW & BONE"></img>
            </div>
            <div class="title">SHADOW & BONE</div>
          </div>
        </div>
      </div>
      <div class="box-10">
        <div class="large">Find Your Budget-Friendly Plan:</div>
        <div class="large">Netflix's Pricing Tiers</div>
        <div class="small">
          Netflix offers a range of pricing tiers to suit every budget.
        </div>
      </div>
      <div class="box-11">
        <div class="A">
          <div class="A">Mobile</div>
          <div class="B">
            <div class="one">₹1200</div>
            <div class="two">/</div>
            <div class="three">Month</div>
          </div>
          <div class="C">Get Started</div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">watch on 1 phone or tablet at a time</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Unlimited movies, TV shows, and mobile games</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Ad-free TV shows and movies</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Download on 1 phone or tablet at a time</div>
          </div>
        </div>
        <div class="B">
          <div class="A">Basic</div>
          <div class="B">
            <div class="one">₹2900</div>
            <div class="two">/</div>
            <div class="three">Month</div>
          </div>
          <div class="C">Get Started</div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">watch on 1 supported device at a time</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Unlimited movies, TV shows, and mobile games</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Ad-free TV shows and movies</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Download on 1 supported device at a time</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Watch in Ultra HD</div>
          </div>
        </div>
        <div class="C red">
          <div class="A">Standard</div>
          <div class="B">
            <div class="one">₹3600</div>
            <div class="two">/</div>
            <div class="three">Month</div>
          </div>
          <div class="C">Get Started</div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">watch on 2 devices at a time</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Unlimited movies, TV shows, and mobile games</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Ad-free TV shows and movies</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Download on 2 supported devices at a time</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Watch in Ultra HD</div>
          </div>
        </div>
        <div class="D">
          <div class="A">Premium</div>
          <div class="B">
            <div class="one">₹4400</div>
            <div class="two">/</div>
            <div class="three">Month</div>
          </div>
          <div class="C">Get Started</div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">watch on 1 4 supported devices at a time</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Unlimited movies, TV shows, and mobile games</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Ad-free TV shows and movies</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Download on 6 supported devices at a time</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Watch in Ultra HD</div>
          </div>
          <div class="flex">
            <div class="one">✓</div>
            <div class="two">Netflix spatial audio</div>
          </div>
        </div>
      </div>
      <div class="box-12">
        <div class="large">Netflix FAQs: Your Questions Answered</div>
        <div class="small">
          With our comprehensive Netflix FAQs, you'll have all the information
          you need to make the most of your streaming experience.
        </div>
        <div class="questions">
          <div class="A">
            <div>
              <div class="question">What is Netflix?</div>
              <button class="sign">+</button>
            </div>
            <div class="hr">
              <hr></hr>
            </div>
          </div>
          <div class="B">
            <div>
              <div class="question">How much does Netflix cost?</div>
              <button class="sign">+</button>
            </div>
            <div class="hr">
              <hr></hr>
            </div>
          </div>
          <div class="C">
            <div>
              <div class="question">Where can i watch?</div>
              <button class="sign">+</button>
            </div>
            <div class="hr">
              <hr></hr>
            </div>
          </div>
          <div class="D">
            <div>
              <div class="question">How do I cancel?</div>
              <button class="sign">+</button>
            </div>
            <div class="hr">
              <hr></hr>
            </div>
          </div>
          <div class="E">
            <div>
              <div class="question">What can I watch on Netflix?</div>
              <button class="sign">+</button>
            </div>
            <div class="hr">
              <hr></hr>
            </div>
          </div>
          <div class="F">
            <div>
              <div class="question">Is Netflix is good for Kids?</div>
              <button class="sign">+</button>
            </div>
            <div class="hr">
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
      <div class="box-13">
        <div class="A">
          <div class="A">
            <img src={footerLogo} alt="logo"></img>
          </div>
          <div class="B">contact@Netflix.com</div>
          <div class="C">(239)555-0108</div>
          <div class="D">
            <div class="A">
              <img src={facebook} alt="facebook"></img>
            </div>
            <div class="B">
              <img src={twitter} alt="twitter"></img>
            </div>
            <div class="C">
              <img src={instagram} alt="instagram"></img>
            </div>
          </div>
        </div>
        <div class="B">
          <div class="A">Legal</div>
          <div class="B">Terms of Use</div>
          <div class="C">Privacy Policy</div>
          <div class="D">Cookie Preferences</div>
          <div class="E">Legal Notices</div>
        </div>
        <div class="C">
          <div class="A">Company</div>
          <div class="B">About Us</div>
          <div class="C">Contact Us</div>
          <div class="D">Account</div>
          <div class="E">Investor Relation</div>
          <div class="F">Corporate Information</div>
        </div>
        <div class="D">
          <div class="A">Product</div>
          <div class="B">Media Center</div>
          <div class="C">Gift Card Terms</div>
          <div class="D">speedtest</div>
          <div class="E">Only On Netflix</div>
        </div>
        <div class="E">
          <div class="A">Resource</div>
          <div class="B">Jobs</div>
          <div class="C">Blog</div>
          <div class="D">FAQs</div>
          <div class="E">Help Center</div>
        </div>
      </div>
    </div>
  );
}

export default App;
