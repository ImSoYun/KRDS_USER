

let componentArr = [
    {
        title: '레이아웃 및 표현',
        sub: [
            {
                title: '3Depth 예시',
                link: '#;',
                sub: [
                    {
                        title: '3depth',
                        sub: [
                            {
                                title: 'title',
                                link: '#;',
                            }
                        ]
                    },
                    {
                        title: '3depth11',
                        sub: [
                            {
                                title: 'title',
                                link: '#;',
                            }
                        ]
                    },
                ]
            },
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
            },
            {
                title: '모달',
                href: '/component/list01_05.html',
                sub: null
            },
            {
                title: '배지',
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
            },
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
        ]
    },
    {
        title: '액션',
        sub: [
            {
                title: '링크 및 버튼',
                href: '/component/list02_01.html',
                sub: null
            },
            {
                title: 'Input',
                href: '/component/list02_02.html',
                sub: null
            },
        ]
    },
    {
        title: '설정',
        sub: [
            {
                title: '언어 변경',
                href: '/component/list03_01.html',
                sub: null
            },
            {
                title: '화면 크기 조정',
                href: '/component/list03_02.html',
                sub: null
            },
        ]
    }
];


let bbsArr = [
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
        ]
    },
];

const krdsHeader = `
    <header id="krds-header">
        <!-- 헤더 컨텐츠 영역  -->
        <div class="header-in">
            <!-- 헤더 상단 기타메뉴 -->
            <div class="header-container">
                <div class="inner">
                    <div class="header-utility">
                        <ul class="utility-list">
                            <li>
                                <a href="#" class="krds-btn small text" target="_blank" title="새 창 열기">
                                    메뉴명 <i class="svg-icon ico-go"></i>
                                </a>
                            </li>
                            <li>
                                <div class="krds-drop-wrap">
                                    <button type="button" class="krds-btn small text drop-btn">
                                        메뉴명 <i class="svg-icon ico-toggle"></i>
                                    </button>
                                    <div class="drop-menu">
                                        <div class="drop-in">
                                            <ul class="drop-list">
                                                <li><a href="#" class="item-link">메뉴명</a></li>
                                                <li><a href="#" class="item-link">메뉴명</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="krds-drop-wrap krds-resize">
                                    <button type="button" class="krds-btn small text drop-btn">
                                        메뉴명 <i class="svg-icon ico-toggle"></i>
                                    </button>
                                    <div class="drop-menu">
                                        <div class="drop-in">
                                            <ul class="drop-list">
                                                <li><button type="button" class="item-link sm">메뉴명</button></li>
                                                <li><button type="button" class="item-link md active">메뉴명</button></li>
                                                <li><button type="button" class="item-link lg">메뉴명</button></li>
                                                <li><button type="button" class="item-link xlg">메뉴명</button></li>
                                                <li><button type="button" class="item-link xxlg">메뉴명</button></li>
                                            </ul>
                                            <div class="drop-bottom">
                                                <button type="button" class="krds-btn medium text">
                                                    <i class="svg-icon ico-reset"></i> 초기화
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="krds-drop-wrap">
                                    <button type="button" class="krds-btn small text drop-btn">
                                        메뉴명 <i class="svg-icon ico-toggle"></i>
                                    </button>
                                    <div class="drop-menu">
                                        <div class="drop-in">
                                            <ul class="drop-list">
                                                <li><a href="#" class="item-link ico-go" target="_blank"
                                                        title="새 창 열림">메뉴명</a></li>
                                                <li><a href="#" class="item-link ico-go" target="_blank"
                                                        title="새 창 열림">메뉴명</a></li>
                                                <li><a href="#" class="item-link ico-go" target="_blank"
                                                        title="새 창 열림">메뉴명</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="header-branding">
                        <h2 class="logo">
                            <a href="/index.html">
                                <span class="sr-only">KRDS - Korea Design System</span>
                            </a>
                        </h2>
                        <div class="header-actions">
                            <button type="button" class="btn-navi sch" title="통합검색 레이어" onclick="searchCtrl.open()">통합검색</button>

                            <div id="totalSearch">
                                <button class="modal-close" onclick="searchCtrl.close()"><img src="/img/icon/ico_close_48.svg" /></button>
                                <div class="search_inner">
                                    <label for="consult_name22">검색어를 입력해주세요.</label>
                                    <div class="search_input">
                                        <input type="text" id="consult_name22" class="krds-input" placeholder="검색어 입력" value="">
                                        <button><img src="/img/icon/ico_sch_40.svg" /></button>
                                    </div>

                                    <h3>인기검색어</h3>
                                    <ol class="search-list _keywordList"><li><a href="javascript:;">	<span class="txt">test1</span>	<span class="ranking-state up">		<em class="sr-only">상승</em>	</span></a></li><li><a href="javascript:;">	<span class="txt">test1</span>	<span class="ranking-state down">		<em class="sr-only">하락</em>	</span></a></li><li><a href="javascript:;">	<span class="txt">test1</span>	</a></li><li><a href="javascript:;">	<span class="txt">test1</span>	<span class="ranking-state up">		<em class="sr-only">상승</em>	</span></a></li><li><a href="javascript:;">	<span class="txt">test1</span>	<span class="ranking-state up">		<em class="sr-only">상승</em>	</span></a></li><li><a href="javascript:;">	<span class="txt">test1</span>	<span class="ranking-state up">		<em class="sr-only">상승</em>	</span></a></li><li><a href="javascript:;">	<span class="txt">test1</span>	<span class="ranking-state down">		<em class="sr-only">하락</em>	</span></a></li><li><a href="javascript:;">	<span class="txt">test1</span>	<span class="ranking-state same">		<em class="sr-only">동일</em>	</span></a></li><li><a href="javascript:;">	<span class="txt">test1</span>	<span class="ranking-state same">		<em class="sr-only">동일</em>	</span></a></li><li><a href="javascript:;">	<span class="txt">test1</span>	<span class="ranking-state same">		<em class="sr-only">동일</em>	</span></a></li></ol>
                                </div>
                            </div>
                            <a href="/sub/login.html" class="btn-navi login">로그인</a>
                            <a href="/join/index.html" class="btn-navi join">회원가입</a>
                            <div class="krds-drop-wrap my-drop">
                                <button type="button" class="btn-navi my drop-btn">나의 GOV</button>
                                <div class="drop-menu">
                                    <div class="drop-in">
                                        <div class="drop-top">
                                            <p class="my-name">홍길동님</p>
                                            <dl class="my-time">
                                                <dt>로그아웃까지 남은 시간</dt>
                                                <dd>
                                                    <span class="time">12:00</span>
                                                    <button type="button" class="krds-btn medium text">시간 연장</button>
                                                </dd>
                                            </dl>
                                        </div>
                                        <ul class="drop-list">
                                            <li><a href="#" class="item-link">나의 GOV 홈</a></li>
                                            <li><a href="#" class="item-link">나의 신청내역</a></li>
                                            <li><a href="#" class="item-link">나의 생활정보</a></li>
                                            <li><a href="#" class="item-link">나의 정보관리</a></li>
                                        </ul>
                                        <div class="drop-bottom">
                                            <button type="button" class="krds-btn medium text">
                                                <i class="svg-icon ico-logout"></i> 로그아웃
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn-navi all" aria-controls="mobile-nav">전체메뉴</button>
                        </div>
                    </div>
                </div>
            </div>

            
            <!-- //헤더 상단 기타메뉴 -->

            <!-- 메인메뉴 : 데스크탑 -->
            <nav class="krds-main-menu">
                <div class="inner">
                    <ul class="gnb-menu">
                        <li>
                            <button type="button" class="gnb-main-trigger" data-trigger="gnb">컴포넌트</button>
                            <!-- gnb-toggle-wrap -->
                            <div class="gnb-toggle-wrap">
                                <!-- gnb-main-list -->
                                <div class="gnb-main-list" data-has-submenu="true">
                                    <ul>
                                        <li>
                                            <button type="button" class="gnb-sub-trigger"
                                                data-trigger="gnb">레이아웃 및 표현</button>
                                            <!-- gnb-sub-list -->
                                            <div class="gnb-sub-list">
                                                <div class="gnb-sub-content">
                                                    <h2 class="sub-title">
                                                        레이아웃 및 표현
                                                    </h2>
                                                    <ul>
                                                        <li>
                                                            <a href="/component/list01_02.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">긴급 공지</a>
                                                        </li>
                                                        <li>
                                                            <a href="/component/list01_03.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">달력</a>
                                                        </li>
                                                        <li>
                                                            <a href="/component/list01_04.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">디스클로저</a>
                                                        </li>
                                                        <li>
                                                            <a href="/component/list01_05.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">모달</a>
                                                        </li>
                                                        <li>
                                                            <a href="/component/list01_06.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">배지</a>
                                                        </li>
                                                        <li>
                                                            <a href="/component/list01_07.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">아코디언</a>
                                                        </li>
                                                        <li>
                                                            <a href="/component/list01_08.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">캐러셀</a>
                                                        </li>
                                                        <li>
                                                            <a href="/component/list01_09.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">탭</a>
                                                        </li>
                                                        <li>
                                                            <a href="/component/list01_10.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">표</a>
                                                        </li>
                                                        <li>
                                                            <a href="/component/list01_11.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">텍스트 목록</a>
                                                        </li>
                                                        <li>
                                                            <a href="/component/list01_12.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">단계 표시기</a>
                                                        </li>
                                                        <li>
                                                            <a href="/component/list01_13.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">툴팁 및 코치마크</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="gnb-sub-banner">
                                                    <span class="krds-badge bg-primary">신규 서비스</span>
                                                    <button type="button" class="krds-btn medium text">메뉴명 <i
                                                            class="svg-icon ico-angle right"></i></button>
                                                </div>
                                            </div>
                                            <!-- //gnb-sub-list -->
                                        </li>
                                        <li>
                                            <button type="button" class="gnb-sub-trigger"
                                                data-trigger="gnb">액션</button>
                                            <!-- gnb-sub-list -->
                                            <div class="gnb-sub-list between">
                                                <div class="gnb-sub-content">
                                                    <h2 class="sub-title">
                                                        액션
                                                    </h2>
                                                    <ul>
                                                        <li>
                                                            <a href="/component/list02_01.html" class="lnb-btn lnb-link sub_title_txt"
                                                                role="menuitem">링크 및 버튼</a>
                                                        </li>
                                                        <li>
                                                            <a href="/component/list02_02.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">Input</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="gnb-sub-banner">
                                                    <span class="krds-badge bg-primary">신규 서비스</span>
                                                    <button type="button" class="krds-btn medium text">메뉴명 <i
                                                            class="svg-icon ico-angle right"></i></button>
                                                </div>
                                            </div>
                                            <!-- //gnb-sub-list -->
                                        </li>
                                        <li>
                                            <button type="button" class="gnb-sub-trigger"
                                                data-trigger="gnb">설정</button>
                                            <!-- gnb-sub-list -->
                                            <div class="gnb-sub-list between">
                                                <div class="gnb-sub-content">
                                                    <h2 class="sub-title">
                                                        설정
                                                    </h2>
                                                    <ul>
                                                        <li>
                                                            <a href="/component/list03_01.html" class="lnb-btn lnb-link sub_title_txt"
                                                                role="menuitem">언어 변경</a>
                                                        </li>
                                                        <li>
                                                            <a href="/component/list03_02.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">화면 크기 조정</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="gnb-sub-banner">
                                                    <span class="krds-badge bg-primary">신규 서비스</span>
                                                    <button type="button" class="krds-btn medium text">메뉴명 <i
                                                            class="svg-icon ico-angle right"></i></button>
                                                </div>
                                            </div>
                                            <!-- //gnb-sub-list -->
                                        </li>
                                        <li>
                                            <a href="#" class="gnb-sub-trigger is-link" data-trigger="gnb">2Depth</a>
                                        </li>
                                        <li>
                                            <a href="#" class="gnb-sub-trigger is-link external-link" data-trigger="gnb"
                                                target="_blank" title="새 창 열림">2Depth</a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- //gnb-main-list -->
                            </div>
                            <!-- //gnb-toggle-wrap -->
                        </li>

                        <li>
                            <button type="button" class="gnb-main-trigger" data-trigger="gnb">게시판</button>
                            <!-- gnb-toggle-wrap -->
                            <div class="gnb-toggle-wrap">
                                <!-- gnb-main-list -->
                                <div class="gnb-main-list" data-has-submenu="true">
                                    <ul>
                                        <li>
                                            <button type="button" class="gnb-sub-trigger"
                                                data-trigger="gnb">게시판</button>
                                            <!-- gnb-sub-list -->
                                           <div class="gnb-sub-list between">
                                                <div class="gnb-sub-content">
                                                    <ul>
                                                        <li>
                                                            <a href="/bbs/list01_01.html" class="lnb-btn lnb-link sub_title_txt"
                                                                role="menuitem">Type01</a>
                                                        </li>
                                                        <li>
                                                            <a href="/bbs/list01_02.html" class="lnb-btn lnb-link sub_title_txt" role="menuitem">Type02</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="gnb-sub-banner">
                                                    <span class="krds-badge bg-primary">신규 서비스</span>
                                                    <button type="button" class="krds-btn medium text">메뉴명 <i
                                                            class="svg-icon ico-angle right"></i></button>
                                                </div>
                                            </div>
                                            <!-- //gnb-sub-list -->
                                        </li>
                                        <li>
                                            <button type="button" class="gnb-sub-trigger"
                                                data-trigger="gnb">2Depth</button>
                                            <!-- gnb-sub-list -->
                                            <div class="gnb-sub-list between">
                                                <div class="gnb-sub-content">
                                                    <h2 class="sub-title"><span>2Depth title</span></h2>
                                                    <ul class="type-description">
                                                        <li>
                                                            <h3 class="tit">
                                                                <a href="#" target="_blank" title="새 창 열림">3Depth title
                                                                    <i class="svg-icon ico-go"></i></a>
                                                            </h3>
                                                            <p class="txt">메뉴명과 메뉴에 관한 간략한 설명이 표시되는 스타일입니다.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="gnb-sub-banner">
                                                    <span class="krds-badge bg-primary">신규 서비스</span>
                                                    <button type="button" class="krds-btn medium text">메뉴명 <i
                                                            class="svg-icon ico-angle right"></i></button>
                                                </div>
                                            </div>
                                            <!-- //gnb-sub-list -->
                                        </li>
                                        <li>
                                            <a href="#" class="gnb-sub-trigger is-link" data-trigger="gnb">2Depth</a>
                                        </li>
                                        <li>
                                            <a href="#" class="gnb-sub-trigger is-link external-link" data-trigger="gnb"
                                                target="_blank" title="새 창 열림">2Depth</a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- //gnb-main-list -->
                            </div>
                            <!-- //gnb-toggle-wrap -->
                        </li>

                        <li>
                            <button type="button" class="gnb-main-trigger" data-trigger="gnb">1Depth</button>
                            <!-- gnb-toggle-wrap -->
                            <div class="gnb-toggle-wrap">
                                <!-- gnb-main-list -->
                                <div class="gnb-main-list">
                                    <!-- gnb-sub-list -->
                                    <div class="gnb-sub-list single-list between">
                                        <div class="gnb-sub-content">
                                            <h2 class="sub-title"><span>2Depth title</span></h2>
                                            <ul>
                                                <li><a href="#">Last depth</a></li>
                                                <li><a href="#">Last depth</a></li>
                                                <li><a href="#">Last depth</a></li>
                                                <li><a href="#">Last depth</a></li>
                                                <li><a href="#">Last depth</a></li>
                                                <li><a href="#">Last depth</a></li>
                                                <li><a href="#">Last depth</a></li>
                                                <li><a href="#">Last depth</a></li>
                                                <li><a href="#">Last depth</a></li>
                                            </ul>
                                        </div>
                                        <div class="gnb-sub-banner">
                                            <span class="krds-badge bg-primary">신규 서비스</span>
                                            <button type="button" class="krds-btn medium text">메뉴명 <i
                                                    class="svg-icon ico-angle right"></i></button>
                                        </div>
                                    </div>
                                    <!-- //gnb-sub-list -->
                                </div>
                                <!-- //gnb-main-list -->
                            </div>
                            <!-- //gnb-toggle-wrap -->
                        </li>

                        <li>
                            <a href="#" class="gnb-main-trigger is-link" data-trigger="gnb">링크(anchor)</a>
                        </li>
                        <li>
                            <button type="button" class="gnb-main-trigger is-link"
                                data-trigger="gnb">링크(anchor)</button>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- //메인메뉴 : 데스크탑 -->
        </div>
        <!-- //헤더 컨텐츠 영역  -->

        <!-- 메인메뉴 : 모바일 -->
        <div id="mobile-nav" class="krds-main-menu-mobile">
            <div class="gnb-wrap">
                <!-- gnb-header -->
                <div class="gnb-header">
                    <!-- gnb-utils -->
                    <div class="gnb-utils">
                        <ul class="utility-list">
                            <li><button type="button" class="krds-btn xsmall text">메뉴명</button></li>
                            <li><button type="button" class="krds-btn xsmall text">메뉴명</button></li>
                        </ul>
                    </div>
                    <!-- //gnb-utils -->
                    <!-- gnb-login -->
                    <div class="gnb-login">
                        <!-- <span class="user">홍길동님</span>
					<button type="button" class="krds-btn large text"><i class="svg-icon ico-logout"></i> 로그아웃</button> -->
                        <button type="button" class="krds-btn large text"><i class="svg-icon ico-log"></i> 로그인을
                            해주세요</button>
                    </div>
                    <!-- //gnb-login -->
                    <!-- gnb-service-menu -->
                    <div class="gnb-service-menu">
                        <a href="#" class="link">메뉴명</a>
                        <a href="#" class="link">메뉴명</a>
                        <a href="#" class="link">메뉴명</a>
                        <a href="#" class="link">메뉴명</a>
                    </div>
                    <!-- gnb-service-menu -->
                    <!-- 검색 -->
                    <div class="sch-input">
                        <input type="text" class="krds-input" placeholder="찾고자 하는 메뉴명을 입력해 주세요" title="찾고자 하는 메뉴명 입력" />
                        <button type="button" class="krds-btn medium icon ico-search">
                            <span class="sr-only">검색</span>
                            <i class="svg-icon ico-sch"></i>
                        </button>
                    </div>
                    <!-- //검색 -->
                </div>
                <!-- //gnb-header -->

                <!-- gnb-body -->
                <div class="gnb-body">
                    <!-- gnb-menu -->
                    <div class="gnb-menu">
                        <div class="menu-wrap">
                            <ul>
                                <li>
                                    <a href="#mGnb-anchor1" class="gnb-main-trigger">1Depth</a>
                                </li>
                                <li>
                                    <a href="#mGnb-anchor2" class="gnb-main-trigger">1Depth</a>
                                </li>
                                <li>
                                    <a href="#mGnb-anchor3" class="gnb-main-trigger">1Depth</a>
                                </li>
                                <li>
                                    <a href="#mGnb-anchor4" class="gnb-main-trigger">1Depth</a>
                                </li>
                                <li>
                                    <a href="#mGnb-anchor5" class="gnb-main-trigger">1Depth</a>
                                </li>
                            </ul>
                        </div>
                        <div class="submenu-wrap">
                            <div class="gnb-sub-list" id="mGnb-anchor1">
                                <h2 class="sub-title">1Depth</h2>
                                <ul>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                </ul>
                            </div>
                            <div class="gnb-sub-list" id="mGnb-anchor2">
                                <h2 class="sub-title">1Depth</h2>
                                <ul>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                </ul>
                            </div>
                            <div class="gnb-sub-list" id="mGnb-anchor3">
                                <h2 class="sub-title">1Depth</h2>
                                <ul>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                    <li>
                                        <a href="#" class="gnb-sub-trigger has-depth3">2Depth</a>
                                        <div class="depth3-wrap">
                                            <ul>
                                                <li>
                                                    <a href="#" class="depth3-trigger has-depth4">3Depth</a>
                                                    <div class="depth4-wrap">
                                                        <div class="depth4-head">
                                                            <button type="button" class="krds-btn icon trigger-prev">
                                                                <span class="sr-only">이전화면</span>
                                                                <i class="svg-icon ico-angle left"></i>
                                                            </button>
                                                            <button type="button" class="krds-btn icon trigger-close">
                                                                <span class="sr-only">전체메뉴 닫기</span>
                                                                <i class="svg-icon ico-popup-close"></i>
                                                            </button>
                                                        </div>
                                                        <ul class="depth4-body">
                                                            <h4 class="sub-title">4Depth title</h4>
                                                            <ul class="depth4-ul">
                                                                <li><a href="#">depth title</a></li>
                                                                <li><a href="#">depth title</a></li>
                                                                <li><a href="#">depth title</a></li>
                                                                <li><a href="#">depth title</a></li>
                                                            </ul>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li><a href="#" class="depth3-trigger">3Depth</a></li>
                                                <li><a href="#" class="depth3-trigger">3Depth</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="gnb-sub-list" id="mGnb-anchor4">
                                <h2 class="sub-title">1Depth</h2>
                                <ul>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                </ul>
                            </div>
                            <div class="gnb-sub-list" id="mGnb-anchor5">
                                <h2 class="sub-title">1Depth</h2>
                                <ul>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                    <li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- //gnb-menu -->
                    <!-- gnb-bottom -->
                    <div class="gnb-bottom">
                        <a href="#" class="krds-btn medium text">메뉴명 <i class="svg-icon ico-angle right"></i></a>
                        <a href="#" class="krds-btn medium text" target="_blank" title="새 창 열기"> 메뉴명 <i
                                class="svg-icon ico-go"></i></a>
                    </div>
                    <!-- //gnb-bottom -->
                </div>
                <!-- //gnb-body -->

                <!-- gnb-close -->
                <button type="button" class="krds-btn medium icon" id="close-nav">
                    <span class="sr-only">전체메뉴 닫기</span>
                    <i class="svg-icon ico-popup-close"></i>
                </button>
                <!-- //gnb-close -->
            </div>
        </div>
        <!-- //메인메뉴 : 모바일 -->
    </header>
`;
document.getElementById('headerWrap').innerHTML = krdsHeader;

