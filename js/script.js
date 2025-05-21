const ClassCtrl = {
    remove(el) {
        if (el?.classList) el.classList.remove('active');
    },
    add(el) {
        if (el?.classList) el.classList.add('active');
    },
    arrRemove(el) {
        el.forEach(this.remove);
    },
    arrAdd(el) {
        el.forEach(this.add);
    },
    toggle(el) {
        el.classList.toggle('active');
    },
    removeAll(el) {
        const elements = typeof el === 'string'
            ? document.querySelectorAll(el)
            : el;
        elements.forEach(this.remove);
    }
};

const NavCtrl = {
    showNav(e) {
        const navLi = document.querySelectorAll('.nav_li');
        const navInner = e.nextElementSibling;
        const navInnerTarget = document.querySelectorAll('.nav_inner');
        const nav_sub_li = document.querySelectorAll('.nav_sub_li');

        if (e.parentElement.classList.contains('active')) {
            document.querySelector('body').classList.remove('active');
            ClassCtrl.arrRemove([e.parentElement, navInner]);
        } else {
            ClassCtrl.arrRemove(navLi);
            ClassCtrl.arrRemove(navInnerTarget);
            ClassCtrl.arrAdd([navInner, e.parentElement]);
            document.querySelector('body').classList.add('active');
            const firstSub = navInner.querySelector('.nav_sub_li');
            if (firstSub) {
                ClassCtrl.removeAll(nav_sub_li);
                firstSub.classList.add('active');
            }
            const navSub = navInner.querySelector('.nav_sub');
            if (navSub) {
                navInner.style.height = `${navSub.clientHeight}px`;
                navInner.style.minHeight = (document.querySelectorAll('.nav_inner.active .nav_sub_li').length * 55) + 50 + 'px';
            }
        }
        NavCtrl.check();
    },
    inner(e) {
        const navInner = e.nextElementSibling;
        ClassCtrl.removeAll('.nav_sub_li');
        ClassCtrl.arrAdd([navInner, e.parentElement]);
        NavCtrl.check();
    },
    check() {
        document.querySelectorAll('.check_selected').forEach(el => {
            el.setAttribute('aria-expanded', el.classList.contains('active') ? 'true' : 'false');
        });
    }
};

const DomSiblings = {
    getSiblings(el) {
        return Array.from(el?.parentElement?.children || []).filter(child => child !== el);
    },
    getNextSiblings(el) {
        let siblings = [], next = el?.nextElementSibling;
        while (next) {
            siblings.push(next);
            next = next.nextElementSibling;
        }
        return siblings;
    },
    getPrevSiblings(el) {
        let siblings = [], prev = el?.previousElementSibling;
        while (prev) {
            siblings.unshift(prev);
            prev = prev.previousElementSibling;
        }
        return siblings;
    },
    getSiblingIndex(el) {
        return Array.from(el?.parentElement?.children || []).indexOf(el);
    },
    getSiblingsBySelector(el, selector) {
        return this.getSiblings(el).filter(sibling => sibling.matches(selector));
    }
};

const zoomCtrl = (value) => {
    document.body.style.zoom = value + "%";
}


const mobileNavShow = (e) => {
    document.querySelectorAll('.mobile_nav_btn').forEach(el => {
        el.classList.remove('active');
    });
    e.classList.add('active');
}
const sections = [
    'navContent01',
    'navContent02',
    'navContent03',
    'navContent04',
    'navContent05'
];
const element = document.querySelector("div#mobileNavList");
element?.addEventListener("scroll", (e) => {
    const navButtons = document.getElementsByClassName('mobile_nav_btn');
    if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
        Array.from(navButtons).forEach(btn => btn.classList.remove('active'));
        navButtons[4].classList.add('active');
    } else {
        sections.forEach((id, idx) => {
            const target = document.getElementById(id);
            const relativeTop = target.getBoundingClientRect().top - 100;
            if (relativeTop < 100) {
                Array.from(navButtons).forEach(btn => btn.classList.remove('active'));
                if (navButtons[idx]) {
                    navButtons[idx].classList.add('active');
                }
            }
        });
    }
});


