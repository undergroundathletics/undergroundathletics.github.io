import {css, html, LitElement} from 'lit';
import sharedStyles from '../styles/shared-styles';
import pageStyles from '../styles/page-styles';
import 'infinite-carousel-wc';
import '@vaadin/button';

const imgs = [
    'img/bokeh.jpg',
    'img/equip_bells.jpg',
    'img/box3.jpg',
    'img/box_b_roll.jpg',
    'img/box_empty.jpg',
    'img/coaching_rundown.jpg',
    'img/equip_ergs.jpg',
    'img/Equip.jpg',
    'img/box7.jpg',
    'img/equip_ghd.jpg',
    'img/Shawn.jpg',
    'img/coach_danielle.jpg',
    'img/Ropes.jpg',
    'img/box1.jpg'
];

class PhoTos extends LitElement {
    static styles = [
        sharedStyles,
        pageStyles,
        css`
            :host {
                max-width: 1100px;
                margin: 0 auto;
            }
        `
    ];

    firstUpdated() {
        const n = imgs.length;
        let i = 3;

        const slot1 = this.shadowRoot.getElementById('slot1');
        const slot2 = this.shadowRoot.getElementById('slot2');
        const slot3 = this.shadowRoot.getElementById('slot3');

        slot1.innerHTML = `<img src="${imgs[0]}">`;
        slot2.innerHTML = `<img src="${imgs[1]}">`;
        slot3.innerHTML = `<img src="${imgs[2]}">`;

        const carousel = this.shadowRoot.querySelector('infinite-carousel-wc');
        carousel.addEventListener('previous', e => {
            let elt;
            switch(e.detail.newCurrent) {
                case 1:
                    elt = slot2;
                    break;
                case 2:
                    elt = slot3;
                    break;
                case 3:
                    elt = slot1;
                    break;
            }

            elt.innerHTML = `<img src="${imgs.at(--i % n)}">`;
        });

        carousel.addEventListener('next', e => {
            let elt;
            switch(e.detail.newCurrent) {
                case 1:
                    elt = slot3;
                    break;
                case 2:
                    elt = slot1;
                    break;
                case 3:
                    elt = slot2;
                    break;
            }

            elt.innerHTML = `<img src="${imgs.at(++i % n)}">`;
        });
    }

    render = () => html`
        <div>
            <h3>
                <i class="far fa-image"></i>
                Photos
            </h3>

            <infinite-carousel-wc>
                <div id="slot1" slot="1"></div>
                <div id="slot2" slot="2"></div>
                <div id="slot3" slot="3"></div>
            </infinite-carousel-wc>

            <vaadin-button @click="${this.#previous}">
                Previous
            </vaadin-button>

            <vaadin-button @click="${this.#next}">
                Next
            </vaadin-button>
        </div>
    `;

    #previous = () => {
        this.shadowRoot.querySelector('infinite-carousel-wc').goPrevious();
    };

    #next = () => {
        this.shadowRoot.querySelector('infinite-carousel-wc').goNext();
    };
}

customElements.define('pho-tos', PhoTos);