const breadcrumb = `
    <ol class="breadcrumb">
        <li class="home"><a href="#" class="txt">홈</a></li>
        <li><a href="#" class="txt">컴포넌트</a></li>
        <li><a href="#" class="txt" id="breadTitle">서비스 신청2</a></li>
    </ol>`
    ;
if (document.getElementById('breadcrumb') != undefined) {
    document.getElementById('breadcrumb').innerHTML = breadcrumb;
}

const paging = `
            <div class="krds-pagination">
                <span class="page-navi prev disabled" href="#">이전</span>
                <div class="page-links">
                    <a class="page-link" href="#">1</a>
                    <a class="page-link" href="#">2</a>
                    <a class="page-link" href="#">3</a>
                    <a class="page-link active" href="#"><span class="sr-only">현재페이지 </span>4</a>
                    <a class="page-link" href="#">5</a>
                    <a class="page-link" href="#">6</a>
                    <a class="page-link" href="#">7</a>
                    <a class="page-link" href="#">8</a>
                    <span class="page-link link-dot"></span>
                    <a class="page-link" href="#">99</a>
                </div>
                <a class="page-navi next" href="#">다음</a>
            </div>
`;
if (document.getElementById('paging') != undefined) {
    document.getElementById('paging').innerHTML = paging;
}

