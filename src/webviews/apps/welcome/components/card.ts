import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { focusOutline } from './a11y.css';
import { elementBase } from './base.css';

@customElement('gk-card')
export class GKCard extends LitElement {
	static override styles = [
		elementBase,
		css`
			:host {
				display: block;
				padding: 1.6rem;
				background-color: var(--gk-card-background);
				border-radius: var(--gk-card-radius);
			}

			:host([tabindex]:not([tabindex='-1'])) {
				cursor: pointer;
			}

			:host([tabindex]:not([tabindex='-1']):hover) {
				background-color: var(--gk-card-hover-background);
			}

			:host([tabindex]:not([tabindex='-1']):focus) {
				${focusOutline}
			}

			.header {
			}

			slot[name='header']::slotted(*) {
				margin-top: 0 !important;
				margin-bottom: 0 !important;
			}

			.content {
				margin-top: 0.4rem;
			}

			/*
			slot:not([name])::slotted(:first-child) {
				margin-top: 0;
			}
			slot:not([name])::slotted(:last-child) {
				margin-bottom: 0;
			} */
		`,
	];

	override render() {
		return html`
			<div class="header">
				<slot name="header"></slot>
			</div>
			<div class="content">
				<slot></slot>
			</div>
		`;
	}
}
