import {html, LitElement} from 'lit';

class SchEdule extends LitElement {
    createRenderRoot() {
        return this;
    }

    render = () => html`
        <h4>
            <i class="far fa-calendar-alt"></i>
            Schedule
        </h4>
        <p>Classes Everyday</p>

        <div class="card">
            Morning Class:<br><br>
            9 AM
        </div>
        <div class="card">
            Evening Class:<br><br>
            6 PM
        </div>
    `;
}

customElements.define('sch-edule', SchEdule);
