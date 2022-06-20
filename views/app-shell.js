import {html, LitElement} from 'lit';
import '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle';
import '@vaadin/tabs';
import {Router} from '@vaadin/router';
import {setupRouter} from '../js/router';

class AppShell extends LitElement {
    createRenderRoot() {
        return this;
    }

    firstUpdated() {
        setupRouter(this.querySelector('vaadin-app-layout'));
    }

    render = () => html`
        <vaadin-app-layout primary-section="drawer">
            <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>

            <vaadin-tabs
                slot="drawer"
                orientation="vertical"
            >
                <vaadin-tab @click="${() => Router.go('/')}">
                    Home
                </vaadin-tab>
                <vaadin-tab @click="${() => Router.go('/team')}">
                    Meet the team
                </vaadin-tab>
                <vaadin-tab @click="${() => Router.go('/join')}">
                    Become a member
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
