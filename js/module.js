// tooltip 모듈화
class TooltipManager {
    constructor() {
        this.tooltipElem = null;
        this.init();
    }

    init() {
        document.addEventListener('mouseover', this.handleMouseOver.bind(this));
        document.addEventListener('mouseout', this.handleMouseOut.bind(this));
        document.addEventListener('focusin', this.handleFocus.bind(this));
        document.addEventListener('focusout', this.handleBlur.bind(this));
    }

    handleMouseOver(event) {
        const target = this.getTooltipTarget(event.target);
        if (target) this.showTooltip(target, target.dataset.tooltip);
    }

    handleMouseOut(event) {
        if (this.tooltipElem) this.hideTooltip();
    }

    handleFocus(event) {
        const target = this.getTooltipTarget(event.target);
        if (target) this.showTooltip(target, target.dataset.tooltip);
    }

    handleBlur(event) {
        if (this.tooltipElem) this.hideTooltip();
    }

    getTooltipTarget(element) {
        return element.closest('[data-tooltip]');
    }

    showTooltip(target, text) {
        if (!text) return;

        this.tooltipElem = document.createElement('div');
        this.tooltipElem.className = 'tooltip';
        this.tooltipElem.innerHTML = text;
        document.body.append(this.tooltipElem);

        const coords = target.getBoundingClientRect();
        let left = coords.left + (target.offsetWidth - this.tooltipElem.offsetWidth) / 2;
        left = Math.max(left, 0);
        let top = coords.top - this.tooltipElem.offsetHeight - 15;
        if (top < 0) top = coords.top + target.offsetHeight + 15;
        this.tooltipElem.style.left = `${left}px`;
        this.tooltipElem.style.top = `${top}px`;
    }

    hideTooltip() {
        this.tooltipElem.remove();
        this.tooltipElem = null;
    }
}

new TooltipManager();
