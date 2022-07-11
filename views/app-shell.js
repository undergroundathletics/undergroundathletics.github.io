import {css, html, LitElement} from 'lit';
import sharedStyles from '../styles/shared-styles';
import '../styles/vaadin-overrides';
import '@vaadin/app-layout';
import '@vaadin/tabs';
import {Router} from '@vaadin/router';
import {setupRouter} from '../js/router';
import './shared/i-con';

class AppShell extends LitElement {
    static styles = [
        sharedStyles,
        css`
            vaadin-tabs {
                margin: auto;
                background: #333;
                --lumo-secondary-text-color: #ddd;
                --lumo-body-text-color: #aaa;
                --lumo-primary-text-color: var(--ua-green);
            }

            img {
                border-radius: 4px;
            }

            .mobile {
                display: none;
            }

            @media(max-width: 810px) {
                .txt {
                    display: none;
                }
                .mobile {
                    display: block;
                }
            }
        `
    ];

    firstUpdated() {
        setupRouter(this.shadowRoot.querySelector('vaadin-app-layout'));
    }

    render = () => html`
        <vaadin-app-layout>
            <vaadin-tabs
                slot="navbar touch-optimized"
                theme="equal-width-tabs minimal"
                selected="2"
            >
                <vaadin-tab @click="${() => Router.go('/team')}">
                    <span class="txt">
                        <i-con name="users" color="#ddd" no-hover pointer></i-con>&nbsp;
                        Meet the team
                    </span>
                    <span class="mobile">
                        Team
                    </span>
                </vaadin-tab>
                <vaadin-tab @click="${() => Router.go('/join')}">
                    <span class="txt">
                        <i-con name="profile" color="#ddd" no-hover pointer></i-con>&nbsp;
                        Become a member
                    </span>
                    <span class="mobile">
                        Pricing
                    </span>
                </vaadin-tab>
                <vaadin-tab @click="${() => Router.go('/')}">
                    <img src="../img/logo.jpg" width="60px" height="47px">
                </vaadin-tab>
                <vaadin-tab @click="${() => Router.go('/photos')}">
                    <span class="txt">
                        <i-con name="imgMultiple" color="#ddd" no-hover pointer></i-con>&nbsp;
                    </span>
                    Photos
                </vaadin-tab>
                <vaadin-tab @click="${() => Router.go('/schedule')}">
                    <span class="txt">
                        <i-con name="event" color="#ddd" no-hover pointer></i-con>&nbsp;
                    </span>
                    Schedule
                </vaadin-tab>
            </vaadin-tabs>

            <!-- router will put main content here -->
        </vaadin-app-layout>
    `;
}

customElements.define('app-shell', AppShell);
