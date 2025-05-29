const NavArr = [
    {
        title: '컴포넌트',
        sub: [
            {
                title: '레이아웃 및 표현',
                sub: [
                    {
                        title: '구조화 목록',
                        href: '/component/list01_01.html',
                        sub: null
                    },
                    {
                        title: '긴급 공지',
                        href: '/component/list01_02.html',
                        sub: null
                    },
                    {
                        title: '달력',
                        href: '/component/list01_03.html',
                        sub: null
                    },
                    {
                        title: '디스클로저',
                        href: '/component/list01_04.html',
                        sub: null
                    }
                ]
            },
            {
                title: '레이아웃 및 표현',
                sub: [
                    {
                        title: '모달',
                        href: '/component/list01_05.html',
                        sub: null
                    },
                    {
                        title: '버튼 및 링크',
                        href: '/component/list01_06.html',
                        sub: null
                    },
                    {
                        title: '아코디언',
                        href: '/component/list01_07.html',
                        sub: null
                    },
                    {
                        title: '캐러셀',
                        href: '/component/list01_08.html',
                        sub: null
                    }
                ]
            }
            ,
            {
                title: '레이아웃 및 표현',
                sub: [
                    {
                        title: '탭',
                        href: '/component/list01_09.html',
                        sub: null
                    },
                    {
                        title: '표',
                        href: '/component/list01_10.html',
                        sub: null
                    },
                    {
                        title: '텍스트 목록',
                        href: '/component/list01_11.html',
                        sub: null
                    },
                    {
                        title: '단계 표시기',
                        href: '/component/list01_12.html',
                        sub: null
                    },
                    {
                        title: '툴팁 및 코치마크',
                        href: '/component/list01_13.html',
                        sub: null
                    },
                    {
                        title: 'Input',
                        href: '/component/list01_14.html',
                        sub: null
                    },
                    {
                        title: '페이징',
                        href: '/component/list01_15.html',
                        sub: null
                    }
                ]
            }
        ]
    },
    {
        title: '차트',
        sub: [
            {
                title: '차트',
                sub: [
                    {
                        title: 'ChartJS',
                        href: '/chart/list01_01.html',
                        sub: null
                    },
                    {
                        title: 'Apex',
                        href: '/chart/list01_02.html',
                        sub: null
                    }
                ]
            }
        ]
    },
    {
        title: '게시판',
        sub: [
            {
                title: '리스트형',
                sub: [
                    {
                        title: 'list01',
                        href: '/bbs/list01_01.html',
                        sub: null
                    },
                    {
                        title: 'list02',
                        href: '/bbs/list01_02.html',
                        sub: null
                    },
                    {
                        title: 'list03',
                        href: '/bbs/list01_03.html',
                        sub: null
                    },
                    {
                        title: 'list04',
                        href: '/bbs/list01_04.html',
                        sub: null
                    },
                    {
                        title: 'list05',
                        href: '/bbs/list01_05.html',
                        sub: null
                    },
                ]
            },
            {
                title: '썸네일형',
                sub: [
                    {
                        title: 'thumb01',
                        href: '/bbs/list02_01.html',
                        sub: null
                    },
                    {
                        title: 'thumb02',
                        href: '/bbs/list02_02.html',
                        sub: null
                    },
                    {
                        title: 'thumb03',
                        href: '/bbs/list02_03.html',
                        sub: null
                    },
                ]
            },
            {
                title: 'FAQ',
                sub: [
                    {
                        title: 'faq01',
                        href: '/bbs/list03_01.html',
                        sub: null
                    }
                ]
            },
            {
                title: 'View',
                sub: [
                    {
                        title: 'view01',
                        href: '/bbs/list04_01.html',
                        sub: null
                    },
                    {
                        title: 'view02',
                        href: '/bbs/list04_02.html',
                        sub: null
                    },
                    {
                        title: 'view03',
                        href: '/bbs/list04_03.html',
                        sub: null
                    }
                ]
            },
            {
                title: 'NAVER',
                sub: null,
                href: 'http://naver.com'
            },
        ]
    }
];

