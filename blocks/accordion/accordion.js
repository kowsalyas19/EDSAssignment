/*
 * Accordion Block
 * Recreate an accordion
 * https://www.hlx.live/developer/block-collection/accordion
 */

export default function decorate(block) {
    [...block.children].forEach((row) => {
        // decorate accordion item label
        const label = row.children[0];
        const summary = document.createElement('summary');
        summary.className = 'accordion-item-label';
        summary.append(...label.childNodes);
        // decorate accordion item body
        const body = row.children[1];
        body.className = 'accordion-item-body';
        // decorate accordion item
        const details = document.createElement('details');
        details.className = 'accordion-item';
        details.append(summary, body);
        row.replaceWith(details);
    });
}

const target1 = document.querySelector("#tabpanel-marketing-media");
const tab1 = document.querySelector(".marketing-media");
if (target1 && tab1) {
    target1.append(tab1);
}
const target2 = document.querySelector("#tabpanel-content-marketing");
const tab2 = document.querySelector(".content-marketing");
if (target2 && tab2) {
    target2.append(tab2);
}
const target3 = document.querySelector("#tabpanel-social-marketing");
const tab3 = document.querySelector(".social-marketing");
if (target3 && tab3) {
    target3.append(tab3);
}
const target4 = document.querySelector("#tabpanel-marketing-growth");
const tab4 = document.querySelector(".marketing-growth");
if (target4 && tab4) {
    target4.append(tab4);
}
const target5 = document.querySelector("#tabpanel-customer-support");
const tab5 = document.querySelector(".customer-support");
if (target5 && tab5) {
    target5.append(tab5);
}

