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
    'img/box1.jpg',
    'img/085029C6-710C-4A0E-B32F-3EC562AC6175.jpeg',
    'img/93C93566-C14B-4163-B891-37AE76582FBB.jpeg',
    'img/IMG_0423.jpg',
    'img/IMG_0671.jpg',
    'img/IMG_0676.jpg',
    'img/IMG_1060.jpg',
    'img/IMG_1484.jpeg',
    'img/IMG_1642.jpg',
    'img/IMG_2463.jpg',
    'img/IMG_2485.jpeg',
    'img/IMG_3844.jpg',
    'img/IMG_3845.jpg',
    'img/IMG_3846.jpg',
    'img/IMG_3847.jpg',
    'img/IMG_4422.jpeg',
    'img/IMG_4424.jpeg',
    'img/IMG_4823.jpeg',
    'img/IMG_4870.jpeg',
    'img/IMG_4880.jpeg',
    'img/IMG_4916.jpeg',
    'img/IMG_4961.jpeg',
    'img/IMG_5078.jpeg',
    'img/IMG_5082.jpeg',
    'img/IMG_5370.jpeg',
    'img/IMG_5397.jpeg',
    'img/IMG_5589.jpg',
    'img/IMG_5620.jpg',
    'img/IMG_5877.jpg',
    'img/IMG_6507.jpeg',
    'img/IMG_6539.jpg',
    'img/IMG_6553.jpeg',
    'img/IMG_6564.jpeg',
    'img/IMG_6566.jpeg',
    'img/IMG_6683.jpeg',
    'img/IMG_6800.jpeg',
    'img/IMG_6929.jpg',
    'img/IMG_7092.jpeg',
    'img/IMG_7312.jpeg',
    'img/IMG_7571.jpeg'
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

            i-con {
                vertical-align: -1px;
            }
        `
    ];

    firstUpdated() {
        const n = imgs.length;

        const slot1 = this.shadowRoot.getElementById('slot1');
        const slot2 = this.shadowRoot.getElementById('slot2');
        const slot3 = this.shadowRoot.getElementById('slot3');

        // TODO: fix ordering
        slot3.innerHTML = `<img src="${imgs[0]}">`; // Initial previous
        slot1.innerHTML = `<img src="${imgs[1]}">`; // Initial current.
        slot2.innerHTML = `<img src="${imgs[2]}">`; // Initial next.

        let i = 1;

        const carousel = this.shadowRoot.querySelector('infinite-carousel-wc');
        carousel.addEventListener('previous', e => {
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

            elt.querySelector('img').src = imgs.at(--i % n);
            //console.log(`prev: slot=${e.detail.newCurrent}`, `i=${i}`, i % n, imgs.at(i % n));
        });

        // called on load
        carousel.addEventListener('next', e => {
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

            elt.querySelector('img').src = imgs.at(++i % n);
            //console.log(`next: slot=${e.detail.newCurrent}`, `i=${i}`, i % n, imgs.at(i % n));
        });
    }

    render = () => html`
        <div>
            <h3>
                <i-con name="imgMultiple" color="rgba(0, 0, 0, 0.8)" no-hover></i-con>&nbsp;
                Photos
            </h3>

            <infinite-carousel-wc>
                <div id="slot1" slot="1"></div>
                <div id="slot2" slot="2"></div>
                <div id="slot3" slot="3"></div>
            </infinite-carousel-wc>

            <vaadin-button @click="${this.#previous}">
                Previous
            </vaadin-button>&nbsp;

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