const headerSet = (cls) => {
    document.getElementById('headerPc').className = cls;
    let headerPc = ``;
    if (cls == 'type_krds') {
        headerPc += `<div class="inner">
            <div class="header_top">
                <div class="header_ctrl" id="changeLang">
                    <a href="#;" onclick="ClassCtrl.toggle(this.parentElement); ClassCtrl.removeAll('#settingView'); ">
                        <img src="/img/common/ico_global.svg" alt=""> Language <img src="/img/common/ico_angle.svg"
                            alt="">
                    </a>
                    <ul>
                        <li><a href="#;" onclick="ClassCtrl.removeAll('#changeLang');" class="hover_lan">한국어</a></li>
                        <li><a href="#;" onclick="ClassCtrl.removeAll('#changeLang')" class="hover_lan">English (영어)</a>
                        </li>
                    </ul>
                </div>
                <div class="header_ctrl" id="settingView">
                    <a href="#;" onclick="ClassCtrl.toggle(this.parentElement); ClassCtrl.removeAll('#changeLang')">
                        <img src="/img/common/ico_view_mode.svg" alt=""> 글자/화면 설정
                    </a>
                    <ul>
                        <li><a href="#;" class="hover_lan" onclick="zoomCtrl(90)">작게</a></li>
                        <li><a href="#;" class="hover_lan" onclick="zoomCtrl(100)">보통</a></li>
                        <li><a href="#;" class="hover_lan" onclick="zoomCtrl(110)">조금 크게</a></li>
                        <li><a href="#;" class="hover_lan" onclick="zoomCtrl(120)">크게</a></li>
                        <li><a href="#;" class="hover_lan" onclick="zoomCtrl(130)">가장 크게</a></li>
                    </ul>
                </div>
            </div>
            <div class="header_middle flex">
                <h1>
                    <a href="/"><img src="/img/common/ico_logo_krds.svg" alt=""></a>
                </h1>
                <div class="header_actions">
                    <button>
                        <span><img src="/img/common/ico_sch.svg" alt=""></span>
                        통합검색
                    </button>
                    <a href="/member/login.html">
                        <span><img src="/img/common/ico_login.svg" alt=""></span>
                        로그인
                    </a>
                    <a href="#;">
                        <span><img src="/img/common/ico_join.svg" alt=""></span>
                        회원가입
                    </a>
                    <button>
                        <span><img src="/img/common/ico_my.svg" alt=""></span>
                        마이페이지
                    </button>
                </div>
            </div>
        </div>
        <nav>
            <div class="inner">
                <ul id="nav">`;
        for (let i of NavArr) {
            headerPc += `
                    <li class="nav_li depth_list check_selected">
                        <button class="hover_btn" onclick="NavCtrl.showNav(this)">${i.title}
                            <span><img src="/img/common/ico_angle.svg" alt=""></span>
                        </button>
                        <div class="nav_inner">
                            <ul>`;
            for (let j of i.sub) {
                if (j.sub != null) {
                    headerPc += `
                                <li class="nav_sub_li check_selected">
                                    <a href="#;" onclick="NavCtrl.inner(this)">${j.title}<span class="trans"><img src="/img/common/ico_angle.svg" alt=""></span></a>
                                    <div class="nav_sub">
                                        <h3>${j.title}</h3>
                                        <ol>`;
                    for (let k of j.sub) {
                        headerPc += `<li><a href="${k.href}" class="sub_title_txt">${k.title}</a></li>`;
                    }
                } else {
                    headerPc += `<li class="nav_sub_li check_selected"><a href="${j.href}">${j.title}</a></li>`;
                }
                headerPc += `</ol>
                                    </div>
                                </li>`;
            }
            headerPc += `</ul>
                        </div>
                    </li>`;
        }
        headerPc += `</ul>`;
    }

    if (cls == 'type_nav01') {
        headerPc += `<h1><a href="/"><img src="/img/common/ico_logo_krds.svg" alt=""></a></h1>
        <ul style="--length:6">`

        for (let i of NavArr) {
            headerPc += `<li>
                <a href="#;">${i.title}</a>
                <ol>`
            for (j of i.sub) {
                if (j.sub != null) {
                    headerPc += `<li class="has_sub">
                    <a href="#;" class="sub_title_txt">${j.title}<i class="fa-solid fa-angle-right"></i></a>
                    <ul>`;
                    for (k of j.sub) {
                        headerPc += `<li><a href="${k.href}" class="sub_title_txt">${k.title}</a></li>`;
                    }
                    headerPc += `</ul>`;
                } else {
                    headerPc += `<li><a href="${j.href}">${j.title}</a></li>`;
                }
            }
            headerPc += `</li>`;
            headerPc += `</ol>
            </li>`
        }
        headerPc += `
        </ul>

        <div class="header_top">
            <div class="header_ctrl" id="changeLang">
                <a href="#;" onclick="ClassCtrl.toggle(this.parentElement); ClassCtrl.removeAll('#settingView'); ">
                    <img src="/img/common/ico_global.svg" alt=""> Language <img src="/img/common/ico_angle.svg" alt="">
                </a>
                <ul>
                    <li><a href="#;" onclick="ClassCtrl.removeAll('#changeLang');" class="hover_lan">한국어</a>
                    </li>
                    <li><a href="#;" onclick="ClassCtrl.removeAll('#changeLang')" class="hover_lan">English
                            (영어)</a>
                    </li>
                </ul>
            </div>
            <div class="header_ctrl" id="settingView">
                <a href="#;" onclick="ClassCtrl.toggle(this.parentElement); ClassCtrl.removeAll('#changeLang')">
                    <img src="/img/common/ico_view_mode.svg" alt=""> 글자/화면 설정
                </a>
                <ul>
                    <li><a href="#;" class="hover_lan" onclick="zoomCtrl(90)">작게</a></li>
                    <li><a href="#;" class="hover_lan" onclick="zoomCtrl(100)">보통</a></li>
                    <li><a href="#;" class="hover_lan" onclick="zoomCtrl(110)">조금 크게</a></li>
                    <li><a href="#;" class="hover_lan" onclick="zoomCtrl(120)">크게</a></li>
                    <li><a href="#;" class="hover_lan" onclick="zoomCtrl(130)">가장 크게</a></li>
                </ul>
            </div>
        </div>`;
    }
    if (cls == 'type_nav02') {
        headerPc += `<h1><a href="/"><img src="/img/common/ico_logo_krds.svg" alt=""></a></h1>
        <ul style="--length:6">`

        for (let i of NavArr) {
            headerPc += `<li>
                <a href="#;">${i.title}</a>
                <ol>`
            for (j of i.sub) {
                if (j.sub != null) {
                    headerPc += `<li class="has_sub">
                    <a href="#;" class="sub_title_txt">${j.title}<i class="fa-solid fa-angle-right"></i></a>
                    <ul>`;
                    for (k of j.sub) {
                        headerPc += `<li><a href="${k.href}" class="sub_title_txt">${k.title}</a></li>`;
                    }
                    headerPc += `</ul>`;
                } else {
                    headerPc += `<li><a href="${j.href}">${j.title}</a></li>`;
                }
            }
            headerPc += `</li>`;
            headerPc += `</ol>
            </li>`
        }
        headerPc += `
        </ul>

        <div class="header_top">
            <div class="header_ctrl" id="changeLang">
                <a href="#;" onclick="ClassCtrl.toggle(this.parentElement); ClassCtrl.removeAll('#settingView'); ">
                    <img src="/img/common/ico_global.svg" alt=""> Language <img src="/img/common/ico_angle.svg" alt="">
                </a>
                <ul>
                    <li><a href="#;" onclick="ClassCtrl.removeAll('#changeLang');" class="hover_lan">한국어</a>
                    </li>
                    <li><a href="#;" onclick="ClassCtrl.removeAll('#changeLang')" class="hover_lan">English
                            (영어)</a>
                    </li>
                </ul>
            </div>
            <div class="header_ctrl" id="settingView">
                <a href="#;" onclick="ClassCtrl.toggle(this.parentElement); ClassCtrl.removeAll('#changeLang')">
                    <img src="/img/common/ico_view_mode.svg" alt=""> 글자/화면 설정
                </a>
                <ul>
                    <li><a href="#;" class="hover_lan" onclick="zoomCtrl(90)">작게</a></li>
                    <li><a href="#;" class="hover_lan" onclick="zoomCtrl(100)">보통</a></li>
                    <li><a href="#;" class="hover_lan" onclick="zoomCtrl(110)">조금 크게</a></li>
                    <li><a href="#;" class="hover_lan" onclick="zoomCtrl(120)">크게</a></li>
                    <li><a href="#;" class="hover_lan" onclick="zoomCtrl(130)">가장 크게</a></li>
                </ul>
            </div>
        </div>`;
    }

    document.getElementById('headerPc').innerHTML = headerPc;
}
headerSet('type_krds');

