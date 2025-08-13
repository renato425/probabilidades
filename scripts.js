// ===================================================================================
//  ÁREA DE DADOS - ATUALIZE AS PROBABILIDADES AQUI
// ===================================================================================

const probabilidades = {
    serieA: {
        campeao: [
            { rank: 1, team: 'Flamengo', chance: 46.103 },
            { rank: 2, team: 'Palmeiras', chance: 25.386 },
            { rank: 3, team: 'Cruzeiro', chance: 16.169 },
            { rank: 4, team: 'Bahia', chance: 4.394 },
            { rank: 5, team: 'Botafogo', chance: 3.253 },
            { rank: 6, team: 'Mirassol', chance: 2.147 },
            { rank: 7, team: 'São Paulo', chance: 0.634 },
            { rank: 8, team: 'Fluminense', chance: 0.528 },
            { rank: 9, team: 'Red Bull Bragantino', chance: 0.484 },
            { rank: 10, team: 'Atlético-MG', chance: 0.469 },
            { rank: 11, team: 'Internacional', chance: 0.218 },
            { rank: 12, team: 'Ceará', chance: 0.088 },
            { rank: 13, team: 'Santos', chance: 0.057 },
            { rank: 14, team: 'Grêmio', chance: 0.029 },
            { rank: 15, team: 'Corinthians', chance: 0.027 },
            { rank: 16, team: 'Vasco', chance: 0.008 },
            { rank: 17, team: 'Juventude', chance: 0.006 },
            { rank: 18, team: 'Fortaleza', chance: 0.0 },
            { rank: 19, team: 'Vitória', chance: 0.0 },
            { rank: 20, team: 'Sport', chance: 0.0 },
        ],
        libertadores: [
            { rank: 1, team: 'Flamengo', chance: 97.679 },
            { rank: 2, team: 'Palmeiras', chance: 93.014 },
            { rank: 3, team: 'Cruzeiro', chance: 89.312 },
            { rank: 4, team: 'Bahia', chance: 63.801 },
            { rank: 5, team: 'Botafogo', chance: 56.746 },
            { rank: 6, team: 'Mirassol', chance: 47.743 },
            { rank: 7, team: 'São Paulo', chance: 29.668 },
            { rank: 8, team: 'Red Bull Bragantino', chance: 26.221 },
            { rank: 9, team: 'Fluminense', chance: 24.706 },
            { rank: 10, team: 'Atlético-MG', chance: 22.648 },
            { rank: 11, team: 'Internacional', chance: 16.069 },
            { rank: 12, team: 'Ceará', chance: 9.819 },
            { rank: 13, team: 'Santos', chance: 7.412 },
            { rank: 14, team: 'Corinthians', chance: 5.340 },
            { rank: 15, team: 'Grêmio', chance: 4.910 },
            { rank: 16, team: 'Vasco', chance: 2.137 },
            { rank: 17, team: 'Vitória', chance: 1.054 },
            { rank: 18, team: 'Juventude', chance: 1.019 },
            { rank: 19, team: 'Fortaleza', chance: 0.627 },
            { rank: 20, team: 'Sport', chance: 0.075}
        ],
        sulamericana: [
            { rank: 1, team: 'Red Bull Bragantino', chance: 52.867 },
            { rank: 2, team: 'São Paulo', chance: 52.593 },
            { rank: 3, team: 'Fluminense', chance: 51.095 },
            { rank: 4, team: 'Atlético-MG', chance: 50.967 },
            { rank: 5, team: 'Internacional', chance: 49.789 },
            { rank: 6, team: 'Mirassol', chance: 43.141 },
            { rank: 7, team: 'Ceará', chance: 42.964 },
            { rank: 8, team: 'Santos', chance: 38.660 },
            { rank: 9, team: 'Botafogo', chance: 37.235 },
            { rank: 10, team: 'Corinthians', chance: 35.497 },
            { rank: 11, team: 'Grêmio', chance: 32.443 },
            { rank: 12, team: 'Bahia', chance: 31.951 },
            { rank: 13, team: 'Vasco', chance: 20.206 },
            { rank: 14, team: 'Vitória', chance: 15.120 },
            { rank: 15, team: 'Juventude', chance: 13.118 },
            { rank: 16, team: 'Fortaleza', chance: 10.495 },
            { rank: 17, team: 'Cruzeiro', chance: 10.348 },
            { rank: 18, team: 'Palmeiras', chance: 6.780 },
            { rank: 19, team: 'Sport', chance: 2.432 },
            { rank: 20, team: 'Flamengo', chance: 2.299 }
        ],
        permanencia: [
            { rank: 1, team: 'Flamengo', chance: 100 },
            { rank: 2, team: 'Palmeiras', chance: 99.997 },
            { rank: 3, team: 'Cruzeiro', chance: 99.997 },
            { rank: 4, team: 'Bahia', chance: 99.652 },
            { rank: 5, team: 'Botafogo', chance: 99.410 },
            { rank: 6, team: 'Mirassol', chance: 98.949 },
            { rank: 7, team: 'São Paulo', chance: 97.328 },
            { rank: 8, team: 'Red Bull Bragantino', chance: 96.531 },
            { rank: 9, team: 'Fluminense', chance: 95.280 },
            { rank: 10, team: 'Atlético-MG', chance: 94.557 },
            { rank: 11, team: 'Internacional', chance: 92.053 },
            { rank: 12, team: 'Ceará', chance: 86.044 },
            { rank: 13, team: 'Santos', chance: 81.751 },
            { rank: 14, team: 'Corinthians', chance: 78.908 },
            { rank: 15, team: 'Grêmio', chance: 75.214 },
            { rank: 16, team: 'Vasco', chance: 57.481 },
            { rank: 17, team: 'Vitória', chance: 50.189 },
            { rank: 18, team: 'Juventude', chance: 43.988 },
            { rank: 19, team: 'Fortaleza', chance: 38.879 },
            { rank: 20, team: 'Sport', chance: 13.792 },

        ],
        rebaixamento: [
            { rank: 1, team: 'Sport', chance: 86.208 },
            { rank: 2, team: 'Fortaleza', chance: 61.121 },
            { rank: 3, team: 'Juventude', chance: 56.012 },
            { rank: 4, team: 'Vitória', chance: 49.811 },
            { rank: 5, team: 'Vasco', chance: 42.519 },
            { rank: 6, team: 'Grêmio', chance: 24.786 },
            { rank: 7, team: 'Corinthians', chance: 21.092 },
            { rank: 8, team: 'Santos', chance: 18.249 },
            { rank: 9, team: 'Ceará', chance: 13.956 },
            { rank: 10, team: 'Internacional', chance: 7.947 },
            { rank: 11, team: 'Atlético-MG', chance: 5.443 },
            { rank: 12, team: 'Fluminense', chance: 4.720 },
            { rank: 13, team: 'Red Bull Bragantino', chance: 3.469 },
            { rank: 14, team: 'São Paulo', chance: 2.672 },
            { rank: 15, team: 'Mirassol', chance: 1.051 },
            { rank: 16, team: 'Botafogo', chance: 0.590 },
            { rank: 17, team: 'Bahia', chance: 0.348 },
            { rank: 18, team: 'Palmeiras', chance: 0.003 },
            { rank: 19, team: 'Cruzeiro', chance: 0.003},
            { rank: 20, team: 'Flamengo', chance: 0}
        ],
    },
    serieB: {
        campeao: [
            { rank: 1, team: 'Goiás', chance: 44.617 },
            { rank: 2, team: 'Coritiba', chance: 25.592 },
            { rank: 3, team: 'Grêmio Novorizontino', chance: 9.985 },
            { rank: 4, team: 'Chapecoense', chance: 6.178 },
            { rank: 5, team: 'Remo', chance: 3.413},
            { rank: 6, team: 'Criciúma', chance: 2.889 },
            { rank: 7, team: 'Avaí', chance: 2.448 },
            { rank: 8, team: 'Cuiabá', chance: 1.997 },
            { rank: 9, team: 'Vila Nova', chance: 1.413 },
            { rank: 10, team: 'CRB', chance: 0.532 },
            { rank: 11, team: 'Atlético-GO', chance: 0.249 },
            { rank: 12, team: 'Athletico-PR', chance: 0.21 },
            { rank: 13, team: 'Operário-PR', chance: 0.183 },
            { rank: 14, team: 'Ferroviária', chance: 0.17 },
            { rank: 15, team: 'Athletic-MG', chance: 0.07 },
            { rank: 16, team: 'Volta Redonda', chance: 0.025 },
            { rank: 17, team: 'América-MG', chance: 0.016 },
            { rank: 18, team: 'Botafogo-SP', chance: 0.006 },
            { rank: 19, team: 'Amazonas', chance: 0.004 },
            { rank: 20, team: 'Paysandu', chance: 0.003 }
        ],
        acesso: [
            { rank: 1, team: 'Goiás', chance: 87.629 },
            { rank: 2, team: 'Coritiba', chance: 76.774 },
            { rank: 3, team: 'Grêmio Novorizontino', chance: 52.654 },
            { rank: 4, team: 'Chapecoense', chance: 40.720 },
            { rank: 5, team: 'Remo', chance: 29.635 },
            { rank: 6, team: 'Criciúma', chance: 25.712 },
            { rank: 7, team: 'Avaí', chance: 23.410 },
            { rank: 8, team: 'Cuiabá', chance: 20.220 },
            { rank: 9, team: 'Vila Nova', chance: 15.436 },
            { rank: 10, team: 'CRB', chance: 8.122 },
            { rank: 11, team: 'Atlético-GO', chance: 4.869 },
            { rank: 12, team: 'Operário-PR', chance: 3.889 },
            { rank: 13, team: 'Athletico-PR', chance: 3.778 },
            { rank: 14, team: 'Ferroviária', chance: 3.350 },
            { rank: 15, team: 'Athletic-MG', chance: 1.895 },
            { rank: 16, team: 'Volta Redonda', chance: 0.658 },
            { rank: 17, team: 'América-MG', chance: 0.415 },
            { rank: 18, team: 'Botafogo-SP', chance: 0.334 },
            { rank: 19, team: 'Paysandu', chance: 0.308 },
            { rank: 20, team: 'Amazonas', chance: 0.192 }
        ],
        permanencia: [
            { rank: 1, team: 'Vila Nova', chance: 86.694 },
            { rank: 2, team: 'CRB', chance: 86.446 },
            { rank: 3, team: 'Cuiabá', chance: 84.748 },
            { rank: 4, team: 'Avaí', chance: 83.493 },
            { rank: 5, team: 'Atlético-GO', chance: 82.541 },
            { rank: 6, team: 'Criciúma', chance: 81.894 },
            { rank: 7, team: 'Operário-PR', chance: 79.920 },
            { rank: 8, team: 'Athletico-PR', chance: 79.675 },
            { rank: 9, team: 'Remo', chance: 79.577 },
            { rank: 10, team: 'Ferroviária', chance: 78.261 },
            { rank: 11, team: 'Chapecoense', chance: 71.117 },
            { rank: 12, team: 'Athletic-MG', chance: 69.601 },
            { rank: 13, team: 'Grêmio Novorizontino', chance: 60.302 },
            { rank: 14, team: 'Volta Redonda', chance: 52.285 },
            { rank: 15, team: 'América-MG', chance: 46.754 },
            { rank: 16, team: 'Botafogo-SP', chance: 44.831 },
            { rank: 17, team: 'Paysandu', chance: 42.136 },
            { rank: 18, team: 'Amazonas', chance: 35.413 },
            { rank: 19, team: 'Coritiba', chance: 34.203 },
            { rank: 20, team: 'Goiás', chance: 20.109 }
        ],
        rebaixamento: [ 
            { rank: 1, team: 'Amazonas', chance: 64.516 },
            { rank: 2, team: 'Paysandu', chance: 57.737 },
            { rank: 3, team: 'Botafogo-SP', chance: 55.037 },
            { rank: 4, team: 'América-MG', chance: 53.067 },
            { rank: 5, team: 'Volta Redonda', chance: 47.443 },
            { rank: 6, team: 'Athletic-MG', chance: 29.471 },
            { rank: 7, team: 'Ferroviária', chance: 20.103 },
            { rank: 8, team: 'Athletico-PR', chance: 18.390},
            { rank: 9, team: 'Operário-PR', chance: 18.077},
            { rank: 10, team: 'Atlético-GO', chance: 14.939 },
            { rank: 11, team: 'CRB', chance: 9.058},
            { rank: 12, team: 'Vila Nova', chance: 4.030 },
            { rank: 13, team: 'Cuiabá', chance: 2.677 },
            { rank: 14, team: 'Avaí', chance: 1.837 },
            { rank: 15, team: 'Criciúma', chance: 1.695 },
            { rank: 16, team: 'Remo', chance: 1.222 },
            { rank: 17, team: 'Chapecoense', chance: 0.490 },
            { rank: 18, team: 'Grêmio Novorizontino', chance: 0.195 },
            { rank: 19, team: 'Coritiba', chance: 0.015 },
            { rank: 20, team: 'Goiás', chance: 0.001 }
        ]
    }
};