const footer = `
<div class="foot-quick">
            <div class="inner">
                <button type="button" class="link" title="related_site 레이어">related_site</button>
                <button type="button" class="link" title="related_site 레이어">related_site</button>
                <button type="button" class="link" title="related_site 레이어">related_site</button>
                <button type="button" class="link" title="related_site 레이어">related_site</button>
            </div>
        </div>
        <div class="inner">
            <div class="f-logo">
                <span class="sr-only">KRDS - Korea Design System</span>
            </div>
            <div class="f-cnt">
                <div class="f-info">
                    <p class="info-addr">(26464) 강원특별자치도 원주시 건강로 32(반곡동) 국민건강보험공단</p>
                    <ul class="info-cs">
                        <li><strong class="strong">대표전화 1577-1000</strong><span class="span">(유료, 평일 09시~18시)</span>
                        </li>
                        <li><strong class="strong">해외이용 82-33-811-2001</strong><span class="span">(유료, 평일
                                09시~18시)</span></li>
                    </ul>
                </div>

                <div class="f-link">
                    <div class="link-go">
                        <a href="#" class="krds-btn medium text">찾아오시는 길 <i class="svg-icon ico-angle right"></i></a>
                        <a href="#" class="krds-btn medium text">이용안내 <i class="svg-icon ico-angle right"></i></a>
                        <a href="#" class="krds-btn medium text">직원검색 <i class="svg-icon ico-angle right"></i></a>
                    </div>
                    <div class="link-sns">
                        <a href="#" class="krds-btn xlarge icon border" target="_blank" title="새 창 열기">
                            <span class="sr-only">인스타그램</span>
                            <i class="svg-icon ico-instagram"></i>
                        </a>
                        <a href="#" class="krds-btn xlarge icon border" target="_blank" title="새 창 열기">
                            <span class="sr-only">유튜브</span>
                            <i class="svg-icon ico-youtube"></i>
                        </a>
                        <a href="#" class="krds-btn xlarge icon border" target="_blank" title="새 창 열기">
                            <span class="sr-only">X</span>
                            <i class="svg-icon ico-sns-x"></i>
                        </a>
                        <a href="#" class="krds-btn xlarge icon border" target="_blank" title="새 창 열기">
                            <span class="sr-only">페이스북</span>
                            <i class="svg-icon ico-facebook"></i>
                        </a>
                        <a href="#" class="krds-btn xlarge icon border" target="_blank" title="새 창 열기">
                            <span class="sr-only">블로그</span>
                            <i class="svg-icon ico-blog"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="f-btm">
                <div class="f-btm-text">
                    <div class="f-menu">
                        <a href="#" class="point">개인정보처리방침</a>
                        <a href="#">저작권 정책</a>
                        <a href="#">웹 접근성 품질인증 마크 획득</a>
                    </div>
                    <p class="f-copy">© 2023 National Health Insurance Service. All rights reserved.</p>
                </div>
                <div class="krds-identifier">
                    <span class="logo">
                        <span class="sr-only">KRDS - Korea Design System</span>
                    </span>
                    <span class="ban-txt">이 누리집은 보건복지부 산하기관 누리집입니다.</span>
                </div>
            </div>
        </div>
`;
document.getElementById('krds-footer').innerHTML = footer;


