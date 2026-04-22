// ==========================================
// 1. スクロール時のヘッダー背景色変更
// ==========================================
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==========================================
// 2. ページ読み込み時のヒーローアニメーション
// ==========================================
window.addEventListener('load', () => {
    // ロード直後にファーストビューのテキストをふわっと表示
    setTimeout(() => {
        document.querySelector('.hero-copy').classList.add('is-visible');
    }, 300); // 0.3秒遅延させることで上品な印象に
});

// ==========================================
// 3. スクロール連動フェードインアニメーション
// ==========================================
// .js-scroll クラスがついた要素を監視し、画面内に入ったら .is-visible を付与
const scrollElements = document.querySelectorAll('.js-scroll');

// 要素が画面のどの位置に来たらアニメーションを発火させるか判定
const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    // 画面の高さの指定割合（デフォルトは1、今回は1.25 = 下から1/5ほど見えたら）を超えたらtrue
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

// アニメーション用クラスを付与
const displayScrollElement = (element) => {
    element.classList.add('is-visible');
};

// スクロールイベントごとに全要素をチェック
const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        // 1.15 に設定することで、少し画面内に入ってからフワッと表示される（高級感の演出）
        if (elementInView(el, 1.15)) {
            displayScrollElement(el);
        }
    })
}

// スクロールイベントリスナー
window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// 読み込み時にも一度判定を行う（すでに画面内にある要素を表示するため）
handleScrollAnimation();