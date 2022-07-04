import {css, html, LitElement} from 'lit';
import sharedStyles from '../styles/shared-styles';
import pageStyles from '../styles/page-styles';
import './shared/i-con';

class SchEdule extends LitElement {
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
        <h4>
            <i-con name="event" color="rgba(0, 0, 0, 0.8)" no-hover></i-con>&nbsp;
            Schedule
        </h4>
        <p>Classes Mon-Fri</p>
        <div class="card">
            Morning Class:<br><br>
            9 AM
        </div>
        <div class="card">
            Evening Classes:<br><br>
            4:30 PM<br>
            6 PM
        </div>
        <p>Classes Sat and Sun</p>
        <div class="card">
            Morning Class:<br><br>
            9 AM
        </div>
        <div class="card">
            Evening Classes:<br><br>
            6 PM
        </div>
    `;
}

customElements.define('sch-edule', SchEdule);