let compoNavTxt = ``;
const setNavArr = (arr) => {
    compoNavTxt = ``;
    arr.forEach((e, i) => {
        compoNavTxt += `
            <li class="lnb-item active" role="none">
                <button type="button" class="lnb-btn lnb-toggle ${i == 0 ? 'active' : ''}">${e.title}</button>
                <div class="lnb-submenu">
                    <ul>
                        `
        for (const j of e.sub) {
            if (j.sub != null) {
                compoNavTxt += `<li class="lnb-subitem" role="none">`
                compoNavTxt += `<button type="button" class="lnb-btn lnb-toggle-popup">${j.title}</button>
                                    <div class="lnb-submenu-lv2">
                                            <button type="button" class="lnb-btn-tit">${j.title}</button>
                                            <ul>
                                                `
                for (const k of j.sub)  compoNavTxt += `<li><a class="lnb-btn"  href="${k.href}">${k.title}</a></li>`
                compoNavTxt += `</ul>
                                        </div>
                                    <ul>`
                compoNavTxt += `</li>`
            } else {
                compoNavTxt += `<li class="lnb-subitem" role="none">`
                compoNavTxt += `<a href="${j.href}" class="lnb-btn lnb-link sub_title_txt" role="menuitem">${j.title}</a>`;
                compoNavTxt += `</li>`
            }
        }
        compoNavTxt += `
                    </ul>
                </div>
            </li>
        `;
    });
    document.getElementById('sideNav').innerHTML = compoNavTxt;
}


