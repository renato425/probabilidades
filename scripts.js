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
            { rank: 20, team: 'Sport', chance: 0.075 }
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
            { rank: 19, team: 'Cruzeiro', chance: 0.003 },
            { rank: 20, team: 'Flamengo', chance: 0 }
        ],
    },
    serieB: {
        "campeao": [
            {
                "rank": 1,
                "team": "Goiás",
                "chance": 41.368
            },
            {
                "rank": 2,
                "team": "Coritiba",
                "chance": 35.552
            },
            {
                "rank": 3,
                "team": "Chapecoense",
                "chance": 5.584
            },
            {
                "rank": 4,
                "team": "Novorizontino",
                "chance": 5.576
            },
            {
                "rank": 5,
                "team": "Remo",
                "chance": 3.084
            },
            {
                "rank": 6,
                "team": "Criciúma",
                "chance": 2.474
            },
            {
                "rank": 7,
                "team": "Avaí",
                "chance": 2.129
            },
            {
                "rank": 8,
                "team": "Cuiabá",
                "chance": 1.759
            },
            {
                "rank": 9,
                "team": "Vila Nova",
                "chance": 1.28
            },
            {
                "rank": 10,
                "team": "CRB",
                "chance": 0.433
            },
            {
                "rank": 11,
                "team": "Atlético-GO",
                "chance": 0.215
            },
            {
                "rank": 12,
                "team": "Operário-PR",
                "chance": 0.157
            },
            {
                "rank": 13,
                "team": "Athletico-PR",
                "chance": 0.147
            },
            {
                "rank": 14,
                "team": "Ferroviária",
                "chance": 0.132
            },
            {
                "rank": 15,
                "team": "Athletic-MG",
                "chance": 0.08
            },
            {
                "rank": 16,
                "team": "Volta Redonda",
                "chance": 0.011
            },
            {
                "rank": 17,
                "team": "América-MG",
                "chance": 0.008
            },
            {
                "rank": 18,
                "team": "Botafogo-SP",
                "chance": 0.005
            },
            {
                "rank": 19,
                "team": "Paysandu",
                "chance": 0.005
            },
            {
                "rank": 20,
                "team": "Amazonas",
                "chance": 0.001
            }
        ],
        "acesso": [
            {
                "rank": 1,
                "team": "Goiás",
                "chance": 87.671
            },
            {
                "rank": 2,
                "team": "Coritiba",
                "chance": 86.631
            },
            {
                "rank": 3,
                "team": "Novorizontino",
                "chance": 42.617
            },
            {
                "rank": 4,
                "team": "Chapecoense",
                "chance": 40.981
            },
            {
                "rank": 5,
                "team": "Remo",
                "chance": 29.574
            },
            {
                "rank": 6,
                "team": "Criciúma",
                "chance": 25.713
            },
            {
                "rank": 7,
                "team": "Avaí",
                "chance": 23.386
            },
            {
                "rank": 8,
                "team": "Cuiabá",
                "chance": 20.216
            },
            {
                "rank": 9,
                "team": "Vila Nova",
                "chance": 15.773
            },
            {
                "rank": 10,
                "team": "CRB",
                "chance": 8.221
            },
            {
                "rank": 11,
                "team": "Atlético-GO",
                "chance": 4.711
            },
            {
                "rank": 12,
                "team": "Operário-PR",
                "chance": 3.85
            },
            {
                "rank": 13,
                "team": "Athletico-PR",
                "chance": 3.733
            },
            {
                "rank": 14,
                "team": "Ferroviária",
                "chance": 3.446
            },
            {
                "rank": 15,
                "team": "Athletic-MG",
                "chance": 1.816
            },
            {
                "rank": 16,
                "team": "Volta Redonda",
                "chance": 0.587
            },
            {
                "rank": 17,
                "team": "Botafogo-SP",
                "chance": 0.393
            },
            {
                "rank": 18,
                "team": "Paysandu",
                "chance": 0.308
            },
            {
                "rank": 19,
                "team": "América-MG",
                "chance": 0.263
            },
            {
                "rank": 20,
                "team": "Amazonas",
                "chance": 0.11
            }
        ],
        "permanencia": [
            {
                "rank": 1,
                "team": "CRB",
                "chance": 82.794
            },
            {
                "rank": 2,
                "team": "Atlético-GO",
                "chance": 80.705
            },
            {
                "rank": 3,
                "team": "Vila Nova",
                "chance": 80.292
            },
            {
                "rank": 4,
                "team": "Operário-PR",
                "chance": 78.537
            },
            {
                "rank": 5,
                "team": "Athletico-PR",
                "chance": 78.446
            },
            {
                "rank": 6,
                "team": "Cuiabá",
                "chance": 77.358
            },
            {
                "rank": 7,
                "team": "Ferroviária",
                "chance": 77.308
            },
            {
                "rank": 8,
                "team": "Avaí",
                "chance": 74.722
            },
            {
                "rank": 9,
                "team": "Criciúma",
                "chance": 72.647
            },
            {
                "rank": 10,
                "team": "Athletic-MG",
                "chance": 69.587
            },
            {
                "rank": 11,
                "team": "Remo",
                "chance": 69.159
            },
            {
                "rank": 12,
                "team": "Chapecoense",
                "chance": 58.504
            },
            {
                "rank": 13,
                "team": "Novorizontino",
                "chance": 57.007
            },
            {
                "rank": 14,
                "team": "Volta Redonda",
                "chance": 52.602
            },
            {
                "rank": 15,
                "team": "Botafogo-SP",
                "chance": 44.986
            },
            {
                "rank": 16,
                "team": "América-MG",
                "chance": 44.42
            },
            {
                "rank": 17,
                "team": "Paysandu",
                "chance": 42.809
            },
            {
                "rank": 18,
                "team": "Amazonas",
                "chance": 32.422
            },
            {
                "rank": 19,
                "team": "Coritiba",
                "chance": 13.368
            },
            {
                "rank": 20,
                "team": "Goiás",
                "chance": 12.327
            }
        ],
        "rebaixamento": [
            {
                "rank": 1,
                "team": "Amazonas",
                "chance": 67.468
            },
            {
                "rank": 2,
                "team": "Paysandu",
                "chance": 56.883
            },
            {
                "rank": 3,
                "team": "América-MG",
                "chance": 55.317
            },
            {
                "rank": 4,
                "team": "Botafogo-SP",
                "chance": 54.621
            },
            {
                "rank": 5,
                "team": "Volta Redonda",
                "chance": 46.811
            },
            {
                "rank": 6,
                "team": "Athletic-MG",
                "chance": 28.597
            },
            {
                "rank": 7,
                "team": "Ferroviária",
                "chance": 19.246
            },
            {
                "rank": 8,
                "team": "Athletico-PR",
                "chance": 17.821
            },
            {
                "rank": 9,
                "team": "Operário-PR",
                "chance": 17.613
            },
            {
                "rank": 10,
                "team": "Atlético-GO",
                "chance": 14.584
            },
            {
                "rank": 11,
                "team": "CRB",
                "chance": 8.985
            },
            {
                "rank": 12,
                "team": "Vila Nova",
                "chance": 3.935
            },
            {
                "rank": 13,
                "team": "Cuiabá",
                "chance": 2.426
            },
            {
                "rank": 14,
                "team": "Avaí",
                "chance": 1.892
            },
            {
                "rank": 15,
                "team": "Criciúma",
                "chance": 1.64
            },
            {
                "rank": 16,
                "team": "Remo",
                "chance": 1.267
            },
            {
                "rank": 17,
                "team": "Chapecoense",
                "chance": 0.515
            },
            {
                "rank": 18,
                "team": "Novorizontino",
                "chance": 0.376
            },
            {
                "rank": 19,
                "team": "Goiás",
                "chance": 0.002
            },
            {
                "rank": 20,
                "team": "Coritiba",
                "chance": 0.001
            }
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


