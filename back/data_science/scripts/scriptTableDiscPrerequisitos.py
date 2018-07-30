import pandas as pd

df_disciplinas = pd.read_csv('../componentes-semestres.csv')
df_disciplinas = df_disciplinas.fillna('-')

coluna_periodo = df_disciplinas['semestre_oferta']
df_newTable = df_disciplinas[['codigo', 'nome']]
df_newTable['periodo'] = coluna_periodo
df_newTable['pre_requisito'] = '-'
df_newTable['nome_prereq'] = '-'

for i in df_newTable['codigo']:# disciplinas
    # frase prerequisito
    found = df_disciplinas['pre_requisito'].apply(lambda x: x.count(i))

    for j in range(0, len(found)):# linha do df - erro aqui
        if found[j]:
            nome = df_newTable[df_newTable['codigo'] == i]['nome'].values[0]
            df_newTable['pre_requisito'][j] = (df_newTable['pre_requisito'][j]+','+i).replace('-,','')
            df_newTable['nome_prereq'][j] = (df_newTable['nome_prereq'][j]+','+nome).replace('-,','')

df_newTable.to_csv('../disciplinas_prerequisitosnome.csv')