function typeNavSlide() {
    const accButtons = document.querySelectorAll('.has_sub');

    accButtons.forEach(button => {
        const content = button.children[0].nextElementSibling;
        const openContent = () => {
            content.style.maxHeight = `${content.scrollHeight}px`;
            button.classList.add('active');
        };

        const closeContent = () => {
            content.style.maxHeight = '0';
            button.classList.remove('active');
        };

        button.addEventListener('mouseenter', openContent);
        button.addEventListener('mouseleave', closeContent);
    });
}

let headerMobile = `<div class="header_middle flex">
            <h1>
                <a href="/"><img src="/img/common/ico_logo_krds.svg" alt=""></a>
            </h1>
            <div class="header_actions">
                <button>
                    <span><img src="/img/common/ico_sch.svg" alt=""></span>
                    통합검색
                </button>
                <a href="#;">
                    <span><img src="/img/common/ico_join.svg" alt=""></span>
                    회원가입
                </a>
                <button onclick="ClassCtrl.add(document.getElementById('headerMobile'))">
                    <span><img src="/img/common/ico_all.svg" alt=""></span>
                    전체메뉴
                </button>
            </div>
        </div>
        <div id="mobileNav">
            <div class="inner">
                <div class="header_top">
                    <div class="header_ctrl" id="changeLang">
                        <a href="#;"
                            onclick="ClassCtrl.toggle(this.parentElement); ClassCtrl.removeAll('#settingView'); ">
                            <img src="/img/common/ico_global.svg" alt=""> Language <img src="/img/common/ico_angle.svg"
                                alt="">
                        </a>
                        <ul>
                            <li><a href="#;" onclick="ClassCtrl.removeAll('#changeLang');" class="hover_lan">한국어</a>
                            </li>
                            <li><a href="#;" onclick="ClassCtrl.removeAll('#changeLang')" class="hover_lan">English
                                    (영어)</a>
                            </li>
                        </ul>
                    </div>
                    <div class="header_ctrl" id="settingView">
                        <a href="#;" onclick="ClassCtrl.toggle(this.parentElement); ClassCtrl.removeAll('#changeLang')">
                            <img src="/img/common/ico_view_mode.svg" alt=""> 글자/화면 설정
                        </a>
                        <ul>
                            <li><a href="#;" class="hover_lan" onclick="zoomCtrl(90)">작게</a></li>
                            <li><a href="#;" class="hover_lan" onclick="zoomCtrl(100)">보통</a></li>
                            <li><a href="#;" class="hover_lan" onclick="zoomCtrl(110)">조금 크게</a></li>
                            <li><a href="#;" class="hover_lan" onclick="zoomCtrl(120)">크게</a></li>
                            <li><a href="#;" class="hover_lan" onclick="zoomCtrl(130)">가장 크게</a></li>
                        </ul>
                    </div>
                </div>
                <p class="login_wrap">
                    <a href="#;">
                        <img src="/img/common/ico_login.svg" alt="">
                        로그인을 해주세요.
                    </a>
                </p>
                <nav>
                    <div class="mobile_nav">
                        <ul>
                            <li><a href="#navContent01" class="mobile_nav_btn" onclick="mobileNavShow(this)">title01</a>
                            </li>
                            <li><a href="#navContent02" class="mobile_nav_btn" onclick="mobileNavShow(this)">title02</a>
                            </li>
                            <li><a href="#navContent03" class="mobile_nav_btn" onclick="mobileNavShow(this)">title03</a>
                            </li>
                            <li><a href="#navContent04" class="mobile_nav_btn" onclick="mobileNavShow(this)">title04</a>
                            </li>
                            <li><a href="#navContent05" class="mobile_nav_btn" onclick="mobileNavShow(this)">title05</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mobile_nav_list" id="mobileNavList">
                        <div id="navContent01">
                            <h2>title01</h2>
                            <ul>
                                <li><a href="#;" class="hover_list">title01</a></li>
                                <li><a href="#;" class="hover_list">title01</a></li>
                                <li><a href="#;" class="hover_list">title01</a></li>
                                <li><a href="#;" class="hover_list">title01</a></li>
                            </ul>
                        </div>
                        <div id="navContent02">
                            <h2>title02</h2>
                            <ul>
                                <li class="has_sub">
                                <a href="#;" class="hover_list ">title02 <span><img src="/img/common/ico_angle.svg" /></span></a>
                                <ol>
                                    <li><a href="#;">title02-01</a></li>
                                    <li><a href="#;">title02-02</a></li>
                                </ol>
                                </li>
                                <li><a href="#;" class="hover_list">title02</a></li>
                                <li><a href="#;" class="hover_list">title02</a></li>
                                <li><a href="#;" class="hover_list">title02</a></li>
                            </ul>
                        </div>
                        <div id="navContent03">
                            <h2>title03</h2>
                            <ul>
                                <li><a href="#;" class="hover_list">title03</a></li>
                                <li><a href="#;" class="hover_list">title03</a></li>
                                <li><a href="#;" class="hover_list">title03</a></li>
                                <li><a href="#;" class="hover_list">title03</a></li>
                            </ul>
                        </div>
                        <div id="navContent04">
                            <h2>title04</h2>
                            <ul>
                                <li><a href="#;" class="hover_list">title04</a></li>
                                <li><a href="#;" class="hover_list">title04</a></li>
                                <li><a href="#;" class="hover_list">title04</a></li>
                                <li><a href="#;" class="hover_list">title04</a></li>
                            </ul>
                        </div>
                        <div id="navContent05">
                            <h2>title05</h2>
                            <ul>
                                <li><a href="#;" class="hover_list">title05</a></li>
                                <li><a href="#;" class="hover_list">title05</a></li>
                                <li><a href="#;" class="hover_list">title05</a></li>
                                <li><a href="#;" class="hover_list">title05</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <button id="navClose" onclick="ClassCtrl.remove(document.getElementById('headerMobile'))"><img src="/img/common/ico_close.svg" alt=""></button>
            </div>
        </div>`;

