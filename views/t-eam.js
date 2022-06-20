import {html, LitElement} from 'lit';

class TEam extends LitElement {
    createRenderRoot() {
        return this;
    }

    render = () => html`
        <h1>Team</h1>
    `;
}

customElements.define('t-eam', TEam);
