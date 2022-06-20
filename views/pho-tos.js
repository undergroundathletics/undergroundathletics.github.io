import {html, LitElement} from 'lit';
//import Swiper from 'swiper/bundle';

class PhoTos extends LitElement {
    createRenderRoot() {
        return this;
    }

    firstUpdated() {
        new Swiper('.swiper-container', {
            slidesPerView: (window.innerWidth > 810) ? 2 : 1,
            spaceBetween: 5,
            centeredSlides: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }

    render = () => html`
        <div>
            <h3>
                <i class="far fa-image"></i>
                Photos
            </h3>

            <div class="swiper-container swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="img/bokeh.jpg"></div>
                    <div class="swiper-slide"><img src="img/box3.jpg"></div>
                    <div class="swiper-slide"><img src="img/equip_bells.jpg"></div>
                    <div class="swiper-slide"><img src="img/box_b_roll.jpg"></div>
                    <div class="swiper-slide"><img src="img/box_empty.jpg"></div>
                    <div class="swiper-slide"><img src="img/coaching_rundown.jpg"></div>
                    <div class="swiper-slide"><img src="img/equip_ergs.jpg"></div>
                    <div class="swiper-slide"><img src="img/Equip.jpg"></div>
                    <div class="swiper-slide"><img src="img/box7.jpg"></div>
                    <div class="swiper-slide"><img src="img/equip_ghd.jpg"></div>
                    <div class="swiper-slide"><img src="img/Shawn.jpg"></div>
                    <div class="swiper-slide"><img src="img/coach_danielle.jpg"></div>
                    <div class="swiper-slide"><img src="img/Ropes.jpg"></div>
                    <div class="swiper-slide"><img src="img/box1.jpg"></div>

                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    `;
}

customElements.define('pho-tos', PhoTos);