document.getElementById('headerMobile').innerHTML = headerMobile;


let footerTxt = `<div class="footer_link">
            <div class="inner">
                <a href="#;">메뉴1 <span><img src="/img/common/ico_plus.svg" alt=""></span></a>
                <a href="#;">메뉴1 <span><img src="/img/common/ico_plus.svg" alt=""></span></a>
                <a href="#;">메뉴1 <span><img src="/img/common/ico_plus.svg" alt=""></span></a>
            </div>
        </div>
        <div class="inner">
            <div class="footer_top flex">
                <div>
                    <h1>
                        <a href="/"><img src="/img/common/ico_logo_krds.svg" alt=""></a>
                    </h1>
                    <p>(04383) 서울특별시 용산구 이태원로 22</p>
                    <p><strong>대표전화</strong>1234-5678</p>
                    <p><strong>FAX</strong>+82 1234-5678</p>
                </div>
                <div>
                    <a href="#;">이용안내</a>
                    <a href="#;">찾아오시는 길</a>
                </div>
            </div>
            <div class="footer_btm flex">
                <div>
                    <a href="#;">이용안내</a>
                    <a href="#;">개인정보처리방침</a>
                    <a href="#;">저작권 정책</a>
                </div>
                <div>© 2023 National Health Insurance Service. All rights reserved.The Government of the
                    Republic of
                    Korea. All rights reserved.</div>
            </div>
        </div>
        <div id="optPanel">
            <button id="panelToggle" onclick="document.getElementById('optPanel').classList.toggle('active')">MENU</button>
            <div class="panel_inner">
                <h2>Header Type</h2>
                <select name="" id="headerChange">
                    <option value="type_krds">style 01</option>
                    <option value="type_nav01">style 02</option>
                    <option value="type_nav02">style 03</option>
                </select>
            </div>
        </div>
    `;