if (document.getElementById('sideNav') != undefined) {
    let pathname = window.location.pathname.split('/')[1];
    switch (pathname) {
        case "component":
            setNavArr(componentArr);
            document.getElementsByClassName('lnb-tit')[0].innerHTML = '컴포넌트'
            break;
        case "bbs":
            setNavArr(bbsArr);
            console.log(bbsArr);
            document.getElementsByClassName('lnb-tit')[0].innerHTML = '게시판'
            // document.getElementById('sideNav').innerHTML = bbsNavTxt;
        default:
    }
}


const subTitleTxt = document.querySelectorAll('.sub_title_txt');
const lnbItem = document.querySelectorAll('.lnb-item');
const lnbToggle = document.querySelectorAll('.lnb-toggle');

subTitleTxt.forEach((sub, idx) => {
    for (const i of lnbItem) {
        i.classList.remove('active');
    }

    for (const i of lnbToggle) {
        i.classList.remove('active');
    }
    // sub.setAttribute('href', '#;');
    sub.classList.remove('selected');

    sub.addEventListener('click', (e) => {
        subTitleTxt.forEach((roo) => {
            roo.classList.remove('selected');
        });

        localStorage.setItem('title', sub.innerHTML);
        document.getElementById('pageTitle').innerHTML = sub.innerHTML;
        document.getElementById('breadTitle').innerHTML = sub.innerHTML;
        sub.classList.add('selected');
    });
    if (sub.innerHTML == localStorage.getItem('title')) {
        sub.classList.add('selected');
        setTimeout(() => {
            if (sub.closest('.lnb-submenu') != null) {
                sub.parentElement.classList.add('active');
                sub.closest('.lnb-submenu').parentElement.classList.add('active');
                sub.closest('.lnb-submenu').previousElementSibling.classList.add('active');
            }

        }, 500);
    }
});


const searchCtrl = {
    open: () => {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        document.getElementById('totalSearch').classList.add('active');
    },
    close: () => {
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementById('totalSearch').classList.remove('active');
    }
}

document.getElementById('pageTitle').innerHTML = localStorage.getItem('title');
document.getElementById('breadTitle').innerHTML = localStorage.getItem('title');
