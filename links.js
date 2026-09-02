// ==========================================
// 1. PUSAT DATA LINK (EDIT DI SINI)
// ==========================================
const databaseLink = {
    
    "tugasphp": "https://drive.google.com/file/d/19qmfRFgTi9Mdp8WdF_B240m1reF9q3st/view?usp=sharing",
    "modullengkap": "https://chat.whatsapp.com/contohlinkgrup"
};

// ==========================================
// 2. LOGIKA PROGRAM (TIDAK PERLU DIEDIT)
// ==========================================
function renderLinkList(filter = '') {
    const listContainer = document.getElementById('linkList');
    listContainer.innerHTML = '';

    let count = 0;
    
    for (const [key, url] of Object.entries(databaseLink)) {
        if (key.toLowerCase().includes(filter.toLowerCase()) || url.toLowerCase().includes(filter.toLowerCase())) {
            count++;
            
            const item = document.createElement('div');
            item.className = "flex items-center justify-between bg-slate-900 p-3 rounded-lg border border-slate-700/60 hover:border-indigo-500 transition-colors";
            
            item.innerHTML = `
                <div class="truncate mr-3">
                    <span class="font-mono text-indigo-400 font-semibold text-sm">?${key}</span>
                    <p class="text-xs text-slate-400 truncate mt-0.5" title="${url}">${url}</p>
                </div>
                <a href="${url}" target="_blank" class="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1.5 rounded font-medium shrink-0">Buka</a>
            `;
            
            listContainer.appendChild(item);
        }
    }

    if (count === 0) {
        listContainer.innerHTML = `<p class="text-center text-xs text-slate-500 py-4">Link tidak ditemukan.</p>`;
    }
}

window.onload = function() {
    const path = window.location.search.substring(1).trim();
    const statusPesan = document.getElementById('status-pesan');
    
    if (path) {
        statusPesan.classList.remove('hidden');
        
        if (databaseLink[path]) {
            statusPesan.innerText = `Mengarahkan ke tujuan (${path})...`;
            statusPesan.className = "mb-6 text-sm bg-indigo-950 border border-indigo-800 p-4 rounded-lg text-indigo-200 text-center";
            window.location.replace(databaseLink[path]);
            return; 
        } else {
            statusPesan.innerText = `Maaf, tautan pendek "?${path}" tidak ditemukan!`;
            statusPesan.className = "mb-6 text-sm bg-red-950 border border-red-800 p-4 rounded-lg text-red-200 text-center";
        }
    }

    renderLinkList(); 

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            renderLinkList(e.target.value);
        });
    }
};
