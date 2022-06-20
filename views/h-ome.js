import {html, LitElement} from 'lit';

class HOme extends LitElement {
    createRenderRoot() {
        return this;
    }

    render = () => html`
        <header>
            <div>
                <h1>Underground Athletics</h1>
                <img src="img/logo.jpg" alt="Underground Athletics Logo">
                <p>
                    Text here about the gym.
                </p>
            </div>
        </header>

        <section id="social" class="light">
            <div>
                <h2>
                    <i class="fas fa-hashtag"></i>
                    Social
                </h2>

                <a href="https://www.facebook.com/UndergroundAthleticsLLC" target="_blank" id="facebook">
                    <div>
                        Facebook
                        <span>@UndergroundAthleticsLLC</span>
                    </div>
                </a>
                <a href="https://www.instagram.com/underground_athletics_llc" target="_blank" id="insta">
                    <div>
                        Instagram
                        <span>@underground_athletics_llc</span>
                    </div>
                </a>
            </div>
        </section>

        <footer class="light">
            <div>
                <article>

                </article>

                <article>
                    <h6>
                        <i class="far fa-address-card"></i>
                        Contact Us
                    </h6>

                    <label>
                        <i class="far fa-envelope"></i>
                        Email
                    </label><br>
                    <a href="mailto:undergroundathleticsllc@gmail.com">
                        undergroundathleticsllc@gmail.com
                    </a><br><br>

                    <label>
                        <i class="fas fa-mobile-alt"></i>
                        Phone Number
                    </label><br>
                    (734) 634-4629<br><br>

                    <label>
                        <i class="far fa-map"></i>
                        Location
                    </label><br>
                    <a href="https://www.google.com/maps/place/12350+Carpenter+Rd,+Milan,+MI+48160/@42.108316,-83.6815117,17z/data=!3m1!4b1!4m5!3m4!1s0x883ca3d6435f53e1:0x27318d4c8a429cc1!8m2!3d42.108316!4d-83.679323" target="_blank">
                        12350 Carpenter Rd Milan, MI 48160
                    </a>
                </article>
            </div>
        </footer>
    `;
}

customElements.define('h-ome', HOme);
