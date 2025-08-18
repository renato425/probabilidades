// ===================================================================================
//  ÁREA DE DADOS - ATUALIZE AS PROBABILIDADES AQUI
// ===================================================================================

const probabilidades = {
    serieA:{
  "campeao": [
    {
      "rank": 1,
      "team": "Flamengo",
      "chance": 51.321
    },
    {
      "rank": 2,
      "team": "Palmeiras",
      "chance": 28.028
    },
    {
      "rank": 3,
      "team": "Cruzeiro",
      "chance": 11.797
    },
    {
      "rank": 4,
      "team": "Bahia",
      "chance": 4.894
    },
    {
      "rank": 5,
      "team": "Mirassol",
      "chance": 1.434
    },
    {
      "rank": 6,
      "team": "Botafogo",
      "chance": 1.176
    },
    {
      "rank": 7,
      "team": "Fluminense",
      "chance": 0.617
    },
    {
      "rank": 8,
      "team": "São Paulo",
      "chance": 0.248
    },
    {
      "rank": 9,
      "team": "Red Bull Bragantino",
      "chance": 0.138
    },
    {
      "rank": 10,
      "team": "Atlético-MG",
      "chance": 0.112
    },
    {
      "rank": 11,
      "team": "Ceará",
      "chance": 0.104
    },
    {
      "rank": 12,
      "team": "Internacional",
      "chance": 0.058
    },
    {
      "rank": 13,
      "team": "Grêmio",
      "chance": 0.04
    },
    {
      "rank": 14,
      "team": "Santos",
      "chance": 0.014
    },
    {
      "rank": 15,
      "team": "Vasco",
      "chance": 0.01
    },
    {
      "rank": 16,
      "team": "Corinthians",
      "chance": 0.008
    },
    {
      "rank": 17,
      "team": "Juventude",
      "chance": 0.001
    },
    {
      "rank": 18,
      "team": "Vitória",
      "chance": 0
    },
    {
      "rank": 19,
      "team": "Sport",
      "chance": 0
    },
    {
      "rank": 20,
      "team": "Fortaleza",
      "chance": 0
    }
  ],
  "libertadores": [
    {
      "rank": 1,
      "team": "Flamengo",
      "chance": 99.121
    },
    {
      "rank": 2,
      "team": "Palmeiras",
      "chance": 96.606
    },
    {
      "rank": 3,
      "team": "Cruzeiro",
      "chance": 89.454
    },
    {
      "rank": 4,
      "team": "Bahia",
      "chance": 74.953
    },
    {
      "rank": 5,
      "team": "Mirassol",
      "chance": 48.106
    },
    {
      "rank": 6,
      "team": "Botafogo",
      "chance": 47.801
    },
    {
      "rank": 7,
      "team": "Fluminense",
      "chance": 34.703
    },
    {
      "rank": 8,
      "team": "São Paulo",
      "chance": 26.807
    },
    {
      "rank": 9,
      "team": "Red Bull Bragantino",
      "chance": 18.884
    },
    {
      "rank": 10,
      "team": "Atlético-MG",
      "chance": 16.21
    },
    {
      "rank": 11,
      "team": "Ceará",
      "chance": 15.218
    },
    {
      "rank": 12,
      "team": "Internacional",
      "chance": 10.922
    },
    {
      "rank": 13,
      "team": "Grêmio",
      "chance": 8
    },
    {
      "rank": 14,
      "team": "Santos",
      "chance": 4.666
    },
    {
      "rank": 15,
      "team": "Vasco",
      "chance": 3.642
    },
    {
      "rank": 16,
      "team": "Corinthians",
      "chance": 3.071
    },
    {
      "rank": 17,
      "team": "Juventude",
      "chance": 0.759
    },
    {
      "rank": 18,
      "team": "Vitória",
      "chance": 0.751
    },
    {
      "rank": 19,
      "team": "Fortaleza",
      "chance": 0.29
    },
    {
      "rank": 20,
      "team": "Sport",
      "chance": 0.036
    }
  ],
  "sulamericana": [
    {
      "rank": 1,
      "team": "São Paulo",
      "chance": 54.577
    },
    {
      "rank": 2,
      "team": "Red Bull Bragantino",
      "chance": 53.932
    },
    {
      "rank": 3,
      "team": "Ceará",
      "chance": 50.951
    },
    {
      "rank": 4,
      "team": "Atlético-MG",
      "chance": 50.696
    },
    {
      "rank": 5,
      "team": "Fluminense",
      "chance": 50.444
    },
    {
      "rank": 6,
      "team": "Internacional",
      "chance": 47.197
    },
    {
      "rank": 7,
      "team": "Botafogo",
      "chance": 43.772
    },
    {
      "rank": 8,
      "team": "Mirassol",
      "chance": 43.008
    },
    {
      "rank": 9,
      "team": "Grêmio",
      "chance": 42.345
    },
    {
      "rank": 10,
      "team": "Santos",
      "chance": 32.988
    },
    {
      "rank": 11,
      "team": "Corinthians",
      "chance": 29.38
    },
    {
      "rank": 12,
      "team": "Vasco",
      "chance": 28.537
    },
    {
      "rank": 13,
      "team": "Bahia",
      "chance": 23.267
    },
    {
      "rank": 14,
      "team": "Vitória",
      "chance": 13.644
    },
    {
      "rank": 15,
      "team": "Juventude",
      "chance": 11.803
    },
    {
      "rank": 16,
      "team": "Cruzeiro",
      "chance": 10.215
    },
    {
      "rank": 17,
      "team": "Fortaleza",
      "chance": 7.037
    },
    {
      "rank": 18,
      "team": "Palmeiras",
      "chance": 3.358
    },
    {
      "rank": 19,
      "team": "Sport",
      "chance": 1.971
    },
    {
      "rank": 20,
      "team": "Flamengo",
      "chance": 0.878
    }
  ],
  "permanencia": [
    {
      "rank": 1,
      "team": "Flamengo",
      "chance": 100
    },
    {
      "rank": 2,
      "team": "Cruzeiro",
      "chance": 99.999
    },
    {
      "rank": 3,
      "team": "Palmeiras",
      "chance": 99.998
    },
    {
      "rank": 4,
      "team": "Bahia",
      "chance": 99.912
    },
    {
      "rank": 5,
      "team": "Botafogo",
      "chance": 99.128
    },
    {
      "rank": 6,
      "team": "Mirassol",
      "chance": 99.026
    },
    {
      "rank": 7,
      "team": "Fluminense",
      "chance": 97.911
    },
    {
      "rank": 8,
      "team": "São Paulo",
      "chance": 97.443
    },
    {
      "rank": 9,
      "team": "Red Bull Bragantino",
      "chance": 94.943
    },
    {
      "rank": 10,
      "team": "Ceará",
      "chance": 92.573
    },
    {
      "rank": 11,
      "team": "Atlético-MG",
      "chance": 92.49
    },
    {
      "rank": 12,
      "team": "Internacional",
      "chance": 89.366
    },
    {
      "rank": 13,
      "team": "Grêmio",
      "chance": 85.317
    },
    {
      "rank": 14,
      "team": "Santos",
      "chance": 76.021
    },
    {
      "rank": 15,
      "team": "Corinthians",
      "chance": 72.525
    },
    {
      "rank": 16,
      "team": "Vasco",
      "chance": 70.426
    },
    {
      "rank": 17,
      "team": "Vitória",
      "chance": 48.089
    },
    {
      "rank": 18,
      "team": "Juventude",
      "chance": 41.933
    },
    {
      "rank": 19,
      "team": "Fortaleza",
      "chance": 30.727
    },
    {
      "rank": 20,
      "team": "Sport",
      "chance": 12.173
    }
  ],
  "rebaixamento": [
    {
      "rank": 1,
      "team": "Sport",
      "chance": 87.827
    },
    {
      "rank": 2,
      "team": "Fortaleza",
      "chance": 69.273
    },
    {
      "rank": 3,
      "team": "Juventude",
      "chance": 58.067
    },
    {
      "rank": 4,
      "team": "Vitória",
      "chance": 51.911
    },
    {
      "rank": 5,
      "team": "Vasco",
      "chance": 29.574
    },
    {
      "rank": 6,
      "team": "Corinthians",
      "chance": 27.475
    },
    {
      "rank": 7,
      "team": "Santos",
      "chance": 23.979
    },
    {
      "rank": 8,
      "team": "Grêmio",
      "chance": 14.683
    },
    {
      "rank": 9,
      "team": "Internacional",
      "chance": 10.634
    },
    {
      "rank": 10,
      "team": "Atlético-MG",
      "chance": 7.51
    },
    {
      "rank": 11,
      "team": "Ceará",
      "chance": 7.427
    },
    {
      "rank": 12,
      "team": "Red Bull Bragantino",
      "chance": 5.057
    },
    {
      "rank": 13,
      "team": "São Paulo",
      "chance": 2.557
    },
    {
      "rank": 14,
      "team": "Fluminense",
      "chance": 2.089
    },
    {
      "rank": 15,
      "team": "Mirassol",
      "chance": 0.974
    },
    {
      "rank": 16,
      "team": "Botafogo",
      "chance": 0.872
    },
    {
      "rank": 17,
      "team": "Bahia",
      "chance": 0.088
    },
    {
      "rank": 18,
      "team": "Palmeiras",
      "chance": 0.002
    },
    {
      "rank": 19,
      "team": "Cruzeiro",
      "chance": 0.001
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
      "team": "Coritiba",
      "chance": 38.378
    },
    {
      "rank": 2,
      "team": "Goiás",
      "chance": 32.239
    },
    {
      "rank": 3,
      "team": "Chapecoense",
      "chance": 10.124
    },
    {
      "rank": 4,
      "team": "Novorizontino",
      "chance": 6
    },
    {
      "rank": 5,
      "team": "Criciúma",
      "chance": 2.771
    },
    {
      "rank": 6,
      "team": "Remo",
      "chance": 2.731
    },
    {
      "rank": 7,
      "team": "Vila Nova",
      "chance": 2.497
    },
    {
      "rank": 8,
      "team": "Avaí",
      "chance": 2.446
    },
    {
      "rank": 9,
      "team": "Cuiabá",
      "chance": 1.459
    },
    {
      "rank": 10,
      "team": "CRB",
      "chance": 0.55
    },
    {
      "rank": 11,
      "team": "Ferroviária",
      "chance": 0.293
    },
    {
      "rank": 12,
      "team": "Operário-PR",
      "chance": 0.2
    },
    {
      "rank": 13,
      "team": "Atlético-GO",
      "chance": 0.109
    },
    {
      "rank": 14,
      "team": "Athletico-PR",
      "chance": 0.098
    },
    {
      "rank": 15,
      "team": "Athletic-MG",
      "chance": 0.073
    },
    {
      "rank": 16,
      "team": "Volta Redonda",
      "chance": 0.021
    },
    {
      "rank": 17,
      "team": "América-MG",
      "chance": 0.005
    },
    {
      "rank": 18,
      "team": "Botafogo-SP",
      "chance": 0.003
    },
    {
      "rank": 19,
      "team": "Paysandu",
      "chance": 0.002
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
      "team": "Coritiba",
      "chance": 85.807
    },
    {
      "rank": 2,
      "team": "Goiás",
      "chance": 81.574
    },
    {
      "rank": 3,
      "team": "Chapecoense",
      "chance": 53.376
    },
    {
      "rank": 4,
      "team": "Novorizontino",
      "chance": 41.197
    },
    {
      "rank": 5,
      "team": "Remo",
      "chance": 25.606
    },
    {
      "rank": 6,
      "team": "Criciúma",
      "chance": 24.696
    },
    {
      "rank": 7,
      "team": "Vila Nova",
      "chance": 23.357
    },
    {
      "rank": 8,
      "team": "Avaí",
      "chance": 22.661
    },
    {
      "rank": 9,
      "team": "Cuiabá",
      "chance": 16.727
    },
    {
      "rank": 10,
      "team": "CRB",
      "chance": 7.703
    },
    {
      "rank": 11,
      "team": "Ferroviária",
      "chance": 5.518
    },
    {
      "rank": 12,
      "team": "Operário-PR",
      "chance": 3.483
    },
    {
      "rank": 13,
      "team": "Athletico-PR",
      "chance": 2.735
    },
    {
      "rank": 14,
      "team": "Atlético-GO",
      "chance": 2.481
    },
    {
      "rank": 15,
      "team": "Athletic-MG",
      "chance": 1.781
    },
    {
      "rank": 16,
      "team": "Volta Redonda",
      "chance": 0.576
    },
    {
      "rank": 17,
      "team": "América-MG",
      "chance": 0.262
    },
    {
      "rank": 18,
      "team": "Botafogo-SP",
      "chance": 0.213
    },
    {
      "rank": 19,
      "team": "Amazonas",
      "chance": 0.136
    },
    {
      "rank": 20,
      "team": "Paysandu",
      "chance": 0.111
    }
  ],
  "permanencia": [
    {
      "rank": 1,
      "team": "Ferroviária",
      "chance": 84.265
    },
    {
      "rank": 2,
      "team": "CRB",
      "chance": 83.858
    },
    {
      "rank": 3,
      "team": "Cuiabá",
      "chance": 80.807
    },
    {
      "rank": 4,
      "team": "Operário-PR",
      "chance": 79.706
    },
    {
      "rank": 5,
      "team": "Athletico-PR",
      "chance": 78.903
    },
    {
      "rank": 6,
      "team": "Atlético-GO",
      "chance": 77.967
    },
    {
      "rank": 7,
      "team": "Avaí",
      "chance": 75.565
    },
    {
      "rank": 8,
      "team": "Vila Nova",
      "chance": 75.181
    },
    {
      "rank": 9,
      "team": "Criciúma",
      "chance": 73.782
    },
    {
      "rank": 10,
      "team": "Remo",
      "chance": 73.176
    },
    {
      "rank": 11,
      "team": "Athletic-MG",
      "chance": 70.33
    },
    {
      "rank": 12,
      "team": "Novorizontino",
      "chance": 58.496
    },
    {
      "rank": 13,
      "team": "Volta Redonda",
      "chance": 53.829
    },
    {
      "rank": 14,
      "team": "Chapecoense",
      "chance": 46.514
    },
    {
      "rank": 15,
      "team": "América-MG",
      "chance": 45.287
    },
    {
      "rank": 16,
      "team": "Botafogo-SP",
      "chance": 42.675
    },
    {
      "rank": 17,
      "team": "Paysandu",
      "chance": 33.53
    },
    {
      "rank": 18,
      "team": "Amazonas",
      "chance": 33.512
    },
    {
      "rank": 19,
      "team": "Goiás",
      "chance": 18.425
    },
    {
      "rank": 20,
      "team": "Coritiba",
      "chance": 14.192
    }
  ],
  "rebaixamento": [
    {
      "rank": 1,
      "team": "Paysandu",
      "chance": 66.359
    },
    {
      "rank": 2,
      "team": "Amazonas",
      "chance": 66.352
    },
    {
      "rank": 3,
      "team": "Botafogo-SP",
      "chance": 57.112
    },
    {
      "rank": 4,
      "team": "América-MG",
      "chance": 54.451
    },
    {
      "rank": 5,
      "team": "Volta Redonda",
      "chance": 45.595
    },
    {
      "rank": 6,
      "team": "Athletic-MG",
      "chance": 27.889
    },
    {
      "rank": 7,
      "team": "Atlético-GO",
      "chance": 19.552
    },
    {
      "rank": 8,
      "team": "Athletico-PR",
      "chance": 18.362
    },
    {
      "rank": 9,
      "team": "Operário-PR",
      "chance": 16.811
    },
    {
      "rank": 10,
      "team": "Ferroviária",
      "chance": 10.217
    },
    {
      "rank": 11,
      "team": "CRB",
      "chance": 8.439
    },
    {
      "rank": 12,
      "team": "Cuiabá",
      "chance": 2.466
    },
    {
      "rank": 13,
      "team": "Avaí",
      "chance": 1.774
    },
    {
      "rank": 14,
      "team": "Criciúma",
      "chance": 1.522
    },
    {
      "rank": 15,
      "team": "Vila Nova",
      "chance": 1.462
    },
    {
      "rank": 16,
      "team": "Remo",
      "chance": 1.218
    },
    {
      "rank": 17,
      "team": "Novorizontino",
      "chance": 0.307
    },
    {
      "rank": 18,
      "team": "Chapecoense",
      "chance": 0.11
    },
    {
      "rank": 19,
      "team": "Coritiba",
      "chance": 0.001
    },
    {
      "rank": 20,
      "team": "Goiás",
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
