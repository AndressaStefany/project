import pandas as pd

df_curriculo = pd.read_csv('../curriculo-componente-graduacao.csv', sep=';')
df_curriculo = df_curriculo[df_curriculo['semestre_oferta'] != 0]

series_idcomponentecurricular = df_curriculo['id_componente_curricular'].unique()

df_curriculoSelec = pd.DataFrame()

for l in series_idcomponentecurricular:
    linha = df_curriculo[ df_curriculo['id_componente_curricular'] == l]
    linhadf = df_curriculo[df_curriculo['id_curriculo_componente'] == linha.id_curriculo_componente.max()]
    
    df_curriculoSelec = pd.concat([df_curriculoSelec, linhadf])
    
colunas_2 = ['id_componente_curricular', 'semestre_oferta', 'tipo_vinculo_componente']
df_curriculoSelec = df_curriculoSelec[colunas_2].drop_duplicates()

df_materias = pd.read_csv('../componentes-curriculares-presenciais-ok.csv')
df_materias = df_materias.drop_duplicates()

df_materiasSemestre = pd.merge(df_materias, df_curriculoSelec, left_on='id_componente', right_on='id_componente_curricular')

unidade = 'ESCOLA DE CIÊNCIAS E TECNOLOGIA'
vinculo_componente = 'OBRIGATÓRIO'

df_materiasSemestre = df_materiasSemestre[(df_materiasSemestre['unidade_responsavel'] == unidade) & 
                                          (df_materiasSemestre['ano_programa'] >= 2014) &
                                          (df_materiasSemestre['tipo_vinculo_componente'] >= vinculo_componente) & 
                                          (df_materiasSemestre['semestre_oferta']>0) & 
                                          (df_materiasSemestre['semestre_oferta']<=4)]

colunas = ['id_componente','codigo','nome','ch_teorico', 'ch_pratico', 'ch_estagio',
       'ch_total', 'ch_dedicada_docente', 'ch_ead', 'cr_max_ead',
       'qtd_unidades', 'equivalencia', 'pre_requisito', 'competencias_habilidades',
       'ano_programa', 'periodo_programa', 'semestre_oferta']

df_materiasSemestre = df_materiasSemestre[colunas]
df_materiasSemestre = df_materiasSemestre.drop_duplicates()

df_materiasSemestre.to_csv('../componentes-semestres.csv')
