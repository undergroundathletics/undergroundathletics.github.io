import {css, html, LitElement} from 'lit';
import sharedStyles from '../styles/shared-styles';
import pageStyles from '../styles/page-styles';
import './shared/i-con';

class JOin extends LitElement {
    static styles = [
        sharedStyles,
        pageStyles,
        css`
            :host {
                max-width: 1100px;
                margin: 0 auto;
            }

            i-con {
                vertical-align: -1px;
            }
        `
    ];

    render = () => html`
        <h5>
            <i-con name="profile" color="rgba(0, 0, 0, 0.8)" no-hover></i-con>&nbsp;
            Pricing
        </h5>

        <p>Drop-ins welcome!  Outdoor workouts, weather, permitting</p>

        <div class="card">
            $75 /single<br>
        </div>
        <div class="card">
            $125 /couple (married)
        </div>
        <div class="card">
            $150 /family (up to 4, children under 18)
        </div>
        <div class="card">
            $100 /punch card (10 visits)
        </div>
        <div class="card">
            Personal training available, call for pricing.
        </div>

        <p>Questions?  Email us at <a href="mailto:undergroundathleticsllc@gmail.com">undergroundathleticsllc@gmail.com</a></p>
    `;
}

customElements.define('j-oin', JOin);
