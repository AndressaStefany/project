import pandas as pd

df_ingressos = pd.DataFrame()

# importando notas de 2009 a 2017
for i in range(2009,2018):
    print(i)
    df_ingresso = pd.read_csv('../discentes/discentes-'+str(i)+'.csv',sep=';')
    df_ingressos = pd.concat([df_ingressos, df_ingresso])

# curso CeT
id_curso = 10320810.0
# filtrando igressantes de CeT
df_ingressoCeT = df_ingressos[df_ingressos["id_curso"] == id_curso]

df_relacao = pd.read_csv('../matriculas-2013-2017.csv', sep=';')
cols = ['id_discente', 'nome', 'cotista', 'nota_ingresso']
df_relacao = df_relacao[cols]

df_merge = pd.merge(df_ingressoCeT, df_relacao, left_on='nome_discente', right_on='nome')
colunas = ['matricula', 'id_discente', 'ano_ingresso', 'periodo_ingresso',
           'forma_ingresso', 'tipo_discente', 'status', 'cotista', 'nota_ingresso']

df_merge = df_merge[colunas]
df_merge['periodo_ingresso'] = df_merge.periodo_ingresso.astype(int)

df_matriculas = pd.DataFrame()

for i in range(11,18):
    for j in range(1,3):
        print('20'+str(i)+str(j))
        df_matricula = pd.read_csv('../matriculas_new/matricula-componente-20'+str(i)+str(j)+'.csv',sep=';')
        # concatena as tabelas de 2010 a 2017
        df_matriculas = pd.concat([df_matriculas, df_matricula])

df_matriculas = df_matriculas[df_matriculas.id_curso == float(id_curso)]
df_turmas = pd.read_csv('../turmas-2010-2017-ok.csv')
df_matTurma = pd.merge(df_matriculas, df_turmas, on='id_turma')

colunas = ['discente', 'ano', 'periodo']
df_discentePer = df_matTurma[colunas]
df_discentePer['anoperiodoTer'] = (df_discentePer['ano'].map(str)+df_discentePer['periodo'].map(str))

#pegar o ultimo ano/periodo que pagaram disciplina
series_maxPer = df_discentePer.groupby('discente').anoperiodoTer.max().reset_index()

# Ingressantes
df_ingressantePeriodo = pd.merge(df_merge, series_maxPer, left_on='id_discente',
                                 right_on='discente')
df_ingressantePeriodo['anoperiodoIngresso'] = (df_ingressantePeriodo['ano_ingresso'].map(str)+
                                               df_ingressantePeriodo['periodo_ingresso'].map(str))
df_tableIngre = df_ingressantePeriodo.anoperiodoIngresso.value_counts().reset_index()

# Desistentes: CANCELADO, TRANCADO
df_desis = df_ingressantePeriodo[(df_ingressantePeriodo['status'] == 'CANCELADO') |
                                 (df_ingressantePeriodo['status'] == 'TRANCADO')]
df_tableDesis = df_desis.anoperiodoTer.value_counts().reset_index()

# Formados: CONCLUÍDO
df_conc = df_ingressantePeriodo[df_ingressantePeriodo['status'] == 'CONCLUÍDO']
df_tableConc = df_conc.anoperiodoTer.value_counts().reset_index()

df_todosperiodos = pd.DataFrame()
df_todosperiodos['anoperiodo'] = [20092,20101,20102,20111,20112,20121,20122,20131,20132,20141,20142,
                                20151,20152,20161,20162,20171,20172]
col = ['anoperiodo','quantidade']

################################

df_tableIngre['quantidade'] = df_tableIngre['anoperiodoIngresso']
df_tableIngre['anoperiodo'] = df_tableIngre['index']
df_tableIngre = df_tableIngre[col]
df_tableIngre['anoperiodo'] = df_tableIngre.anoperiodo.astype(int)

lista = df_tableIngre.anoperiodo.unique()
faltaPeriodos = df_todosperiodos[~df_todosperiodos.anoperiodo.isin(lista)]

df_tableIngre = pd.concat([df_tableIngre, faltaPeriodos])
df_tableIngre = df_tableIngre.fillna(0)
df_tableIngre['quantidade'] = df_tableIngre.quantidade.astype(int)
df_tableIngre = df_tableIngre.sort_values('anoperiodo')

###################################

df_tableDesis['quantidade'] = df_tableDesis['anoperiodoTer']
df_tableDesis['anoperiodo'] = df_tableDesis['index']
df_tableDesis = df_tableDesis[col]
df_tableDesis['anoperiodo'] = df_tableDesis.anoperiodo.astype(int)

lista = df_tableDesis.anoperiodo.unique()
faltaPeriodos = df_todosperiodos[~df_todosperiodos.anoperiodo.isin(lista)]

df_tableDesis = pd.concat([df_tableDesis, faltaPeriodos])
df_tableDesis = df_tableDesis.fillna(0)
df_tableDesis['quantidade'] = df_tableDesis.quantidade.astype(int)
df_tableDesis = df_tableDesis.sort_values('anoperiodo')

####################################

df_tableConc['quantidade'] = df_tableConc['anoperiodoTer']
df_tableConc['anoperiodo'] = df_tableConc['index']
df_tableConc = df_tableConc[col]
df_tableConc['anoperiodo'] = df_tableConc.anoperiodo.astype(int)

lista = df_tableConc.anoperiodo.unique()
faltaPeriodos = df_todosperiodos[~df_todosperiodos.anoperiodo.isin(lista)]

df_tableConc = pd.concat([df_tableConc, faltaPeriodos])
df_tableConc = df_tableConc.fillna(0)
df_tableConc['quantidade'] = df_tableConc.quantidade.astype(int)
df_tableConc = df_tableConc.sort_values('anoperiodo')

df_tableIngre.to_csv('ingressantesQnt.csv')
df_tableDesis.to_csv('desistentesQnt.csv')
df_tableConc.to_csv('concluintesQnt.csv')