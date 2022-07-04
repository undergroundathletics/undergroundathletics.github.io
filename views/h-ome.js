import {css, html, LitElement} from 'lit';
import sharedStyles from '../styles/shared-styles';
import pageStyles from '../styles/page-styles';

class HOme extends LitElement {
    static styles = [
        sharedStyles,
        pageStyles,
        css`
            :host {
                padding: 0;
                text-align: center;
                background: var(--text-secondary-color);
            }

            header,
            main,
            footer {
                padding: 10px 15px 35px;
                min-height: 250px;
            }

            header > div,
            main > div,
            footer > div {
                max-width: 1100px;
                margin: 0 auto;
            }

            header,
            footer {
                background: var(--light-primary-color);
            }

            main {
                background: #fafafa;
                color: rgba(0, 0, 0, 0.84);
            }

            h2,
            h3 {
                color: #000;
            }

            footer {
                padding-top: 40px;
                padding-bottom: 350px;
            }

            footer label {
                font-weight: bold;
            }

            main a {
                display: inline-block;
                padding: 10px;
                text-align: center;
                vertical-align: top;
                width: 350px;
                height: 325px;
                border-radius: 4px;
                text-decoration: none;
                color: var(--text-color);
                font-size: 1.75rem;
            }
            main a div {
                margin-top: 130px;
            }
            main span {
                font-size: 1.2rem;
            }

            i-con {
                vertical-align: -2px;
            }

            #facebook {
                background: #4267b219;
                border: 2px solid #4267b2;
                margin-right: 20px;
            }
            #facebook:hover {
                background: #4267b229;
            }
            #facebook span {
                color: #4267b2;
            }

            #insta {
                background: #8a3ab919;
                border: 2px solid #8a3ab9;
            }
            #insta:hover {
                background: #8a3ab929;
            }
            #insta span {
                color: #8a3ab9
            }

            @media (max-width: 810px) {
                #facebook {
                    margin-right: 0;
                }

                main a {
                    width: 90%;
                    margin-bottom: 35px;
                    margin-right: 0;
                }

                h3 {
                    margin-top: 20px;
                }
            }
        `
    ];

    render = () => html`
        <header>
            <div>
                <p>
                    Underground athletics provides a hybrid experience that combines strength, Olympic lifting, and metabolic training with a party style atmosphere.
                </p>
                <!-- replace with team pic -->
                <img src="img/logo.jpg" alt="Underground Athletics Logo">
                <p>

                    With a convenient location off 23, our Carpenter Road setup allows for outdoor workouts, during the summer months, and a fun, relaxing indoor environment during the cooler months.
                    <br><br>
                    We strive to empower and inspire athletes to discover their best self through a positive and encouraging workout environment.
                </p>
            </div>
        </header>

        <main>
            <div>
                <h2>
                    <i-con name="hashtag" color="rgba(0, 0, 0, 0.8)" no-hover></i-con>&nbsp;
                    Social
                </h2>

                <a href="https://www.facebook.com/UndergroundAthleticsLLC" target="_blank" id="facebook">
                    <div>
                        <i-con name="facebook" color="rgba(0, 0, 0, 0.8)"></i-con>&nbsp;
                        Facebook
                        <span>@UndergroundAthleticsLLC</span>
                    </div>
                </a>
                <a href="https://www.instagram.com/underground_athletics_llc" target="_blank" id="insta">
                    <div>
                        <i-con name="instagram" color="rgba(0, 0, 0, 0.8)"></i-con>&nbsp;
                        Instagram
                        <span>@underground_athletics_llc</span>
                    </div>
                </a>
            </div>
        </main>

        <footer>
            <div>
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