// ===================================================================================
//  LÓGICA DA PÁGINA - NÃO PRECISA ALTERAR AQUI
// ===================================================================================

/**
 * Cria e preenche uma tabela de probabilidades em um contêiner específico.
 * @param {string} containerId - O ID do elemento HTML que vai conter a tabela.
 * @param {string} title - O título da tabela (ex: "Campeão").
 * @param {Array<object>} data - O array de dados com os times e suas chances.
 */
function createTable(containerId, title, data) {
    const container = document.getElementById(containerId);
    if (!container) return; // Não faz nada se o contêiner não existir na página

    // Limpa o contêiner antes de adicionar novos elementos
    container.innerHTML = '';

    // Cria e adiciona o título
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    container.appendChild(titleElement);

    // Cria as linhas para cada time
    data.forEach(item => {
        const row = document.createElement('div');
        row.className = 'table-row';

        // Formata a chance com 3 casas decimais
        const percentageText = item.chance.toFixed(3) + '%';

        row.innerHTML = `
            <div class="rank">${item.rank}º</div>
            <div class="team-name">${item.team}</div>
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-bar-inner" style="width: ${item.chance}%;"></div>
                </div>
                <div class="percentage">${percentageText}</div>
            </div>
        `;

        container.appendChild(row);
    });
}

function loadPage() {
    const pageId = document.body.id;
    console.log(pageId)

    if (pageId === 'brasileirao-a') {
        createTable('campeao-container', 'Campeão', probabilidades.serieA.campeao);
        createTable('libertadores-container', 'Classificação à Libertadores (G6)', probabilidades.serieA.libertadores);
        createTable('sudamericana-container', 'Classificação à Sudamericana', probabilidades.serieA.sulamericana);
        createTable('permanencia-container', 'Permanência na Série A', probabilidades.serieA.permanencia)
        createTable('rebaixamento-container', 'Rebaixamento à Série B', probabilidades.serieA.rebaixamento);
    } else if (pageId === 'brasileirao-b') {
        createTable('campeao-b-container', 'Campeão', probabilidades.serieB.campeao);
        createTable('acesso-b-container', 'Acesso à Série A', probabilidades.serieB.acesso);
        createTable('permanencia-b-container', 'Permanência à Série B (4-16)', probabilidades.serieB.permanencia)
        createTable('rebaixamento-b-container', 'Rebaixamento à Série C', probabilidades.serieB.rebaixamento);
    }
}
if (document.readyState !== 'loading') {
    loadPage()
} else {
    document.addEventListener('DOMContentLoaded', loadPage)
}