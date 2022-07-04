import {css, html, LitElement} from 'lit';
import sharedStyles from '../styles/shared-styles';
import pageStyles from '../styles/page-styles';

class JOin extends LitElement {
    static styles = [
        sharedStyles,
        pageStyles,
        css`

        `
    ];

    render = () => html`
        <h5>
            <i class="fas fa-credit-card"></i>
            Pricing
        </h5>

        <p>Drop-ins welcome!</p>

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
    `;
}

customElements.define('j-oin', JOin);
