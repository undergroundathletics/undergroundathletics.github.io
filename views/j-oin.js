import {html, LitElement} from 'lit';

class JOin extends LitElement {
    createRenderRoot() {
        return this;
    }

    render = () => html`
        <h5>
            <i class="fas fa-credit-card"></i>
            Pricing
        </h5>
        <div class="card">
            $50 /single<br>
        </div>
        <div class="card">
            $80 /couple
        </div>
    `;
}

customElements.define('j-oin', JOin);