Disclosure();
function Disclosure() {
    const accBtn = document.querySelectorAll('.toggle_title:not(.accordion_wrap .toggle_title)');

    accBtn.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isOpen = content.style.maxHeight;
            content.style.maxHeight = isOpen ? null : content.scrollHeight + 'px';
            this.classList.toggle('active', !isOpen);
        });
    });
}
accOtherSlide();
function accOtherSlide() {
    const accBtn = document.querySelectorAll('.accordion_wrap .toggle_title');

    accBtn.forEach(button => {
        button.addEventListener('click', function () {
            const thisContent = this.nextElementSibling;

            accBtn.forEach(otherButton => {
                const otherContent = otherButton.nextElementSibling;
                if (otherButton !== this) {
                    otherContent.style.maxHeight = null;
                    otherButton.classList.remove('active');
                }
            });
            const isOpen = thisContent.style.maxHeight;
            thisContent.style.maxHeight = isOpen ? null : thisContent.scrollHeight + 'px';
            this.classList.toggle('active', !isOpen);
        });
    });
}


const modalCtrl = {
    open: (e) => {
        const targetSelector = e.getAttribute('data-target');
        const modalTarget = document.querySelector(targetSelector);
        if (!modalTarget) return;
        ClassCtrl.add(modalTarget);
        document.body.style.overflow = "hidden";
        const closeBtn = modalTarget.querySelector('#closeBtn');
        const modalFootLastBtn = modalTarget.querySelector('.modal_foot')?.lastElementChild;
        if (closeBtn) closeBtn.focus();
        if (modalFootLastBtn) {
            modalFootLastBtn.onblur = () => {
                if (closeBtn) closeBtn.focus();
            };
        }
    },

    close: (e) => {
        const allModals = document.querySelectorAll('.modal_wrap');
        allModals.forEach(modal => ClassCtrl.remove(modal));

        document.body.style.overflow = "auto";

        const modalId = e.closest('.modal_wrap')?.id;
        if (!modalId) return;

        const buttons = document.querySelectorAll('button');
        buttons.forEach(btn => {
            const target = btn.getAttribute('data-target');
            if (target && target.replace('#', '') === modalId) {
                btn.focus();
            }
        });
    },
};


const SwiperCtrl = (target, opt) => {
    new Swiper(target, opt);
}


const tabCtrl = (e, idx) => {
    const tabParent = e.parentElement.parentElement, tabLi = tabParent.querySelectorAll('.nav_li'),
        tabContent = tabParent.querySelectorAll('.tab_content');
    for (const i of tabLi) {
        i.classList.remove('active')
        i.setAttribute('aria-selected', 'false');
    };
    for (const i of tabContent) {
        i.classList.remove('active')
        i.setAttribute('aria-selected', 'false');
    };

    tabLi[idx].classList.add('active');
    tabLi[idx].setAttribute('aria-selected', 'true');
    tabContent[idx].setAttribute('aria-selected', 'true');
    tabContent[idx].classList.add('active');
}

const expandTable = (e) => {
    e.nextSibling.nextSibling.classList.toggle('active');
}

OpenContext();
function OpenContext() {
    const accBtn = document.querySelectorAll('.btn_context');

    accBtn.forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.contextual_content.active').forEach(content => {
                content.classList.remove('active');
            });

            const content = this.nextElementSibling;
            if (content) content.classList.toggle('active');
        });
    });

    document.addEventListener('click', function (e) {
        if (e.target.closest('.btn_context') || e.target.closest('.contextual_content')) {
            return;
        }
        document.querySelectorAll('.contextual_content.active').forEach(content => {
            content.classList.remove('active');
        });
    });

}
