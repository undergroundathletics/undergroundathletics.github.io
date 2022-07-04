import {css, html, LitElement} from 'lit';
import sharedStyles from '../styles/shared-styles';
import '../styles/vaadin-overrides';
import '@vaadin/app-layout';
//import '@vaadin/app-layout/vaadin-drawer-toggle';
import '@vaadin/tabs';
import {Router} from '@vaadin/router';
import {setupRouter} from '../js/router';

class AppShell extends LitElement {
    static styles = [
        sharedStyles,
        css`
            vaadin-tabs {
                margin: auto;
                background: var(--default-primary-color);
            }
        `
    ];

    firstUpdated() {
        setupRouter(this.shadowRoot.querySelector('vaadin-app-layout'));
    }

    render = () => html`
        <vaadin-app-layout>
            <!-- <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle> -->

            <vaadin-tabs
                slot="navbar touch-optimized"
                theme="equal-width-tabs minimal"
                selected="2"
            >
                <vaadin-tab @click="${() => Router.go('/team')}">
                    Meet the team
                </vaadin-tab>
                <vaadin-tab @click="${() => Router.go('/join')}">
                    Become a member
                </vaadin-tab>
                <vaadin-tab @click="${() => Router.go('/')}">
                    <img src="../img/logo.jpg" width="60px" height="47px">
                </vaadin-tab>
                <vaadin-tab @click="${() => Router.go('/photos')}">
                    Photos
                </vaadin-tab>
                <vaadin-tab @click="${() => Router.go('/schedule')}">
                    Schedule
                </vaadin-tab>
            </vaadin-tabs>

            <!-- router will put main content here -->
        </vaadin-app-layout>
    `;
}

customElements.define('app-shell', AppShell);
