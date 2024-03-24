import {
  BlockLeft,
  BlockRight,
  Header,
  HeroWrap,
  ImageWrap,
  MainHeader,
  MainText,
  MainWrap,
  TextWrap,
} from './Pages.styled';
import camper_mountains_1x from '../assets/images/campers_mountains_1x.jpg';
import camper_mountains_2x from '../assets/images/campers_mountains_2x.jpg';
import camper_family_1x from '../assets/images/camper_family_1x.jpg';
import camper_family_2x from '../assets/images/camper_family_2x.jpg';
import camper_family2_1x from '../assets/images/camper_family2_1x.jpg';
import camper_family2_2x from '../assets/images/camper_family2_2x.jpg';
import camper_forrest_1x from '../assets/images/camper_forrest_1x.jpg';
import camper_forrest_2x from '../assets/images/camper_forrest_2x.jpg';
import camper_forrest2_1x from '../assets/images/camper_forrest2_1x.jpg';
import camper_forrest2_2x from '../assets/images/camper_forrest2_2x.jpg';

const HomePage = () => {
  return (
    <>
      <HeroWrap>
        <MainWrap>
          <MainHeader>
            Welcome to HappyCampers - the best campers rental company in
            Ukraine!
          </MainHeader>
          <MainText>
            Discover the joy of exploring Ukraine with our premium camper rental
            service. At HappyCampers, we believe in making your travel
            experiences memorable, hassle-free, and filled with happiness.
            Whether you're planning a weekend getaway or a long road trip across
            Ukraine, we've got the perfect camper for you.
          </MainText>
        </MainWrap>
      </HeroWrap>

      <BlockLeft>
        <ImageWrap>
          <img
            srcSet={`${camper_mountains_1x} 1x, ${camper_mountains_2x} 2x`}
            src={camper_mountains_1x}
            alt="Camper in Mountains"
            loading="lazy"
          />
        </ImageWrap>

        <TextWrap>
          <Header>Explore Our Catalog:</Header>
          <p>
            Browse through our extensive catalog of campers available for rent
            in different cities across Ukraine. From compact campers for solo
            adventurers to spacious family-friendly RVs, we have something to
            suit every traveler's needs. Use our convenient filters to narrow
            down your search based on features and location, ensuring you find
            the ideal camper for your journey.
          </p>
        </TextWrap>
      </BlockLeft>

      <BlockRight>
        <ImageWrap>
          <img
            srcSet={`${camper_forrest_1x} 1x, ${camper_forrest_2x} 2x`}
            src={camper_forrest_1x}
            alt="Camper in Forrest"
            loading="lazy"
          />
        </ImageWrap>
        <TextWrap>
          <Header>Detailed Information and Reviews:</Header>
          <p>
            Get all the details you need about each camper, including
            specifications, amenities, and pricing. Our comprehensive listings
            provide you with transparent information to help you make informed
            decisions. Read reviews from fellow travelers who have experienced
            our campers firsthand, giving you valuable insights into their
            comfort and reliability.
          </p>
        </TextWrap>
      </BlockRight>

      <BlockLeft>
        <ImageWrap>
          <img
            srcSet={`${camper_family_1x} 1x, ${camper_family_2x} 2x`}
            src={camper_family_1x}
            alt="Family near the camper"
            loading="lazy"
          />
        </ImageWrap>
        <TextWrap>
          <Header>Book Your Camper:</Header>
          <p>
            Ready to embark on your adventure? Use our easy-to-use booking form
            to reserve your chosen camper quickly and securely. Simply select
            your desired dates, fill in your details, and you're all set to hit
            the road. Our team is here to assist you every step of the way,
            ensuring a smooth booking process.
          </p>
        </TextWrap>
      </BlockLeft>

      <BlockRight>
        <ImageWrap>
          <img
            srcSet={`${camper_forrest2_1x} 1x, ${camper_forrest2_2x} 2x`}
            src={camper_forrest2_1x}
            alt="Camper in Forrest"
            loading="lazy"
          />
        </ImageWrap>
        <TextWrap>
          <Header>Favorites Page:</Header>
          <p>
            Found a camper you love? Add it to your favorites list to keep track
            of your top picks. Our favorites page allows you to revisit and
            compare your preferred campers, making it easier to finalize your
            travel plans.
          </p>
        </TextWrap>
      </BlockRight>

      <BlockLeft>
        <ImageWrap>
          <img
            srcSet={`${camper_family2_1x} 1x, ${camper_family2_2x} 2x`}
            src={camper_family2_1x}
            alt="Family near the camper"
            loading="lazy"
          />
        </ImageWrap>
        <TextWrap>
          <Header>Start Your Journey with HappyCampers:</Header>
          <p>
            Join the HappyCampers community today and experience the freedom and
            flexibility of camper travel. Whether you're a seasoned adventurer
            or a first-time traveler, we're here to help you create
            unforgettable memories on the open road. Book your camper rental
            with us and embark on the ultimate Ukrainian adventure!
          </p>
        </TextWrap>
      </BlockLeft>
    </>
  );
};

export default HomePage;
