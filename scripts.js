// ===================================================================================
//  ÁREA DE DADOS - ATUALIZE AS PROBABILIDADES AQUI
// ===================================================================================

const probabilidades = {
    serieA: {
  "campeao": [
    {
      "rank": 1,
      "team": "Flamengo",
      "chance": 53.401
    },
    {
      "rank": 2,
      "team": "Palmeiras",
      "chance": 28.846
    },
    {
      "rank": 3,
      "team": "Cruzeiro",
      "chance": 10.116
    },
    {
      "rank": 4,
      "team": "Bahia",
      "chance": 4.845
    },
    {
      "rank": 5,
      "team": "Botafogo",
      "chance": 1.17
    },
    {
      "rank": 6,
      "team": "Mirassol",
      "chance": 1.057
    },
    {
      "rank": 7,
      "team": "São Paulo",
      "chance": 0.226
    },
    {
      "rank": 8,
      "team": "Fluminense",
      "chance": 0.153
    },
    {
      "rank": 9,
      "team": "Red Bull Bragantino",
      "chance": 0.119
    },
    {
      "rank": 10,
      "team": "Ceará",
      "chance": 0.03
    },
    {
      "rank": 11,
      "team": "Atlético-MG",
      "chance": 0.019
    },
    {
      "rank": 12,
      "team": "Internacional",
      "chance": 0.007
    },
    {
      "rank": 13,
      "team": "Corinthians",
      "chance": 0.006
    },
    {
      "rank": 14,
      "team": "Grêmio",
      "chance": 0.004
    },
    {
      "rank": 15,
      "team": "Vasco",
      "chance": 0.001
    },
    {
      "rank": 16,
      "team": "Santos",
      "chance": 0
    },
    {
      "rank": 17,
      "team": "Vitória",
      "chance": 0
    },
    {
      "rank": 18,
      "team": "Juventude",
      "chance": 0
    },
    {
      "rank": 19,
      "team": "Fortaleza",
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
      "chance": 99.589
    },
    {
      "rank": 2,
      "team": "Palmeiras",
      "chance": 98.071
    },
    {
      "rank": 3,
      "team": "Cruzeiro",
      "chance": 92.718
    },
    {
      "rank": 4,
      "team": "Bahia",
      "chance": 81.743
    },
    {
      "rank": 5,
      "team": "Botafogo",
      "chance": 56.652
    },
    {
      "rank": 6,
      "team": "Mirassol",
      "chance": 53.982
    },
    {
      "rank": 7,
      "team": "São Paulo",
      "chance": 32.869
    },
    {
      "rank": 8,
      "team": "Red Bull Bragantino",
      "chance": 23.774
    },
    {
      "rank": 9,
      "team": "Fluminense",
      "chance": 22.382
    },
    {
      "rank": 10,
      "team": "Ceará",
      "chance": 10.724
    },
    {
      "rank": 11,
      "team": "Atlético-MG",
      "chance": 8.98
    },
    {
      "rank": 12,
      "team": "Internacional",
      "chance": 5.498
    },
    {
      "rank": 13,
      "team": "Grêmio",
      "chance": 5.163
    },
    {
      "rank": 14,
      "team": "Corinthians",
      "chance": 4.347
    },
    {
      "rank": 15,
      "team": "Santos",
      "chance": 1.953
    },
    {
      "rank": 16,
      "team": "Vasco",
      "chance": 0.731
    },
    {
      "rank": 17,
      "team": "Juventude",
      "chance": 0.509
    },
    {
      "rank": 18,
      "team": "Vitória",
      "chance": 0.217
    },
    {
      "rank": 19,
      "team": "Fortaleza",
      "chance": 0.09
    },
    {
      "rank": 20,
      "team": "Sport",
      "chance": 0.008
    }
  ],
  "sulamericana": [
    {
      "rank": 1,
      "team": "Red Bull Bragantino",
      "chance": 60.873
    },
    {
      "rank": 2,
      "team": "Fluminense",
      "chance": 58.881
    },
    {
      "rank": 3,
      "team": "São Paulo",
      "chance": 57.666
    },
    {
      "rank": 4,
      "team": "Ceará",
      "chance": 55.369
    },
    {
      "rank": 5,
      "team": "Atlético-MG",
      "chance": 51.323
    },
    {
      "rank": 6,
      "team": "Internacional",
      "chance": 45.122
    },
    {
      "rank": 7,
      "team": "Grêmio",
      "chance": 43.958
    },
    {
      "rank": 8,
      "team": "Corinthians",
      "chance": 42.522
    },
    {
      "rank": 9,
      "team": "Mirassol",
      "chance": 41.923
    },
    {
      "rank": 10,
      "team": "Botafogo",
      "chance": 39.773
    },
    {
      "rank": 11,
      "team": "Santos",
      "chance": 28.473
    },
    {
      "rank": 12,
      "team": "Bahia",
      "chance": 17.722
    },
    {
      "rank": 13,
      "team": "Vasco",
      "chance": 17.449
    },
    {
      "rank": 14,
      "team": "Juventude",
      "chance": 13.549
    },
    {
      "rank": 15,
      "team": "Vitória",
      "chance": 9.905
    },
    {
      "rank": 16,
      "team": "Cruzeiro",
      "chance": 7.217
    },
    {
      "rank": 17,
      "team": "Fortaleza",
      "chance": 4.793
    },
    {
      "rank": 18,
      "team": "Palmeiras",
      "chance": 1.924
    },
    {
      "rank": 19,
      "team": "Sport",
      "chance": 1.147
    },
    {
      "rank": 20,
      "team": "Flamengo",
      "chance": 0.411
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
      "team": "Palmeiras",
      "chance": 100
    },
    {
      "rank": 3,
      "team": "Cruzeiro",
      "chance": 100
    },
    {
      "rank": 4,
      "team": "Bahia",
      "chance": 99.99
    },
    {
      "rank": 5,
      "team": "Botafogo",
      "chance": 99.819
    },
    {
      "rank": 6,
      "team": "Mirassol",
      "chance": 99.796
    },
    {
      "rank": 7,
      "team": "São Paulo",
      "chance": 99.3
    },
    {
      "rank": 8,
      "team": "Red Bull Bragantino",
      "chance": 98.453
    },
    {
      "rank": 9,
      "team": "Fluminense",
      "chance": 97.597
    },
    {
      "rank": 10,
      "team": "Ceará",
      "chance": 93.768
    },
    {
      "rank": 11,
      "team": "Atlético-MG",
      "chance": 91.266
    },
    {
      "rank": 12,
      "team": "Internacional",
      "chance": 87.459
    },
    {
      "rank": 13,
      "team": "Grêmio",
      "chance": 87.046
    },
    {
      "rank": 14,
      "team": "Corinthians",
      "chance": 86.339
    },
    {
      "rank": 15,
      "team": "Santos",
      "chance": 73.094
    },
    {
      "rank": 16,
      "team": "Vasco",
      "chance": 57.459
    },
    {
      "rank": 17,
      "team": "Juventude",
      "chance": 49.73
    },
    {
      "rank": 18,
      "team": "Vitória",
      "chance": 43.133
    },
    {
      "rank": 19,
      "team": "Fortaleza",
      "chance": 26.061
    },
    {
      "rank": 20,
      "team": "Sport",
      "chance": 9.69
    }
  ],
  "rebaixamento": [
    {
      "rank": 1,
      "team": "Sport",
      "chance": 90.31
    },
    {
      "rank": 2,
      "team": "Fortaleza",
      "chance": 73.939
    },
    {
      "rank": 3,
      "team": "Vitória",
      "chance": 56.867
    },
    {
      "rank": 4,
      "team": "Juventude",
      "chance": 50.27
    },
    {
      "rank": 5,
      "team": "Vasco",
      "chance": 42.541
    },
    {
      "rank": 6,
      "team": "Santos",
      "chance": 26.906
    },
    {
      "rank": 7,
      "team": "Corinthians",
      "chance": 13.661
    },
    {
      "rank": 8,
      "team": "Grêmio",
      "chance": 12.954
    },
    {
      "rank": 9,
      "team": "Internacional",
      "chance": 12.541
    },
    {
      "rank": 10,
      "team": "Atlético-MG",
      "chance": 8.734
    },
    {
      "rank": 11,
      "team": "Ceará",
      "chance": 6.232
    },
    {
      "rank": 12,
      "team": "Fluminense",
      "chance": 2.403
    },
    {
      "rank": 13,
      "team": "Red Bull Bragantino",
      "chance": 1.547
    },
    {
      "rank": 14,
      "team": "São Paulo",
      "chance": 0.7
    },
    {
      "rank": 15,
      "team": "Mirassol",
      "chance": 0.204
    },
    {
      "rank": 16,
      "team": "Botafogo",
      "chance": 0.181
    },
    {
      "rank": 17,
      "team": "Bahia",
      "chance": 0.01
    },
    {
      "rank": 18,
      "team": "Flamengo",
      "chance": 0
    },
    {
      "rank": 19,
      "team": "Palmeiras",
      "chance": 0
    },
    {
      "rank": 20,
      "team": "Cruzeiro",
      "chance": 0
    }
  ]
},
    serieB: {
  "campeao": [
    {
      "rank": 1,
      "team": "Goiás",
      "chance": 43.696
    },
    {
      "rank": 2,
      "team": "Coritiba",
      "chance": 30.542
    },
    {
      "rank": 3,
      "team": "Chapecoense",
      "chance": 14.363
    },
    {
      "rank": 4,
      "team": "Criciúma",
      "chance": 3.16
    },
    {
      "rank": 5,
      "team": "Novorizontino",
      "chance": 2.778
    },
    {
      "rank": 6,
      "team": "Remo",
      "chance": 1.809
    },
    {
      "rank": 7,
      "team": "Vila Nova",
      "chance": 1.06
    },
    {
      "rank": 8,
      "team": "Cuiabá",
      "chance": 0.866
    },
    {
      "rank": 9,
      "team": "Avaí",
      "chance": 0.758
    },
    {
      "rank": 10,
      "team": "CRB",
      "chance": 0.36
    },
    {
      "rank": 11,
      "team": "Athletico-PR",
      "chance": 0.219
    },
    {
      "rank": 12,
      "team": "Operário-PR",
      "chance": 0.17
    },
    {
      "rank": 13,
      "team": "Ferroviária",
      "chance": 0.158
    },
    {
      "rank": 14,
      "team": "Atlético-GO",
      "chance": 0.036
    },
    {
      "rank": 15,
      "team": "Athletic-MG",
      "chance": 0.013
    },
    {
      "rank": 16,
      "team": "Botafogo-SP",
      "chance": 0.008
    },
    {
      "rank": 17,
      "team": "Amazonas",
      "chance": 0.003
    },
    {
      "rank": 18,
      "team": "Volta Redonda",
      "chance": 0.001
    },
    {
      "rank": 19,
      "team": "Paysandu",
      "chance": 0
    },
    {
      "rank": 20,
      "team": "América-MG",
      "chance": 0
    }
  ],
  "acesso": [
    {
      "rank": 1,
      "team": "Goiás",
      "chance": 90.529
    },
    {
      "rank": 2,
      "team": "Coritiba",
      "chance": 85.248
    },
    {
      "rank": 3,
      "team": "Chapecoense",
      "chance": 68.108
    },
    {
      "rank": 4,
      "team": "Criciúma",
      "chance": 32.834
    },
    {
      "rank": 5,
      "team": "Novorizontino",
      "chance": 31.181
    },
    {
      "rank": 6,
      "team": "Remo",
      "chance": 22.937
    },
    {
      "rank": 7,
      "team": "Vila Nova",
      "chance": 16.058
    },
    {
      "rank": 8,
      "team": "Cuiabá",
      "chance": 14.7
    },
    {
      "rank": 9,
      "team": "Avaí",
      "chance": 13.125
    },
    {
      "rank": 10,
      "team": "CRB",
      "chance": 7.669
    },
    {
      "rank": 11,
      "team": "Athletico-PR",
      "chance": 5.009
    },
    {
      "rank": 12,
      "team": "Operário-PR",
      "chance": 4.98
    },
    {
      "rank": 13,
      "team": "Ferroviária",
      "chance": 4.374
    },
    {
      "rank": 14,
      "team": "Atlético-GO",
      "chance": 1.776
    },
    {
      "rank": 15,
      "team": "Athletic-MG",
      "chance": 0.532
    },
    {
      "rank": 16,
      "team": "Botafogo-SP",
      "chance": 0.447
    },
    {
      "rank": 17,
      "team": "Amazonas",
      "chance": 0.217
    },
    {
      "rank": 18,
      "team": "Volta Redonda",
      "chance": 0.138
    },
    {
      "rank": 19,
      "team": "América-MG",
      "chance": 0.099
    },
    {
      "rank": 20,
      "team": "Paysandu",
      "chance": 0.039
    }
  ],
  "permanencia": [
    {
      "rank": 1,
      "team": "CRB",
      "chance": 86.293
    },
    {
      "rank": 2,
      "team": "Operário-PR",
      "chance": 85.543
    },
    {
      "rank": 3,
      "team": "Athletico-PR",
      "chance": 85.322
    },
    {
      "rank": 4,
      "team": "Ferroviária",
      "chance": 84.756
    },
    {
      "rank": 5,
      "team": "Avaí",
      "chance": 83.897
    },
    {
      "rank": 6,
      "team": "Cuiabá",
      "chance": 82.773
    },
    {
      "rank": 7,
      "team": "Vila Nova",
      "chance": 81.673
    },
    {
      "rank": 8,
      "team": "Atlético-GO",
      "chance": 77.172
    },
    {
      "rank": 9,
      "team": "Remo",
      "chance": 75.968
    },
    {
      "rank": 10,
      "team": "Novorizontino",
      "chance": 68.272
    },
    {
      "rank": 11,
      "team": "Criciúma",
      "chance": 66.732
    },
    {
      "rank": 12,
      "team": "Athletic-MG",
      "chance": 60.415
    },
    {
      "rank": 13,
      "team": "Botafogo-SP",
      "chance": 57.609
    },
    {
      "rank": 14,
      "team": "Amazonas",
      "chance": 46.723
    },
    {
      "rank": 15,
      "team": "Volta Redonda",
      "chance": 40.547
    },
    {
      "rank": 16,
      "team": "América-MG",
      "chance": 35.502
    },
    {
      "rank": 17,
      "team": "Chapecoense",
      "chance": 31.885
    },
    {
      "rank": 18,
      "team": "Paysandu",
      "chance": 24.695
    },
    {
      "rank": 19,
      "team": "Coritiba",
      "chance": 14.752
    },
    {
      "rank": 20,
      "team": "Goiás",
      "chance": 9.471
    }
  ],
  "rebaixamento": [
    {
      "rank": 1,
      "team": "Paysandu",
      "chance": 75.266
    },
    {
      "rank": 2,
      "team": "América-MG",
      "chance": 64.399
    },
    {
      "rank": 3,
      "team": "Volta Redonda",
      "chance": 59.315
    },
    {
      "rank": 4,
      "team": "Amazonas",
      "chance": 53.06
    },
    {
      "rank": 5,
      "team": "Botafogo-SP",
      "chance": 41.944
    },
    {
      "rank": 6,
      "team": "Athletic-MG",
      "chance": 39.053
    },
    {
      "rank": 7,
      "team": "Atlético-GO",
      "chance": 21.052
    },
    {
      "rank": 8,
      "team": "Ferroviária",
      "chance": 10.87
    },
    {
      "rank": 9,
      "team": "Athletico-PR",
      "chance": 9.669
    },
    {
      "rank": 10,
      "team": "Operário-PR",
      "chance": 9.477
    },
    {
      "rank": 11,
      "team": "CRB",
      "chance": 6.038
    },
    {
      "rank": 12,
      "team": "Avaí",
      "chance": 2.978
    },
    {
      "rank": 13,
      "team": "Cuiabá",
      "chance": 2.527
    },
    {
      "rank": 14,
      "team": "Vila Nova",
      "chance": 2.269
    },
    {
      "rank": 15,
      "team": "Remo",
      "chance": 1.095
    },
    {
      "rank": 16,
      "team": "Novorizontino",
      "chance": 0.547
    },
    {
      "rank": 17,
      "team": "Criciúma",
      "chance": 0.434
    },
    {
      "rank": 18,
      "team": "Chapecoense",
      "chance": 0.007
    },
    {
      "rank": 19,
      "team": "Goiás",
      "chance": 0
    },
    {
      "rank": 20,
      "team": "Coritiba",
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
