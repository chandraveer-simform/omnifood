import Link from "next/link";
import Image from "next/image";
import dave from "../../assets/img/customers/dave.jpg";
import ben from "../../assets/img/customers/ben.jpg";
import steve from "../../assets/img/customers/steve.jpg";
import hannah from "../../assets/img/customers/hannah.jpg";
import gallery1 from "../../assets/img/gallery/gallery-1.jpg";
import gallery2 from "../../assets/img/gallery/gallery-2.jpg";
import gallery3 from "../../assets/img/gallery/gallery-3.jpg";
import gallery4 from "../../assets/img/gallery/gallery-4.jpg";
import gallery5 from "../../assets/img/gallery/gallery-5.jpg";
import gallery6 from "../../assets/img/gallery/gallery-6.jpg";
import gallery7 from "../../assets/img/gallery/gallery-7.jpg";
import gallery8 from "../../assets/img/gallery/gallery-8.jpg";
import gallery9 from "../../assets/img/gallery/gallery-9.jpg";
import gallery10 from "../../assets/img/gallery/gallery-10.jpg";
import gallery11 from "../../assets/img/gallery/gallery-11.jpg";
import gallery12 from "../../assets/img/gallery/gallery-12.jpg";
function Testimonials() {
  return (
    <section className="section-testimonials">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can&apos;t go back
        </h2>

        <div className="testimonials">
          <figure className="testimonial">
            <Image
              className="testimonial-img"
              alt="Photo of customer Dave Bryson"
              src={dave}
            />
            <blockquote className="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className="testimonial-name">&mdash; Dave Bryson</p>
          </figure>

          <figure className="testimonial">
            <Image
              className="testimonial-img"
              alt="Photo of customer Ben Hadley"
              src={ben}
            />
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It&apos;s amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-name">&mdash; Ben Hadley</p>
          </figure>

          <figure className="testimonial">
            <Image
              className="testimonial-img"
              alt="Photo of customer Steve Miller"
              src={steve}
            />
            <blockquote className="testimonial-text">
              Omnifood is a life saver! I just started a company, so
              there&apos;s no time for cooking. I couldn&apos;t live without my
              daily meals now!
            </blockquote>
            <p className="testimonial-name">&mdash; Steve Miller</p>
          </figure>

          <figure className="testimonial">
            <Image
              className="testimonial-img"
              alt="Photo of customer Hannah Smith"
              src={hannah}
            />
            <blockquote className="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>

      <div className="gallery">
        <figure className="gallery-item">
          <Image
            src={gallery1}
            alt="Photo of beautifully
            arranged food"
          />
          {/* -- <figcaption>Caption</figcaption> -- */}
        </figure>
        <figure className="gallery-item">
          <Image
            src={gallery2}
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <Image
            src={gallery3}
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <Image
            src={gallery4}
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <Image
            src={gallery5}
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <Image
            src={gallery6}
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <Image
            src={gallery7}
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <Image
            src={gallery8}
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <Image
            src={gallery9}
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <Image
            src={gallery10}
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <Image
            src={gallery11}
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <Image
            src={gallery12}
            alt="Photo of beautifully
            arranged food"
          />
        </figure>
      </div>
    </section>
  );
}

export default Testimonials;
