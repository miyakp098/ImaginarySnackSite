document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("image-container");
    const totalPriceEl = document.getElementById("total-price");

    const imageNames = [
        "ミスティカルグミ.png",
        "ハニーチリスティック.png",
        "シーシャリスクラッカー.png",
        "テリヤキオニオンパフ.png",
        "ナイトオウルムーングミ.png",
        "フォレストクリーチャーチョコ.png",
        "ミニキャッスルチーズパフ.png",
        "ライムバーベキューカール.png",
        "レモンペッパーチップス.png",
        "スイートポテトムーンチップ.png",
        "アーモンドハニームーンクッキー.png",
        "トロピカルポップキューブ.png",
        "ラベンダーチョコビスケット.png",
        "フレーバーチェンジキャンディ.png",
        "ティーポットキャラメルビスケット.png",
        "キャラメルシーソルトウェーブチップス.png",
        "トロピカルシーアドベンチャーグミ.png",
        "ベリーバニラスパイラルキャンディ.png",
        "ゴールデンアーモンドスパークルチョコ.png",
        "トロピカルジュエルガミーキャンディー.png",
        "クランチモダンスナック.png",
        "フィズィーラムネデライト.png",
        "ムーンシャインミントガム.png",
        "ワサビシーウィードプレッツェル.png"
        
    ];

    const priceMapping = {
        "ミスティカルグミ.png": "¥50",
        "ハニーチリスティック.png": "¥130",
        "シーシャリスクラッカー.png": "¥200",
        "テリヤキオニオンパフ.png": "¥100",
        "ナイトオウルムーングミ.png": "¥150",
        "フォレストクリーチャーチョコ.png": "¥300",
        "ミニキャッスルチーズパフ.png": "¥50",
        "ライムバーベキューカール.png": "¥30",
        "レモンペッパーチップス.png": "¥150",
        "スイートポテトムーンチップ.png": "¥180",
        "アーモンドハニームーンクッキー.png": "¥100",
        "トロピカルポップキューブ.png": "¥50",
        "ラベンダーチョコビスケット.png": "¥300",
        "フレーバーチェンジキャンディ.png": "¥120",
        "ティーポットキャラメルビスケット.png": "¥100",
        "キャラメルシーソルトウェーブチップス.png": "¥200",
        "トロピカルシーアドベンチャーグミ.png": "¥230",
        "ベリーバニラスパイラルキャンディ.png": "¥300",
        "ゴールデンアーモンドスパークルチョコ.png": "¥500",
        "トロピカルジュエルガミーキャンディー.png": "¥120",
        "クランチモダンスナック.png": "¥5000",
        "フィズィーラムネデライト.png": "¥30",
        "ムーンシャインミントガム.png": "¥200",
        "ワサビシーウィードプレッツェル.png": "¥130"
    };

    let total = 0;
    let purchasedItems = {}; // 購入したお菓子の名前と個数を追跡

    imageNames.forEach((imageName) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('image-wrapper');
    
        const imgEl = document.createElement('img');
        imgEl.src = `image/${imageName}`;
        imgEl.alt = imageName.split('.')[0]; // 拡張子を除外
        wrapper.appendChild(imgEl);
    
        const nameEl = document.createElement('div');
        nameEl.textContent = imageName.split('.')[0]; // 拡張子を除外
        wrapper.appendChild(nameEl);
    
        const priceContainer = document.createElement('div');
        priceContainer.classList.add('price-container');
    
        const priceEl = document.createElement('div');
        priceEl.textContent = priceMapping[imageName];
        priceContainer.appendChild(priceEl);
    
        const buyButton = document.createElement('button');
        buyButton.textContent = '購入';
        buyButton.classList.add('buy-button');
        
        
        buyButton.onclick = function() {
            total += parseInt(priceMapping[imageName].replace(/[¥,]/g, ''));
            totalPriceEl.textContent = `合計購入金額: ¥${total}`;
            
            // 購入されたお菓子の名前をリストに追加または更新
            const itemName = imageName.split('.')[0];
            if (purchasedItems[itemName]) {
                purchasedItems[itemName]++;
            } else {
                purchasedItems[itemName] = 1;
            }
            
            // 購入リストの表示を更新
            updatePurchasedItemsList();
        };

        priceContainer.appendChild(buyButton);
    
        wrapper.appendChild(priceContainer);
        imageContainer.appendChild(wrapper);
    });
    
    function updatePurchasedItemsList() {
        const purchasedItemsList = document.getElementById("purchased-items");
        // 既存のリストをクリア
        purchasedItemsList.innerHTML = '';
    
        for (const [itemName, quantity] of Object.entries(purchasedItems)) {
            const li = document.createElement('li');
            li.classList.add('purchased-item'); // CSSでスタイリングするためのクラスを追加できます
    
            const nameAndQuantity = document.createElement('div');
            nameAndQuantity.textContent = `${itemName}: ${quantity}個`;
            
            const itemPrice = parseInt(priceMapping[`${itemName}.png`].replace('¥', ''));
            const subtotal = itemPrice * quantity;
            const subtotalDisplay = document.createElement('div');
            subtotalDisplay.textContent = `小計: ¥${subtotal}`;
            subtotalDisplay.classList.add('subtotal'); // CSSでスタイリングするためのクラスを追加できます
    
            // 名前と個数、そして小計をli要素に追加
            li.appendChild(nameAndQuantity);
            li.appendChild(subtotalDisplay);
    
            // 最終的なli要素をリストに追加
            purchasedItemsList.appendChild(li);
        }
    }
    
    
});