document.getElementsByTagName('footer')[0].innerHTML = footerTxt;


let compoNavTxt = ``;
const setNavArr = (arr) => {
    compoNavTxt = ``;
    arr.forEach((e, i) => {
        if (e.sub != null) {
            compoNavTxt += `
            <li class="lnb_item">
                <button class="lnb_toggle  ${i == 0 ? 'active' : ''}">${e.title}</button>
                <div class="lnb_submenu">
                    <ul>
                        `
            for (const j of e.sub) {
                if (j.sub != null) {
                    compoNavTxt += `<li class="lnb_subitem" >`
                    compoNavTxt += `<button class="lnb_toggle_popup">${j.title}</button>
                                    <div class="lnb_submenu_lv2">
                                            <button>${j.title}</button>
                                            <ul>
                                                `
                    for (const k of j.sub) compoNavTxt += `<li><a   href="${k.href}" class="hover_nav">${k.title}</a></li>`
                    compoNavTxt += `</ul>
                                        </div>
                                    <ul>`
                    compoNavTxt += `</li>`
                } else {
                    compoNavTxt += `<li class="lnb_subitem">`
                    compoNavTxt += `<a href="${j.href}" class="hover_nav sub_title_txt ">${j.title}</a>`;
                    compoNavTxt += `</li>`
                }
            }
        } else {
            compoNavTxt += `<li class="lnb_item">`
            compoNavTxt += `<a href="${e.href}" class="sub_title_txt">${e.title}</a>`;
            compoNavTxt += `</li>`
        }
        compoNavTxt += `
                    </ul>
                </div>
            </li>
        `;
    });
    document.getElementById('sideNav').innerHTML = compoNavTxt;
}



