// ===================================================================================
//  ÁREA DE DADOS - ATUALIZE AS PROBABILIDADES AQUI
// ===================================================================================

const probabilidades = {
    serieA: {
  "campeao": [
    {
      "rank": 1,
      "team": "Flamengo",
      "chance": 50.408
    },
    {
      "rank": 2,
      "team": "Palmeiras",
      "chance": 26.176
    },
    {
      "rank": 3,
      "team": "Cruzeiro",
      "chance": 16.543
    },
    {
      "rank": 4,
      "team": "Bahia",
      "chance": 2.796
    },
    {
      "rank": 5,
      "team": "Botafogo",
      "chance": 1.958
    },
    {
      "rank": 6,
      "team": "Mirassol",
      "chance": 1.866
    },
    {
      "rank": 7,
      "team": "São Paulo",
      "chance": 0.089
    },
    {
      "rank": 8,
      "team": "Fluminense",
      "chance": 0.087
    },
    {
      "rank": 9,
      "team": "Red Bull Bragantino",
      "chance": 0.039
    },
    {
      "rank": 10,
      "team": "Internacional",
      "chance": 0.019
    },
    {
      "rank": 11,
      "team": "Ceará",
      "chance": 0.01
    },
    {
      "rank": 12,
      "team": "Atlético-MG",
      "chance": 0.005
    },
    {
      "rank": 13,
      "team": "Vasco",
      "chance": 0.003
    },
    {
      "rank": 14,
      "team": "Corinthians",
      "chance": 0.001
    },
    {
      "rank": 15,
      "team": "Grêmio",
      "chance": 0
    },
    {
      "rank": 16,
      "team": "Vitória",
      "chance": 0
    },
    {
      "rank": 17,
      "team": "Fortaleza",
      "chance": 0
    },
    {
      "rank": 18,
      "team": "Santos",
      "chance": 0
    },
    {
      "rank": 19,
      "team": "Juventude",
      "chance": 0
    },
    {
      "rank": 20,
      "team": "Sport",
      "chance": 0
    }
  ],
  "libertadores": [
    {
      "rank": 1,
      "team": "Flamengo",
      "chance": 99.634
    },
    {
      "rank": 2,
      "team": "Palmeiras",
      "chance": 98.109
    },
    {
      "rank": 3,
      "team": "Cruzeiro",
      "chance": 96.868
    },
    {
      "rank": 4,
      "team": "Bahia",
      "chance": 75.761
    },
    {
      "rank": 5,
      "team": "Botafogo",
      "chance": 69.997
    },
    {
      "rank": 6,
      "team": "Mirassol",
      "chance": 67.303
    },
    {
      "rank": 7,
      "team": "São Paulo",
      "chance": 24.036
    },
    {
      "rank": 8,
      "team": "Fluminense",
      "chance": 19.607
    },
    {
      "rank": 9,
      "team": "Red Bull Bragantino",
      "chance": 16.349
    },
    {
      "rank": 10,
      "team": "Internacional",
      "chance": 8.717
    },
    {
      "rank": 11,
      "team": "Ceará",
      "chance": 6.644
    },
    {
      "rank": 12,
      "team": "Atlético-MG",
      "chance": 5.31
    },
    {
      "rank": 13,
      "team": "Grêmio",
      "chance": 4.188
    },
    {
      "rank": 14,
      "team": "Corinthians",
      "chance": 3.215
    },
    {
      "rank": 15,
      "team": "Santos",
      "chance": 1.456
    },
    {
      "rank": 16,
      "team": "Vasco",
      "chance": 1.431
    },
    {
      "rank": 17,
      "team": "Juventude",
      "chance": 0.894
    },
    {
      "rank": 18,
      "team": "Vitória",
      "chance": 0.447
    },
    {
      "rank": 19,
      "team": "Fortaleza",
      "chance": 0.029
    },
    {
      "rank": 20,
      "team": "Sport",
      "chance": 0.005
    }
  ],
  "sulamericana": [
    {
      "rank": 1,
      "team": "Red Bull Bragantino",
      "chance": 62.424
    },
    {
      "rank": 2,
      "team": "São Paulo",
      "chance": 62.246
    },
    {
      "rank": 3,
      "team": "Fluminense",
      "chance": 60.64
    },
    {
      "rank": 4,
      "team": "Internacional",
      "chance": 55.117
    },
    {
      "rank": 5,
      "team": "Ceará",
      "chance": 50.347
    },
    {
      "rank": 6,
      "team": "Atlético-MG",
      "chance": 45.831
    },
    {
      "rank": 7,
      "team": "Grêmio",
      "chance": 42.414
    },
    {
      "rank": 8,
      "team": "Corinthians",
      "chance": 40.805
    },
    {
      "rank": 9,
      "team": "Mirassol",
      "chance": 30.999
    },
    {
      "rank": 10,
      "team": "Botafogo",
      "chance": 28.627
    },
    {
      "rank": 11,
      "team": "Santos",
      "chance": 26.212
    },
    {
      "rank": 12,
      "team": "Vasco",
      "chance": 25.789
    },
    {
      "rank": 13,
      "team": "Bahia",
      "chance": 23.371
    },
    {
      "rank": 14,
      "team": "Juventude",
      "chance": 20.815
    },
    {
      "rank": 15,
      "team": "Vitória",
      "chance": 15.746
    },
    {
      "rank": 16,
      "team": "Cruzeiro",
      "chance": 3.122
    },
    {
      "rank": 17,
      "team": "Fortaleza",
      "chance": 2.706
    },
    {
      "rank": 18,
      "team": "Palmeiras",
      "chance": 1.888
    },
    {
      "rank": 19,
      "team": "Sport",
      "chance": 0.535
    },
    {
      "rank": 20,
      "team": "Flamengo",
      "chance": 0.366
    }
  ],
  "permanencia": [
    {
      "rank": 1,
      "team": "Cruzeiro",
      "chance": 100
    },
    {
      "rank": 2,
      "team": "Palmeiras",
      "chance": 100
    },
    {
      "rank": 3,
      "team": "Flamengo",
      "chance": 100
    },
    {
      "rank": 4,
      "team": "Bahia",
      "chance": 99.976
    },
    {
      "rank": 5,
      "team": "Botafogo",
      "chance": 99.955
    },
    {
      "rank": 6,
      "team": "Mirassol",
      "chance": 99.925
    },
    {
      "rank": 7,
      "team": "São Paulo",
      "chance": 98.57
    },
    {
      "rank": 8,
      "team": "Fluminense",
      "chance": 97.159
    },
    {
      "rank": 9,
      "team": "Red Bull Bragantino",
      "chance": 97.055
    },
    {
      "rank": 10,
      "team": "Internacional",
      "chance": 92.648
    },
    {
      "rank": 11,
      "team": "Ceará",
      "chance": 89.644
    },
    {
      "rank": 12,
      "team": "Atlético-MG",
      "chance": 85.939
    },
    {
      "rank": 13,
      "team": "Grêmio",
      "chance": 84.207
    },
    {
      "rank": 14,
      "team": "Corinthians",
      "chance": 83.189
    },
    {
      "rank": 15,
      "team": "Santos",
      "chance": 68.581
    },
    {
      "rank": 16,
      "team": "Vasco",
      "chance": 67.654
    },
    {
      "rank": 17,
      "team": "Juventude",
      "chance": 60.36
    },
    {
      "rank": 18,
      "team": "Vitória",
      "chance": 53.395
    },
    {
      "rank": 19,
      "team": "Fortaleza",
      "chance": 16.712
    },
    {
      "rank": 20,
      "team": "Sport",
      "chance": 5.031
    }
  ],
  "rebaixamento": [
    {
      "rank": 1,
      "team": "Sport",
      "chance": 94.969
    },
    {
      "rank": 2,
      "team": "Fortaleza",
      "chance": 83.288
    },
    {
      "rank": 3,
      "team": "Vitória",
      "chance": 46.605
    },
    {
      "rank": 4,
      "team": "Juventude",
      "chance": 39.64
    },
    {
      "rank": 5,
      "team": "Vasco",
      "chance": 32.346
    },
    {
      "rank": 6,
      "team": "Santos",
      "chance": 31.419
    },
    {
      "rank": 7,
      "team": "Corinthians",
      "chance": 16.811
    },
    {
      "rank": 8,
      "team": "Grêmio",
      "chance": 15.793
    },
    {
      "rank": 9,
      "team": "Atlético-MG",
      "chance": 14.061
    },
    {
      "rank": 10,
      "team": "Ceará",
      "chance": 10.356
    },
    {
      "rank": 11,
      "team": "Internacional",
      "chance": 7.352
    },
    {
      "rank": 12,
      "team": "Red Bull Bragantino",
      "chance": 2.945
    },
    {
      "rank": 13,
      "team": "Fluminense",
      "chance": 2.841
    },
    {
      "rank": 14,
      "team": "São Paulo",
      "chance": 1.43
    },
    {
      "rank": 15,
      "team": "Mirassol",
      "chance": 0.075
    },
    {
      "rank": 16,
      "team": "Botafogo",
      "chance": 0.045
    },
    {
      "rank": 17,
      "team": "Bahia",
      "chance": 0.024
    },
    {
      "rank": 18,
      "team": "Cruzeiro",
      "chance": 0
    },
    {
      "rank": 19,
      "team": "Palmeiras",
      "chance": 0
    },
    {
      "rank": 20,
      "team": "Flamengo",
      "chance": 0
    }
  ]
},
    serieB: {
  "campeao": [
    {
      "rank": 1,
      "team": "Goiás",
      "chance": 38.914
    },
    {
      "rank": 2,
      "team": "Coritiba",
      "chance": 26.635
    },
    {
      "rank": 3,
      "team": "Chapecoense",
      "chance": 17.966
    },
    {
      "rank": 4,
      "team": "Criciúma",
      "chance": 7.318
    },
    {
      "rank": 5,
      "team": "Novorizontino",
      "chance": 1.957
    },
    {
      "rank": 6,
      "team": "Vila Nova",
      "chance": 1.408
    },
    {
      "rank": 7,
      "team": "Remo",
      "chance": 1.202
    },
    {
      "rank": 8,
      "team": "Cuiabá",
      "chance": 1.135
    },
    {
      "rank": 9,
      "team": "Avaí",
      "chance": 1.081
    },
    {
      "rank": 10,
      "team": "CRB",
      "chance": 0.971
    },
    {
      "rank": 11,
      "team": "Athletico-PR",
      "chance": 0.531
    },
    {
      "rank": 12,
      "team": "Operário-PR",
      "chance": 0.497
    },
    {
      "rank": 13,
      "team": "Ferroviária",
      "chance": 0.188
    },
    {
      "rank": 14,
      "team": "Atlético-GO",
      "chance": 0.144
    },
    {
      "rank": 15,
      "team": "Botafogo-SP",
      "chance": 0.027
    },
    {
      "rank": 16,
      "team": "Athletic-MG",
      "chance": 0.025
    },
    {
      "rank": 17,
      "team": "América-MG",
      "chance": 0.001
    },
    {
      "rank": 18,
      "team": "Volta Redonda",
      "chance": 0
    },
    {
      "rank": 19,
      "team": "Amazonas",
      "chance": 0
    },
    {
      "rank": 20,
      "team": "Paysandu",
      "chance": 0
    }
  ],
  "acesso": [
    {
      "rank": 1,
      "team": "Goiás",
      "chance": 85.926
    },
    {
      "rank": 2,
      "team": "Coritiba",
      "chance": 78.958
    },
    {
      "rank": 3,
      "team": "Chapecoense",
      "chance": 67.847
    },
    {
      "rank": 4,
      "team": "Criciúma",
      "chance": 46.667
    },
    {
      "rank": 5,
      "team": "Novorizontino",
      "chance": 21.749
    },
    {
      "rank": 6,
      "team": "Vila Nova",
      "chance": 15.903
    },
    {
      "rank": 7,
      "team": "Remo",
      "chance": 15.352
    },
    {
      "rank": 8,
      "team": "Cuiabá",
      "chance": 14.381
    },
    {
      "rank": 9,
      "team": "CRB",
      "chance": 13.146
    },
    {
      "rank": 10,
      "team": "Avaí",
      "chance": 12.99
    },
    {
      "rank": 11,
      "team": "Athletico-PR",
      "chance": 8.649
    },
    {
      "rank": 12,
      "team": "Operário-PR",
      "chance": 8.616
    },
    {
      "rank": 13,
      "team": "Ferroviária",
      "chance": 4.265
    },
    {
      "rank": 14,
      "team": "Atlético-GO",
      "chance": 3.355
    },
    {
      "rank": 15,
      "team": "Athletic-MG",
      "chance": 1.101
    },
    {
      "rank": 16,
      "team": "Botafogo-SP",
      "chance": 0.888
    },
    {
      "rank": 17,
      "team": "América-MG",
      "chance": 0.087
    },
    {
      "rank": 18,
      "team": "Amazonas",
      "chance": 0.059
    },
    {
      "rank": 19,
      "team": "Volta Redonda",
      "chance": 0.053
    },
    {
      "rank": 20,
      "team": "Paysandu",
      "chance": 0.008
    }
  ],
  "permanencia": [
    {
      "rank": 1,
      "team": "Athletico-PR",
      "chance": 86.707
    },
    {
      "rank": 2,
      "team": "Operário-PR",
      "chance": 86.659
    },
    {
      "rank": 3,
      "team": "CRB",
      "chance": 84.172
    },
    {
      "rank": 4,
      "team": "Atlético-GO",
      "chance": 83.991
    },
    {
      "rank": 5,
      "team": "Ferroviária",
      "chance": 83.938
    },
    {
      "rank": 6,
      "team": "Avaí",
      "chance": 83.7
    },
    {
      "rank": 7,
      "team": "Cuiabá",
      "chance": 82.657
    },
    {
      "rank": 8,
      "team": "Remo",
      "chance": 82.352
    },
    {
      "rank": 9,
      "team": "Vila Nova",
      "chance": 81.397
    },
    {
      "rank": 10,
      "team": "Novorizontino",
      "chance": 77.103
    },
    {
      "rank": 11,
      "team": "Athletic-MG",
      "chance": 71.301
    },
    {
      "rank": 12,
      "team": "Botafogo-SP",
      "chance": 68.846
    },
    {
      "rank": 13,
      "team": "Criciúma",
      "chance": 53.19
    },
    {
      "rank": 14,
      "team": "América-MG",
      "chance": 32.531
    },
    {
      "rank": 15,
      "team": "Amazonas",
      "chance": 32.176
    },
    {
      "rank": 16,
      "team": "Chapecoense",
      "chance": 32.133
    },
    {
      "rank": 17,
      "team": "Volta Redonda",
      "chance": 27.468
    },
    {
      "rank": 18,
      "team": "Coritiba",
      "chance": 21.041
    },
    {
      "rank": 19,
      "team": "Paysandu",
      "chance": 14.564
    },
    {
      "rank": 20,
      "team": "Goiás",
      "chance": 14.074
    }
  ],
  "rebaixamento": [
    {
      "rank": 1,
      "team": "Paysandu",
      "chance": 85.428
    },
    {
      "rank": 2,
      "team": "Volta Redonda",
      "chance": 72.479
    },
    {
      "rank": 3,
      "team": "Amazonas",
      "chance": 67.765
    },
    {
      "rank": 4,
      "team": "América-MG",
      "chance": 67.382
    },
    {
      "rank": 5,
      "team": "Botafogo-SP",
      "chance": 30.266
    },
    {
      "rank": 6,
      "team": "Athletic-MG",
      "chance": 27.598
    },
    {
      "rank": 7,
      "team": "Atlético-GO",
      "chance": 12.654
    },
    {
      "rank": 8,
      "team": "Ferroviária",
      "chance": 11.797
    },
    {
      "rank": 9,
      "team": "Operário-PR",
      "chance": 4.725
    },
    {
      "rank": 10,
      "team": "Athletico-PR",
      "chance": 4.644
    },
    {
      "rank": 11,
      "team": "Avaí",
      "chance": 3.31
    },
    {
      "rank": 12,
      "team": "Cuiabá",
      "chance": 2.962
    },
    {
      "rank": 13,
      "team": "Vila Nova",
      "chance": 2.7
    },
    {
      "rank": 14,
      "team": "CRB",
      "chance": 2.682
    },
    {
      "rank": 15,
      "team": "Remo",
      "chance": 2.296
    },
    {
      "rank": 16,
      "team": "Novorizontino",
      "chance": 1.148
    },
    {
      "rank": 17,
      "team": "Criciúma",
      "chance": 0.143
    },
    {
      "rank": 18,
      "team": "Chapecoense",
      "chance": 0.02
    },
    {
      "rank": 19,
      "team": "Coritiba",
      "chance": 0.001
    },
    {
      "rank": 20,
      "team": "Goiás",
      "chance": 0
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