function SideCtrl() {
    const sideNav = document.getElementById('sideNav');
    if (sideNav !== null) {
        const pathname = window.location.pathname.split('/')[1];
        const subTitle = document.getElementById('subTitle');
        switch (pathname) {
            case "component":
                setNavArr(NavArr[0].sub);
                subTitle.innerHTML = NavArr[0].title;
                break;
            case "chart":
                setNavArr(NavArr[1].sub);
                subTitle.innerHTML = NavArr[1].title;
                break;
            case "bbs":
                setNavArr(NavArr[2].sub);
                subTitle.innerHTML = NavArr[2].title;
                break;
            default:
                break;
        }
    }

    const subTitleTxt = document.querySelectorAll('.sub_title_txt');
    const lnbItem = document.querySelectorAll('.lnb_item');
    const lnbToggle = document.querySelectorAll('.lnb_toggle');

    document.addEventListener('DOMContentLoaded', () => {
        lnbToggle.forEach((sub, idx) => {
            sub.addEventListener('click', () => {
                if (sub.classList.contains('active')) {
                    sub.classList.remove('active');
                    lnbItem[idx].classList.remove('active');
                } else {
                    lnbItem.forEach(i => i.classList.remove('active'));
                    lnbToggle.forEach(i => i.classList.remove('active'));
                    lnbItem[idx].classList.add('active');
                    sub.classList.add('active');
                }
            });
        });
    });


    subTitleTxt.forEach((sub, idx) => {
        sub.classList.remove('selected');
        sub.addEventListener('click', (e) => {
            localStorage.setItem('title', sub.innerHTML);
            subTitleTxt.forEach(s => s.classList.remove('selected'));

            document.getElementById('pageTitle').innerHTML = sub.innerHTML;
            document.getElementById('breadTitle').innerHTML = sub.innerHTML;
            sub.classList.add('selected');
        });
        if (sub.innerHTML == localStorage.getItem('title')) {
            sub.classList.add('selected');
            setTimeout(() => {
                const submenu = sub.closest('.lnb_submenu');
                if (submenu) {
                    sub.parentElement?.classList.add('active');
                    submenu.parentElement?.classList.add('active');
                    submenu.previousElementSibling?.classList.add('active');
                }
            }, 500);
        }
    });

    lnbToggle.forEach((e, idx) => {
        e.addEventListener('click', (evt) => {
            evt.currentTarget.parentElement.classList.toggle('active');
        });
    });
}



const breadcrumb = `
    <ol class="breadcrumb">
        <li class="home"><a href="#" class="txt">홈</a></li>
        <li><a href="#" class="txt">컴포넌트</a></li>
        <li><a href="#" class="txt" id="breadTitle">서비스 신청2</a></li>
    </ol>`
    ;
if (document.getElementById('breadcrumb') != undefined) {
    document.getElementById('breadcrumb').innerHTML = breadcrumb;
    document.getElementById('pageTitle').innerHTML = localStorage.getItem('title');
    document.getElementById('breadTitle').innerHTML = localStorage.getItem('title');

}


const selectElement = document.getElementById('headerChange');
selectElement.addEventListener('change', (evt) => {
    headerSet(evt.target.value);
    SideCtrl();
    switch (evt.target.value) {
        case "type_nav01":
            typeNavSlide();
            document.querySelector('body').classList.add('type_padding');
            document.querySelector('body').classList.remove('active');
            break;

        case "type_nav02":
            typeNavSlide();
            document.querySelector('body').classList.add('type_padding');
            document.querySelector('body').classList.remove('active');
            break;

        case "type_krds":
            document.querySelector('body').classList.remove('type_padding');
            break;

        default:
            break;
    }
});
SideCtrl();




















